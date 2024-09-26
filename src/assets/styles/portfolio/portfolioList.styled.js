import styled from 'styled-components';
// const portfolioImgWidth = 'var(--pc-480px)';
// const mobile_PortfolioImgWidth = '315px';
const mobile_PortfolioImgWidth = 'clamp(315px, 55vw, 600px)';
export const PortfolioListBox = styled.div`
  .div1 {
    width: 100%;
    background-color: gold;
    height: 1000px;
  }

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

  @media (min-width: 1556px) {
    /* background-color: yellow; */
    /* height: 3688px; */
    ul {
      grid-template-columns: repeat(3, minmax(200px, 1fr));
    }
  }
  @media (min-width: 1025px) and (max-width: 1555px) {
    /* background-color: aqua; */
    /* height: 5050px; */

    ul {
      grid-template-columns: repeat(2, minmax(200px, 1fr));
    }
  }
  @media (max-width: 1024px) {
    /* background-color: aqua; */

    /* height: ${({ $list }) => {
      switch ($list) {
        case 'VR/AR':
          return '6342px';
        case 'e-Learning':
          return '2662px';
        case 'R&D':
          return '885px';
        default:
          return '0px'; // 기본값
      }
    }}; */
    /* height: 6342px; */
    /* height: 2662px; */
    ul {
      /* console.log(11, $listTitle); */
      /* height: ${({ $listTitle }) => {
        switch ($listTitle) {
          case 'e-Learning':
            return '2624px';
          case 'R&D':
            return '706px';
          default:
            return '0px'; // 기본값
        }
      }}; */
      /* min-height: 2624px; */
      /* min-height: 2624px; */
    }
    /* height: 706px; */

    /* height: 100%; */
    /* height: 8929px; */
  }

  @media (min-width: 1025px) {
    max-width: 1920px;
    width: 100%;
    margin: auto;

    .topTitleBox {
      .pageTitle {
        font-size: 100px;
        padding-bottom: 20px;
      }

      .fieldTitle {
        font-size: 46px;
        margin-bottom: 128px;
      }
    }

    ul {
      width: 80%;
      margin: auto;

      display: grid;
      justify-content: center;
      /* grid-template-columns: auto auto auto; */
      gap: 80px 58px;
      /* 앞: 상하간격 뒤: 좌우간격 */
      padding-bottom: 200px;

      li {
        list-style: none;
        /* width: 400px;
      height: 382px; */

        & .thumbnail img {
          width: 100%;
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
            word-break: keep-all;
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
      padding-bottom: 142px;
      /* margin-bottom: 142px; */

      li {
        list-style: none;

        & .thumbnail img {
          width: ${mobile_PortfolioImgWidth};
          /* height: 177px; */
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
