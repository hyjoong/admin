import { IRateCard } from "types/totalAd";

export const useCardRate = (data: IRateCard[]) => {
  const cost = data.map((item) => item.cost).reduce((acc, cur) => acc + cur, 0);
  const imp = data.map((item) => item.imp).reduce((acc, cur) => acc + cur, 0);
  const click = data
    .map((item) => item.click)
    .reduce((acc, cur) => acc + cur, 0);
  const conv = data.map((item) => item.conv).reduce((acc, cur) => acc + cur, 0);
  const sales = data
    .map((item) => (item.cost * item.roas) / 100)
    .reduce((acc, cur) => acc + cur, 0);
  const roas = (sales / cost) * 100;

  return {
    cost: Math.round(cost / data.length),
    imp: Math.round(imp / data.length),
    click: Math.round(click / data.length),
    conv: Math.round(conv / data.length),
    sales: Math.round(sales / data.length),
    roas: roas / data.length,
  };
};

export const useCardDiff = (totalData: IRateCard, prevTotalData: IRateCard) => {
  return [
    {
      title: "ROAS",
      value: `${totalData.roas.toFixed(2).toLocaleString()}%`,
      calc: `${Math.abs(totalData.roas - prevTotalData.roas)
        .toFixed(2)
        .toLocaleString()}%`,
      increase: totalData.roas - prevTotalData.roas > 0,
    },
    {
      title: "광고비",
      value: `${totalData.cost.toLocaleString()}원`,
      calc: `${Math.abs(
        totalData.cost - prevTotalData.cost
      ).toLocaleString()}원`,
      increase: totalData.cost - prevTotalData.cost > 0,
    },
    {
      title: "클릭 수",
      value: `${totalData.click.toLocaleString()}회`,
      calc: `${Math.abs(totalData.click - prevTotalData.click)}회`,
      increase: totalData.click - prevTotalData.click > 0,
    },
    {
      title: "노출 수",
      value: `${totalData.imp.toLocaleString()}회`,
      calc: `${Math.abs(totalData.imp - prevTotalData.imp).toLocaleString()}회`,
      increase: totalData.imp - prevTotalData.imp > 0,
    },
    {
      title: "전환 수",
      value: `${totalData.conv.toLocaleString()}회`,
      calc: `${Math.abs(
        totalData.conv - prevTotalData.conv
      ).toLocaleString()}회`,
      increase: totalData.conv - prevTotalData.conv > 0,
    },
    {
      title: "매출",
      value: `${totalData.sales.toLocaleString()}원`,
      calc: `${Math.abs(
        totalData.sales - prevTotalData.sales
      ).toLocaleString()}원`,
      increase: totalData.sales - prevTotalData.sales > 0,
    },
  ];
};
