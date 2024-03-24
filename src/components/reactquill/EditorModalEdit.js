import DOMPurify from "dompurify";
import React, { useMemo, useRef, useState } from "react";
import {
  EditRead,
  EditorModalStyle,
  QuillBt,
  QuillWrap,
} from "../../styles/quillstyle/quillstyle";
import { ModalWrapper } from "../../styles/todostyles/todostyle";
import { useFirebase } from "../../hooks/useFirebase";
import { storage } from "../../fb/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import ReactQuill from "react-quill";

const EditorModalEdit = ({ onClose, selectedItem }) => {
  const quillRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState(selectedItem.content);
  const [title, setTitle] = useState(selectedItem.title);
  const { editDocument } = useFirebase("editor");

  const editEditor = () => {
    const updatedDocument = {
      ...selectedItem,
      title: title,
      content: content,
    };
    editDocument(selectedItem.id, updatedDocument);
    onClose();
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const editor = quillRef.current.getEditor();
      const file = input.files[0];
      const range = editor.getSelection(true);
      try {
        const storageRef = ref(storage, `image/${Date.now()}`);
        await uploadBytes(storageRef, file).then(snapshot => {
          getDownloadURL(snapshot.ref).then(url => {
            editor.insertEmbed(range.index, "image", url);
            editor.setSelection(range.index + 1);
            setImageUrl(url);
          });
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(
    () => ({
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
        handlers: { image: imageHandler },
      },
    }),
    [],
  );

  return (
    <ModalWrapper onClick={onClose}>
      <EditorModalStyle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        onClick={e => e.stopPropagation()}
      >
        <QuillWrap>
          <input
            type="text"
            placeholder="제목을 작성하새요"
            defaultValue={selectedItem?.title}
            onChange={e => setTitle(e.target.value)}
          />
          <ReactQuill
            style={{ width: "100%", height: "500px", color: "black" }}
            placeholder="내용을 작성하새요"
            theme="snow"
            ref={quillRef}
            value={content}
            onChange={setContent}
            modules={modules}
          />
          <QuillBt onClick={editEditor}>수정 하기</QuillBt>
        </QuillWrap>
      </EditorModalStyle>
    </ModalWrapper>
  );
};

export default EditorModalEdit;
