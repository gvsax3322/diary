import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { storage } from "../../fb/Firebase";
import { useFirebase } from "../../hooks/useFirebase";
import { QuillBt, QuillWrap } from "../../styles/quillstyle/quillstyle";

const ReactQuills = ({ onClose }) => {
  const quillRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const { rerponse, addDocument } = useFirebase("editor");

  const addEditor = () => {
    const editor = {
      id: Date.now(),
      title,
      content,
    };
    addDocument(editor);
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
    <QuillWrap>
      <input
        type="text"
        placeholder="제목을 작성하새요"
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
      <QuillBt onClick={addEditor}>제출 하기</QuillBt>
    </QuillWrap>
  );
};

export default ReactQuills;
