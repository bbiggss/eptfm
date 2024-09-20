import React from 'react';
import styled from 'styled-components';

const StyledWidthImgOneTextsOne = styled.div`
  position: relative;
  text-align: left;

  @media (min-width: 1025px) {
    /* 삭제예정 */
    .positionRight {
      margin-left: clamp(50px, 5.2vw, 100px);
    }

    /* margin: 0 60px; */
    /* display: flex;
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
    padding-bottom: ${(props) => {
      if (props.$pcPaddingBottom) return props.$pcPaddingBottom;
      return 'var(--pc-160px)';
    }}; */

    /* --- */
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: ${(props) => {
      if (props.$imgRight) return 'space-between';
      return 'start';
    }};
    gap: var(--pc-100px);

    /* img {
      max-width: 700px;
      width: 36.4vw;
    } */
    p {
      display: grid;
      align-items: center;
    }
    padding-top: ${(props) => props.$pcPaddingTop};
    margin: auto;
    margin-bottom: ${(props) => {
      if (props.$last) return 'var(--pc-200px)';
      return 'var(--pc-160px)';
    }};

    max-width: ${(props) => {
      if (props.$pcMaxWidth) return '1260px';
    }};
    width: ${(props) => {
      if (props.$pcMaxWidth) return (props.$pcMaxWidth / 1920) * 100 + 'vw';
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
      margin-bottom: var(--mobile-24px);
    }

    /* 삭제예정 */
    .texts {
      order: 2;
      width: 100%;
      white-space: nowrap;

      color: #767676;
      text-align: center;

      font-size: var(--mobile-content-common-font-size);
      line-height: var(--mobile-content-common-line-height);
    }

    p {
      order: 2;
      text-align: center;
    }
    padding-top: ${(props) => props.$mobilePaddingTop};

    margin-bottom: ${(props) => {
      if (props.$last) return 'var(--mobile-142px)';
      return 'var(--mobile-80px)';
    }};
  }
`;

const WidthImgOneTextsOne = ({ children, style, pcPaddingTop, tabletPaddingTop, mobilePaddingTop, imgRight, last, pcMaxWidth }) => {
  return (
    <StyledWidthImgOneTextsOne
      style={style}
      $pcPaddingTop={pcPaddingTop}
      $tabletPaddingTop={tabletPaddingTop}
      $mobilePaddingTop={mobilePaddingTop}
      $imgRight={imgRight}
      $last={last}
      $pcMaxWidth={pcMaxWidth}
      $
    >
      {children}
    </StyledWidthImgOneTextsOne>
  );
};

export default WidthImgOneTextsOne;
