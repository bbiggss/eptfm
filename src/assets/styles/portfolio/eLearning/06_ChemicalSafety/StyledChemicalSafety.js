import styled from 'styled-components';

export const StyledChemicalSafety = styled.div`
  @media (min-width: 1200px) {
    .introductionWrapper {
      margin-bottom: 200px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    .introductionWrapper {
      margin-bottom: 100px;
    }
  }

  @media (min-width: 1025px) {
    .heroArea {
      position: relative;
      .introductionWrapper {
        white-space: nowrap;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        bottom: 0;
        p:first-child {
          font-size: clamp(10px, 2vw, 40px);
          line-height: clamp(10px, 2.9vw, 56px);
        }
        p:last-child {
          font-size: clamp(10px, 1.3vw, 26px);
          line-height: clamp(10px, 2vw, 40px);
        }
      }
    }
    .side1 {
      position: absolute;
      max-width: 790px;
      width: 41vw;
      z-index: -1;

      bottom: -267px;
    }
    .side2 {
      position: absolute;
      right: clamp(10px, 4vw, 78px);
      /* margin-right: clamp(10px, 4vw, 78px); */
      top: -168px;
    }
    .group2Area {
      background-color: rgba(131, 148, 188, 0.3);

      .nationFlag {
        width: 610px;
        padding-top: 160px;
        padding-bottom: 100px;

        /* display: grid; */
        /* grid-template-columns: repeat(5, auto); */
        gap: 0 20px;

        margin: 0 auto;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 60px 60px;
        width: 80%;
        img {
          width: 100%;
        }
      }

      .customPadding {
        padding-top: 60px;
        padding-bottom: 160px;
        p {
          color: #292929;
          font-size: 26px;
          line-height: 40px;
          letter-spacing: -0.02em;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .heroArea {
      position: relative;
    }
    .introductionWrapper {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      bottom: 0;
    }
    .side1 {
      position: absolute;
      width: 269px;
      top: -158px;
      left: -38px;
    }
    .side2 {
      display: none;
      /* position: absolute;
      right: 0;
      top: -100px; */
    }

    .group2Area {
      background-color: rgba(131, 148, 188, 0.3);

      .nationFlag {
        padding-top: 80px;
        padding-bottom: 60px;

        width: 315px;

        /* display: grid; */
        justify-content: center;
        /* grid-template-columns: repeat(5, auto); */
        gap: 0 10px;

        margin: 0 auto;
        img {
          width: 100%;
        }
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(1, auto);
        gap: 24px;
        width: 80%;
        img {
          width: 100%;
        }
      }

      .customPadding {
        padding-top: 24px;
        padding-bottom: 80px;
        p {
          color: #292929;
        }
      }
    }
  }
`;
