import styled from 'styled-components';

export const FooterBox = styled.div`
  width: 100%;
  color: #767676;
  font-family: 'NanumSquareB';
  background-color: #f0f2f4;

  display: flex;
  justify-content: center;

  #inquiry span {
    display: none;
  }

  @media (min-width: 1025px) {
    /* display: flex; */
    #container {
      width: 1920px;
      box-sizing: border-box;
      padding: 80px 182px;
      & #infoInquiry {
        display: flex;
        position: relative;
        margin-bottom: 36px;

        #info {
          #footerImg {
            width: 133px;
            height: 18px;
            margin-bottom: 36px;
          }
          span {
            font-size: 20px;
            letter-spacing: -0.02em; // 자간
            line-height: 36px; // 줄간
          }
        }
      }
      & #inquiry {
        margin-left: auto;
        position: absolute;
        right: 0;
        bottom: 0;
        text-align: right;
        font-size: 20px;
        letter-spacing: -0.02em; // 자간
        line-height: 36px; // 줄간
      }

      #copyright {
        font-size: 18px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
    #container {
      padding: 32px;
    }
    #infoInquiry {
      margin-bottom: 31.77px;
    }
    #footerImg {
      width: 63px;
      height: 9px;
    }
    #inquiry div:first-child {
      display: inline;
    }
    #inquiry span {
      display: inline;
    }
    #inquiry div:last-child {
      display: inline;
    }
  }
  @media (max-width: 767px) {
    font-size: 9px;
    #container {
      padding: 32px;
    }
    #infoInquiry {
      margin-bottom: 12px;
    }
    #footerImg {
      width: 63px;
      height: 9px;
    }
    #inquiry div:first-child {
      display: inline;
    }
    #inquiry span {
      display: inline;
    }
    #inquiry div:last-child {
      display: inline;
    }
  }
`;
