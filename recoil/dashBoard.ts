import dayjs from "dayjs";
import { atom, selector } from "recoil";

interface IDate {
  startDate: string;
  endDate: string;
}

export const dateState = atom<IDate>({
  key: "dateState",
  default: {
    startDate: "2022-02-20",
    endDate: "2022-03-07",
  },
});

export const prevDateSelector = selector({
  key: "prevDateSelector",
  get: ({ get }) => {
    const { startDate, endDate } = get(dateState);
    const term = dayjs(endDate).diff(startDate, "day") + 1;
    const prevStartDate = dayjs(startDate)
      .subtract(term, "d")
      .format("YYYY-MM-DD");
    const prevEndDate = dayjs(prevStartDate)
      .add(term - 1, "d")
      .format("YYYY-MM-DD");
    return {
      prevStartDate,
      prevEndDate,
    };
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
