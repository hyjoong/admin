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
import styled from "styled-components";

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

const TOOLTIP_STYLE = {
  flyoutStyle: { fill: "white", stroke: "lightgray" },
  style: { fontSize: 10, fill: "black" },
};

const BarChart = ({ data }) => {
  const options = {
    width: 700,
    height: 400,
  };

  const { facebook, google, kakao, naver } = data;

  return (
    <ChartContainer>
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
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `${x}%`}
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fontSize: 12, padding: 15, fill: "#94A2AD" },
            grid: { stroke: "lightgray" },
          }}
        />
        <VictoryStack colorScale={["#4FADF7", "#AC8AF8", "#FFEB00", "#85DA47"]}>
          <VictoryBar
            data={facebook}
            labelComponent={<VictoryTooltip {...TOOLTIP_STYLE} />}
            {...GRAPH_STYLE}
          />
          <VictoryBar
            data={google}
            labelComponent={<VictoryTooltip {...TOOLTIP_STYLE} />}
            {...GRAPH_STYLE}
          />
          <VictoryBar
            data={kakao}
            labelComponent={<VictoryTooltip {...TOOLTIP_STYLE} />}
            {...GRAPH_STYLE}
          />
          <VictoryBar
            data={naver}
            labelComponent={<VictoryTooltip {...TOOLTIP_STYLE} />}
            {...GRAPH_STYLE}
          />
        </VictoryStack>
        <VictoryLegend orientation="horizontal" {...LEGEND_STYLE} />
      </VictoryChart>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default BarChart;
