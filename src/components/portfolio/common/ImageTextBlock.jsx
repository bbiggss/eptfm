import React from 'react';
import styled from 'styled-components';

const StyledImageTextBlock = styled.div`
  text-align: center;
  margin-bottom: 160px;
  position: relative;
`;

const ImageTextBlock = ({ children, style }) => {
  return <StyledImageTextBlock style={style}>{children}</StyledImageTextBlock>;
};

export default ImageTextBlock;
