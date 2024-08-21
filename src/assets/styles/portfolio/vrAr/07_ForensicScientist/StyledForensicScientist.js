import styled from 'styled-components';

export const StyledForensicScientist = styled.div`
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: 0 auto;
    width: 100%;
    .textCenter {
      margin-bottom: 80px;
    }
    .mainBackgroundImg {
      /* position: relative; */
      background-image: url(${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/main2.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      aspect-ratio: 1920 / 850;
      .powder {
        margin-top: 100px;
      }
    }
    .margin200 {
      margin-top: 200px;
      margin-bottom: 200px;
      margin-left: 800px;
      text-align: left;
    }
    .detailedDescription {
      position: relative;
      text-align: center;
      margin-bottom: 160px;
      /* background-color: yellow; */
      &:last-child {
        margin-bottom: 200px;
      }
      .left {
        position: absolute;
        left: 0;
        bottom: 510px;
      }
      .right {
        position: absolute;
        right: 0;
        top: -209px;

        .foot {
          img {
            display: block;

            &:last-child {
              position: absolute;
              right: 0;
              top: 409px;
            }
          }
        }
      }

      .projectImg {
        /* background-color: red; */
        margin-bottom: 60px;
      }
    }
    .introduction_text2_Wrapper {
      position: relative;
      aspect-ratio: 1920 / 160;
      margin-top: 298px;
      margin-bottom: 300px;
      /* background-color: yellow; */
    }
    .introduction_text2 {
      position: absolute;
      /* left: 41.67vw; */
      left: 45%;

      color: #767676;
      font-size: clamp(16px, 4vw, 24px);
      line-height: clamp(24px, 6vw, 32px);
    }
    .sideImgsWrapper {
      position: relative;

      .left {
        position: absolute;
        top: -700px;
        /* width: 892px; */
        width: clamp(475px, 40.46vw, 712px);
      }
      .right {
        position: absolute;
        right: 0;
        top: -250px;
        /* width: 138px; */
        width: clamp(226px, 21.98vw, 422px);
      }
    }

    .book {
      position: absolute;
      bottom: -200px;
    }
    .footsWrapper {
      position: relative;
    }
    .foots {
      position: absolute;
      /* right: -69px; */
      right: 0;
      top: -100px;
    }
    .blood {
      position: absolute;
      top: -147px;
    }
  }
  @media (max-width: 1024px) {
    .mainBackgroundImg {
      margin: 0 var(--mobile-margin);
    }
    .backgroundImg {
      display: none;
    }
    .powder {
      width: 100%;
    }
    .introduction_text2 {
      color: #767676;
      text-align: center;
      font-size: clamp(16px, 4vw, 24px);
      line-height: clamp(24px, 6vw, 32px);
      /* letter-spacing: -0.02em; */

      margin-top: 80px;
    }

    .sideImgsWrapper {
      position: relative;
      margin-top: 35px;

      .left {
        width: 294px;
        /* position: absolute; */
        /* left: 0; */
        /* bottom: 510px; */
      }
      .right {
        position: absolute;
        right: 0;
        bottom: -25px;
        width: 138px;
        /* display: none; */
      }
    }
    .relative {
      /* overflow: hidden; */
    }
    .book {
      /* width: 112px; */
      width: clamp(112px, 29.87vw, 306px);
      position: absolute;
      bottom: 10px;
    }
    .footsWrapper {
      position: relative;
      width: 100%;
    }
    .foots {
      position: absolute;
      right: 0;
      top: 91px;
      width: clamp(105px, 28vw, 287px);

      /* right: -69px; */

      /* transform: translateX(240px); */
      /* clip-path: inset(0 240px 0 0);  */
      /* top, right, bottom, left */
    }
    .blood {
      position: absolute;
      top: -147px;
      width: clamp(132px, 35.2vw, 360px);
    }
  }
`;
