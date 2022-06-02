import React from "react";
import styled from "styled-components";
import Chart from "./Chart";

const TotalAd = () => {
  const SECTION = ["ROAS", "광고비", "노출 수", "클릭수", "전환 수", "매출"];
  const DROPDOWNMAIN = ["광고비", "노출 수", "클릭수", "전환 수", "매출"];
  const DROPDOWNSUB = ["ROAS", "노출수", "클릭수", "전환 수", "매출", "없음"];

  return (
    <TotalAdWrapper>
      <Title>통합 광고 현황</Title>
      <AdContainer>
        <CardList>
          {SECTION?.map((item, index) => (
            <Card key={index}>
              <CardContent>
                <ContentTitle>{item}</ContentTitle>
                <ContentCount>697%</ContentCount>
              </CardContent>
              <CardRate>53만 회</CardRate>
            </Card>
          ))}
        </CardList>
        <Chart />
      </AdContainer>
    </TotalAdWrapper>
  );
};

const TotalAdWrapper = styled.div``;

const Title = styled.h1`
  color: #3a474e;
  font-weight: 700;
  line-height: 19px;
  padding: 20px 0;
`;

const AdContainer = styled.div`
  background-color: #ffffff;
  height: 654px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const CardList = styled.ul`
  display: grid;
  padding: 40px;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 35px;
  grid-row-gap: 20px;
`;

const Card = styled.li`
  display: flex;
  justify-content: space-between;
  width: 224px;
  height: 43px;
  padding: 18px 40px;
  border: 0.5px solid #edeff1;
  border-radius: 10px;
  background-color: #ffffff;
`;

const CardContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const CardRate = styled.div`
  font-size: 12px;
  color: #94a2ad;
  display: flex;
  align-items: flex-end;
`;

const ContentTitle = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: #94a2ad;
`;

const ContentCount = styled.span`
  font-weight: 700;
`;

export default TotalAd;
