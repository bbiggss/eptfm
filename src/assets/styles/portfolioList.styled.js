import styled from 'styled-components';
const portfolioImgWidth = '480px';
export const PortfolioListBox = styled.div`
  @media (min-width: 1025px) {
    max-width: 1920px;
    width: 100%;
    margin: auto;
    /* background-color: yellow; */

    .topTitleBox {
      height: 390px; // 490 - 헤더(100) = 390
      .pageTitle,
      .fieldTitle {
        text-align: center;
      }

      .pageTitle {
        font-size: 100px;
        letter-spacing: 0;
        color: #191919;

        padding-top: 80px;
        padding-bottom: 20px;
      }

      .fieldTitle {
        font-size: 46px;
        letter-spacing: 0;
        color: #292929;
        /* padding-bottom: ; */
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

        & a {
          text-decoration: none;
        }

        & div:first-child {
        }
        & div:first-child img {
          /* height: 100%; */
          width: ${portfolioImgWidth};
          height: 270px;
        }
        & div:last-child {
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

    .btnBox {
      position: fixed;
      right: 72px;
      bottom: 0;
      /* background-color: yellow; */
      img {
        cursor: pointer;
        border-radius: 50%;
      }
      img:last-child {
        margin-top: 24px;
        margin-bottom: 60px;
      }
    }

    .btnBoxBottomPosition {
      bottom: 360px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
  }
`;
