import styled from 'styled-components';

export const StyledFrenchClimateLifestyle = styled.div`
  @media (min-width: 1025px) {
    .textsImgswrapper {
      max-width: 1920px;
      margin: auto;

      .TextWrapper {
        margin-top: 200px;
        margin-bottom: 100px;
        text-align: center;
      }

      .group1_Wrapper {
        margin-bottom: 200px;
        position: relative;
        width: 100%;
        .group1_1_img {
          width: 100%;
        }
        .group1_2_img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .heroWrapper {
      max-width: 1920px;
      margin: auto;
      display: flex;
      .left,
      .right {
        width: 50%;
      }
      .right {
        display: grid;
        justify-content: center;
        /* background-color: yellow; */
        .introductionWrapper {
          order: 1;
        }
        .monetImg {
          order: 2;
          /* width: 312px; */
          max-width: 312px;
          width: 16vw;
          margin-left: 114px;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .monetImg {
      text-align: center;
      width: 100%;
      position: relative;
      top: 0;
      transform: translateY(-83px);
      margin-bottom: -83px;
      img {
        width: 50vw;
      }
    }
    .introductionWrapper {
      text-align: center;
    }
    .textsImgswrapper {
      max-width: 1920px;
      margin: auto;
      display: grid;

      .TextWrapper {
        order: 2;
        margin-top: 24px;
        margin-bottom: 100px;
        text-align: center;
      }

      .group1_Wrapper {
        order: 1;
        margin-top: 80px;
        position: relative;
        width: 100%;
        .group1_1_img {
          width: 100%;
        }
        .group1_2_img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          /* width: 49px; */
          width: 13vw;
        }
      }
    }
  }
`;
