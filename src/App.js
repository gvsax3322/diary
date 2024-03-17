import React from "react";
import { useRecoilValue } from "recoil";
import ToggleTheme from "./components/ToggleTheme";
import { themeMode } from "./store/ThemeState";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import Todo from "./components/todo/Todo";
import Question from "./components/ question/ Question";

const App = () => {
  const theme = useRecoilValue(themeMode);
  const StyledContainer = styled(motion.div)`
    position: relative;
    max-width: 100%;
    height: 100%;
    background-color: ${props =>
      props.theme === "light" ? "#ffffff" : "#333333"};
    color: ${props => (props.theme === "light" ? "#333333" : "#ffffff")};
    h1 {
      margin: 0;
    }
  `;

  return (
    <StyledContainer
      theme={theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <h1>짭 노션 만들기</h1>
        <ToggleTheme />
        <Todo />
        <h2>면접 질문 만들기</h2>

        <Question />
        <h2>글쓰기</h2>
        <h2>달략</h2>
        <h2>그래프</h2>
      </div>
    </StyledContainer>
  );
};

export default App;
