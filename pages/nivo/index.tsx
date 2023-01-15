import React from "react";
import BaseLayout from "@components/BaseLayout/BaseLayout";
import NivoChart from "@components/NivoChart";
import { GetServerSideProps } from "next";
import { getStock } from "api/stock";

const Nivo = ({ stockList }) => {
  return (
    <div
      style={{
        width: "auto",
        height: "400px",
        margin: "0 auto",
        padding: "0 50px",
      }}
    >
      <NivoChart data={stockList} />
    </div>
  );
};

export default Nivo;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getStock({ numOfRows: "7", itmsNm: "삼성전자" });
  const stockList = data?.response?.body.items.item;
  return {
    props: {
      stockList,
    },
  };
};
