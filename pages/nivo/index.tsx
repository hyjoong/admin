import React from "react";
import BaseLayout from "@components/BaseLayout/BaseLayout";
import NivoContainer from "@components/NivoContainer";

const Nivo = () => {
  return (
    <BaseLayout>
      <NivoContainer />
    </BaseLayout>
  );
};

export default Nivo;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await getStock({ numOfRows: "7", itmsNm: "삼성전자" });
//   const stockList = data?.response?.body.items.item;
//   return {
//     props: {
//       stockList,
//     },
//   };
// };
