import axios from "axios";
import https from "https";

axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

export const instance = axios.create({
  baseURL:
    "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService",
});
