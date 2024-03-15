import { addDoc, collection } from "firebase/firestore";
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
    default:
      // 최소 아마 작업을 하지 않더라도 리듀서 함수는 state 즉, 원본이라도 리턴해야해요.
      return state;
  }
};

// 매개변수 transaction 은 Collectin (자료를 보관할 폴더라고 생각)
// 사용예: useFirebase("feeback")
// 사용예: useFirebase("freeboard")
export const useFirebase = transaction => {
  // useReducer 는 dispathc 함수를 실행후 결과값 변경 및 보관
  // const [rerponse, dispatch] = useReducer(리듀서함수, 초기값);
  const [rerponse, dispatch] = useReducer(storeReducer, initState);

  // FB 에 Collection 만들라고 요청
  // colRef 는 FB 가 만들어준 Collection 의 참조 변수
  // collection(저장소참조, collectin 이름 - 폴더이름)
  const colRef = collection(appFireStore, transaction);

  // collection 없으면 자동으로 생성
  // Document (문서파일) 를 저장한다.
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
  const deleteDocument = () => {};

  return { rerponse, addDocument, deleteDocument };
};
