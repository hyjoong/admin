import DropDown from "@components/DropDown/DropDown";
import React from "react";
import styled from "styled-components";
import Chart from "./Chart";
import DATA from "db/data.json";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useRecoilState, useRecoilValue } from "recoil";
import useFilterByCategory from "@hooks/useFilterByCategory";
import { dropDownFirst, dropDownSecond, periodState } from "recoil/dropDown";
import { categoryToKorean, periodToKorean } from "utils/transferLang";
import { dateState } from "recoil/dashBoard";

dayjs.extend(isBetween);

const TotalAd = () => {
  const SECTION = ["ROAS", "광고비", "노출수", "클릭수", "전환수", "매출"];
  const DROPDOWNMAIN = ["광고비", "노출수", "클릭수", "전환수", "매출"];
  const DROPDOWNSUB = ["노출수", "클릭수", "전환수", "매출", "없음"];
  const PeriodList = ["일간", "주간"];

  const { daily } = DATA;

  const [dropDownOne, setDropDownOne] = useRecoilState(dropDownFirst);
  const [dropDownTwo, setDropDownTwo] = useRecoilState(dropDownSecond);
  const [period, setPeriod] = useRecoilState(periodState);
  const dateRange = useRecoilValue(dateState);

  const filterDaily = daily.filter((day) => {
    const date = dayjs(day.date);

    return date.isBetween(dateRange.startDate, dateRange.endDate, "date", "[]");
  });

  const firstChart = useFilterByCategory({
    daily: filterDaily,
    category: dropDownOne,
  });

  const secondChart = useFilterByCategory({
    daily: filterDaily,
    category: dropDownTwo,
  });

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
        <DropContainer>
          <DropDownLeft>
            <DropDown
              selectOption={categoryToKorean[dropDownOne]}
              menuList={DROPDOWNMAIN}
              setItemSelect={setDropDownOne}
            />
            <DropDown
              selectOption={categoryToKorean[dropDownTwo]}
              menuList={DROPDOWNSUB}
              setItemSelect={setDropDownTwo}
            />
          </DropDownLeft>
          <DropDownRight>
            <DropDown
              selectOption={periodToKorean[period]}
              menuList={PeriodList}
              setItemSelect={setPeriod}
            />
          </DropDownRight>
        </DropContainer>
        <Chart firstChart={firstChart} secondChart={secondChart} />
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

const DropContainer = styled.div`
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
`;

const DropDownLeft = styled.div`
  display: flex;
`;

const DropDownRight = styled.div``;

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
