import styled from 'styled-components';

export const StyledEcosystemRestoration = styled.div`
  .titleWrap {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1401px) {
    .animationBox {
      height: 639px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1400px) {
    .animationBox {
      height: 439px;
      top: -45px;
    }
    .left {
      transform: scale(0.7);
    }
    .right {
      top: 190px !important;
      transform: scale(0.6);
    }
  }

  @media (min-width: 1025px) {
    max-width: 1920px;
    background-color: yellow;

    margin: auto;

    .animationBox {
      display: flex;
      /* background-color: aqua; */
      margin-bottom: 66px;
      position: relative;

      .left {
        /* background-color: yellow; */
        position: absolute;
        width: 50%;
        top: -80px;
        /* left: -50px; */
        .cloud {
          position: absolute;
          top: 177px;
          left: 316px;
        }
      }
      .introduction {
        text-align: left;
        width: 586px;
        p:first-child {
          color: #292929;
          font-size: 40px;
          margin-top: 49px;
          margin-bottom: 34px;
        }
        p:last-child {
          color: #767676;
          font-size: 26px;
          line-height: 40px;
          letter-spacing: -0.02em;
        }
      }
      .right {
        width: 50%;
        position: absolute;
        right: 0;
        top: 155px;
        background-color: red;
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

  @media (max-width: 1024px) {
    .animationBox {
      /* background-color: aqua; */
      margin-bottom: 80px;
      position: relative;

      .left {
        display: inline-block;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
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
        p:first-child {
          color: #292929;
          font-size: 22px;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .introduction_texts {
          text-align: center;
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
