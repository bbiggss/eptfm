import React from 'react';
import styled from 'styled-components';

const CustomTextBox = styled.p`
  color: #767676;
  font-family: 'NanumSquareB';
  letter-spacing: -0.02em;

  @media (min-width: 1025px) {
    /* font-size: 24px; */
    /* line-height: 38px; */
    font-size: clamp(20px, 1.25vw, 24px);
    line-height: clamp(30px, 2vw, 38px);
  }
  @media (max-width: 1024px) {
    /* font-size: 16px;
    line-height: 24px; */

    font-size: 4.27vw;
    line-height: 6.4vw;
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
