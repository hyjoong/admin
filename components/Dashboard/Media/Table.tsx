import React from "react";
import styled from "styled-components";

const HEADER = ["", "광고비", "매출", "클릭 수", "노출수", "전환 수"];

const Table = ({ data }) => {
  const { facebook, google, kakao, naver } = data;

  return (
    <TableContainer>
      <thead>
        <tr>
          {HEADER.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>페이스북</td>
          {facebook.map((item, index) => (
            <td key={index}>{Math.floor(item.value).toLocaleString()}</td>
          ))}
        </tr>

        <tr>
          <td>구글</td>
          {google.map((item, index) => (
            <td key={index}>{Math.floor(item.value).toLocaleString()}</td>
          ))}
        </tr>
        <tr>
          <td>카카오</td>
          {kakao.map((item, index) => (
            <td key={index}>{Math.floor(item.value).toLocaleString()}</td>
          ))}
        </tr>
        <tr>
          <td>네이버</td>
          {naver.map((item, index) => (
            <td key={index}>{Math.floor(item.value).toLocaleString()}</td>
          ))}
        </tr>
      </tbody>
    </TableContainer>
  );
};

const TableContainer = styled.table`
  width: 80%;
  margin: 30px auto 0;
  font-size: 12px;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
  tr {
    &:last-child {
      color: #586cf5;
    }
    th {
      color: #94a2ad;
      line-height: 35px;
      border: 1px solid #edeff1;
      border-width: 1px 0;
    }

    td {
      border-bottom: 1px solid #edeff1;
      line-height: 35px;
      text-align: center;
    }
  }
`;

export default Table;
