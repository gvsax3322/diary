import { atom } from "recoil";

export const themeMode = atom({
  key: "themeMode",
  default: "light",
});

export const todoListWave = atom({
  key: "todoListWave",
  default: "120%",
});
