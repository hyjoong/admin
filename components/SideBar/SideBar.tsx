import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <SideBarWrapper>
      <LogoBox>
        <Logo src="/images/logo.png" />
        <UnderLine />
        <Subtitle>서비스</Subtitle>
      </LogoBox>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
  min-width: 240px;
  padding: 50px;
  background: #ffffff;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
`;

const LogoBox = styled.div``;

const Logo = styled.img``;

const UnderLine = styled.div`
  margin: 60px 0;
  border-bottom: 1px solid #edeff1;
`;

const Subtitle = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: #94a2ad;
`;

export default SideBar;
