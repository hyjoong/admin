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
import { useRecoilValue } from "recoil";
import { dateState } from "@recoil/dashBoard";
import useOutsideClick from "@hooks/useOutsideClick";

const DAY_FORMAT = "YYYY-MM-DD";

const NivoContainer = ({ data }: StockProps) => {
  const [isCalendar, setIsCalendar] = useState(false);
  const dateRange = useRecoilValue(dateState);
  const [tempStartDate, setTempStartDate] = useState(dateRange.startDate);
  const [tempEndDate, setTempEndDate] = useState(dateRange.endDate);

  const [startDate, endStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleCalendar = () => {
    setIsCalendar((prev) => !prev);
  };

  const handleDateRange = ({ selection }: RangeKeyDict) => {
    setTempStartDate(dayjs(selection.startDate).format(DAY_FORMAT));
    setTempEndDate(dayjs(selection.endDate).format(DAY_FORMAT));
  };

  const closeCalendar = () => {
    setIsCalendar(false);
  };

  const calendarRef = useOutsideClick(closeCalendar);

  return (
    <Root>
      <div className="chart-header">
        <p>기간</p>
        <div>
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
                    startDate: new Date(tempStartDate),
                    endDate: new Date(tempEndDate),
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
        </div>
      </div>
      <NivoChart data={data} />
    </Root>
  );
};

export default NivoContainer;
