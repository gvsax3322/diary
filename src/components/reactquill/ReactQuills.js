import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import { TodoWrap } from "../../styles/todostyles/todostyle";

const ReactQuills = () => {
  // const [value, setValue] = useState("");
  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, "link"],
        [
          {
            color: [],
          },
          { background: [] },
        ],
        ["image"],
        ["clean"],
      ],
    },
  };

  return (
    <TodoWrap>
      <div>
        <ReactQuill modules={modules} />
      </div>

      {/* <div>{value}</div>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }} /> */}
    </TodoWrap>
  );
};

export default ReactQuills;
