import { atom, selector } from "recoil";

interface IDate {
  startDate: string;
  endDate: string;
}

export const dateState = atom<IDate>({
  key: "dateState",
  default: {
    startDate: "2022-02-10",
    endDate: "2022-02-13",
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
