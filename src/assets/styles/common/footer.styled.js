import styled from 'styled-components';

export const FooterBox = styled.div`
  margin: 0 auto;
  background-color: #f0f2f4;
  font-family: 'NanumSquareB';
  color: #767676;

  @media (min-width: 1025px) {
    height: 360px;
    max-width: 1920px;

    .footerContainer {
      position: relative;
      width: 80%;
      margin: 0 auto;
    }
    #footerImg {
      width: 133px;
      height: 18px;
      margin-top: 80px;
      margin-bottom: 36px;
    }
    #info {
      span {
        font-size: 20px;
        letter-spacing: -0.02em; // 자간
        line-height: 36px; // 줄간
      }
      .address {
        margin-bottom: 36px;
      }
    }
    .copyright {
      font-size: 20px;
    }
    .socialMediaLinkWrapper {
      a:first-child {
        margin-right: 18px;
      }
      position: absolute;
      right: 0;
      top: 0;
      margin-top: 60px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    background-color: yellow;
    .footerContainer {
      position: relative;
      width: 80%;
      margin: 0 auto;
    }
    #footerImg {
      width: 133px;
      height: 18px;
      margin-top: 80px;
      margin-bottom: 36px;
    }
    #info {
      span {
        font-size: 20px;
        letter-spacing: -0.02em; // 자간
        line-height: 36px; // 줄간
      }
      .address {
        margin-bottom: 36px;
      }
    }
    .copyright {
      font-size: 20px;
    }
    .socialMediaLinkWrapper {
      a:first-child {
        margin-right: 18px;
      }
      position: absolute;
      right: 0;
      top: 0;
      margin-top: 60px;
    }
  }
  @media (max-width: 767px) {
    height: 153px;

    .footerContainer {
      position: relative;
      width: 80%;
      margin: 0 auto;

      #footerImg {
        width: 67px;
        height: 9px;
        margin-top: 30px;
        margin-bottom: 18px;
      }

      #info {
        .telFaxMail {
          font-size: 10px;

          .mail {
            display: block;
            margin-top: 3px;
          }
        }
        .customSpan {
          display: table-column;
        }
        .address {
          font-size: 10px;
          margin-top: 3px;
          margin-bottom: 12px;
        }
      }
      .copyright {
        font-size: 9px;
      }
      .socialMediaLinkWrapper {
        display: inline;
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 20px;

        img {
          width: 28px;
        }
        img:first-child {
          margin-right: 10px;
        }
      }
    }
  }
`;
