import { IDaily } from "types/daily";

interface IProps {
  daily: IDaily[];
  category: string;
  weekly?: boolean;
}

const useFilterByCategory = ({ daily, category }: IProps) => {
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
