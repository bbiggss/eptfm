import styled from 'styled-components';

const headerHeightDesktop = '100px';
const headerHeightTablet = '147px';
const headerHeightMobile = '83px';

export const HeaderSpacer = styled.div`
  @media (min-width: 1025px) {
    height: ${headerHeightDesktop};
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: ${headerHeightTablet};
  }
  @media (max-width: 767px) {
    height: ${headerHeightMobile};
  }
`;

export const HeaderBox = styled.div`
  top: 0;
  width: 100%;
  max-width: 1920px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  align-items: center;

  .active {
    color: #4ac2c5;
  }

  &.transparent {
    transition: background-color 0.5s ease, transform 0.5s ease;
  }

  &.colored {
    background-color: white;
    opacity: 90%;
    transition: background-color 0.5s ease, transform 0.5s ease;
  }

  #headerContainer {
    /* background-color: yellow; */
  }

  /* 데스크탑 */
  @media (min-width: 1025px) {
    height: ${headerHeightDesktop};
    /* background-color: white; */
    .transparent {
      background-color: transparent;
    }

    #headerContainer {
      position: relative;
      margin: auto;
      max-width: 1920px;
      width: 80%;
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
        scroll-behavior: smooth;

        &:hover {
          color: #4ac2c5;
        }
      }
    }
    .dropdown {
      position: relative;
      p {
        font-size: 18px;
        padding-top: 0;
        padding-bottom: 39px;
        &:hover {
          color: #4ac2c5;
        }
      }
      .dropdown-content {
        background-color: white;
        display: none;
        position: absolute;
        width: 200px;
        padding: 10px 0;
        border: 1px solid rgba(10, 15, 54, 0.08); /* Border color with 8% opacity */
        border-top: 2px solid #4ac2c5;
        box-shadow: 0 0 20px rgba(10, 15, 54, 0.08); /* Blur radius 20px with 8% opacity */
        left: 50%;
        transform: translateX(-50%);
        a {
          width: 100%;
          height: 54px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #767676;
          font-size: 16px;
          &:hover {
            color: #191919;
            text-decoration: underline;
          }
        }
      }
      &:hover .dropdown-content {
        display: block;
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
    background-color: white;
    #headerContainer {
      position: relative;
      width: 100%;
      /* border: 1px solid black; */
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 68px;
      margin-top: 48px;
      margin-bottom: 48px;

      #logoImg {
        width: 166px;
        height: 22px;
      }
      #dropDownImg {
        /* position: absolute; */
        /* right: 0; */
        width: 47px;
        height: 47px;
      }
      ul {
        display: none;
      }
    }
  }

  /* 모바일 (0 ~ 767px) */
  @media (max-width: 767px) {
    background-color: white;
    #headerContainer {
      /* background-color: yellow; */
      position: relative;
      width: 100%;
      margin: 32px;

      #logoImg {
        width: 82px;
        height: 11px;
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
