import React from 'react';
import styled from 'styled-components';

const PortfolioTitleBox = styled.div`
  display: inline-block;
  /* background-color: aqua; */
  /* border: 1px solid black; */
  /* margin-bottom: 80px; */

  p:first-child {
    text-align: left;
    margin-bottom: 24px;

    color: #999999;
    font-size: 22px;
  }
  p:last-child {
    font-size: 64px;
    color: #48c2c5;
    line-height: auto;
    letter-spacing: -2px;
  }
`;

const PortfolioTitle = (data) => {
  return (
    <PortfolioTitleBox>
      <p className="NanumSquareB">{data.organization}</p>
      <p className="NanumSquareEB">
        {data.field} <span className="NanumSquareR">I</span> {data.title}
      </p>
    </PortfolioTitleBox>
  );
};

export default PortfolioTitle;
