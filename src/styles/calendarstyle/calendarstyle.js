import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const StyledCalendarWrapper = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  .react-calendar {
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 4px 2px 10px 0px rgba(0, 0, 0, 0.13);
    padding: 3% 5%;
    background-color: white;
  }

  .react-calendar__navigation {
    justify-content: center;
  }

  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 2rem;
  }

  .react-calendar__navigation button:focus {
    background-color: white;
  }

  .react-calendar__navigation button:disabled {
    background-color: white;
  }

  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  .react-calendar__month-view__weekdays__weekday {
    font-size: 1.5rem;
  }

  .react-calendar__tile--now {
    background: skyblue;
    abbr {
      color: blue;
    }
  }

  .react-calendar__year-view__months__month {
    border-radius: 0.8rem;
    padding: 0;
  }

  .react-calendar__tile--hasActive {
    background-color: skyblue;
    abbr {
      color: white;
    }
  }

  .react-calendar__tile {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 5px;
    align-items: center;
    height: 100px;
    font-size: 1.5rem;
  }

  .react-calendar__year-view__months__month {
    flex: 0 0 calc(33.3333% - 10px) !important;
    margin-inline-start: 5px !important;
    margin-inline-end: 5px !important;
    margin-block-end: 10px;
    padding: 20px 6.6667px;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: rgb(135, 248, 248);
    border-radius: 0.3rem;
  }
`;

export const StyledCalendar = styled(Calendar)``;

export const CalendModalStyle = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 30%;
  height: 30%;
  padding: 30px;
  overflow-y: auto;
  input {
    width: 100%;
    height: 30px;
    font-size: 1.2rem;
    padding-left: 5px;
  }
`;
export const CalendAdd = styled.button`
  background-color: skyblue;
  border: none;
  width: 30%;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
`;

export const CalendLi = styled.div`
  background-color: pink;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding-left: 5px;
  border: none;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
`;

export const CalendD = styled.button`
  background-color: red;
  color: white;
  border: none;
  width: 30%;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
`;
