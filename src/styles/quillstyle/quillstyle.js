import styled from "@emotion/styled";

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
