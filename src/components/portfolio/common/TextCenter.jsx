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
const TextCenterBox = styled.p`
  text-align: center;
  color: #767676;
  font-size: 24px;
  font-family: 'NanumSquareB';
  line-height: 38px;
  letter-spacing: -2px;

  &.textLeft {
    text-align: left;
  }
`;

const TextCenter = (data) => {
  return (
    <TextCenterBox className={`textCenter ${data.className}`}>
      {renderTextWithLineBreaks(data.text)}
    </TextCenterBox>
  );
};

export default TextCenter;
