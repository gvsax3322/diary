import React from "react";
import { CancelBt, CheckBt } from "../../styles/todostyles/todostyle";
import { useSetRecoilState, useRecoilValue } from "recoil"; // useRecoilValue 추가
import { todoListState, todoListWave } from "../../store/ThemeState";

const TodoLi = ({ item }) => {
  const setList = useSetRecoilState(todoListState);
  const setWave = useSetRecoilState(todoListWave);
  const list = useRecoilValue(todoListState);

  const handlerCheck = () => {
    setList(prevList => prevList.filter(todo => todo !== item));
    setWave(`${list.length * 12}%`);
    console.log(item + " 완료");
  };

  const handlerCancel = () => {
    setList(prevList => prevList.filter(todo => todo !== item));
    console.log(item + " 실패");
  };

  return (
    <li>
      <p>{item}</p>
      <div className="bts">
        <CheckBt onClick={handlerCheck} />
        <CancelBt onClick={handlerCancel} />
      </div>
    </li>
  );
};

export default TodoLi;
