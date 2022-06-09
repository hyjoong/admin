import React, { useState } from "react";
import { DateRange } from "react-date-range";
import dayjs from "dayjs";
import styled from "styled-components";
import useOutsideClick from "@hooks/useOutsideClick";
import ko from "date-fns/locale/ko";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dateState } from "@recoil/dashBoard";

const DAY_FORMAT = "YYYY-MM-DD";

const DashHeader = () => {
  const dateRange = useRecoilValue(dateState);

  const [isModal, setIsModal] = useState<boolean>(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleClose = () => {
    setIsModal(false);
  };

  const modalRef = useOutsideClick(handleClose);
  const setDateRange = useSetRecoilState(dateState);
  const handleDateRange = (selection) => {
    setDateRange({
      startDate: dayjs(selection.startDate).format(DAY_FORMAT),
      endDate: dayjs(selection.endDate).format(DAY_FORMAT),
    });
  };

  const displayStartDate = dayjs(dateRange.startDate).format("YYYY-MM-DD");
  const displayEndDate = dayjs(dateRange.endDate).format("YYYY-MM-DD");

  return (
    <DashboarHeader>
      <Title>대시보드</Title>
      <DateWrapper ref={modalRef}>
        <DateText onClick={handleModal}>
          {displayStartDate} ~ {displayEndDate}
        </DateText>
        {isModal && (
          <DateCalendar
            editableDateInputs={false}
            locale={ko}
            months={2}
            onChange={(el) => handleDateRange(el.selection)}
            ranges={[
              {
                startDate: new Date(dateRange.startDate),
                endDate: new Date(dateRange.endDate),
                key: "selection",
              },
            ]}
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
  position: relative;
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

const DateCalendar = styled(DateRange)`
  position: absolute;
  top: 60px;
  right: 0;
`;
export default DashHeader;
