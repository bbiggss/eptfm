import styled from 'styled-components';
const portfolioImgWidth = '480px';
const mobile_PortfolioImgWidth = '315px';
export const PortfolioListBox = styled.div`
  .pageTitle,
  .fieldTitle {
    text-align: center;
  }

  .pageTitle {
    color: #191919;
  }
  .fieldTitle {
    color: #292929;
  }

  @media (min-width: 1025px) {
    max-width: 1920px;
    width: 100%;
    margin: auto;

    .topTitleBox {
      height: 390px; // 490 - 헤더(100) = 390

      .pageTitle {
        font-size: 100px;

        padding-top: 80px;
        padding-bottom: 20px;
      }

      .fieldTitle {
        font-size: 46px;
      }
    }

    ul {
      display: grid;
      justify-content: center;
      /* grid-template-columns: auto auto auto; */
      grid-template-columns: repeat(3, ${portfolioImgWidth});
      gap: 80px 58px;
      /* 앞: 상하간격 뒤: 좌우간격 */
      padding: 0;
      padding-bottom: 200px;

      li {
        list-style: none;
        /* width: 400px;
      height: 382px; */
        /* background-color: yellow; */
        /* overflow: hidden; //추후수정 */

        & .thumbnail img {
          /* height: 100%; */
          width: ${portfolioImgWidth};
          height: 270px;
        }
        & .thumbnailTexts {
          height: 100px;
          font-weight: bold;
          padding-left: 30px;

          & p:first-child {
            font-size: 18px;
            letter-spacing: 0;
            color: #999999;
            padding-top: 26px;
            padding-bottom: 20px;
          }
          & p:last-child {
            font-size: 28px;
            letter-spacing: -2%;
            line-height: 34px;
            color: #292929;
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .topTitleBox {
      height: 180px;

      .pageTitle {
        font-size: 36px;

        padding-top: 50px;
        padding-bottom: 10px;
      }

      .fieldTitle {
        font-size: 24px;
      }
    }

    ul {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(1, ${mobile_PortfolioImgWidth});
      gap: 50px 0px;
      /* 앞: 상하간격 뒤: 좌우간격 */
      margin-bottom: 142px;

      li {
        list-style: none;

        & .thumbnail img {
          width: ${mobile_PortfolioImgWidth};
          height: 177px;
        }
        & .thumbnailTexts {
          & p:first-child {
            color: #999999;
            font-size: 12px;
            line-height: 24px;
            letter-spacing: -0.02em;

            padding-top: 16px;
            padding-bottom: 4px;
          }
          & p:last-child {
            color: #292929;
            font-size: 18px;
            letter-spacing: -0.02em;
          }
        }
      }
    }
  }
`;
