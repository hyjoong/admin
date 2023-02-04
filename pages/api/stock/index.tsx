import { NextApiRequest, NextApiResponse } from "next";
import { instance } from "api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const numOfRows = req.query.numOfRows as string;
  const itmsNm = req.query.itmsNm as string;

  try {
    const { data } = await instance.get(
      `getStockPriceInfo?serviceKey=${
        process.env.NEXT_PUBLIC_STOCK_KEY
      }&numOfRows=${numOfRows}&itmsNm=${encodeURI(
        itmsNm.toString()
      )}&resultType=json`
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
