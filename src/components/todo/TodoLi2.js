import React, { useState } from "react";
import { CancelBt, CheckBt } from "../../styles/todostyles/todostyle";
import { useRecoilState } from "recoil"; // useRecoilState를 import합니다.
import { todoListWave } from "../../store/ThemeState";

const TodoLi2 = ({ item }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [wave, setWave] = useRecoilState(todoListWave);

  const handlerCheck = () => {
    setIsCompleted(true);
    setWave(`${12}%`);
  };

  return isCompleted ? null : (
    <li>
      <p>{item.todo}</p>
      <div className="bts">
        <CheckBt onClick={handlerCheck} />
      </div>
    </li>
  );
};

export default TodoLi2;
