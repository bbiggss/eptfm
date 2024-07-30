import React from 'react';

const PortfolioTitleWrap = ({ style, children }) => {
  return (
    <div style={style}>
      <div>{children}</div>
    </div>
  );
};

export default PortfolioTitleWrap;
