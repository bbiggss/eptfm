import React from 'react';
import TextCenter from '../../common/TextCenter';
import styled from 'styled-components';
const ImgTextsBox = styled.div`
  margin-bottom: 160px;
  &:last-child {
    margin-bottom: 0px;
  }
  img {
    margin-bottom: 60px;
  }
`;

const ImgTexts = (data) => {
  return (
    <ImgTextsBox>
      <img src={data.src} alt="" />

      <TextCenter text={data.text} />
    </ImgTextsBox>
  );
};

export default ImgTexts;
