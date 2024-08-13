import styled from 'styled-components';

export const StyledEcosystemRestoration = styled.div`
  .titleWrap {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1601px) {
    max-width: 1920px;
    width: 80%;

    margin: auto;

    .animationBox {
      display: flex;
      /* background-color: aqua; */
      margin-bottom: 66px;
      position: relative;

      .left {
        position: absolute;
        left: -123px;
        top: -80px;
        .cloud {
          position: absolute;
          top: 177px;
          right: 0;
        }
      }
      .introduction {
        text-align: left;
        width: 586px;
        p:first-child {
          color: #292929;
          font-size: 40px;
          margin-top: 320px;
          margin-bottom: 34px;
        }
        p:last-child {
          color: #767676;
          font-size: 26px;
          line-height: 40px;
          letter-spacing: -2px;
        }
      }
      .right {
        margin-left: 47px;
        margin-top: 152px;
        width: 621px;
        height: 421px;
        .animals {
          /* display: none; */
        }
        .wolf,
        .fox,
        .beaver,
        .tree1,
        .tree2 {
          display: none;
        }
        img {
          position: absolute;
        }
        .wolf {
          margin-left: 170px;
        }
        .fox {
          bottom: 0;
        }
        .beaver {
          margin-left: 379px;
          margin-top: 224px;
        }
        .tree1 {
          margin-left: 92px;
          margin-top: 100px;
        }
        .tree2 {
          right: 0;
          margin-top: 143px;
        }
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1600px) {
    .left {
      display: inline;
      left: 30%;
      overflow: hidden;
    }
  }

  @media (max-width: 1600px) {
    .animationBox {
      /* background-color: aqua; */
      margin-bottom: 80px;
      position: relative;

      .left {
        position: relative;
        top: -30px;
        .eagle {
          width: 148px;
        }
        .cloud {
          width: 22px;
          position: absolute;
          top: 73px;
        }
      }
      .introduction {
        text-align: center;
        p:first-child {
          color: #292929;
          font-size: 22px;
          margin-bottom: 20px;
        }
        p:last-child {
          color: #767676;
          font-size: 16px;
          line-height: 24px;

          margin-bottom: 30px;
        }
      }
      .right {
        margin: 0 40px;
        text-align: center;
        .wolf,
        .fox,
        .beaver,
        .tree1,
        .tree2 {
          display: none;
        }
        .animals {
          width: 100%;
          max-width: 621px;
        }
      }
    }
  }
`;
