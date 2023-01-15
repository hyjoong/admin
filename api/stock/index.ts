import { instance } from "api";
import { Stock, StockDate } from "./type";

export const getStock = async ({ numOfRows, itmsNm }: Stock) => {
  return await instance.get(
    `getStockPriceInfo?serviceKey=${
      process.env.NEXT_PUBLIC_STOCK_KEY
    }&numOfRows=${numOfRows}&itmsNm=${encodeURI(itmsNm)}&resultType=json`
  );
};

export const getStockDate = async ({
  startDate,
  endDate,
  itmsNm,
}: StockDate) => {
  return await instance.get(
    `getStockPriceInfo?serviceKey=${
      process.env.NEXT_PUBLIC_STOCK_KEY
    }&resultType=json&beginBasDt=${startDate}&endBasDt=${endDate}&itmsNm=${encodeURI(
      itmsNm
    )}`
  );
};
