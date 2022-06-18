import Link from "next/link";
import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <SideBarWrapper>
      <LogoBox>
        <Logo src="/images/logo.png" />
        <UnderLine />
      </LogoBox>
      {/* <Subtitle>서비스</Subtitle> */}
      <Subtitle>광고센터</Subtitle>
      <NavList>
        <Link href="/">
          <li>대시보드</li>
        </Link>

        <Link href="/advertise">
          <li>광고관리</li>
        </Link>
      </NavList>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const NavList = styled.ul`
  width: 80%;
  height: 400px;
  margin: 10px 0;
  li {
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 60px;
    font-weight: 700;
    color: #586cf5;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background-color: #edeff1;
    }
  }
`;

const Subtitle = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: #94a2ad;
`;

export default SideBar;
