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

const StyledCustomTextBox = styled.div`
  text-align: ${(props) => {
    if (props.$center) return 'center';
  }};
  color: #767676;
  font-family: 'NanumSquareB';
  letter-spacing: -2px;

  @media (min-width: 1025px) {
    font-size: 24px;
    line-height: 38px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    width: 315px;
    font-size: 15px;
    line-height: 20px;
  }
`;

const CustomTextBox = (data) => {
  return (
    <StyledCustomTextBox $center={data.$center}>
      {renderTextWithLineBreaks(data.text)}
    </StyledCustomTextBox>
  );
};

export default CustomTextBox;
