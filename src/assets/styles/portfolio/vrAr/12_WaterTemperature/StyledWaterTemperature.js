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

        p:first-child {
          font-size: clamp(10px, 2vw, 40px);
        }
        p:last-child {
          font-size: clamp(10px, 1.3vw, 26px);
        }
      }
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
