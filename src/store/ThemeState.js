import { atom } from "recoil";

export const themeMode = atom({
  key: "themeMode",
  default: "light",
});

export const todoListState = atom({
  key: "todoListState",
  default: [
    "빨래하기 - 세탁물을 세탁기에 넣고 세탁하기",
    "장보기 - 식료품 가게에 가서 식료품 목록에 있는 물품 구입하기",
    "운동하기 - 체육관에 가서 유산소 운동과 근력 운동 하기",
    "이메일 확인하기 - 이메일함을 열어서 새로운 이메일 확인하고 답장하기",
    "도서관에 가기 - 도서관에 가서 원하는 책 빌리기 혹은 독서하기",
  ],
});

export const todoListWave = atom({
  key: "todoListWave",
  default: "120%",
});
