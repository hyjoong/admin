import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const MENU_LIST = [
  { name: "대시보드", link: "/" },
  { name: "광고관리", link: "/advertise" },
];

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState<number>(0);

  const handleMenu = (index: number) => {
    setActiveMenu(index);
  };

  return (
    <SideBarWrapper>
      <LogoBox>
        <Logo src="/images/logo.png" />
        <UnderLine />
      </LogoBox>
      <Subtitle>광고센터</Subtitle>
      <NavList>
        {MENU_LIST.map((nav, index) => (
          <Link href={`${nav.link}`} as={`${nav.link}`}>
            <NavItem
              active={activeMenu === index}
              onClick={() => handleMenu(index)}
            >
              {`${nav.name}`}
            </NavItem>
          </Link>
        ))}
      </NavList>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 180px;
  padding: 50px;
  background: #ffffff;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
  @media screen and (max-width: 710px) {
    display: none;
  }
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
`;

const NavItem = styled.li<{ active: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 50px;
  margin: 5px 0;
  font-weight: 700;
  color: #586cf5;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }

  ${({ active }) =>
    active
      ? css`
          background-color: #edeff1;
          color: #586cf5;
          font-weight: 700;
        `
      : css``}
`;

const Subtitle = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: #94a2ad;
`;

export default SideBar;
