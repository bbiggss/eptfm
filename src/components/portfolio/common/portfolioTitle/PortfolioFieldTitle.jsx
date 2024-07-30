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
  font-size: 64px;
  line-height: auto;
  letter-spacing: -2px;
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
