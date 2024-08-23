import styled from 'styled-components';

export const StyledMayor = styled.div`
  @media (min-width: 1025px) {
    .ellipseWrapper {
      position: relative;
      .ellipse_left {
        position: absolute;
        z-index: -1;
        width: 56vw;
      }
      .ellipse_right {
        z-index: -1;
        position: absolute;
        right: 0;
      }
    }
    .heroAreaWrapper {
      display: flex;
      justify-content: center;
      .heroTexts {
        /* background-color: yellow; */
        /* margin-right: 91px; */
      }
      .heroImg {
        img {
          max-width: 442px;
          width: 23vw;
          margin-bottom: 160px;
        }
      }
    }

    .introductionWrapper {
      background-color: #2c427a;
      width: 100%;
      /* display: flex; */
      /* justify-content: center; */
      height: 350px;
      position: relative;

      .megaphone {
        margin-right: 54px;
        max-width: 544px;
        width: 28vw;
        position: absolute;
        bottom: 0;
        /* margin-left: 294px; */

        /* position: relative;
        transform: translateY(-180px); */
      }

      .introTextsWrapper {
        position: absolute;
        right: 0;
        /* margin-right: 330px; */
        margin-right: clamp(10px, 15vw, 330px);
        top: 50%;
        transform: translateY(-50%);
        p {
          color: #ffffff;
        }
      }
    }
    .fourElement {
      width: 80%;
      margin: 160px auto;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(4, auto);
      gap: 122px;
      /* width: 80%; */

      li {
        list-style: none;
        text-align: center;
        img {
          max-width: 204px;
          width: 100%;
          margin-bottom: 24px;
        }
      }
      p {
        font-family: 'NanumSquareB';
        color: #767676;
        letter-spacing: -0.02em;
        line-height: 38px;
        /* font-size: 24px; */
        font-size: clamp(16px, 1.5vw, 24px);
      }
    }
    .AC9EFF {
      background-color: rgba(172, 158, 255, 0.2);
      margin-bottom: 160px;
    }
  }
  @media (min-width: 1401px) {
    .megaphone {
      margin-left: clamp(10px, 15vw, 294px);
    }
    .heroTexts {
      /* background-color: yellow; */
      margin-right: 91px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1400px) {
    .megaphone {
      /* margin-left: clamp(10px, 15vw, 294px); */
      margin-left: 10px;
    }
  }
  @media (max-width: 1024px) {
    .ellipseWrapper {
      position: relative;
      .ellipse_left {
        position: absolute;
        z-index: -1;
      }
      .ellipse_right {
        position: absolute;
        right: 0;
        z-index: -1;
      }
    }

    .heroAreaWrapper {
      display: grid;
      .heroTexts {
        order: 2;
        text-align: center;
        margin-bottom: 80px;
      }
      .heroImg {
        order: 1;
        text-align: center;
        img {
          min-width: 204px;
          width: 50vw;
        }
      }
    }
    .introductionWrapper {
      background-color: #2c427a;
      text-align: center;
      display: grid;
      /* justify-content: center; */
      /* height: 350px; */

      .megaphone {
        order: 2;
        /* width: 166px; */
        width: 44vw;
      }

      .introTextsWrapper {
        order: 1;
        margin-top: 80px;
        margin-bottom: 25px;
        p {
          color: #ffffff;
          /* font-size: 20px; */
        }
      }
    }

    .fourElement {
      margin: 80px 0;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, auto);
      gap: 50px;
      width: 100%;
      /* margin: 0 var(--mobile-margin); */
      /* margin-bottom: 160px; */

      li {
        list-style: none;
        text-align: center;
        img {
          /* width: 112px; */
          width: 30vw;
          margin-bottom: 24px;
        }
      }
      p {
        font-family: 'NanumSquareB';
        color: #767676;
        /* font-size: 16px; */
        font-size: clamp(16px, 4vw, 24px);

        line-height: 24px;
        letter-spacing: -0.02em;
      }
    }
    .AC9EFF {
      background-color: rgba(172, 158, 255, 0.2);
      padding-top: 100px;
      margin-bottom: 80px;
    }
  }
`;
