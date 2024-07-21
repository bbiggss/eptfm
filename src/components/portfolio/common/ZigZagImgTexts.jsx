import React from 'react';
import TextCenter from './TextCenter';
import styled from 'styled-components';
const ZigZagImgTextsBox = styled.div`
  margin-bottom: 160px;
  &:last-child {
    margin-bottom: 0px;
  }
  img {
    margin-bottom: 60px;
  }
`;

const ZigZagImgTexts = (data) => {
  return (
    <ZigZagImgTextsBox>
      <img src={data.src} alt="" />

      <TextCenter text={data.text} />
    </ZigZagImgTextsBox>
  );
};

export default ZigZagImgTexts;
