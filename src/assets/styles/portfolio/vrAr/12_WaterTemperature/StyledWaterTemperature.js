import styled from 'styled-components';

export const StyledWaterTemperatureSalinityExploration = styled.div`
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;

    .mainImgContainer {
      margin-bottom: 200px;
      .rectangular {
        z-index: 1;
        position: absolute;
        right: 0;
        bottom: -19px;
        /* margin-right: 259px; */
        margin-right: clamp(100px, 13vw, 259px);

        .PortfolioIntroductionBox {
          .title,
          .subTexts {
            color: #1e4f91;
          }
        }
      }
    }
    .right {
      position: ab;
      right: 0;
    }

    .title,
    .subTexts {
      color: white;
    }
    .fullScreen img {
      width: 100%;
    }

    .dolphin {
      max-width: 905px;
    }
  }
  @media (max-width: 1024px) {
    .rectangular {
      text-align: center;
    }
    .dolphin {
      margin-top: 80px;
    }
  }
`;
