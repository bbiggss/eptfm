import styled from 'styled-components';

export const StyledBoneJointMuscle = styled.div`
  @media (min-width: 1025px) {
    .PortfolioTitleBox {
      margin-bottom: 80px;
      display: flex;
      justify-content: center;
    }
    .fff6df {
      background-color: #fff6df;
      margin-bottom: 160px;
    }
    .heroWrapper {
      position: relative;
      max-width: 1920px;
      width: 100%;
      margin-bottom: 200px;
      margin-top: 80px;
      text-align: right;

      img {
        max-width: 1150px;
        width: 60%;
      }

      .rectangle {
        position: absolute;
        aspect-ratio: 950 / 680;
        background-color: rgba(234, 181, 102, 0.9);
        top: 158px;
        width: clamp(500px, 49vw, 950px);
        /* height: 680px; */
        /* height: clamp(300px, 62vh, 680px); */

        .introductionWrapper {
          text-align: left;
          /* margin-top: 187px; */
          margin-top: clamp(50px, 5vw, 187px);
          margin-left: clamp(100px, 17vw, 330px);
          /* position: absolute; */
        }
      }
    }
    /* .common {
      display: flex;
      text-align: center;
      padding-bottom: 200px;
      .left + .right {
        margin-left: 60px;
      }
      .right {
        position: relative;
        margin-top: 130px;
        .sideImg1 {
          top: -453px;
          right: -173px;
          position: absolute;
        }
      }
    } */
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      display: grid;
    }
    .rectangle {
      order: 2;
      position: relative;
      background-color: rgba(234, 181, 102, 0.9);
      width: 345px;
      height: 270px;
      transform: translateY(-48px);
      .introductionWrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
