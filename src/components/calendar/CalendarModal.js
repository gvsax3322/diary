import React from "react";
import { ModalWrapper } from "../../styles/todostyles/todostyle";
import { EditorModalStyle } from "../../styles/quillstyle/quillstyle";
import Item from "antd/es/list/Item";
import { useFirebase } from "../../hooks/useFirebase";
import {
  CalendAdd,
  CalendD,
  CalendLi,
  CalendModalStyle,
} from "../../styles/calendarstyle/calendarstyle";

const CalendarModal = ({
  onClose,
  setTextCalendr,
  handleDateClick,
  date,
  aaa,
  calenderid,
}) => {
  const { deleteDocument } = useFirebase("calender");
  const handleChangeInput = e => {
    setTextCalendr(e.target.value);
  };
  const handleClickSum = () => {
    handleDateClick(date);
    setTextCalendr("");
    onClose();
  };

  const handleDelete = () => {
    deleteDocument(calenderid);
    onClose();
  };

  return (
    <ModalWrapper onClick={onClose}>
      <CalendModalStyle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        onClick={e => e.stopPropagation()}
      >
        <input type="text" onChange={handleChangeInput} />
        <CalendAdd onClick={handleClickSum}>일정 등록</CalendAdd>
        {aaa?.map((item, index) => (
          <CalendLi key={index}>{item}</CalendLi>
        ))}
        <CalendD onClick={handleDelete}>전체 삭제</CalendD>
      </CalendModalStyle>
    </ModalWrapper>
  );
};

export default CalendarModal;
