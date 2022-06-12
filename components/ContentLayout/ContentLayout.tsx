import React from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  children?: React.ReactNode;
}

const ContentLayout = ({ title, children }: IProps) => {
  return (
    <ContentWrapper>
      <Title>{title}</Title>
      <ContentContainer>{children}</ContentContainer>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div``;

const Title = styled.h1`
  color: #3a474e;
  font-weight: 700;
  line-height: 19px;
  padding: 20px 0;
`;

const ContentContainer = styled.div`
  background-color: #ffffff;
  padding: 10px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

export default ContentLayout;
