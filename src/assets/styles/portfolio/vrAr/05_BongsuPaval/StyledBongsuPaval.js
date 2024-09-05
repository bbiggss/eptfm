import styled from 'styled-components';

export const BongsuPavalBox = styled.div`
  max-width: 1920px;
  margin: auto;
  .top-row {
    display: flex;
  }

  @media (min-width: 1025px) {
    .introudctionWrapper {
      white-space: nowrap;
      .intro_title {
        font-family: 'NanumSquareEB';
        color: #000000;
        letter-spacing: -0.02em;
        /* font-size: clamp(22px, 5.87vw, 50px); */
        font-size: clamp(22px, 2.87vw, 50px);
        margin-bottom: 34px;
      }
      .intro_description {
        font-family: 'NanumSquareB';
        color: #767676;
        letter-spacing: -0.02em;

        /* font-size: clamp(16px, 4vw, 24px); */
        font-size: clamp(16px, 1.6vw, 24px);
        line-height: clamp(24px, 6vw, 32px);

        margin-bottom: 100px;
      }
    }

    .mobile_beaconCount {
      display: none;
    }
    .pc_beaconCount {
      display: block;
      width: 100%;
    }
    .heroWrapper {
      background-image: url(${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/main.png);
      background-size: cover; /* 또는 contain */
      aspect-ratio: 1920 /1240;
      width: 100%;
    }
    .beaconWrapper {
      margin-top: 80px;
      /* overflow: hidden; */
      .beacon {
        aspect-ratio: 338 / 858;
        max-width: 338px;
        width: 17vw;
        /* width: clamp(102px, 27.2vw, 280px); */
        margin-right: var(--mobile-margin-right-26px);
      }
      .introudctionWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* background-color: yellow; */
      }
      .beaconCount {
        margin-top: 50px;
        width: 100%;
      }
    }
    .textWrapper {
      margin: 160px 0;
    }

    .heroWrapper {
      width: 100%;
      /* position: relative; */

      .mainImg {
        position: relative;
        /* background-color: yellow; */
        img {
          position: absolute;
          left: 50%;
          /* transform: translateX(-50%); */
          z-index: -1;
        }
      }

      .divide {
        font-family: 'Roboto-Light';
      }
    }

    .projectDescriptions {
      margin-bottom: 160px;
      &:last-child {
        margin-bottom: 200px;
      }
    }
  }
  @media (max-width: 1024px) {
    .introudctionWrapper {
      white-space: nowrap;
      .intro_title {
        font-family: 'NanumSquareEB';
        color: #000000;
        letter-spacing: -0.02em;
        font-size: clamp(22px, 5.87vw, 50px);
        margin-bottom: 20px;
      }
      .intro_description {
        font-family: 'NanumSquareB';
        color: #767676;
        letter-spacing: -0.02em;

        font-size: clamp(16px, 4vw, 24px);
        line-height: clamp(24px, 6vw, 32px);
      }
    }

    .mobile_beaconCount {
      display: block;
      width: 100%;
      margin-top: 50px;
    }
    .pc_beaconCount {
      display: none;
    }
    .heroWrapper {
      background-image: url(${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/main_m.png);
      background-size: cover; /* 또는 contain */
      aspect-ratio: 375 / 746;
      width: 100%;
    }

    .beaconWrapper {
      margin: 0 var(--mobile-margin);
      margin-top: 50px;
      .beacon {
        aspect-ratio: 102 / 258;
        /* width: 102px; */
        width: clamp(102px, 27.2vw, 280px);
        /* margin-right: 26px; */
        margin-right: var(--mobile-margin-right-26px);
      }
      .introudctionWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* background-color: yellow; */
      }
      .beaconCount {
        margin-top: 50px;
        width: 100%;
      }
    }

    .textWrapper {
      margin: 80px 30px;
    }
    .projectDescriptions {
      /* margin: 0 30px; */
      margin-bottom: 80px;
      &:last-child {
        margin-bottom: 141px;
      }
    }
  }
`;
