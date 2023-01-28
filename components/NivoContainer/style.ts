import { DateRange } from "react-date-range";
import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 40px 80px;
  height: 400px;

  .chart-header {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 26px;
      font-weight: 700;
      color: #3a474e;
    }

    .calendar-box {
      display: flex;
      .btn-lookup {
        border: 1px solid;
        padding: 5px 10px;
        border-radius: 7px;
        color: #ffffff;
        background-color: #586cf5;

        :hover {
          filter: brightness(110%);
        }
      }
    }
  }
`;

export const DateCalendar = styled(DateRange)<{ isMobile: boolean }>`
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 10;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
