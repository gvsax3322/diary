import DOMPurify from "dompurify";
import React from "react";
import { EditRead, EditorModalStyle } from "../../styles/quillstyle/quillstyle";
import { ModalWrapper } from "../../styles/todostyles/todostyle";
import ReactQuills from "./ReactQuills";

const EditorModalAdd = ({ onClose }) => {
  return (
    <ModalWrapper onClick={onClose}>
      <EditorModalStyle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        onClick={e => e.stopPropagation()}
      >
        <ReactQuills onClose={onClose} />
      </EditorModalStyle>
    </ModalWrapper>
  );
};

export default EditorModalAdd;
