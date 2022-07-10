import { IDaily } from "types/totalAd";

interface IProps {
  daily: IDaily[];
  category: string;
  weekly?: string;
}

const useFilterByCategory = ({ daily, category, weekly }: IProps) => {
  if (weekly === "weekly") {
    if (category !== "sales") {
      return daily
        .filter((_, index) => index % 7 === 0)
        .map((item) => ({ x: item.date, y: item[category] }));
    } else {
      return daily
        .filter((_, index) => index % 7 === 0)
        .map((item) => {
          const y = (item.roas * item.cost) / 100;
          return {
            x: item.date,
            y,
          };
        });
    }
  }

  if (category !== "sales")
    return daily.map((item) => ({ x: item.date, y: item[category] }));
  return daily.map((item) => {
    const y = (item.roas * item.cost) / 100;
    return {
      x: item.date,
      y,
    };
  });
};

export default useFilterByCategory;
