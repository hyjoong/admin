import React, { useState } from "react";
import { DateCalendar, Root } from "./style";
import NivoChart from "@components/NivoChart";
import { StockProps } from "@components/NivoChart/type";
import CalendarIcon from "@components/svg/Calendar";
import ko from "date-fns/locale/ko";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import dayjs from "dayjs";
import { RangeKeyDict } from "react-date-range";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dateState } from "@recoil/dashBoard";
import useOutsideClick from "@hooks/useOutsideClick";
import { getStockDate } from "api/stock";
import { Loading } from "@components/svg/Loading";

const DAY_FORMAT = "YYYY-MM-DD";

const NivoContainer = ({ data }: StockProps) => {
  const [stockData, setStockData] = useState();
  const [isCalendar, setIsCalendar] = useState(false);
  const setDateRange = useSetRecoilState(dateState);
  const [isLoading, setIsLoading] = useState(false);

  const [startDate, endStartDate] = useState(
    dayjs(new Date()).format(DAY_FORMAT)
  );
  const [endDate, setEndDate] = useState(dayjs(new Date()).format(DAY_FORMAT));

  const handleCalendar = () => {
    setIsCalendar((prev) => !prev);
  };

  const handleDateRange = ({ selection }: RangeKeyDict) => {
    const startDay = dayjs(selection.startDate).format(DAY_FORMAT);
    const endDay = dayjs(selection.endDate).format(DAY_FORMAT);
    endStartDate(startDay);
    setEndDate(endDay);
  };

  const closeCalendar = () => {
    setIsCalendar(false);
  };

  const calendarRef = useOutsideClick(closeCalendar);

  const handleLookupData = () => {
    if (dayjs(startDate).diff(dayjs(endDate), "day") < -13) {
      alert("최대 조회기간은 14일 입니다");
      return;
    }

    getData(startDate.replaceAll("-", ""), endDate.replaceAll("-", ""));
  };

  const getData = async (startDate, endDate) => {
    setIsLoading(true);
    try {
      const { data } = await getStockDate({
        startDate: startDate,
        endDate: endDate,
        itmsNm: "삼성전자",
      });
      const stockList = data?.response?.body.items.item;
      setStockData(stockList);
    } catch (error: unknown) {
      console.error("get stock api is failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Root>
      <div className="chart-header">
        <p>기간</p>
        <div className="calendar-box">
          <button onClick={handleCalendar}>
            <CalendarIcon />
          </button>

          <div ref={calendarRef}>
            {isCalendar && (
              <DateCalendar
                editableDateInputs={false}
                locale={ko}
                months={2}
                onChange={handleDateRange}
                ranges={[
                  {
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                    key: "selection",
                  },
                ]}
                direction="horizontal"
                dateDisplayFormat="yyyy년 MM월 dd일"
                monthDisplayFormat="yyyy년 MM월"
                rangeColors={["#586cf5"]}
                showPreview={false}
                showDateDisplay={false}
                maxDate={new Date()}
              />
            )}
          </div>
          <div>
            <button className="btn-lookup" onClick={handleLookupData}>
              조회하기
            </button>
          </div>
        </div>
      </div>
      {isLoading ? <Loading /> : <NivoChart data={stockData ?? data} />}
    </Root>
  );
};

export default NivoContainer;
