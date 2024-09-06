import styled from 'styled-components';

export const StyledBuildingGreatCity = styled.div`
  @media (min-width: 1025px) {
    .heroWrapper {
      position: relative;
      max-width: 1920px;
      margin: auto;

      .introductionWrapper {
        margin-top: clamp(10px, 13vw, 168px);
        margin-left: clamp(100px, 17vw, 330px);
        position: absolute;
      }
      .satellite {
        position: absolute;
        right: clamp(10px, 5vw, 170px);
        top: -24px;
        width: clamp(10px, 15vw, 297px);
      }
    }

    .customTextWrapper {
      margin: 160px 0;
      text-align: center;
    }

    .customTag {
      background-color: rgba(115, 243, 236, 0.3);
      /* padding-top: 160px; */
      margin-bottom: 160px;

      img {
        max-width: 920px;
      }
    }
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      position: relative;
      text-align: center;
      .introductionWrapper {
        /* margin-top: clamp(86px, 7vh, 200px); */
        margin-top: 22vw;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      .satellite {
        position: absolute;
        right: 0;
        /* top: -7px; */
        top: -1.8vw;
        width: 26vw;
        aspect-ratio: 99 / 69;
      }
    }
    .customTextWrapper {
      margin: 21.33vw 0;
      text-align: center;
    }

    .customTag {
      background-color: rgba(115, 243, 236, 0.3);
      padding-top: 0px;
      margin-bottom: 21.33vw;
    }
  }
`;
