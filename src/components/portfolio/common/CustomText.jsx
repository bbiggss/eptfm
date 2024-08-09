import React from 'react';
import styled from 'styled-components';

const CustomTextBox = styled.p`
  color: #767676;
  font-family: 'NanumSquareB';
  letter-spacing: -0.02em;

  @media (min-width: 1025px) {
    line-height: 38px;
    font-size: 24px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
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

const CustomText = (data) => {
  return (
    <CustomTextBox style={data && data.style} className="customText">
      {renderTextWithLineBreaks(data.text)}
    </CustomTextBox>
  );
};

export default CustomText;
