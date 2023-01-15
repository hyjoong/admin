import React from "react";
import { Root } from "./style";
import NivoChart from "@components/NivoChart";
import { StockProps } from "@components/NivoChart/type";
import CalendarIcon from "@components/svg/Calendar";

const NivoContainer = ({ data }: StockProps) => {
  return (
    <Root>
      <div className="chart-header">
        <CalendarIcon />
      </div>
      <NivoChart data={data} />
    </Root>
  );
};

export default NivoContainer;
