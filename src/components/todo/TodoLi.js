import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import React, { useState } from "react";
import { appFireStore } from "../../fb/fbconfig";
import {
  CancelBt,
  CheckBt,
  EditBt,
  TodoInputs,
} from "../../styles/todostyles/todostyle";
import { useSetRecoilState } from "recoil";
import { todoListWave } from "../../store/ThemeState";

const TodoLi = ({ item }) => {
  const setWave = useSetRecoilState(todoListWave);
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(item.todo);

  const handlerCheck = () => {
    console.log(editedTodo + " 완료");
    setWave(`${12}%`);
  };

  const deleteTodo = async todoId => {
    try {
      await deleteDoc(doc(appFireStore, "feedback", todoId));
      console.log("삭제 성공");
    } catch (e) {
      console.error("삭제 에러 ", e);
    }
  };

  const handlerCancel = () => {
    console.log(editedTodo + " 실패");
    deleteTodo(item.id);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      const docRef = doc(appFireStore, "feedback", item.id);
      await updateDoc(docRef, { todo: editedTodo });
      setEditMode(false);
    } catch (error) {
      console.error("수정에러 ", error);
    }
  };

  return (
    <li>
      {editMode ? (
        <TodoInputs
          type="text"
          value={editedTodo}
          onChange={e => setEditedTodo(e.target.value)}
        />
      ) : (
        <p style={{ fontSize: "1.5rem" }}>{item.todo}</p>
      )}
      <div className="bts">
        <CancelBt onClick={handlerCancel} />
        {editMode ? (
          <EditBt onClick={handleSave}>저장</EditBt>
        ) : (
          <EditBt onClick={handleEdit}>수정</EditBt>
        )}
      </div>
    </li>
  );
};

export default TodoLi;
