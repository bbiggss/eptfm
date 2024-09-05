import styled from 'styled-components';
// import { portfolioBg2, portfolioBg3 } from '../../images';

export const StyledMainPortfolio = styled.div`
  .englishFont,
  #portfolioText1 span {
    font-family: 'NanumSquareEB';
  }

  /* 한글폰트 */
  #portfolioText1,
  #pc_portfolioText2,
  #portfolioText2 {
    font-family: 'NanumSquareR';
    color: #292929;
  }

  @media (min-width: 1401px) {
    #portfolioImgs {
      margin-top: 188px;
    }
    .dinosaur {
      max-width: 631px;
      width: 32vw;
      margin-top: 84px;
    }
    .widthTablet {
      max-width: 612px;
      width: 31vw;
    }
    .heightTablet {
      max-width: 527px;
      width: 27vw;
      /* position: absolute; */
      /* display: none; */
    }
    #portfolioLinkImg {
      margin-bottom: 630px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1400px) {
    #portfolioImgs {
      margin-top: 300px;
    }
    .dinosaur {
      width: 26vw;
      margin-top: 84px;
    }
    .widthTablet {
      width: 25vw;
    }
    .heightTablet {
      width: 21vw;
    }
    #portfolioLinkImg {
      margin-bottom: 430px;
    }
  }

  @media (min-width: 1025px) {
    background-image: url(${process.env.PUBLIC_URL}/assets/images/main/portfolio_bg3.png);
    background-repeat: no-repeat;
    width: 100%;
    max-width: 1920px;
    position: relative;

    #portfolioTexts {
      position: relative;
      & #portfolioTitle {
        font-family: 'Roboto-Medium';
        color: #191919;
        font-size: 100px;
        text-align: left;

        padding-top: 284px;
        padding-bottom: 24px;
      }

      & #portfolioText1 {
        font-size: 40px;
        text-align: left;
        margin-bottom: 36px;
      }

      & #portfolioText2 {
        line-height: 36px;
        font-size: 26px;
        text-align: left;
      }
    }
    /* - */
    .marginWrapper {
      width: 80%;
      max-width: 1920px;
      margin: auto;
    }
    #portfolioImgs {
      display: flex;
      align-items: flex-start;

      position: absolute;
      right: 0;
    }
    #portfolioLinkImg {
      display: inline-block;
      margin-top: 98px;
    }
  }

  @media (max-width: 1024px) {
    #portfolioTexts {
      position: relative;
      & #portfolioTitle {
        font-family: 'Roboto-Medium';
        color: #191919;
        font-size: clamp(36px, 9.6vw, 100px);
        text-align: left;
      }

      & #portfolioText1 {
        font-size: clamp(20px, 5.3vw, 100px);
        font-weight: 400;
        text-align: left;
      }

      & #portfolioText2 {
        font-size: clamp(16px, 4.2vw, 100px);
        line-height: clamp(24px, 6.4vw, 50vw);
        text-align: left;
      }
    }

    #portfolioLinkImg {
      /* margin-top: 60px; */
      margin-top: 16vw;
      margin-bottom: 134px;
      width: 100%;
    }
    /* - */
    .marginWrapper {
      padding: 0 var(--mobile-margin);
    }
    #portfolioImgs {
      position: relative;
      .dinosaur {
        position: absolute;
        right: 0;
        margin-top: 70px;
        min-width: 125px;
        width: 26vw;
      }
      .pfImgRightBox {
        display: none;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${process.env.PUBLIC_URL}/assets/images/main/portfolio_bg_m.png);
    background-repeat: no-repeat;
    background-size: contain;
    #portfolioTitle {
      padding-top: 160px;
      margin-bottom: 100px;
    }
    #portfolioText1 {
      margin-bottom: 30px;
    }
    #portfolioLinkImg {
      /* margin-top: 200px; */
    }
    #portfolioLinkImg {
      .pfFieldTag {
        height: 120px;
        line-height: 120px;
        margin-bottom: 30px;
      }
    }
  }
  @media (max-width: 767px) {
    background-image: url(${process.env.PUBLIC_URL}/assets/images/main/portfolio_bg_m.png);
    background-repeat: no-repeat;
    background-size: cover;
    #portfolioTitle {
      padding-top: 80px;
      margin-bottom: 30px;
    }
    #portfolioText1 {
      margin-bottom: 10px;
    }
    #portfolioLinkImg {
      /* margin-top: 150px; */
    }
  }
`;
