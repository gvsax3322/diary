import React, { useEffect, useState } from "react";
import {
  CatImg,
  TodoListStyle,
  TodoListUl,
} from "../../styles/todostyles/todostyle";
import TodoLi from "./TodoLi";
import { todoListState } from "../../store/ThemeState";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";

const TodoList = () => {
  const [list, setList] = useRecoilState(todoListState);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpencat, setIsOpencat] = useState(false);

  useEffect(() => {
    if (list.length === 0) {
      setIsOpen(false);
      setIsOpencat(true);
    }
  }, [list]);

  return (
    <>
      {isOpen && (
        <TodoListStyle>
          <TodoListUl>
            {list?.map((item, index) => (
              <TodoLi key={index} item={item} setList={setList} />
            ))}
          </TodoListUl>
        </TodoListStyle>
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
