import { atom, selector } from "recoil";

interface IDate {
  startDate: string;
  endDate: string;
}

export const dateState = atom<IDate>({
  key: "dateState",
  default: {
    startDate: "2022-02-10T00:00:00",
    endDate: "2022-02-13T00:00:00",
  },
});

export const setDateState = selector({
  key: "setDateStates",
  get: ({ get }) => {
    const { startDate, endDate } = get(dateState);
    return { startDate, endDate };
  },
  set: ({ get, set }, newValue) => {
    const beforeDate = get(dateState);
    set(dateState, newValue);
  },
});

export const categoryState = atom({
  key: "categoryState",
  default: {
    selectOneCategory: "광고비",
    selectTwoCategory: "노출수",
    weekly: false,
  },
});
