import { atom } from "recoil";

export const dropDownFirst = atom({
  key: "dropDownFirst",
  default: "cost",
});

export const dropDownSecond = atom({
  key: "dropDownSecond",
  default: "imp",
});

export const periodState = atom({
  key: "period",
  default: "daily",
});
