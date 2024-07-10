import styled from 'styled-components';

export const HeaderPlaceholder = styled.div`
  @media (max-width: 767px) {
    height: 83px;
  }
`;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  font-family: 'Roboto-Medium';
  justify-content: center;
  z-index: 1;
  /* background-color: yellowgreen; */

  &.colored {
    background-color: white;
  }

  #headerContainer {
    /* background-color: yellow; */
  }

  /* 데스크탑 */
  @media (min-width: 1025px) {
    #headerContainer {
      position: relative;
      width: 1556px;
      margin: 42px 0px;
    }
    #logoImg {
      width: 122px;
      height: 18px;
    }
    #dropDownImg {
      display: none;
    }

    & ul {
      display: flex;
      list-style: none;
      margin: 0;
    }
    & ul li {
      margin-right: 92px;

      /* 헤더 nav 텍스트 */
      & a {
        text-decoration: none;
        color: #292929;
        font-size: 18px;
        letter-spacing: 0px;
      }
    }
    & ul li:last-child {
      margin-right: 0;
    }
    & span {
      position: absolute;
      right: 0;
    }
  }

  /* 태블릿 (768px ~ 1024px) */
  @media (min-width: 768px) and (max-width: 1024px) {
    #headerContainer {
      position: relative;
      width: 780px;
      margin: 38px 0px;
    }
    #logoImg {
      width: 122px;
      height: 18px;
    }
    #dropDownImg {
      display: none;
    }

    & ul {
      display: flex;
      list-style: none;
      margin: 0;
    }
    & ul li {
      margin-right: 92px;

      /* 헤더 nav 텍스트 */
      & a {
        text-decoration: none;
        color: #292929;
        font-size: 18px;
        letter-spacing: 0px;
      }
    }
    & ul li:last-child {
      margin-right: 0;
    }
    & span {
      position: absolute;
      right: 0;
    }
  }

  /* 모바일 (0 ~ 767px) */
  @media (max-width: 767px) {
    background-color: white;
    #headerContainer {
      position: relative;
      width: 100%;
      margin: 32px;

      #logoImg {
        width: 78px;
        height: 10.99px;
      }
      #dropDownImg {
        position: absolute;
        right: 0;
        width: 24px;
        height: 24px;
      }
      ul {
        display: none;
      }
    }
  }
`;
