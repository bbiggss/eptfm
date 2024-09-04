import styled from 'styled-components';

export const StyledCivilTrial = styled.div`
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;
    .heroWrapper {
      margin-top: 80px;
      position: relative;
      width: 100%;
      .heroImgWrapper {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        .pc_introductionWrapper {
          position: absolute;
          height: 100%;

          padding-left: clamp(10px, 10vw, 130px);
          padding-right: clamp(10px, 10vw, 261px);
          background: rgba(34, 20, 14, 0.7);
          p:first-child {
            /* color: yellow; */
            /* line-height: 56px; */
            line-height: clamp(10px, 2.9vw, 56px);
          }
        }
        .heroImg {
          max-width: 1660px;
          width: 90%;
          aspect-ratio: 1660 / 800;
        }
      }
    }
    .heroTextsWrapper img {
      display: none;
    }
    .heroTextsWrapper {
      position: absolute;
      right: 0;
      width: 780px;
      /* height: 800px; */
      background: rgba(34, 20, 14, 0.7);
      .introductionWrapper {
        display: none;
      }
    }

    .introductionWrapper2 {
      display: flex;
      margin-top: 160px;
      margin-bottom: 160px;
      /* background-color: aqua; */

      .introductionImg {
        max-width: 900px;
        width: 46vw;
      }
      .alignCenter {
        display: flex;
        align-items: center;
        margin-left: clamp(10px, 5vw, 100px);
      }
    }
    .customMaxWidth img {
      max-width: 1100px;
    }
  }
  @media (max-width: 1024px) {
    .heroTextsWrapper {
      order: 2;
      position: relative;
      .introductionWrapper {
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .pc_introductionWrapper {
      display: none;
    }

    .heroWrapper {
      display: grid;
      width: 100%;
      .heroImgWrapper {
        order: 1;
        width: 100%;
        .heroImg {
          width: 100%;
          aspect-ratio: 1024 / 800;
        }
      }
    }

    .introductionWrapper2 {
      margin-top: 80px;
      margin-bottom: 80px;
      img {
        width: calc(100% - var(--mobile-margin));
      }
      .alignCenter {
        margin-top: 24px;
        text-align: center;
      }
    }
  }
`;
