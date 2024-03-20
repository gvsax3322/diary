import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const QuillWrap = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  input {
    width: 100%;
    height: 30px;
    padding-left: 5px;
    margin-bottom: 10px;
  }
`;

export const QuillBt = styled.button`
  position: relative;
  width: 15%;
  margin-top: 40px;
  height: 30px;
  background: skyblue;
  border: none;
  cursor: pointer;
`;

export const EditRead = styled.div`
  width: 100%;
  height: 100%;
  .content-container {
    font-size: 1.8rem;
  }
  .content-container img {
    width: 100%;
    max-height: 400px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  h2 {
    margin-bottom: 20px;
  }
`;

export const Tablestyle = styled.table`
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  th {
    background-color: #f2f2f2;
    border-bottom: 2px solid #ddd;
    padding: 12px 15px;
    text-align: center;
    color: #333;
  }

  tr:hover {
    background-color: #f2f2f2;
  }

  td {
    border-bottom: 1px solid #ddd;
    padding: 10px 15px;
    text-align: center;
    color: #666;
  }
`;

export const TableE = styled.button`
  position: relative;
  width: 30%;
  height: 30px;
  background: skyblue;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const TableD = styled.button`
  position: relative;
  width: 30%;
  height: 30px;
  background: red;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const EditorModalStyle = styled(motion.div)`
  position: relative;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 50%;
  height: 80%;
  padding: 30px;
  overflow-y: auto;
`;
