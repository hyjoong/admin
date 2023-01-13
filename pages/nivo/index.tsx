import React from "react";
import BaseLayout from "@components/BaseLayout/BaseLayout";
import NivoChart from "@components/NivoChart";
import { GetServerSideProps } from "next";
import { getStock } from "api/stock";

const Nivo = ({ stockList }) => {
  return (
    <BaseLayout>
      <NivoChart stockList={stockList} />
    </BaseLayout>
  );
};

export default Nivo;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getStock({ numOfRows: "8" });
  const stockList = data?.response?.body.items.item;
  return {
    props: {
      stockList,
    },
  };
};
