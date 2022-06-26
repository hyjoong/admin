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

interface IProp {
  firstChart: Data[];
  secondChart: Data[];
}

type Data = {
  x: string;
  y: number;
};

const Chart = ({ firstChart, secondChart }: IProp) => {
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
                style={{ fontSize: 10, fill: "black" }}
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
            (t * maxima(getMaxNum(firstChart))).toLocaleString()
          }
        />
        {secondChart && (
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
              (t * maxima(getMaxNum(secondChart))).toLocaleString()
            }
          />
        )}
        <VictoryLine
          data={firstChart}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            parent: { border: "1px solid #ccc" },
            data: { stroke: "#4fadf7" },
          }}
          y={(datum) => datum.y / maxima(getMaxNum(firstChart))}
        />
        {secondChart && (
          <VictoryLine
            data={secondChart}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            style={{
              parent: { border: "1px solid #ccc" },
              data: {
                stroke: "#85da47",
              },
            }}
            y={(datum) => datum.y / maxima(getMaxNum(secondChart))}
          />
        )}
      </VictoryChart>
    </ChartContainer>
  );
};

const ChartContainer = styled.div``;

export default Chart;
