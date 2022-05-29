import SideBar from "@components/SideBar/SideBar";
import React from "react";
import Styled from "./BaseLayout.styles";

interface Props {
  sideBar?: React.ReactNode;
  children: React.ReactNode;
}

const BaseLayout = ({ sideBar = <SideBar />, children }: Props) => {
  return (
    <Styled.Root>
      {sideBar}
      {children}
    </Styled.Root>
  );
};

export default BaseLayout;
