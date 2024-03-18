import axios from "axios";
import React, { useState } from "react";
import { useColletion } from "../../hooks/useCollection";
import { Cat, Questionswrap } from "../../styles/ questionstyle/ questionstyle";
import { TodoWrap } from "../../styles/todostyles/todostyle";

const Question = () => {
  const { documents } = useColletion("question");
  const [randomQuestion, setRandomQuestion] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [catImage, setCatImage] = useState("");
  const questions = documents ? documents[0]?.ask : [];
  const [isOpenCat, setIsOpenCat] = useState(true);

  const handleClikAsk = () => {
    if (questions.length > 0) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setRandomQuestion(questions[randomIndex]);
    }
  };

  const handleChangeCat = () => {
    setCatImage("https://cataas.com/cat/gif");
    setIsOpenCat(false);
  };

  return (
    <TodoWrap>
      {isOpen ? (
        <Questionswrap>
          <p>{randomQuestion}</p>
          <input />
          <button onClick={handleClikAsk}>새 질문 받기</button>
          <button onClick={() => setIsOpen(false)}>답하기</button>
        </Questionswrap>
      ) : (
        <Questionswrap>
          <p>답변 완료!</p>
          <button onClick={() => setIsOpen(true)}>새 질문 받기</button>
        </Questionswrap>
      )}

      <Cat>
        {!isOpenCat && (
          <>
            <img src={catImage} alt="" style={{ width: "500px" }} />
            <p style={{ fontSize: "1.5rem" }}>냥이 보고 힘내냥!😸</p>
          </>
        )}
        {isOpenCat && <button onClick={handleChangeCat}>고양이 보기😸</button>}
      </Cat>
    </TodoWrap>
  );
};

export default Question;
