import React from "react";
import ReactQuills from "./ReactQuills";
import Table from "./Table";
import { TodoWrap } from "../../styles/todostyles/todostyle";
import EditorRead from "./\bEditorRead";

const Editor = () => {
  return (
    <TodoWrap>
      <ReactQuills />
      <Table />
      {/* <EditorRead /> */}
    </TodoWrap>
  );
};

export default Editor;
