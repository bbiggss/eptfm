import React from 'react';
import styled from 'styled-components';

const StyledWidthImgOneTextsOne = styled.div`
  position: relative;
  text-align: left;

  @media (min-width: 1025px) {
    .positionRight {
      margin-left: clamp(50px, 5.2vw, 100px);
    }

    /* margin: 0 60px; */
    display: flex;
    .texts {
      width: 50%;
      display: flex;
      align-items: center;
      letter-spacing: -0.02em;
      color: #767676;
      white-space: nowrap;

      font-size: var(--pc-font-size-24px);
      line-height: var(--pc-line-height-38px);
    }
    padding-top: ${(props) => props.$pcPaddingTop};

    padding-bottom: ${(props) => {
      if (props.$pcPaddingBottom) return props.$pcPaddingBottom;
      return 'var(--pc-margin-160px)';
    }};
  }

  @media (max-width: 1024px) {
    /* margin: 0 30px; */
    margin: 0 var(--mobile-margin);
    display: grid;
    img {
      width: 100%;
      order: 1;
      /* margin-bottom: 24px; */
      margin-bottom: clamp(24px, 6vw, 48px);
    }
    .texts {
      order: 2;
      width: 100%;
      white-space: nowrap;

      color: #767676;
      text-align: center;

      font-size: var(--mobile-font-size-16px);
      line-height: var(--mobile-line-height-24px);
    }
    padding-top: ${(props) => props.$mobilePaddingTop};

    padding-bottom: ${(props) => {
      if (props.$mobilePaddingBottom) return props.$mobilePaddingBottom;
      // return '80px';
      return '21.33vw';
    }};
  }

  /* @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: ${(props) => props.$tabletPaddingTop};

  }
  @media (max-width: 767px) {
    padding-top: ${(props) => props.$mobilePaddingTop};
  } */
`;

const WidthImgOneTextsOne = ({ children, style, pcPaddingTop, tabletPaddingTop, mobilePaddingTop, pcPaddingBottom, mobilePaddingBottom }) => {
  return (
    <StyledWidthImgOneTextsOne
      style={style}
      $pcPaddingTop={pcPaddingTop}
      $tabletPaddingTop={tabletPaddingTop}
      $mobilePaddingTop={mobilePaddingTop}
      $pcPaddingBottom={pcPaddingBottom}
      $mobilePaddingBottom={mobilePaddingBottom}
    >
      {children}
    </StyledWidthImgOneTextsOne>
  );
};

export default WidthImgOneTextsOne;
