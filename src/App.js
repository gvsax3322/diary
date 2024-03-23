import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { useRecoilValue } from "recoil";
import Question from "./components/ question/ Question";
import ToggleTheme from "./components/ToggleTheme";
import ReactCalendar from "./components/calendar/ReactCalendar";
import Editor from "./components/reactquill/Editor";
import Todo from "./components/todo/Todo";
import { themeMode } from "./store/ThemeState";

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
        <ToggleTheme />
        <Todo />
        <Question />
        <Editor />
        <ReactCalendar />
      </div>
    </StyledContainer>
  );
};

export default App;
