import styled from 'styled-components';

export const BongsuPavalBox = styled.div`
  .topImgTitle {
    width: 100%;
    height: 1240px;
    overflow: hidden;
    position: relative;

    .mainImg {
      position: relative;
      /* background-color: yellow; */
      img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
      }
    }

    .portfolioTitle {
      p:first-child {
        margin-bottom: 24px;
        text-align: left;

        color: #999999;
        font-size: 22px;
        line-height: auto;
        letter-spacing: -2%;
      }
      p:last-child {
        font-size: 62px;
        color: #48c2c5;
        line-height: auto;
        letter-spacing: -2%;
      }
    }

    .imgTexts {
      width: 1244px;
      height: 858px;
      display: flex;
      margin-top: 80px;

      .left {
        margin-right: 90px;
        position: relative;
        width: 338px;
        height: 858px;
        img {
          width: 100%;
          height: auto;
          position: absolute; /* 상단 부분이 잘리도록 절대 위치 설정 */
          bottom: 0; /* 이미지의 하단을 컨테이너의 하단에 맞춥니다 */
        }
      }
      .right {
        .title {
          color: #292929;
          font-size: 40px;
          line-height: auto;
          letter-spacing: -2%;
          margin-top: 92px;
        }
        .subTexts {
          margin-top: 34px;
          margin-bottom: 100px;
          color: #767676;
          font-size: 26px;
          line-height: 40px;
          letter-spacing: -2px;
        }
      }
    }
  }

  .margin160 {
    margin: 160px 0;
  }

  .projectDescriptions {
    margin-bottom: 160px;
  }
`;
