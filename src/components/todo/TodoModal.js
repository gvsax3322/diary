import React from "react";
import TodoLi from "./TodoLi";
import {
  ModalContent,
  ModalWrapper,
  TodoListUl,
} from "../../styles/todostyles/todostyle";

const TodoModal = ({ handleCloseModal }) => {
  return (
    <ModalWrapper onClick={handleCloseModal}>
      <ModalContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        onClick={e => e.stopPropagation()}
      >
        <form>
          <input type="text" placeholder="내용을 입력해주세요" />
          <button>Add Todo</button>
        </form>
        <TodoListUl>
          <TodoLi>asdasda</TodoLi>
          <TodoLi>asdasda</TodoLi>
          <TodoLi>asdasda</TodoLi>
          <TodoLi>asdasda</TodoLi>
          <TodoLi>asdasda</TodoLi>
        </TodoListUl>
      </ModalContent>
    </ModalWrapper>
  );
};

export default TodoModal;
