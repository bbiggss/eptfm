import React, { useState } from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import TextCenter from '../../common/TextCenter';
import ProjectImg from '../../common/ProjectImg';

import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import CustomText from '../../common/CustomText';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import HeroImg from '../../common/Hero/HeroImg';

const MudFlatBox = styled.div`
  @media (min-width: 1025px) {
    .subTexts {
      font-size: 24px;
      margin-top: 60px;
    }
    .portfolioTitle {
      position: absolute;
      margin-top: 425px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;

      .orgainzation {
        color: #ffffff;
        font-family: 'NanumSquareEB';
      }
      .fieldTitle {
        color: #ffffff;
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
      }
    }

    .mainContainer {
      display: flex;
      text-align: center;

      .mainTexts {
        display: flex;
        align-items: center;
        margin-left: 67px;
      }
    }
    .watchContainer {
      padding: 100px 0;

      margin-top: 160px;
      margin-bottom: 160px;
      .centerAlignment img {
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
    .gridContainer {
      padding-top: 160px;
      padding-bottom: 160px;
      margin-bottom: 160px;
      ul {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(3, 400px);
        gap: 0px 30px;

        li {
          list-style: none;
          padding-bottom: 60px;
        }
      }
      .customText {
        color: #191919;
        text-align: center;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    .tempWrap {
      display: none;
    }
    .mainImg {
      height: 350px;
      margin-bottom: 82px;
      /* overflow: hidden; */
      /* position: relative; */
      /* right: 117px; */
      /* z-index: -1; */
    }
    .portfolioTitle {
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      .orgainzation {
        color: #ffffff;
        font-size: 12px;
        margin-bottom: 11px;
        font-family: 'NanumSquareEB';
      }
      .fieldTitle {
        color: #ffffff;
        font-size: 25px;
        white-space: nowrap;
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
      }
    }

    .mainContainer {
      text-align: center;

      .woman {
        width: 124px;
      }

      .mainTexts {
        margin-top: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;

        .title {
          color: #000000;
          font-size: 22px;
          letter-spacing: -0.02em;
        }
        .subTexts p {
          color: #333333;
          font-size: 15px;
          line-height: 20px;
          letter-spacing: -0.02em;
          margin-top: 20px;
          margin-bottom: 80px;
        }
      }
    }
    .watchContainer {
      padding: 100px 0;

      margin-top: 160px;
      margin-bottom: 160px;
      .centerAlignment img {
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
    .gridContainer {
      padding-top: 160px;
      padding-bottom: 160px;
      margin-bottom: 160px;
      ul {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(3, 400px);
        gap: 0px 30px;

        li {
          list-style: none;
          padding-bottom: 60px;
        }
      }
      .customText {
        color: #191919;
        text-align: center;
      }
    }

    /* max-width: 767px; */
    /* overflow: hidden; */
  }
`;

const MudFlat = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <MudFlatBox>
      <Breadcrumb />
      <div className="fullScreen">
        <div className="portfolioTitle">
          <PortfolioTitleWrap
            $isLoaded={isLoaded}
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            mobileMarginTop="130px"
          >
            <PortfolioOrganization
              style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'NanumSquareB' }}
              organization={'한국교육학술정보원'}
            />
            <PortfolioFieldTitle
              style={{ color: 'rgba(255, 255, 255, 0.9)', whiteSpace: 'nowrap' }}
              field={'AR'}
              title={'갯벌은 어떤 곳일까?'}
            />
          </PortfolioTitleWrap>

          {/* <PortfolioTitle
            organization={'한국교육학술정보원'}
            field={'AR'}
            title={'갯벌은 어떤 곳일까?'}
          /> */}
        </div>

        <HeroImg
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/main1.png`}
        />
      </div>
      <div className="smallScreen">
        <div className="mainContainer">
          <img
            className="woman"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/woman.png`}
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

      <div className="tempWrap">
        <div className="fullScreen watchContainer EDFAFF">
          <p className="title NanumSquareEB">시계형 조작부</p>
          <div className="centerAlignment">
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/01_mulsigye.png`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/02_mulsigye.png`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/03_mulsigye.png`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/04_mulsigye.png`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/05_mulsigye.png`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/06_mulsigye.png`}
            />
          </div>
          <TextCenter
            text={
              '시계형 조작부를 통해 바다 모형의 밀물과 썰물을 변화시켜\n시간이 흐름에 따라 바다와 갯벌 환경이 변화하는 모습을 이해할 수 있어요.'
            }
          />
        </div>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/group1_1.png`}
          />
          <TextCenter
            text={
              '우리팀은 학습자들이 ‘갯벌은 어떤 곳일까?’ 콘텐츠를 통해\n밀물과 썰물의 변화, 갯벌의 생태계, 환경 정화 기능 등 갯벌의 다양한 측면을\n자연스럽게 학습할 수 있도록 하기 위해 많은 노력을 기울였어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/group1_2.png`}
          />
          <TextCenter
            text={
              '뿐만 아니라, 갯벌 체험에서 꼭 주의해야 할 사항들도\n학습자들이 기억할 수 있도록 안전 유의 사항의 내용을 넣었죠.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/group1_3.png`}
          />
          <TextCenter
            text={
              '학습자들은 캐릭터를 직접 움직이며 갯벌에 서식하는 다양한 생물들을 채집할 수 있어요.\n자연과의 공생! 갯벌에 사는 다양한 생물 친구들을 만나볼까요?'
            }
          />
        </WidthOneContent>
        <div className="fullScreen gridContainer EDFAFF">
          <ul>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/01_reed.png`}
                alt=""
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/02_cockle.png`}
                alt=""
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/03_octopus.png`}
                alt=""
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/04_SandBubblerCrabs.png`}
                alt=""
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/05_SuaedaJaponica.png`}
                alt=""
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/06_HoodedCrane.png`}
                alt=""
              />
            </li>
          </ul>
          <CustomText
            text={
              '엽낭게, 농게, 칠게, 꼬막, 짱둥어, 검은머리갈매기, 염생식물 등\n다양한 생물을 AR을 통해 실감 나게 관찰해보세요!'
            }
          />
        </div>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/group1_4.png`}
          />
          <TextCenter
            text={
              '갯벌에 빠지거나, 시간 내에 안전 지대로 돌아가지 못하면 \n발생하는 위험 이벤트들을 경험해보세요!\n안전이 최고! 갯벌에서의 위험상황 대비 방법을 학습할 수 있답니다.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/group1_5.png`}
          />
          <TextCenter
            text={
              '천연기념물의 흑두루미와 검은머리갈배기의 울음소리도 들어보세요!\n꺄륵 꺄륵 하며 우는 소리를 들으면 진짜 갯벌에 와있는 기분이 들어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent style={{ paddingBottom: '190px' }}>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/group1_6.png`}
          />
          <TextCenter
            text={
              '갯벌 생물 도감을 통해 갯벌이 생물들에게 중요한 역할을 한다는 사실을 배울 수 있어요.\n갯벌의 환경 정화 기능과 그 중요성을 같이 이해해볼까요?'
            }
          />
        </WidthOneContent>
        <WidthOneContent style={{ paddingBottom: '200px' }}>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/man.png`}
          />
          <TextCenter
            text={
              '갯벌의 생태적 중요성을 자연스럽게 배우고,\n갯벌 환경을 체험하며 환경 보존의 필요성을 느낄 수 있어요.\n갯벌의 비밀을 탐험하며 환경 보호를 배워보세요!'
            }
          />
        </WidthOneContent>
      </div>
    </MudFlatBox>
  );
};

export default MudFlat;
