import React, { useState } from "react";
import styled from "styled-components";
import DashHeader from "./DashHeader";
import TotalAd from "./TotalAd/TotalAd";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashHeader />
      <TotalAd />
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  width: 100%;
`;

export default Dashboard;
