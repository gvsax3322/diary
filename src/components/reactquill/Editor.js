import React from "react";
import ReactQuills from "./ReactQuills";
import Table from "./Table";
import { TodoWrap } from "../../styles/todostyles/todostyle";

const Editor = () => {
  return (
    <TodoWrap>
      {/* <ReactQuills /> */}
      <Table />
    </TodoWrap>
  );
};

export default Editor;
