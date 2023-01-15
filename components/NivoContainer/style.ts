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
  }
`;

export const DateCalendar = styled(DateRange)<{ isMobile: boolean }>`
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 10;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
