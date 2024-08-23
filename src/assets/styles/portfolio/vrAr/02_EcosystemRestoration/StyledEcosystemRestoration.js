import styled from 'styled-components';

export const StyledEcosystemRestoration = styled.div`
  .titleWrap {
    display: flex;
    justify-content: center;
  }
  .eagle,
  .cloud,
  .wolf,
  .fox,
  .beaver,
  .tree1,
  .tree2 {
    display: none;
  }

  @media (min-width: 1801px) {
    .eagleCloud {
      position: relative;
      left: -148px;
      aspect-ratio: 387 / 349;
    }
  }
  @media (min-width: 1025px) and (max-width: 1800px) {
    .eagleCloud {
      max-width: clamp(200px, 20vw, 389px);
    }
  }

  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;
    /* background-color: yellow; */

    .heroWrapper {
      max-width: 1260px;
      width: 80%;
      margin: auto;
    }

    .animationBox {
      display: flex;
      /* background-color: aqua; */
      margin-bottom: 66px;
      position: relative;

      .left {
        /* background-color: yellow; */
        /* position: absolute; */
        width: 50%;
        position: relative;
        top: -80px;
      }
      .introduction {
        text-align: left;
        max-width: 586px;
        /* white-space: nowrap; */
        p:first-child {
          color: #292929;
          /* font-size: 40px; */
          font-size: clamp(20px, 3vw, 40px);
          margin-top: 49px;
          margin-bottom: 34px;
          white-space: nowrap;
        }
        p:last-child {
          color: #767676;
          /* font-size: 26px; */
          font-size: clamp(14px, 1.7vw, 26px);
          /* line-height: 40px; */
          line-height: clamp(20px, 2vw, 40px);
          letter-spacing: -0.02em;
        }
      }
      .right {
        width: 50%;
        position: absolute;
        right: 0;
        bottom: 0;
        .animals {
          /* display: none; */
          width: 100%;
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
    .eagleCloud {
      /* max-width: clamp(148px, 20vw, 389px); */
      /* width: clamp(148px, 18vw, 300px); */
      width: clamp(148px, 40vw, 389px);
      aspect-ratio: 389 / 349;
    }
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
        aspect-ratio: 315 / 117;
        p:first-child {
          color: #292929;
          /* font-size: 22px; */
          font-size: clamp(22px, 5.87vw, 50px);
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .introduction_texts {
          text-align: center;
          color: #767676;
          /* font-size: 16px;
          line-height: 24px; */
          font-size: clamp(16px, 4vw, 24px);
          line-height: clamp(24px, 6vw, 32px);

          margin-bottom: 30px;
        }
      }
      .right {
        margin: 0 40px;
        text-align: center;

        .animals {
          width: 100%;
          max-width: 621px;
        }
      }
    }
  }
`;
