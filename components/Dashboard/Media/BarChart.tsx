import {
  VictoryAxis,
  VictoryStack,
  VictoryBar,
  VictoryTheme,
  VictoryContainer,
  VictoryLegend,
  VictoryTooltip,
  VictoryChart,
} from "victory";

import DATA from "db/data.json";

import React from "react";
import dayjs from "dayjs";
import { useRecoilValue } from "recoil";
import { dateState } from "@recoil/dashBoard";
import { useGraphData } from "@hooks/useGraphData";

const TITLE = ["광고비", "매출", "노출 수", "클릭 수", "전환 수"];

const GRAPH_STYLE = {
  barWidth: 30,
  x: "category",
  y: "value",
  style: { labels: { fill: "#FFFFFF" } },
};

const LEGEND_STYLE = {
  x: 440,
  y: 380,
  gutter: 30,
  style: {
    border: { stroke: "none" },
    labels: { fontSize: 10, fill: "#94A2AD" },
  },
  colorScale: ["#FFEB00", "#4FADF7", "#85DA47", "#AC8AF8"],
  data: [
    { name: "카카오" },
    { name: "페이스북" },
    { name: "네이버" },
    { name: "구글" },
  ],
};

const { byChannel } = DATA;

const BarChart = () => {
  const options = {
    width: 700,
    height: 400,
  };
  const dateRange = useRecoilValue(dateState);

  const filterChannel = byChannel.filter((day) => {
    const date = dayjs(day.date);
    return date.isBetween(dateRange.startDate, dateRange.endDate, "date", "[]");
  });

  const filterBarData = useGraphData(filterChannel);
  const { facebook, google, kakao, naver } = filterBarData;

  console.log("Data", filterBarData);
  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        {...options}
        animate={{
          duration: 1000,
          onLoad: { duration: 1000 },
          easing: "linear",
        }}
      >
        <VictoryAxis tickValues={TITLE} tickFormat={TITLE} />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x}%`} />
        <VictoryStack colorScale={["#AC8AF8", "#85DA47", "#4FADF7", "#FFEB00"]}>
          <VictoryBar
            data={facebook}
            labelComponent={<VictoryTooltip />}
            {...GRAPH_STYLE}
          />
          <VictoryBar
            data={google}
            labelComponent={<VictoryTooltip />}
            {...GRAPH_STYLE}
          />
          <VictoryBar
            data={kakao}
            labelComponent={<VictoryTooltip />}
            {...GRAPH_STYLE}
          />
          <VictoryBar
            data={naver}
            labelComponent={<VictoryTooltip />}
            {...GRAPH_STYLE}
          />
        </VictoryStack>
        <VictoryLegend orientation="horizontal" {...LEGEND_STYLE} />
      </VictoryChart>
    </div>
  );
};

export default BarChart;
