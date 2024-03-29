export interface StockProps {
  data: IStock[];
}

export interface Stock {
  basDt: string;
  clpr: string;
  fltRt: string;
  hipr: string;
  isinCd: string;
  itmsNm: string;
  lopr: string;
  lstgStCnt: string;
  mkp: string;
  mrktCtg: string;
  mrktTotAmt: string;
  srtnCd: string;
  trPrc: string;
  trqu: string;
  vs: string;
}
export interface IStock {
  [key: string]: string;
}
