import React from 'react';
import styled from 'styled-components';

const PortfolioTitleBox = styled.div`
  margin-bottom: 80px;

  .orgainzation {
    margin-bottom: 24px;

    font-size: 22px;
    color: #999999;
    line-height: auto;
    letter-spacing: -2px;
  }
  .fieldTitle {
    font-size: 64px;
    color: #48c2c5;
    line-height: auto;
    letter-spacing: -2px;
  }
`;

const PortfolioTitle = (data) => {
  return (
    <PortfolioTitleBox>
      <div className="justifyContentCenter">
        <div>
          <p className="orgainzation NanumSquareB">{data.organization}</p>
          <p className="fieldTitle NanumSquareEB">
            {data.field} <span className="divide NanumSquareR">I</span> {data.title}
          </p>
        </div>
      </div>
    </PortfolioTitleBox>
  );
};

export default PortfolioTitle;
