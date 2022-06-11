export interface IRateCard {
  cost: number;
  imp: number;
  click: number;
  conv: number;
  roas: number;
  sales?: number;
}

export interface IDaily extends IRateCard {
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  date: string;
}
