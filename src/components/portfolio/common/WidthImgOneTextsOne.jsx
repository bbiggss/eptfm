import React from 'react';
import styled from 'styled-components';

const StyledWidthImgOneTextsOne = styled.div`
  position: relative;
  text-align: left;

  @media (min-width: 1501px) {
    .texts {
      font-size: 24px;
      line-height: 38px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1500px) {
    width: 100%;
    img {
      width: 50%;
    }
    .texts {
      width: 50%;
      font-size: 18px;
      line-height: 26px;
    }
  }

  @media (min-width: 1025px) {
    /* margin: 0 60px; */
    display: flex;
    .positionRight {
      margin-left: 100px;
    }
    .texts {
      width: 50%;
      display: flex;
      align-items: center;
      letter-spacing: -0.02em;

      color: #767676;
      white-space: nowrap;
    }
    padding-top: ${(props) => props.$pcPaddingTop};

    padding-bottom: ${(props) => {
      if (props.$pcPaddingBottom) return props.$pcPaddingBottom;
      return '160px';
    }};
  }

  @media (max-width: 1024px) {
    /* margin: 0 30px; */
    margin: 0 5vw;
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

      color: #767676;
      text-align: center;
      /* font-size: 16px; */
      font-size: clamp(16px, 4vw, 24px);
      /* font-size: 3vw; */
      /* line-height: 24px; */
      line-height: clamp(24px, 6vw, 32px);
      /* line-height: 5vw; */
      white-space: nowrap;
    }
    padding-top: ${(props) => props.$mobilePaddingTop};

    padding-bottom: ${(props) => {
      if (props.$mobilePaddingBottom) return props.$mobilePaddingBottom;
      return '80px';
    }};
  }

  /* @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: ${(props) => props.$tabletPaddingTop};

    .projectImg {
      width: 50%;
    }
  }
  @media (max-width: 767px) {
    padding-top: ${(props) => props.$mobilePaddingTop};
  } */
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
