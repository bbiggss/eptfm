import styled from 'styled-components';
import { portfolioBg2, portfolioBg3 } from '../../images';
const pfFieldPcWidth = '380px';
const pfFieldTabletWidth = '224px';
const pfFieldMobileWidth = '98.6px';

export const PortfolioBox = styled.div`
  background-image: url(${portfolioBg3});

  @media (min-width: 1025px) {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1920px;
    height: 1420px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: yellow;

    /* 영어폰트 */
    & #portfolioTexts h1,
    .pfFieldTag,
    .englishFont {
      font-family: 'Roboto-Medium';
    }
    /* 한글폰트 */
    & h2,
    #portfolioText2,
    #portfolioText1 {
      font-family: 'NanumSquareB';
    }

    & #container {
      /* padding: 100px 0; */
      display: flex;
      width: 100%;
      margin: 0;
    }
    & #portfolioTexts {
      width: 40%;
      padding-left: 182px;
      /* background-color: violet; */
    }
    & #portfolioTexts #portfolioTitle {
      font-size: 100px;
      color: #191919;
      margin: 0;
      margin-top: 306px;
    }
    & #portfolioText1 {
      margin: 0;
      font-size: 30px;
    }
    & #portfolioText2 {
      color: #858585;
      font-size: 20px;
      /* margin-bottom: 50px; */
    }

    & .pfFieldTag {
      margin-bottom: 10px;
      display: block;
      width: ${pfFieldPcWidth};
      border: 1px solid #858585;
      border-radius: 25px;
      text-align: center;
      padding: 15px 0;
      color: #858585;
    }
    & a {
      display: block;
      width: ${pfFieldPcWidth};
      text-decoration: none;
    }

    & #portfolioImgs {
      width: 60%;
      display: flex;
      /* background-image: url(${portfolioBg2});
    background-size: 56%;
    background-repeat: no-repeat; */
    }
    & .pfImgLeftBox {
      width: 50%;
    }
    & .pfImgLeftBox img {
      position: relative;
      top: 5%;
      left: 9%;
      width: 500px;
    }
    & .pfImgRightBox {
      width: 50%;
      overflow: hidden;
      & img:first-child {
        height: 462px;
      }
      & img:last-child {
        width: 450px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 445px;
    overflow: hidden;

    #container {
      width: 100%;
      display: flex;
      
      #portfolioTexts {
        padding-left: 32px;
        & #portfolioTitle {
          font-size: 20px;
          line-height: 24.2px;
          color: #000000;
          font-weight: 700;

          margin: 0;
          padding-top: 42px;
        }
        & #portfolioText1 {
          font-size: 12px;
          font-weight: 500;
          line-height: 14.52px;
          text-align: left;

          margin: 0;

          span {
            font-family: Inter;
            font-size: 12px;
            font-weight: 700;
            line-height: 14.52px;
            text-align: left;
          }
        }
        & #portfolioText2 {
          font-family: Inter;
          font-size: 12px;
          font-weight: 500;
          line-height: 14.52px;
          text-align: left;
          margin-bottom: 42px;
        }

        & #portfolioLink a {
          display: block;
          width: {pfFieldMobileWidth};
          text-decoration: none;
        }
        & #portfolioLink .pfFieldTag {
          margin-bottom: 10px;
          display: block;
          width: ${pfFieldMobileWidth};
          border: 1px solid #858585;
          border-radius: 25px;
          text-align: center;
          padding: 15px 0;
          color: #858585;

          font-size: 12px;
          font-weight: 600;
          line-height: 12px;
        }
      }

      #portfolioImgs {
      width: 100px;
      display: flex;
      align-items: flex-end;
      
        & .pfImgLeftBox {
          width: 50%;
        }
        & .pfImgLeftBox img {
          position: relative;
          top: 5%;
          left: 9%;
          width: 50px;
        }
        & .pfImgRightBox {
          width: 50%;
          & img:first-child {
            height: 46px;
          }
          & img:last-child {
            width: 40px;
          }
        }
      }


    }
  }
`;
