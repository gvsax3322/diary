import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useColletion } from "../../hooks/useCollection";
import { useFirebase } from "../../hooks/useFirebase";
import {
  CatImg,
  TodoBts,
  TodoListStyle,
  TodoListUl,
} from "../../styles/todostyles/todostyle";
import TodoLi from "./TodoLi";
import TodoModal from "./TodoModal";

const TodoList = () => {
  const [list, setList] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const { documents, error } = useColletion("feedback");
  const { rerponse, addDocument } = useFirebase("feedback");

  const handleClickModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const addFeedback = () => {
    const feedback = {
      id: Date.now(),
      todo: todoInput,
    };
    addDocument(feedback);
    setList([...list, feedback]);
  };

  useEffect(() => {
    if (rerponse.success) {
      setTodoInput("");
    }
  }, [rerponse.success]);

  return (
    <>
      {isOpenModal && (
        <TodoModal
          handleCloseModal={handleCloseModal}
          addFeedback={addFeedback}
          setTodoInput={setTodoInput}
          todoInput={todoInput}
          documents={documents}
          setList={setList}
        />
      )}

      <div style={{ width: "70%", display: "flex", flexDirection: "column" }}>
        <div>
          <TodoBts>
            <button onClick={handleClickModal}>추가하기</button>
          </TodoBts>
        </div>
        <div>
          <TodoListStyle>
            <TodoListUl>
              {documents?.map((item, index) => (
                <TodoLi key={index} item={item} setList={setList} />
              ))}
            </TodoListUl>
          </TodoListStyle>
        </div>
      </div>
    </>
  );
};

export default TodoList;
