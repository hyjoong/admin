const settingDefalultRow = () => [
  { key: "cost", category: "광고비", value: 0, label: "" },
  { key: "convValue", category: "매출", value: 0, label: "" },
  { key: "click", category: "클릭 수", value: 0, label: "" },
  { key: "imp", category: "노출 수", value: 0, label: "" },
  { key: "conv", category: "전환 수", value: 0, label: "" },
];

export const useGraphData = (data) => {
  const rows = {
    google: settingDefalultRow(),
    facebook: settingDefalultRow(),
    naver: settingDefalultRow(),
    kakao: settingDefalultRow(),
  };

  const totalData = data.reduce(
    (acc, cur) => {
      acc.cost += cur.cost;
      acc.convValue += cur.convValue;
      acc.click += cur.click;
      acc.imp += cur.imp;
      acc.ctr += cur.ctr;
      acc.cvr += cur.cvr;
      acc.cpc += cur.cpc;
      acc.cpa += cur.cpa;
      acc.roas += cur.roas;
      acc.conv += cur.cvr * cur.click * 0.01;

      return acc;
    },
    {
      imp: 0,
      click: 0,
      cost: 0,
      convValue: 0,
      ctr: 0,
      cvr: 0,
      cpc: 0,
      cpa: 0,
      roas: 0,
      conv: 0,
    }
  );

  data.forEach((data) => {
    rows[data.channel].find((item) => item.key === "cost")!.value += data.cost;
    rows[data.channel].find((item) => item.key === "convValue")!.value +=
      data.convValue;
    rows[data.channel].find((item) => item.key === "click")!.value +=
      data.click;
    rows[data.channel].find((item) => item.key === "imp")!.value += data.imp;
    rows[data.channel].find((item) => item.key === "conv")!.value +=
      data.cvr * data.click * 0.01;
  });

  Object.values(rows).forEach((data) => {
    data.forEach((row) => {
      const total = row.value;
      const average = total / totalData[row.key];
      const rate = average * 100;
      row.value = Number(rate.toLocaleString());
      row.label = total.toLocaleString();
    });
  });

  return rows;
};
