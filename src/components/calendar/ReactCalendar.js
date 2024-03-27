import React, { useEffect, useState } from "react";
import {
  StyledCalendar,
  StyledCalendarWrapper,
} from "../../styles/calendarstyle/calendarstyle";
import moment from "moment";
import { TodoWrap } from "../../styles/todostyles/todostyle";
import { useFirebase } from "../../hooks/useFirebase";
import { useColletion } from "../../hooks/useCollection";
import CalendarModal from "./CalendarModal";

const ReactCalendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [schedule, setSchedule] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [aaa, setAaa] = useState(null);
  const [calenderid, setCalenderid] = useState("");
  const [textCalendr, setTextCalendr] = useState("");
  const { addDocument, editDocument } = useFirebase("calender");
  const { documents } = useColletion("calender");

  const handleDateChange = newDate => {
    setDate(newDate);
  };

  useEffect(() => {
    if (documents) {
      const scheduleData = {};
      documents.forEach(({ date, schedule }) => {
        if (!scheduleData[date]) {
          scheduleData[date] = [];
        }
        scheduleData[date] = [...scheduleData[date], ...schedule];
      });
      setSchedule(scheduleData);
    }
  }, [documents]);

  const handleDateClick = date => {
    const newSchedule = textCalendr;
    setIsOpen(true);
    const dateString = moment(date).format("YYYY-MM-DD");

    if (documents) {
      const clickedDocument = documents.find(doc => doc?.date === dateString);
      setCalenderid(clickedDocument?.id);
      setAaa(clickedDocument?.schedule);
      if (clickedDocument) {
        if (textCalendr !== null && textCalendr.trim() === "") {
          return;
        }
        const updatedDocument = {
          schedule: [...clickedDocument.schedule, newSchedule],
        };
        editDocument(clickedDocument.id, updatedDocument);
      } else {
        if (textCalendr !== null && textCalendr.trim() === "") {
          return;
        }
        addDocument({
          date: dateString,
          schedule: [newSchedule],
        });
      }
    }
  };

  const getScheduleForDate = date => {
    const dateString = moment(date).format("YYYY-MM-DD");
    return schedule[dateString] || [];
  };

  return (
    <TodoWrap>
      {isOpen && (
        <CalendarModal
          onClose={() => setIsOpen(false)}
          setTextCalendr={setTextCalendr}
          handleDateClick={handleDateClick}
          date={date}
          aaa={aaa}
          calenderid={calenderid}
        />
      )}
      <StyledCalendarWrapper>
        <StyledCalendar
          value={date}
          onChange={handleDateChange}
          onClickDay={handleDateClick}
          formatDay={(locale, date) => moment(date).format("D")}
          formatYear={(locale, date) => moment(date).format("YYYY")}
          formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
          calendarType="gregory"
          showNeighboringMonth={false}
          next2Label={null}
          prev2Label={null}
          minDetail="year"
          tileContent={({ date }) => (
            <div>
              {getScheduleForDate(date).map((schedule, index) => (
                <div style={{ marginBottom: 5 }} key={index}>
                  {schedule}
                </div>
              ))}
            </div>
          )}
        />
      </StyledCalendarWrapper>
    </TodoWrap>
  );
};

export default ReactCalendar;
