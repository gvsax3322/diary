import React, { useState } from "react";
import {
  StyledCalendar,
  StyledCalendarWrapper,
} from "../../styles/calendarstyle/calendarstyle";
import moment from "moment";

const ReactCalendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);

  const handleDateChange = newDate => {
    setDate(newDate);
  };

  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        value={date}
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format("D")}
        formatYear={(locale, date) => moment(date).format("YYYY")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
      />
    </StyledCalendarWrapper>
  );
};

export default ReactCalendar;
