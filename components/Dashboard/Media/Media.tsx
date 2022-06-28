import React from "react";
import ContentLayout from "@components/ContentLayout/ContentLayout";
import BarChart from "./BarChart";
import Table from "./Table";
import dayjs from "dayjs";
import { useRecoilValue } from "recoil";
import { dateState } from "@recoil/dashBoard";
import { useGraphData } from "@hooks/useGraphData";
import DATA from "db/data.json";

const Media = () => {
  const { byChannel } = DATA;
  const dateRange = useRecoilValue(dateState);

  const filterChannel = byChannel.filter((day) => {
    const date = dayjs(day.date);
    return date.isBetween(dateRange.startDate, dateRange.endDate, "date", "[]");
  });

  const filterBarData = useGraphData(filterChannel);
  return (
    <ContentLayout title="매채 현황">
      <BarChart data={filterBarData} />
      <Table data={filterBarData} />
    </ContentLayout>
  );
};

export default Media;
