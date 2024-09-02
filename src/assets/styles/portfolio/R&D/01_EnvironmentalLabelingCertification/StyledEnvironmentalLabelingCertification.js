import styled from 'styled-components';

export const StyledEnvironmentalLabelingCertification = styled.div`
  .heroImgWrapper {
    display: grid;
  }
  @media (min-width: 1025px) and (max-width: 1500px) {
    .customRight p,
    .customLeft p {
      /* color: yellow; */
      font-size: 13px;
      line-height: 20px;
    }
  }

  @media (min-width: 1025px) {
    .customLeftTemp {
      position: relative;
      left: -78px;
    }
    .customRight,
    .customLeft {
      padding-bottom: 160px;
    }
    .customLeft {
      position: relative;
      left: -78px;
    }
    .customRight {
      position: relative;
      left: 120px;
    }

    .threeImgs {
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: 48px;

      margin-bottom: 60px;
      img {
        max-width: 416px;
        width: 21vw;
        border: 1px solid #ededed;
      }
    }
    .start {
      justify-content: start;
    }
    .end {
      justify-content: end;
    }

    .heroImgWrapper {
      aspect-ratio: 1920 / 1080;
    }
    .heroImg {
      width: 100%;
    }
    .F5F5F7 {
      background-color: #f5f5f7;
      padding-bottom: 110px;
    }

    .FFFFFF {
      background-color: #ffffff;
      text-align: center;
      padding-top: 160px;

      max-width: 1400px;
      width: 72vw;

      margin: 0 auto;
      transform: translateY(-90px);

      .introductionImgs {
        max-width: 960px;
        width: 80%;
        margin-bottom: 160px;
      }
    }
  }
  @media (max-width: 1024px) {
    .heroImgWrapper {
      aspect-ratio: 375 / 450;
    }

    .F5F5F7 {
      background-color: #f5f5f7;
      padding-bottom: 92px;
      /* 122-30 */

      .FFFFFF {
        background-color: #ffffff;
        /* background-color: beige; */
        transform: translateY(-30px);
        text-align: center;
        margin: 0 2.6vw;

        .introductionWrapper {
          text-align: center;
          padding-top: 80px;
        }
        .introductionImgs {
          min-width: 315px;
          width: 84vw;

          margin-bottom: 80px;
        }
        .customLeftTemp {
          div:first-child {
            margin: 0;
          }
          img {
            min-width: 345px;
            width: 92vw;
            transform: translateX(-2.6vw);
          }
        }
        .threeImgs {
          display: flex;
          flex-direction: column;
          align-items: center;

          margin-bottom: 24px;
          img {
            border: 1px solid #ededed;
            box-sizing: border-box;
            min-width: 200px;
            width: 53vw;
          }
          img:nth-child(2) {
            /* margin: 10px; */
            margin: 24px 0;
          }
        }
        .customRight,
        .customLeft {
          margin-bottom: 80px;
        }
        .last {
          padding-bottom: 80px;
        }
      }
    }
  }
`;
