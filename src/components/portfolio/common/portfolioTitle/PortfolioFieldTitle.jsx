import React from 'react';
import styled from 'styled-components';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const StyledPortfolioFieldTitle = styled.p`
  font-family: 'NanumSquareEB';
  line-height: auto;
  letter-spacing: -2px;

  @media (min-width: 1025px) {
    font-size: 64px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

const PortfolioFieldTitle = (data) => {
  return (
    <StyledPortfolioFieldTitle style={data && data.style}>
      {data.field ? (
        <>
          {data.field} <span className="divide NanumSquareR">I</span>
        </>
      ) : (
        ''
      )}{' '}
      {renderTextWithLineBreaks(data.title)}
    </StyledPortfolioFieldTitle>
  );
};

export default PortfolioFieldTitle;
