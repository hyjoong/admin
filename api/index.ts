import axios from "axios";
import https from "https";

axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

export const instance = axios.create({
  baseURL:
    "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService",
  headers: {
    "Cache-Control": "public, max-age=300, stale-while-revalidate=86400",
  },
});
