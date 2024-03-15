import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../store/ThemeState";
import {
  CatImg,
  TodoBts,
  TodoListStyle,
  TodoListUl,
} from "../../styles/todostyles/todostyle";
import TodoLi from "./TodoLi";
import TodoModal from "./TodoModal";

const TodoList = () => {
  const [list, setList] = useRecoilState(todoListState);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpencat, setIsOpencat] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClickModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = e => {
    e.stopPropagation();
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (list.length === 0) {
      setIsOpen(false);
      setIsOpencat(true);
    }
  }, [list]);

  return (
    <>
      {isOpenModal && <TodoModal handleCloseModal={handleCloseModal} />}
      {isOpen && (
        <div style={{ width: "70%", display: "flex", flexDirection: "column" }}>
          <div>
            <TodoBts>
              <button onClick={handleClickModal}>추가하기</button>
            </TodoBts>
          </div>
          <div>
            <TodoListStyle>
              <TodoListUl>
                {list?.map((item, index) => (
                  <TodoLi key={index} item={item} setList={setList} />
                ))}
              </TodoListUl>
            </TodoListStyle>
          </div>
        </div>
      )}
      {isOpencat && (
        <CatImg
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.img
            src="/assets/images/111.png"
            alt="이미지"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            고양이 사진 넣을거임!
          </motion.p>
        </CatImg>
      )}
    </>
  );
};

export default TodoList;
