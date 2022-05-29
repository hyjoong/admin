import React, { useState } from "react";
import styled from "styled-components";
import DashHeader from "./DashHeader";

const Dashboard = () => {
   return (
    <DashboardWrapper>
      <DashHeader  />
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  width: 100%;
`;

export default Dashboard;
