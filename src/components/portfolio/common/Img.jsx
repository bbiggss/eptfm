import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  border: ${(props) => {
    if (props.$whiteImgBackgroundBorder) return '1px solid #EDEDED';
  }};
  border-radius: ${(props) => {
    if (props.$whiteImgBackgroundBorder) return '30px';
  }};
`;

const Img = (data) => {
  return <StyledImg $whiteImgBackgroundBorder={data.$whiteImgBackgroundBorder} style={data && data.style} src={data && data.src} alt="" />;
};

export default Img;
