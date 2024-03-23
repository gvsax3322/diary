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
import EditorModalAdd from "./EditorModalAdd";
import EditorModalEdit from "./EditorModalEdit";

const Table = () => {
  const { documents } = useColletion("editor");
  const { deleteDocument, editDocument } = useFirebase("editor");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpenQuillRead, setIsOpenQuillRead] = useState(false);
  const [isOpenQuill, setIsOpenQuill] = useState(false);
  const [isOpenQuillEdit, setIsOpenQuillEdit] = useState(false);

  const handleChangeD = _id => {
    deleteDocument(_id);
  };

  const handleClickModalAdd = () => {
    setIsOpenQuill(true);
  };

  const handleChangeE = item => {
    setSelectedItem(item);
    setIsOpenQuillEdit(true);
  };

  const handleClickModal = item => {
    setSelectedItem(item);
    setIsOpenQuillRead(true);
  };

  return (
    <>
      {isOpenQuillRead && (
        <EditorModal
          selectedItem={selectedItem}
          onClose={() => setIsOpenQuillRead(false)}
        />
      )}
      {isOpenQuill && <EditorModalAdd onClose={() => setIsOpenQuill(false)} />}
      {isOpenQuillEdit && (
        <EditorModalEdit
          onClose={() => setIsOpenQuillEdit(false)}
          selectedItem={selectedItem}
        />
      )}
      <TableContainer>
        <h2>게시판 목록</h2>
        <div className="addbt">
          <button onClick={handleClickModalAdd}>등록</button>
        </div>
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
                  <td onClick={() => handleClickModal(item)}>{dateString}</td>
                  <td onClick={() => handleClickModal(item)}>{item.title}</td>
                  <td>
                    <TableE
                      onClick={() => {
                        handleChangeE(item);
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
