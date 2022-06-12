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
import { categoryToKorean } from "utils/transferLang";
import { dateState, prevDateSelector } from "recoil/dashBoard";
import { useCardDiff, useCardRate } from "@hooks/useCardRate";
import IncreaseIcon from "@components/svg/IncreaseIcon";
import DecreaseIcon from "@components/svg/DecreaseIcon";
import ContentLayout from "@components/ContentLayout/ContentLayout";

dayjs.extend(isBetween);

const TotalAd = () => {
  const SECTION = ["ROAS", "광고비", "노출수", "클릭수", "전환수", "매출"];
  const DROPDOWNLIST = ["광고비", "노출수", "클릭수", "전환수", "매출"];
  const PeriodList = ["일간", "주간"];

  const { daily } = DATA;

  const [dropDownOne, setDropDownOne] = useRecoilState(dropDownFirst);
  const [dropDownTwo, setDropDownTwo] = useRecoilState(dropDownSecond);
  const [period, setPeriod] = useRecoilState(periodState);
  const dateRange = useRecoilValue(dateState);

  const { prevStartDate, prevEndDate } = useRecoilValue(prevDateSelector);

  const filterDaily = daily.filter((day) => {
    const date = dayjs(day.date);

    return date.isBetween(dateRange.startDate, dateRange.endDate, "date", "[]");
  });

  const filterPrevDaily = daily.filter((day) => {
    const date = dayjs(day.date);
    return date.isBetween(prevStartDate, prevEndDate, "date", "[]");
  });

  const firstChart = useFilterByCategory({
    daily: filterDaily,
    category: dropDownOne,
  });

  const secondChart = useFilterByCategory({
    daily: filterDaily,
    category: dropDownTwo,
  });

  const totalCardData = useCardRate(filterDaily);
  const totalPrevCardData = useCardRate(filterPrevDaily);
  const cardData = useCardDiff(totalCardData, totalPrevCardData);

  return (
    <ContentLayout title="통합 광고 현황">
      <CardList>
        {cardData?.map((item, index) => (
          <Card key={index}>
            <CardContent>
              <ContentTitle>{item.title}</ContentTitle>
              <ContentCount>{item.value}</ContentCount>
            </CardContent>
            <CardRate>
              <RateCount>{item.calc}</RateCount>
              <Icon>{item.increase ? <IncreaseIcon /> : <DecreaseIcon />}</Icon>
            </CardRate>
          </Card>
        ))}
      </CardList>
      <DropContainer>
        <DropDownLeft>
          <DropDown
            selectOption={categoryToKorean[dropDownOne]}
            exceptOption={categoryToKorean[dropDownTwo]}
            menuList={DROPDOWNLIST}
            setItemSelect={setDropDownOne}
            order={1}
          />
          <DropDown
            selectOption={categoryToKorean[dropDownTwo]}
            exceptOption={categoryToKorean[dropDownOne]}
            menuList={DROPDOWNLIST}
            setItemSelect={setDropDownTwo}
            order={2}
          />
        </DropDownLeft>
        {/* <DropDownRight>
            <DropDown
              selectOption={periodToKorean[period]}
              menuList={PeriodList}
              setItemSelect={setPeriod}
            />
          </DropDownRight> */}
      </DropContainer>
      <Chart firstChart={firstChart} secondChart={secondChart} />
    </ContentLayout>
  );
};

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
  display: flex;
  align-items: flex-end;
`;

const RateCount = styled.div`
  font-size: 12px;
  color: #94a2ad;
  display: flex;
`;

const Icon = styled.div`
  margin-left: 4px;
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
