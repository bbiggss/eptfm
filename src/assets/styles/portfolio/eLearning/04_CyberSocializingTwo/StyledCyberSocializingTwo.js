import styled from 'styled-components';

export const StyledCyberSocializingTwo = styled.div`
  @media (min-width: 1025px) {
    /* max-width: 1920px;
    margin: auto; */
    .gridWrapper {
      max-width: 1920px;
      margin: auto;
    }
    .PortfolioTitleBox {
      margin-bottom: 41px;
    }

    .book {
      position: absolute;
      left: 50px;
      bottom: clamp(-135px, -7vw, -80px);

      max-width: 475px;
      width: 24.7vw;
    }

    .cloud {
      position: absolute;
      right: 81px;
      bottom: clamp(-395px, -20vw, -100px);

      max-width: 580px;
      width: 30vw;
    }

    .books {
      position: absolute;
      right: 0;
      /* top: -273px; */
      z-index: -1;

      max-width: 400px;
      width: 20vw;
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
        /* margin-left: 459px; */
        margin-left: clamp(10px, 23vw, 459px);
      }
    }
    .contentsWrapper {
      position: relative;
      div {
        max-width: 1260px;
        width: var(--pc-1260px);
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
      bottom: -123px;
      z-index: -1;
    }
    .book,
    .books,
    .cloudPaperPlane {
      display: none;
    }

    .topCloud {
      /* display: grid; */
      position: absolute;
      right: 0;

      width: 117px;
      top: -52px;
      z-index: -1;
    }
    .heroWrapper {
      margin-top: 93px;
    }
  }
`;
