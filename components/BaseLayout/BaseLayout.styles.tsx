import styled from "styled-components";

const Root = styled.div`
  display: flex;
  width: calc(100vw - 297px);
  margin-left: 280px;
  @media screen and (max-width: 710px) {
    width: 100%;
    margin: 0;
  }
  overflow: auto;
  min-height: 100vh;
`;

export default { Root };
