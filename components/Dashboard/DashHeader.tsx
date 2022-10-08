import React, { useState } from "react";
import { DateRange } from "react-date-range";
import dayjs from "dayjs";
import styled, { css } from "styled-components";
import useOutsideClick from "@hooks/useOutsideClick";
import ko from "date-fns/locale/ko";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { dateState } from "@recoil/dashBoard";
import DownArrow from "@components/DropDown/DownArrow";
import { useMediaQuery } from "react-responsive";
import { sideBar } from "@recoil/sideBar";
import CalendarIcon from "@components/svg/Calendar";

const DAY_FORMAT = "YYYY-MM-DD";

type DateType = {
  selection: {
    startDate: Date;
    endDate: Date;
    key: string;
  };
};

const DashHeader = () => {
  const dateRange = useRecoilValue(dateState);
  const [tempStartDate, setTempStartDate] = useState<string>(
    dateRange.startDate
  );
  const [tempEndDate, setTempEndDate] = useState<string>(dateRange.endDate);

  const isMobile = useMediaQuery({
    query: "(max-width:710px)",
  });

  const [isModal, setIsModal] = useState<boolean>(false);
  const [isSide, setIsSide] = useRecoilState(sideBar);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleClose = () => {
    setIsModal(false);
  };

  const handleSide = () => {
    if (!isMobile) return;
    setIsSide(true);
  };
  const modalRef = useOutsideClick(handleClose);
  const setDateRange = useSetRecoilState(dateState);
  const handleDateRange = (element: DateType) => {
    setTempStartDate(dayjs(element.selection.startDate).format(DAY_FORMAT));
    setTempEndDate(dayjs(element.selection.endDate).format(DAY_FORMAT));
  };

  const dateIsValid = () => {
    return (
      !Number.isNaN(new Date(tempStartDate).getTime()) &&
      new Date("2022-02-01").getTime() <= new Date(tempStartDate).getTime() &&
      new Date(tempStartDate).getTime() <= new Date("2022-04-20").getTime() &&
      !Number.isNaN(new Date(tempEndDate).getTime()) &&
      new Date("2022-02-01").getTime() <= new Date(tempEndDate).getTime() &&
      new Date(tempEndDate).getTime() <= new Date("2022-04-20").getTime()
    );
  };

  const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === "startDate") {
      setTempStartDate(value);
    } else {
      setTempEndDate(value);
    }
  };

  const handleLookupData = () => {
    const isValid = dateIsValid();
    if (!isValid) {
      alert("날짜는 2022-02-01 ~ 2022-04-20 사이로 선택해 주세요.");
      return;
    }
    setDateRange({
      startDate: tempStartDate,
      endDate: tempEndDate,
    });
  };

  return (
    <DashboarHeader>
      <Title isMobile={isMobile} onClick={() => handleSide()}>
        {isMobile ? "☰" : "대시보드"}
      </Title>
      <DateWrapper>
        <DateText>
          <input
            name="startDate"
            value={tempStartDate}
            onChange={handleDateInput}
            maxLength={10}
          />
          <p>~</p>
          <input
            name="endDate"
            value={tempEndDate}
            onChange={handleDateInput}
            maxLength={10}
          />
          <button onClick={handleModal}>
            <CalendarIcon />
          </button>

          <ArrowIcon isModal={isModal} onClick={handleModal}>
            <DownArrow />
          </ArrowIcon>
        </DateText>
        <div ref={modalRef}>
          {isModal && (
            <DateCalendar
              isMobile={isMobile}
              editableDateInputs={false}
              locale={ko}
              months={2}
              onChange={(el: DateType) => handleDateRange(el)}
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
        </div>
        <ButtonWrapper>
          <button onClick={handleLookupData}>조회</button>
        </ButtonWrapper>
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

const Title = styled.h1<{ isMobile: boolean }>`
  font-size: 26px;
  font-weight: 900;
  color: #3a474e;

  ${({ isMobile }) =>
    isMobile &&
    css`
      cursor: pointer;
      user-select: none;
    `}
`;

const DateText = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
  cursor: pointer;

  p {
    padding: 0 5px;
  }
  input {
    background: transparent;
    border: none;

    width: 70px;
  }
`;

const ArrowIcon = styled.div<{ isModal: boolean }>`
  margin-left: 5px;
  transition: transform 0.3s;
  ${({ isModal }) =>
    isModal &&
    css`
      transform: rotate(-180deg);
      transition: transform 0.3s;
    `}
`;

const DateWrapper = styled.div`
  margin-right: 20px;
  display: flex;
  overflow: hidden;
`;

const DateCalendar = styled(DateRange)<{ isMobile: boolean }>`
  position: absolute;
  top: 60px;
  right: 0;
  ${({ isMobile }) =>
    isMobile &&
    css`
      width: 100%;
    `}
  border: 1px solid rgba(0,0,0,0.1);
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  button {
    border: 1px solid;
    padding: 5px 10px;
    border-radius: 7px;
    color: #ffffff;
    background-color: #586cf5;

    :hover {
      filter: brightness(110%);
    }
  }
`;
export default DashHeader;
