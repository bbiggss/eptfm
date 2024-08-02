import React from 'react';
import styled from 'styled-components';

const EqualWidthTwoImagesBox = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, auto);
  /* gap: 0px 60px; */

  gap: ${(props) => {
    if (props.$edit) return '0 100px';
    return '0px 60px';
  }};
`;

const EqualWidthTwoImages = (data) => {
  return (
    <EqualWidthTwoImagesBox
      style={data.style}
      $edit={data.$edit}
      className="EqualWidthTwoImagesBox"
    >
      <img src={data && data.src1} alt="" />
      <img src={data && data.src2} alt="" />
    </EqualWidthTwoImagesBox>
  );
};

export default EqualWidthTwoImages;
