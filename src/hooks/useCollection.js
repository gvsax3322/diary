import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { appFireStore } from "../fb/fbconfig";

export const useColletion = transaction => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query(
      collection(appFireStore, transaction),
      orderBy("createdTime", "desc"),
    );

    const unsubscribe = onSnapshot(
      q,
      snapshot => {
        let result = [];

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

    return unsubscribe;
  }, [transaction]);

  return { documents, error };
};
