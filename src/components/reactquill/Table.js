import React, { useState } from "react";
import { useColletion } from "../../hooks/useCollection";
import { useFirebase } from "../../hooks/useFirebase";
import {
  TableContainer,
  TableD,
  TableE,
  Tablestyle,
} from "../../styles/quillstyle/quillstyle";
import EditorModal from "./EditorModal";

const Table = () => {
  const { documents } = useColletion("editor");
  const { deleteDocument } = useFirebase("editor");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleChangeD = _id => {
    deleteDocument(_id);
  };

  const handleClickModal = item => {
    setSelectedItem(item); // 선택된 항목 설정
  };

  return (
    <>
      {selectedItem && (
        <EditorModal
          selectedItem={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
      <TableContainer>
        <h2>게시판 목록</h2>
        <Tablestyle>
          <thead>
            <tr>
              <th>날짜</th>
              <th>제목</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {documents?.map(item => {
              const date = item.createdTime.toDate();
              const dateString = date.toDateString();
              return (
                <tr key={item.id}>
                  {/* 각 행을 클릭할 때 선택된 항목 정보 저장 */}
                  <td onClick={() => handleClickModal(item)}>{dateString}</td>
                  <td>{item.title}</td>
                  <td>
                    <TableE
                      onClick={() => {
                        //   handleChangeE(item.id);
                      }}
                    >
                      수정
                    </TableE>
                  </td>
                  <td>
                    <TableD
                      onClick={() => {
                        handleChangeD(item.id);
                      }}
                    >
                      삭제
                    </TableD>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Tablestyle>
      </TableContainer>
    </>
  );
};

export default Table;
