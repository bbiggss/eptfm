import React from 'react';
import styled from 'styled-components';

const EqualWidthTwoImagesBox = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, auto);
  gap: 0px 60px;
`;

const EqualWidthTwoImages = (data) => {
  return (
    <EqualWidthTwoImagesBox className="EqualWidthTwoImagesBox">
      <img src={data && data.src1} alt="" />
      <img src={data && data.src2} alt="" />
    </EqualWidthTwoImagesBox>
  );
};

export default EqualWidthTwoImages;
