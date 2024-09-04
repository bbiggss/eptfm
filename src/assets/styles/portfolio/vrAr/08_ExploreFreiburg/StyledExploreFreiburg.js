import styled from 'styled-components';

export const StyledExploreFreiburg = styled.div`
  .fff6df {
    background-color: #fff6df;
  }
  .wrapper {
    display: flex;
  }
  .main2 {
    max-width: 1260px;
    width: 100%;
  }

  @media (min-width: 1900px) {
    .bicycleGirl {
      position: absolute;
      right: 152px;
      top: -27px;
      /* width: 20vw; */
    }
    .topText {
      text-align: center;
      color: #292929;
      font-size: 28px;
      padding-top: 160px;
      padding-bottom: 100px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1900px) {
    .bicycleGirl {
      position: absolute;
      right: 20px;
      top: -27px;
      width: 20vw;
    }
    .topText {
      text-align: center;
      color: #292929;
      font-size: 18px;
      padding-top: 100px;
      padding-bottom: 100px;
    }
  }

  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;
    .heroWrapper {
      text-align: center;
      margin-top: 88px;
      margin-bottom: 52px;
    }
    .sideImgWrapper {
      position: relative;
      z-index: -1;
      .yellowCharacter {
        position: absolute;
        left: 79px;
        bottom: 50px;
        width: 20vw;
        max-width: 280px;
      }
      .skyblueCharacter {
        position: absolute;
        right: 0;
        top: 101px;
        width: 20vw;
        max-width: 313px;
      }
      .greenCharacter {
        position: absolute;
        left: 79px;
        bottom: 255px;
        width: 20vw;
        max-width: 313px;
      }
    }

    .customMaxWidth785 img {
      max-width: 785px;
    }
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      margin: 0 var(--mobile-margin);
      margin-top: 50px;
      margin-bottom: 20px;
    }
    .topText {
      color: #292929;
      text-align: center;
      font-size: 18px;
      line-height: 26px;

      padding-bottom: 80px;
    }
    .fff6df {
      text-align: center;
      .bicycleGirl {
        min-width: 153px;
        width: 40vw;
        margin: 0 auto;
        margin-top: 80px;
        margin-bottom: 24px;
      }
    }
    .sideImgWrapper {
      position: relative;
      z-index: -1;
      .yellowCharacter {
        position: absolute;
        left: 32px;
        bottom: 8px;
        width: 20vw;
        max-width: 280px;
      }
      .skyblueCharacter {
        position: absolute;
        right: 14px;
        top: 293px;
        width: 30vw;
        max-width: 313px;
      }
      .greenCharacter {
        position: absolute;
        left: -6px;
        bottom: 0;
        width: 30vw;
        max-width: 313px;
      }
    }
  }
`;
