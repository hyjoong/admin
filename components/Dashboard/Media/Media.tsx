import React from "react";
import ContentLayout from "@components/ContentLayout/ContentLayout";
import BarChart from "./BarChart";
import Table from "./Table";

const Media = () => {
  return (
    <ContentLayout title="매채 현황">
      <BarChart />
      <Table />
    </ContentLayout>
  );
};

export default Media;
