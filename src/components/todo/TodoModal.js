import React from "react";
import TodoLi from "./TodoLi";
import {
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
        <input
          type="text"
          value={todoInput}
          placeholder="내용을 입력해주세요"
          onChange={e => handelChage(e)}
        />
        <button onClick={addFeedback}>Add Todo</button>

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
