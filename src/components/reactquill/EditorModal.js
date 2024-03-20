import DOMPurify from "dompurify";
import React from "react";
import { EditRead, EditorModalStyle } from "../../styles/quillstyle/quillstyle";
import { ModalWrapper } from "../../styles/todostyles/todostyle";

const EditorModal = ({ selectedItem, onClose }) => {
  return (
    <ModalWrapper onClick={onClose}>
      <EditorModalStyle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        onClick={e => e.stopPropagation()}
      >
        <EditRead>
          <h2 style={{ textAlign: "center" }}>{selectedItem?.title}</h2>
          <div
            className="content-container"
            style={{ width: 300, height: 300 }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(selectedItem?.content),
            }}
          />
        </EditRead>
      </EditorModalStyle>
    </ModalWrapper>
  );
};

export default EditorModal;
