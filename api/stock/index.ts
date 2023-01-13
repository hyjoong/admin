import { instance } from "api";
import { Stock } from "./type";

export const getStock = async ({ numOfRows }: Stock) => {
  return await instance.get(
    `getStockPriceInfo?serviceKey=${process.env.NEXT_PUBLIC_STOCK_KEY}&numOfRows=${numOfRows}&resultType=json`
  );
};
