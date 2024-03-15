import styled from "@emotion/styled";
import { motion } from "framer-motion";
export const TodoWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 500px;
  border: 1px solid;
  border-radius: 20px;
  padding: 30px;
  .wrap {
    position: relative;
    width: 300px;
    height: 100%;
    overflow: hidden;
    border: 1px solid;
    border-top: none;
    border-radius: 0 0 10px 10px;
    transform: translate3d(0, 0, 0);
  }

  .wave {
    width: 500px;
    height: 700px;
    position: absolute;
    top: 110%;
    left: -100px;
    border-radius: 55%;
    animation: drift 5s infinite linear;
    background: rgba(65, 105, 225, 0.5);
  }

  @keyframes drift {
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const TodoListStyle = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  background: #eee;
`;

export const TodoBts = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 20px;
`;

export const TodoListUl = styled.ul`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow-y: auto;

  li {
    position: relative;
    display: flex;
    justify-content: space-between;
    background: #628fe7;
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 20%;
    padding: 10px;

    .bts {
      display: flex;
      justify-content: end;
      gap: 10px;
    }
  }
`;

export const CheckBt = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  text-align: center;
  border-radius: 10px;
  background: green;
  cursor: pointer;
`;

export const CancelBt = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  text-align: center;
  border-radius: 10px;
  background: red;
  cursor: pointer;
`;

export const CatImg = styled.div`
  width: 70%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  img {
    width: 50%;
  }

  p {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const ModalContent = styled(motion.div)`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 50%;
  height: 50%;
  padding: 30px;
`;
