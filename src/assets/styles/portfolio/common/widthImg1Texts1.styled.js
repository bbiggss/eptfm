import styled from 'styled-components';

export const WidthImg1Texts1 = styled.div`
  display: flex;
  text-align: left;
  padding-bottom: 160px;
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
  .projectImg {
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

export const WidthImgOneTextsOne = styled.div`
  display: flex;
  text-align: left;
  padding-bottom: 160px;
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
  .projectImg {
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
