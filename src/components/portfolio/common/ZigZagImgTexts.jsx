import React from 'react';
import styled from 'styled-components';
import CustomText from './CustomText';
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

      <CustomText style={data.style} text={data.text} />
    </ZigZagImgTextsBox>
  );
};

export default ZigZagImgTexts;
