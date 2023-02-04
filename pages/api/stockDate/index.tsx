import { NextApiRequest, NextApiResponse } from "next";
import { instance } from "api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const startDate = req.query.startDate as string;
  const endDate = req.query.endDate as string;
  const itmsNm = req.query.itmsNm as string;

  try {
    const { data } = await instance.get(
      `getStockPriceInfo?serviceKey=${
        process.env.NEXT_PUBLIC_STOCK_KEY
      }&resultType=json&beginBasDt=${startDate}&endBasDt=${endDate}&itmsNm=${encodeURI(
        itmsNm
      )}`
    );
    res.status(200).json({
      success: true,
      message: "Success in getting stock data",
      data,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};
