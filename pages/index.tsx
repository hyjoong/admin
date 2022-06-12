import BaseLayout from "@components/BaseLayout/BaseLayout";
import Dashboard from "@components/Dashboard/Dashboard";
import styled from "styled-components";

const Index = () => {
  return (
    <BaseLayout>
      <MainPage>
        <Dashboard />
      </MainPage>
    </BaseLayout>
  );
};

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 40px 80px;
  background: #f6f7f8;
`;

export default Index;
