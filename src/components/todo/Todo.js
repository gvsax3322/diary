import React from "react";
import { useRecoilValue } from "recoil";
import { todoListWave } from "../../store/ThemeState";
import { TodoWrap } from "../../styles/todostyles/todostyle";
import TodoList from "./TodoList";

const Todo = () => {
  const wave = useRecoilValue(todoListWave);

  return (
    <TodoWrap>
      <div className="wrap">
        <div className="wave" style={{ top: wave }} />
      </div>
      <TodoList />
    </TodoWrap>
  );
};

export default Todo;
