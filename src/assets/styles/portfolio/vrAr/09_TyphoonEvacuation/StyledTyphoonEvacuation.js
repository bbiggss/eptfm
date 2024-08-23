import styled from 'styled-components';

export const StyledTyphoonEvacuation = styled.div`
  max-width: 1920px;
  margin: auto;
  .mainImgTexts {
    position: relative;
    img {
      width: 100%;
    }
  }

  .introductionWrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  @media (min-width: 1025px) {
    .textWrapper {
      padding-top: 160px;
      padding-bottom: 160px;
      text-align: center;
    }
  }
  @media (max-width: 1024px) {
    .textWrapper {
      padding: 80px 0;
      text-align: center;
    }
  }
`;
