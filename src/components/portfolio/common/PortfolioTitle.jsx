import React from 'react';
import styled from 'styled-components';

const PortfolioTitleBox = styled.div`
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

  &.centeredContentWithMarginBottom {
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
  }

  &.justifyContentCenter {
    display: flex;
    justify-content: center;
  }
`;

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const PortfolioTitle = (data) => {
  return (
    <PortfolioTitleBox className={`PortfolioTitleBox ${data.className}`}>
      <div>
        <p className="orgainzation NanumSquareB">{data.organization}</p>
        <p className="fieldTitle NanumSquareEB">
          {data.field ? (
            <>
              {data.field} <span className="divide NanumSquareR">I</span>
            </>
          ) : (
            ''
          )}{' '}
          {renderTextWithLineBreaks(data.title)}
        </p>
      </div>
    </PortfolioTitleBox>
  );
};

export default PortfolioTitle;
