import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { appFireStore } from "../fb/fbconfig";

export const useColletion = transaction => {
  // collectin 의 내용을 state 에 보관
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // collection 이 변경된 경우 실행하도록 설정
  useEffect(() => {
    const q = query(
      collection(appFireStore, transaction),
      orderBy("createdTime", "desc"),
    );
    // 참조 = collection(FB프로젝트, collection 폴더명 )
    const unsubscribe = onSnapshot(
      q,
      snapshot => {
        let result = [];
        console.log(snapshot);
        console.log(snapshot.docs);
        snapshot.docs.forEach(doc => {
          result.push({ ...doc.data(), id: doc.id });
        });
        // 전체 FB 문서를 보관합니다.
        setDocuments(result);
        setError(null);
      },
      error => {
        setError(error.message);
      },
    );
    // 클린업 함수
    return unsubscribe;
  }, [transaction]);

  return { documents, error };
};
