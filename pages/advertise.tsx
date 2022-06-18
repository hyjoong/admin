import React from "react";
import styled from "styled-components";
import BaseLayout from "@components/BaseLayout/BaseLayout";

const advertise = () => {
  return (
    <BaseLayout>
      <MainPage></MainPage>
    </BaseLayout>
  );
};

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 40px 80px;
  background: #f6f7f8;
`;

export default advertise;
