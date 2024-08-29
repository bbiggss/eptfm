import styled from 'styled-components';

export const StyledCyberSocializingTwo = styled.div`
  @media (min-width: 1025px) {
    .PortfolioTitleBox {
      margin-bottom: 41px;
    }
    .heroArea {
      .PortfolioIntroductionBox {
        position: absolute;
        margin-left: 459px;
        margin-top: 194px;
        text-align: center;

        .title {
          color: #4f4f4f;
        }
      }
    }

    .book {
      position: absolute;
      left: -337px;
      bottom: -135px;
    }

    .cloud {
      position: absolute;
      right: 81px;
      bottom: -395px;
    }

    .books {
      position: absolute;
      right: -231px;
      top: -273px;
      z-index: -1;
    }
    .cloudPaperPlane {
      position: absolute;
      left: -330px;
      top: -241px;
      z-index: -1;
    }
    /* -- */
    .gridWrapper {
      position: relative;
      .introductionWrapper {
        position: absolute;
        margin-top: 194px;
        margin-left: 459px;
      }
    }
  }
  @media (max-width: 1024px) {
    .gridWrapper {
      display: grid;
      position: relative;
      img {
        order: 1;
      }
      .introductionWrapper {
        order: 2;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        bottom: -150px;
      }
    }
    .cloud {
      position: absolute;
      width: 141px;
      right: 0;
      bottom: -162px;
      z-index: -1;
    }
    .book,
    .books,
    .cloudPaperPlane {
      display: none;
    }
  }
`;
