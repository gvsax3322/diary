import React from "react";
import { useColletion } from "../../hooks/useCollection";
import { EditRead } from "../../styles/quillstyle/quillstyle";
import DOMPurify from "dompurify";

const EditorRead = () => {
  const { documents } = useColletion("editor");
  return (
    <EditRead>
      {documents?.map((item, index) => (
        <div
          key={index}
          className="content-container"
          style={{ width: 300, height: 300 }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(item.content),
          }}
        />
      ))}
    </EditRead>
  );
};

export default EditorRead;
