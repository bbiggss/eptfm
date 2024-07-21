import styled from 'styled-components';
// import { portfolioBg2, portfolioBg3 } from '../../images';
const pc_pfFieldWidth = '380px';
const pfFieldMobileWidth = '98.6px';
const tablet_pfFieldWidth = '224px';

const tablet_PaddingLeft = '68px';

export const PortfolioBox = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/assets/images/main/portfolio_bg3.png);
  background-repeat: no-repeat;

  .englishFont,
  #portfolioText1 span {
    font-family: 'NanumSquareEB';
  }

  /* 영어폰트 */
  .pfFieldTag {
    font-family: 'Roboto-Medium';
  }
  /* 한글폰트 */
  #portfolioText1,
  #pc_portfolioText2,
  #portfolioText2 {
    font-family: 'NanumSquareR';
  }

  @media (min-width: 1025px) {
    width: 100%;
    overflow: hidden;

    #container {
      width: 100%;
      height: 1700px;

      #portfolioTexts {
        padding-left: 182px;
        padding-top: 306px;
        & #portfolioTitle {
          margin: 0;
          /* padding-top: 42px; */

          font-family: 'Roboto-Medium';
          font-size: 100px;
          letter-spacing: 0;
          color: #191919;
          padding-bottom: 50px;
        }

        & #portfolioText1 {
          margin: 0;
          font-size: 40px;
          color: #292929;
          font-weight: 500;
          text-align: left;
          padding-bottom: 46px;
        }

        & #portfolioText2 {
          display: none;
        }

        & #pc_portfolioText2 {
          font-family: 'NanumSquareR';
          font-size: 40px;
        }
      }

      #portfolioLinkImg {
        display: flex;
        justify-content: space-between;
        margin-top: 100px;
        #portfolioLink {
          padding-left: 182px;
          .pfFieldTag {
            height: 90px;
            line-height: 90px;

            margin-bottom: 26px;
            display: block;
            width: ${pc_pfFieldWidth};
            border: 1px solid #767676;
            border-radius: 45px;
            text-align: center;
            color: #767676;

            font-size: 26px;
          }
          .pfFieldTag:hover {
            background-color: #48c2c5;
            color: #ffffff;
          }
          a {
            display: block;
            width: ${pc_pfFieldWidth};
            text-decoration: none;
          }
        }

        #portfolioImgs {
          display: flex;
          position: relative;
          padding-top: 26px;
          .pfImgLeftBox {
            margin-top: 15px;
            img {
              width: 631px;
              position: relative;
              right: -200px;
              top: -469px;
            }
          }
          .pfImgRightBox {
            /* margin-bottom: 200px; */
            /* overflow: hidden; */
            img:nth-of-type(1) {
              width: 705px;
              position: relative;
              right: -200px;
              top: -469px;
            }
            img:nth-of-type(2) {
              width: 487px;
              position: relative;
              right: -200px;
              top: -469px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;

    #container {
      width: 100%;

      #portfolioTexts {
        padding-left: ${tablet_PaddingLeft};
        & #portfolioTitle {
          font-size: 32px;
          font-weight: 700;
          line-height: 38.73px;
          text-align: left;

          margin: 0;
          padding-top: 64px;
          font-family: 'Roboto-Medium';
          color: #191919;
        }

        & #portfolioText1 {
          font-size: 24px;
          font-weight: 500;
          line-height: 29.05px;
          text-align: left;

          margin: 0;
          margin-bottom: 16px;
        }

        & #pc_portfolioText2 {
          display: none;
        }

        & #portfolioText2 {
          font-size: 24px;
          font-weight: 500;
          line-height: 29.05px;
          text-align: left;
        }
      }

      #portfolioLinkImg {
        display: flex;
        justify-content: space-between;
        margin-top: 42px;
        #portfolioLink {
          padding-left: ${tablet_PaddingLeft};
          .pfFieldTag {
            font-size: 24px;
            font-weight: 600;

            height: 56px;
            line-height: 56px;

            margin-bottom: 24px;
            display: block;
            width: ${tablet_pfFieldWidth};
            border: 1px solid #767676;
            border-radius: 999px;
            text-align: center;
            color: #858585;
          }
          a {
            display: block;
            width: ${tablet_pfFieldWidth};
            text-decoration: none;
          }
        }

        #portfolioImgs {
          /* background-color: yellow; */
          display: flex;
          position: relative;
          padding-top: 0px;
          .pfImgLeftBox {
            margin-top: 15px;
            img {
              width: 290px;
            }
          }
          .pfImgRightBox {
            margin-bottom: 148px;
            overflow: hidden;
            img:nth-of-type(1) {
              width: 200px;
              position: relative;
              right: -15px;
            }
            img:nth-of-type(2) {
              width: 170px;
              position: relative;
              right: -15px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    width: 100%;

    #container {
      width: 100%;

      #portfolioTexts {
        padding-left: 32px;
        & #portfolioTitle {
          margin: 0;
          padding-top: 42px;
          font-family: 'Roboto-Medium';
          color: #191919;

          font-size: 20px;
          font-weight: 700;
          line-height: 24.2px;
          text-align: left;
        }

        & #portfolioText1 {
          margin: 0;
          margin-bottom: 8px;

          font-size: 12px;
          font-weight: 500;
          line-height: 14.52px;
          text-align: left;
        }

        & #pc_portfolioText2 {
          display: none;
        }

        & #portfolioText2 {
          font-size: 12px;
          font-weight: 500;
          line-height: 14.52px;
          text-align: left;
        }
      }

      #portfolioLinkImg {
        display: flex;
        justify-content: space-between;
        margin-top: 42px;
        #portfolioLink {
          padding-left: 32px;
          .pfFieldTag {
            height: 28px;
            line-height: 28px;

            margin-bottom: 24px;
            display: block;
            width: ${pfFieldMobileWidth};
            border: 1px solid #767676;
            border-radius: 25px;
            text-align: center;
            color: #858585;

            font-size: 12px;
            font-weight: 600;
          }
          a {
            display: block;
            width: ${pfFieldMobileWidth};
            text-decoration: none;
          }
        }

        #portfolioImgs {
          /* background-color: yellow; */
          display: flex;
          position: relative;
          padding-top: 26px;
          .pfImgLeftBox {
            margin-top: 15px;
            img {
              width: 113px;
              height: 123px;
            }
          }
          .pfImgRightBox {
            margin-bottom: 76px;
            overflow: hidden;
            img:nth-of-type(1) {
              width: 97px;
              height: 85px;
              position: relative;
              right: -5px;
            }
            img:nth-of-type(2) {
              width: 84px;
              height: 112px;
              position: relative;
              right: -5px;
            }
          }
        }
      }
    }
  }
`;
