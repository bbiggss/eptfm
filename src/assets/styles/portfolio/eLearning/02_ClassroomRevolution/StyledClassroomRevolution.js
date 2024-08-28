import styled from 'styled-components';

export const StyledClassroomRevolution = styled.div`
  .ellipseWrapper {
    position: relative;
  }
  @media (min-width: 1501px) {
    .intro_imgs_Wrapper {
      padding-top: 500px;
      padding-bottom: 465px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1500px) {
    .intro_imgs_Wrapper {
      padding-top: 300px;
      padding-bottom: 265px;
    }
  }

  @media (min-width: 1025px) {
    .heroArea {
      max-width: 1920px;
      position: relative;
      .ellipse1,
      .ellipse2 {
        position: absolute;
        z-index: -1;
        width: 100%;
      }
      .ellipse2 {
        right: 0;
      }

      /* .ellipseContainer {
        z-index: -1;
        .ellipse {
          position: absolute;
          width: 1400px;
          height: 1400px;

          background-image: radial-gradient(circle, #50dfff, #68e9f9, #9effec);
          filter: blur(10px); 
          블러 효과
          border-radius: 50%; 
          원형 또는 타원형으로 설정
          opacity: 0.5;
          top: -50%;
          left: -50%;
        }
      } */
    }

    .area2 {
      background-color: #30bbc7;

      .customTextWrapper {
        padding-top: 200px;
        padding-bottom: 160px;
        p {
          text-align: center;
          color: #ffffff;
        }
      }
      .customPaddingTop21 {
        padding-top: 60px;
      }
    }

    .doubleImgWrapper {
      max-width: 1260px;
      width: 90%;
      /* background-color: yellow; */
      /* display: flex; */
      margin-bottom: 60px;
      img {
        width: calc(50% - 20px);
      }

      img + img {
        margin-left: 40px;
      }
    }

    /* ------ */
    .intro_imgs_Wrapper {
      position: relative;
      .introductionWrapper {
        /* margin-left: 830px; */
        display: grid;
        justify-content: end;
        margin-right: clamp(100px, 11vw, 218px);
      }

      .hero1,
      .hero2 {
        position: absolute;
        bottom: 0;
      }
      .hero1 {
        max-width: 535px;
        width: 27vw;
        margin-left: clamp(50px, 17vw, 330px);
        transform: translateY(70px);
      }
      .hero2 {
        max-width: 593px;
        width: 30vw;
        /* width: 167px; */
        right: 0;
        margin-right: clamp(50px, 11vw, 218px);
        transform: translateY(47px);
      }
    }
    .customMaxHeight1080 img {
      max-width: 1080px;
    }
  }
  @media (max-width: 1024px) {
    .heroArea {
      width: 100%;
      position: relative;

      .ellipse1,
      .ellipse2 {
        position: absolute;
        width: 100vw;
      }
      .ellipse1 {
      }
      .ellipse2 {
        right: 0;
        /* height: 100%; */
      }

      .intro_imgs_Wrapper {
        padding-bottom: 189px;
        position: relative;
        .introductionWrapper {
          display: grid;
          justify-content: end;
          margin-right: 31px;
        }

        .hero1,
        .hero2 {
          position: absolute;
          bottom: 0;
        }
        .hero1 {
          min-width: 216px;
          width: 40vw;
          transform: translateY(26px);
        }
        .hero2 {
          min-width: 167px;
          width: 30vw;
          right: 0;
          transform: translateY(11px);
        }
      }
    }
    .area2 {
      background-color: #30bbc7;

      .customTextWrapper {
        padding-top: 90px;
        padding-bottom: 80px;
        p {
          text-align: center;
          color: #ffffff;
        }
      }
      .customPaddingTop21 {
        padding-top: 21px;
      }
    }
    .doubleImgWrapper {
      margin: 0 var(--mobile-margin);
      img {
        width: 100%;
      }
      img:last-child {
        margin-top: 24px;
        margin-bottom: 21px;
      }
    }
  }

  @media (min-width: 551px) and (max-width: 1024px) {
    .intro_imgs_Wrapper {
      padding-top: 206px;
    }
  }
  @media (max-width: 550px) {
    .intro_imgs_Wrapper {
      padding-top: 152px;
    }
  }
`;
