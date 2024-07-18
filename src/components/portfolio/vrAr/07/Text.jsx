import React from 'react';
import styled from 'styled-components';

const TextCenterBox = styled.p`
  color: #767676;
  font-size: 24px;
  font-family: 'NanumSquareB';
  line-height: 38px;
  letter-spacing: -2px;
`;
const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const Text = (data) => {
  return <TextCenterBox>{renderTextWithLineBreaks(data.text)}</TextCenterBox>;
};

export default Text;
