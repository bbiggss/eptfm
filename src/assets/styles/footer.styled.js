import styled from 'styled-components';

export const FooterBox = styled.div`
  width: 100%;
  color: #767676;
  font-family: 'NanumSquareB';

  display: flex;
  justify-content: center;

  #inquiry span {
    display: none;
  }

  @media (min-width: 1025px) {
    /* display: flex; */
    #container {
      background-color: #f0f2f4;
      width: 1920px;
      box-sizing: border-box;
      padding: 80px 182px;
      & #infoInquiry {
        display: flex;
        position: relative;
      }
      & #inquiry {
        margin-left: auto;
        position: absolute;
        right: 0;
        bottom: 0;
        text-align: right;
      }
      & img {
        width: 150px;
        margin-bottom: 20px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
    #container {
      padding: 32px;
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
