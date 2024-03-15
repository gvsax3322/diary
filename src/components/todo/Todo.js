import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { todoListWave } from "../../store/ThemeState";
import { CheckBt, TodoWrap } from "../../styles/todostyles/todostyle";
import TodoList from "./TodoList";
import { useFirebase } from "../../hooks/useFirebase";
import TodoModal from "./TodoModal";

const Todo = () => {
  const wave = useRecoilValue(todoListWave);
  const { rerponse, addDocument } = useFirebase("feedback");
  const [message, setMessage] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");

  const addFeedback = () => {
    const feedback = {
      id: Date.now(),
      message: "111",
      nickName: "1111",
      email: "asdasdas",
    };

    addDocument(feedback);
  };

  useEffect(() => {
    if (rerponse.success) {
      setMessage("");
      setEmail("");
      setNickName("");
    }
  }, [rerponse.success]);

  return (
    <TodoWrap>
      <div className="wrap">
        <div className="wave" style={{ top: wave }} />
      </div>
      {/* <CheckBt onClick={() => addFeedback()}>제발 되라 ㅠㅠ</CheckBt> */}
      <TodoList />
    </TodoWrap>
  );
};

export default Todo;
