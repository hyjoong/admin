import React from "react";
import styled from "styled-components";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";

type Data = {
  x: string;
  y: number;
};

const Chart = () => {
  const firstData = [
    { x: "2022-04-14", y: 290.56 },
    { x: "2022-04-15", y: 378.11 },
    { x: "2022-04-16", y: 299.29 },
    { x: "2022-04-17", y: 219.04 },
    { x: "2022-04-18", y: 510.15 },
    { x: "2022-04-19", y: 670.64 },
    { x: "2022-04-20", y: 473.61 },
  ];

  const secondData = [
    { x: "2022-04-14", y: 650788 },
    { x: "2022-04-15", y: 641774 },
    { x: "2022-04-16", y: 671625 },
    { x: "2022-04-17", y: 702049 },
    { x: "2022-04-18", y: 650255 },
    { x: "2022-04-19", y: 634742 },
    { x: "2022-04-20", y: 671598 },
  ];
  const options = {
    width: 1050,
    height: 400,
  };

  const getMaxNum = (d: Data[] | undefined) => {
    if (d && d.length > 0)
      return d?.reduce((max, p) => (p.y > max ? p.y : max), d[0].y);
    return -1;
  };

  const maxima = (mNum: number) => {
    const strMaxNum = Math.floor(mNum).toString();
    const firstDigit = Number(strMaxNum.substring(0, 1)) + 1;
    const square = 10 ** (strMaxNum.length - 1);

    return firstDigit * square;
  };

  return (
    <ChartContainer>
      <VictoryChart
        theme={VictoryTheme.material}
        {...options}
        domain={{ y: [0, 1] }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => datum.y}
            labelComponent={
              <VictoryTooltip
                flyoutStyle={{
                  stroke: "lightgray",
                  fill: "white",
                }}
                flyoutPadding={15}
              />
            }
          />
        }
      >
        <VictoryAxis fixLabelOverlap />
        <VictoryAxis
          dependentAxis
          offsetX={50}
          tickLabelComponent={<VictoryLabel dy={15} textAnchor="start" />}
          style={{
            axis: { stroke: "none" },
            tickLabels: { fill: "black" },
          }}
          tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
          tickFormat={(t) =>
            (t * maxima(getMaxNum(firstData))).toLocaleString()
          }
        />
        {secondData && (
          <VictoryAxis
            dependentAxis
            offsetX={910}
            tickLabelComponent={
              <VictoryLabel dy={15} dx={25} textAnchor="end" />
            }
            style={{
              axis: { stroke: "none" },
              tickLabels: { fill: "black" },
            }}
            tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
            tickFormat={(t) =>
              (t * maxima(getMaxNum(secondData))).toLocaleString()
            }
          />
        )}
        <VictoryLine
          data={firstData}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            parent: { border: "1px solid #ccc" },
            data: { stroke: "#4fadf7" },
          }}
          y={(datum) => datum.y / maxima(getMaxNum(firstData))}
        />
        {secondData && (
          <VictoryLine
            data={secondData}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            style={{
              parent: { border: "1px solid #ccc" },
              data: { stroke: "#85da47" },
            }}
            y={(datum) => datum.y / maxima(getMaxNum(secondData))}
          />
        )}
      </VictoryChart>
    </ChartContainer>
  );
};

const ChartContainer = styled.div``;

export default Chart;
