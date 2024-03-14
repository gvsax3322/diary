import { atom } from "recoil";

export const themeMode = atom({
  key: "themeMode",
  default: "light", // 기본값은 라이트 모드
});
