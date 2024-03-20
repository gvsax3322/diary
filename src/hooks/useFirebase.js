import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { appFireStore, timeStamp } from "../fb/fbconfig";
import { useReducer } from "react";

const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "isPending":
      // 네트워크로 FB 에 연결중이면...
      return {
        ...state,
        isPending: true,
        document: null,
        success: false,
        error: null,
      };
    case "addDoc":
      // 새로은 글을 등록한다면...
      return {
        ...state,
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "error":
      // 오류가 발생하였다면
      return {
        ...state,
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    case "deleteDoc":
      return {
        ...state,
        isPending: false,
        document: null,
        success: true,
        error: null,
      };
    case "editDoc":
      return {
        ...state,
        isPending: false,
        document: null,
        success: true,
        error: null,
      };
    default:
      return state;
  }
};

export const useFirebase = transaction => {
  const [rerponse, dispatch] = useReducer(storeReducer, initState);

  const colRef = collection(appFireStore, transaction);

  const addDocument = async doc => {
    dispatch({ type: "isPending" });
    try {
      // 문서저장시 timeStamp 를 추가한다.
      const createdTime = timeStamp.fromDate(new Date());
      // FB 의 API 문서 중에 문서 추가 기능을 입력
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      console.log(docRef);
      // const action = { type: 'addDoc', payload: docRef }
      dispatch({ type: "addDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };
  // Document (문서파일) 를 삭제한다.
  const deleteDocument = async id => {
    dispatch({ type: "isPending" });
    try {
      // 어떤 FB Document 인가를 알려주는 메서드
      // FB 에서 아이디를 보내면 찾아주는 메서드 doc()
      const docRef = await deleteDoc(doc(colRef, id));
      dispatch({ type: "deleteDoc" });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };

  // Document 업데이트
  const editDocument = async (id, data) => {
    dispatch({ type: "isPending" });
    try {
      // FB 문서를 참조
      // 수정을 하기 위해서는 collection 참조 및 , 문서 id 를 전달
      const docRef = doc(appFireStore, transaction, id);
      // 이후 업데이트
      await updateDoc(docRef, data);
      dispatch({ type: "editDoc" });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };

  return { rerponse, addDocument, deleteDocument, editDocument };
};
