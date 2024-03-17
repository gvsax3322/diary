import React from "react";
import TodoLi from "./TodoLi";
import {
  AddTodoBt,
  ModalContent,
  ModalWrapper,
  TodoListUl,
} from "../../styles/todostyles/todostyle";
import { useColletion } from "../../hooks/useCollection";

const TodoModal = ({
  handleCloseModal,
  addFeedback,
  setTodoInput,
  todoInput,
}) => {
  const handelChage = e => {
    setTodoInput(e.target.value);
  };
  const { documents, error } = useColletion("feedback");

  return (
    <ModalWrapper onClick={handleCloseModal}>
      <ModalContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        onClick={e => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            style={{
              width: "80%",
              height: 30,
              fontSize: "1.5rem",
            }}
            type="text"
            value={todoInput}
            placeholder="내용을 입력해주세요"
            onChange={e => handelChage(e)}
          />
          <AddTodoBt onClick={addFeedback}>추가 하기</AddTodoBt>
        </div>

        <TodoListUl>
          {documents?.map((item, index) => (
            <TodoLi key={index} item={item} />
          ))}
        </TodoListUl>
      </ModalContent>
    </ModalWrapper>
  );
};

export default TodoModal;
