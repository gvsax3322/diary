import React, { useState } from "react";
import {
  StyledCalendar,
  StyledCalendarWrapper,
} from "../../styles/calendarstyle/calendarstyle";
import moment from "moment";
import { TodoWrap } from "../../styles/todostyles/todostyle";

const ReactCalendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [schedule, setSchedule] = useState({});

  const handleDateChange = newDate => {
    setDate(newDate);
  };

  const handleDateClick = date => {
    const newSchedule = prompt("일정을 입력하세요:");
    if (newSchedule) {
      const dateString = moment(date).format("YYYY-MM-DD");
      setSchedule(prevSchedule => ({
        ...prevSchedule,
        [dateString]: [...(prevSchedule[dateString] || []), newSchedule],
      }));
    }
  };

  const getScheduleForDate = date => {
    const dateString = moment(date).format("YYYY-MM-DD");
    return schedule[dateString] || [];
  };

  return (
    <TodoWrap>
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
