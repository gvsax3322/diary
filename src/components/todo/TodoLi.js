import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { appFireStore } from "../../fb/fbconfig";
import { CancelBt, CheckBt } from "../../styles/todostyles/todostyle";
import { useSetRecoilState } from "recoil";
import { todoListWave } from "../../store/ThemeState";

const TodoLi = ({ item }) => {
  const setWave = useSetRecoilState(todoListWave);
  const handlerCheck = () => {
    console.log(item.todo + " 완료");
    setWave(`${12}%`);
  };

  const deleteTodo = async todoId => {
    try {
      await deleteDoc(doc(appFireStore, "feedback", todoId));
      console.log("삭제 성공");
    } catch (e) {
      console.error("Error deleting todo: ", e);
    }
  };

  const handlerCancel = () => {
    console.log(item.todo + " 실패");
    deleteTodo(item.id);
  };

  return (
    <li>
      <p>{item.todo}</p>
      <div className="bts">
        <CheckBt onClick={handlerCheck} />
        <CancelBt onClick={handlerCancel} />
      </div>
    </li>
  );
};

export default TodoLi;
