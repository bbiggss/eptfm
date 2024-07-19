import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import TextCenter from '../../common/TextCenter';
import { ProjectContainer } from '../../../../assets/styles/main/vrAr/common/projectContainer.styled';
import ProjectDescription from '../../common/ProjectDescription';
import ProjectImg from '../../common/ProjectImg';

const MudFlatBox = styled.div`
  .subTexts {
    font-size: 24px;
  }
  .topImgTitle {
    max-width: 1920px;
    width: 100%;
    height: auto;
    /* background-color: yellow; */
    display: flex;
    justify-content: center;

    img {
      width: 100%;
    }

    .portfolioTitle {
      /* background-color: aqua; */
      text-align: center;
      margin-top: 425px;
      position: absolute;

      p:first-child {
        margin-bottom: 24px;

        color: #ffffff;
        font-size: 22px;
      }
      p:last-child {
        font-size: 64px;
        color: #ffffff;
      }
    }
  }

  .mainContainer {
    display: flex;

    .mainTexts {
      display: flex;
      align-items: center;
      margin-left: 67px;
    }
  }
  .F6FBFD {
    background-color: #f6fbfd;
    padding: 100px 0;
    margin-bottom: 130px;
    img {
      margin: 80px 0;
    }
    .title {
      color: #000000;
      font-size: 50px;
      line-height: auto;
      letter-spacing: -2%;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      text-align: center;
    }
  }

  .customText {
    color: #000000;
    font-size: 50px;
    line-height: 40px;
    letter-spacing: -2%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    text-align: center;
    padding-bottom: 88px;
  }

  .manCharacter {
    text-align: center;
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    margin-bottom: 638px;
    img {
      margin-left: 243px;
    }

    p {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      color: #000000;
      font-size: 26px;
      line-height: 40px;
      letter-spacing: -2%;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      text-align: center;
    }
  }
`;

const MudFlat = () => {
  return (
    <MudFlatBox>
      <Breadcrumb />

      <div className="fullScreen">
        <div className="topImgTitle">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/MudFlat/main1.png`}
            alt=""
          />
          <div className="portfolioTitle">
            <p className="NanumSquareB">한국교육학술정보원</p>
            <p className="NanumSquareEB">
              AR <span className="NanumSquareR">I</span> 갯벌은 어떤 곳일까?
            </p>
          </div>
        </div>
      </div>

      <div className="smallScreen">
        <div className="mainContainer paddingTop160">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/MudFlat/woman.png`}
            alt=""
          />
          <div className="mainTexts">
            <PortfolioIntroduction
              title={'갯벌 생물 채집 달인에 도전!'}
              description={
                "'갯벌은 어떤 곳일까?' 콘텐츠는 갯벌의 중요성을\n체험적으로 학습할 수 있도록 설계되었어요. \n갯벌 탐방을 통해 얻은 생생한 데이터를 바탕으로\n시나리오를 구성하고, 갯벌 생물들을 실감나게 \n재현하기 위해 전문가의 자문을 받았답니다!"
              }
            />
          </div>
        </div>
      </div>

      <div className="fullScreen F6FBFD">
        <p className="title NanumSquareEB">시계형 조작부</p>
        <div className="textCenter">
          <img
            className=""
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/MudFlat/group1.png`}
            alt=""
          />
        </div>
        <TextCenter
          text={
            '시계형 조작부를 통해 바다 모형의 밀물과 썰물을 변화시켜\n시간이 흐름에 따라 바다와 갯벌 환경이 변화하는 모습을 이해할 수 있어요.'
          }
        />
      </div>

      <div className="smallScreen">
        <ProjectContainer>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/MudFlat/1.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`갯벌 생물 채집을 위해 학습자는 캐릭터를 \n직접 움직이며 물이 들어오고 나가는 과정을 \n직관적으로 체험하며 자연스럽게 배울 수 있어요.`}
          />
        </ProjectContainer>
        <ProjectContainer>
          <ProjectDescription
            text={`갯벌이 탄소를 흡수하고 환경을 정화하는 역할을 \n수행함을 확인하고, 다양한 갯벌 생태계를 \nAR을 통해 체험할 수 있어요.`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/MudFlat/2.png`}
          />
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/MudFlat/3.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`갯벌 생물 채집 시 꼭 지켜야할 안전을 고려한 \n선택을 통해 지정한 시간 안에 수집한 생물을 \n수집책에 저장하는 게임도 진행할 수 있답니다!`}
          />
        </ProjectContainer>
      </div>

      <div className="textCenter">
        <p className="customText NanumSquareEB">다양한 생물 NPC들을 만나보세요!</p>
        <img
          className=""
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/MudFlat/group2.png`}
          alt=""
        />
      </div>

      <div className="manCharacter">
        <p className="customText2 NanumSquareEB">
          갯벌의 생태적 중요성을 자연스럽게 배우고,
          <br />
          갯벌 환경을 체험하며 환경 보존의 필요성을 느낄 수 있어요.
          <br />
          갯벌의 비밀을 탐험하며 환경 보호를 배워보세요!
        </p>
        <img
          className=""
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/MudFlat/man.png`}
          alt=""
        />
      </div>
      <FixedButton />
    </MudFlatBox>
  );
};

export default MudFlat;
