import React from 'react';
import styled from 'styled-components';

const CustomTextBox = styled.div`
  .customText {
    color: #767676;
    font-size: 24px;
    font-family: 'NanumSquareB';
    line-height: 38px;
    letter-spacing: -2px;
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
    <CustomTextBox>
      <div className="customText">{renderTextWithLineBreaks(data.text)}</div>
    </CustomTextBox>
  );
};

export default CustomText;
