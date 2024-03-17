import React, { useState } from "react";
import { useColletion } from "../../hooks/useCollection";
import { AddTodoBt, TodoWrap } from "../../styles/todostyles/todostyle";

const Question = () => {
  const { documents, error } = useColletion("question");
  const [randomQuestion, setRandomQuestion] = useState("");
  const questions = documents ? documents[0]?.ask : [];

  const handleClikAsk = () => {
    if (questions.length > 0) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setRandomQuestion(questions[randomIndex]);
    }
  };

  return (
    <TodoWrap>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          gap: 20,
        }}
      >
        <p style={{ fontSize: "3rem" }}>{randomQuestion}</p>
        <AddTodoBt onClick={handleClikAsk}>새 질문 받기</AddTodoBt>
        <input style={{ width: "80%", height: 30 }} />
        <AddTodoBt onClick={handleClikAsk}>답하기</AddTodoBt>
      </div>
    </TodoWrap>
  );
};

export default Question;
