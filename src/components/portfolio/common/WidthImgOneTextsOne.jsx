import React from 'react';
import styled from 'styled-components';

const StyledWidthImgOneTextsOne = styled.div`
  position: relative;
  display: flex;
  text-align: left;
  padding-bottom: ${(props) => {
    if (props.$last) return '200px';
    return '160px';
  }};

  .texts {
    /* max-width: 550px; */
    width: 50%;
    display: flex;
    align-items: center;
    line-height: 38px;
    letter-spacing: -2%;

    color: #767676;
    font-size: 24px;

    &.positionRight {
      justify-content: flex-end;
    }
  }
  &.firstChild {
    padding-top: 200px;
  }
  &.lastChild {
    padding-bottom: 200px;
  }
  @media (min-width: 1025px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .projectImg {
      width: 50%;
    }
  }
  @media (max-width: 767px) {
  }
`;

const WidthImgOneTextsOne = ({ children, style, $last }) => {
  return (
    <StyledWidthImgOneTextsOne style={style} $last={$last}>
      {children}
    </StyledWidthImgOneTextsOne>
  );
};

export default WidthImgOneTextsOne;
