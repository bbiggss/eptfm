import React from 'react';
import styled from 'styled-components';

const StyledWidthImgOneTextsOne = styled.div`
  position: relative;
  display: flex;
  text-align: left;

  .texts {
    width: 50%;
    display: flex;
    align-items: center;
    line-height: 38px;
    letter-spacing: -2%;

    color: #767676;
    font-size: 24px;
    white-space: nowrap;

    &.positionRight {
      margin-left: 100px;
    }
  }
  @media (min-width: 1025px) {
    padding-top: ${(props) => props.$pcPaddingTop};
    padding-bottom: ${(props) => props.$pcPaddingBottom};
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: ${(props) => props.$tabletPaddingTop};

    .projectImg {
      width: 50%;
    }
  }
  @media (max-width: 767px) {
    padding-top: ${(props) => props.$mobilePaddingTop};
  }
`;

const WidthImgOneTextsOne = ({
  children,
  style,
  pcPaddingTop,
  tabletPaddingTop,
  mobilePaddingTop,
  pcPaddingBottom,
  tabletPaddingBottom,
  mobilePaddingBottom,
}) => {
  return (
    <StyledWidthImgOneTextsOne
      style={style}
      $pcPaddingTop={pcPaddingTop}
      $tabletPaddingTop={tabletPaddingTop}
      $mobilePaddingTop={mobilePaddingTop}
      $pcPaddingBottom={pcPaddingBottom}
      $tabletPaddingBottom={tabletPaddingBottom}
      $mobilePaddingBottom={mobilePaddingBottom}
    >
      {children}
    </StyledWidthImgOneTextsOne>
  );
};

export default WidthImgOneTextsOne;
