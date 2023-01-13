import axios from "axios";

export const instance = axios.create({
  baseURL:
    "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService",
});
