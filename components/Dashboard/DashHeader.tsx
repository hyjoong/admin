import React, { useEffect, useRef, useState } from "react";
import { DateRange, Range } from "react-date-range";
import dayjs from "dayjs";
import styled from "styled-components";
import ko from "date-fns/locale/ko";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DashHeader = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [startDate, setStartDate] = useState(new Date(2022, 3, 14));
  const [endDate, setEndDate] = useState(new Date(2022, 3, 20));

  const [currentCalendarStartDate] = useState(startDate);
  const [currentCalenderEndDate] = useState(endDate);

  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(dayjs(currentCalendarStartDate).format("YYYY-MM-DD")),
      endDate: new Date(dayjs(currentCalenderEndDate).format("YYYY-MM-DD")),
      key: "selection",
    },
  ]);
  const displayStartDate = dayjs(dateRange[0].startDate).format("YYYY-MM-DD");
  const displayEndDate = dayjs(dateRange[0].endDate).format("YYYY-MM-DD");

  const modalRef = useRef<HTMLDivElement>(null);

  const handleModal = () => {
    setIsModal(!isModal);
  };
  const handleChange = () => {};

  useEffect(() => {
    document.addEventListener("mousedown", clickModalOutside);

    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  });

  const clickModalOutside = (event) => {
    if (!modalRef.current.contains(event.target)) {
      setIsModal(false);
    }
  };

  return (
    <DashboarHeader>
      <Title>대시보드</Title>
      <DateWrapper ref={modalRef}>
        <DateText onClick={handleModal}>
          {displayStartDate} ~ {displayEndDate}
        </DateText>
        {isModal && (
          <DateRange
            editableDateInputs={false}
            locale={ko}
            months={2}
            onChange={(el) => setDateRange([el.selection])}
            ranges={dateRange}
            direction="horizontal"
            dateDisplayFormat="yyyy년 MM월 dd일"
            monthDisplayFormat="yyyy년 MM월"
            rangeColors={["#586cf5"]}
            showPreview={false}
            showDateDisplay={false}
            minDate={new Date("2022-02-01")}
            maxDate={new Date("2022-04-20")}
          />
        )}
      </DateWrapper>
    </DashboarHeader>
  );
};

const DashboarHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 0;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 900;
  color: #3a474e;
`;

const DateText = styled.span`
  font-size: 14px;
  display: flex;
  padding: 10px 0;
  justify-content: flex-end;
  cursor: pointer;
`;

const DateWrapper = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export default DashHeader;
