import React from "react";
import { ModalWrapper } from "../../styles/todostyles/todostyle";
import { EditorModalStyle } from "../../styles/quillstyle/quillstyle";

const CalendarModal = ({ onClose, setTextCalendr, handleDateClick, date }) => {
  const handleChangeInput = e => {
    setTextCalendr(e.target.value);
  };
  const handleClickSum = () => {
    handleDateClick(date);
    setTextCalendr("");
    onClose();
  };

  return (
    <ModalWrapper onClick={onClose}>
      <EditorModalStyle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        onClick={e => e.stopPropagation()}
      >
        <input type="text" onChange={handleChangeInput} />
        <button onClick={handleClickSum}>완료</button>
      </EditorModalStyle>
    </ModalWrapper>
  );
};

export default CalendarModal;
