import styled from "@emotion/styled";

export const Questionswrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 20px;
  align-items: center;
  p {
    height: 200px;
    font-size: 2rem;
    text-align: center;
  }
  input {
    width: 80%;
    height: 30px;
    padding-left: 5px;
  }

  button {
    width: 20%;
    height: 30px;
    background: skyblue;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Cat = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 20px;
  align-items: center;

  button {
    width: 50%;
    height: 30px;
    background: skyblue;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
