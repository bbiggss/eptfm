import React, { useState } from 'react';
import ProjectImg from '../../common/ProjectImg';
import ProjectDescription from '../../common/ProjectDescription';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import styled from 'styled-components';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import HeroVideo from '../../common/Hero/HeroVideo';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';

const StyledEarthRotationChangingSeasons = styled.div`
  max-width: 1920px;
  /* background-color: beige; */
  margin: auto;
  overflow: hidden; // 추후 삭제 예정

  .portfolioTitle {
    z-index: 1;
    position: absolute;
    margin-top: 380px;

    left: 50%;
    transform: translateX(-50%);

    .orgainzation {
      text-align: center;
      color: #ffffff;
      font-family: 'NanumSquareEB';
    }
    .fieldTitle {
      color: #ffffff;
      filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
    }
  }

  .container {
    width: 1260px;
    margin: auto;

    .mainImg {
      position: relative;
      width: 100%;
      img {
        position: absolute;
        left: 50%;
        top: -300px;
        transform: translateX(-50%);
        z-index: -1;
      }
    }

    .mainDescription {
      display: flex;
      /* background-color: beige; */
      margin-top: 171px;
      margin-bottom: 128px;

      .mainDescriptionTextBox {
        margin-top: 30px;
        margin-left: 79px;
        /* background-color: aqua; */

        .title {
          color: #292929;
          font-size: 40px;
          line-height: auto;
          letter-spacing: -2%;
        }
        .subTexts {
          margin-top: 34px;
          color: #767676;
          font-size: 25px;
          line-height: 40px;
          letter-spacing: -2%;
        }
      }
    }

    .animationBox {
      display: flex;
      /* background-color: aqua; */
      margin-bottom: 66px;
      position: relative;

      img:first-child {
        position: absolute;
        left: -123px;
        top: -80px;
      }
      div {
        text-align: left;
        p:first-child {
          color: #292929;
          font-size: 40px;
          margin-top: 320px;
          margin-bottom: 59px;
        }
        p:last-child {
          color: #767676;
          font-size: 26px;
        }
      }
      img:last-child {
        margin-top: 152px;
      }
    }
  }

  .loadingWrap {
    width: 100%;
    height: calc(100vh - 460px);
    position: relative;
    background-color: white;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
    }
  }
`;

const EarthRotationChangingSeasons = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Breadcrumb />
      <StyledEarthRotationChangingSeasons $isLoaded={isLoaded}>
        <div className="fullScreen">
          <div className="portfolioTitle">
            <PortfolioTitleWrap
              $isLoaded={isLoaded}
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <PortfolioOrganization
                style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'NanumSquareB' }}
                organization={'한국교육학술정보원'}
              />
              <PortfolioFieldTitle
                style={{ color: 'rgba(255, 255, 255, 0.9)', whiteSpace: 'nowrap' }}
                field={'AR'}
                title={'지구의 공전과 계절의 변화'}
              />
            </PortfolioTitleWrap>
          </div>
          <HeroVideo
            isLoaded={isLoaded}
            setIsLoaded={setIsLoaded}
            src={`${process.env.PUBLIC_URL}/assets/videos/EarthRevolution.mp4`}
          />
        </div>
        <div className="container">
          <div className="mainImg">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/backgroundImg.png`}
              alt=""
            />
          </div>

          <div className="mainDescription">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/2.png`}
              alt=""
              loading="lazy"
            />
            <div className="mainDescriptionTextBox">
              <p className="title NanumSquareEB">태양 주위를 도는 지구의 춤, 계절의 비밀을 풀다!</p>
              <div className="subTexts NanumSquareB">
                <p>책상 위에서 증강현실로 지구의 자전과 공전을 탐험하세요.</p>
                <p>
                  계절의 변화를 눈앞에서 확인하며, 극지방과 적도 지방의 계절 차이를 생생하게
                  경험해보세요.
                </p>
              </div>
            </div>
          </div>

          <WidthImgOneTextsOne>
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/3.png`}
            />
            <ProjectDescription
              textPosition={'right'}
              text={`'지구의 공전과 계절의 변화' 콘텐츠를 제작\n하면서 우리팀은 자전축의 기울기의 마법\n 같은 효과를  담아내기  위해 노력했어요.\n 지구본을 굴려보고 코드가 얽히고 설켜\n 진정한 '자전축'이 무엇인지 체감했답니다.`}
            />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <ProjectDescription
              text={`자전축이 23.5도 기울어진 채 태양을 중심으로\n 공전하는 지구를 책상 위에 증강하여 관찰할 수\n 있어요. 지구의 공전 궤도를 따라 공전하는\n 모습과 자전축이 지구의 공전궤도면에 대해\n 기울어져 있는 이유를 생생하게 배울 수 있어요!`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/4.png`}
            />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/5.png`}
            />
            <ProjectDescription
              textPosition={'right'}
              text={`자전축이 기울어지지 않았다면 계절 변화가\n 어떻게 달라지는지 학습할 수 있어요. \n각 계절 ‘봄, 여름, 가을, 겨울’ 에서 태양의 \n남중 고도가 달라지지 않는 모습을 확인하며,\n 지구의 불변의 태양을 경험할 수 있답니다.`}
            />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <ProjectDescription
              text={`자전축이 기울어진 덕분에 ‘봄, 여름, 가을, 겨울’\n의 태양 남중 고도가 달라지는 모습을 학습할 수\n있어요. 각 계절의 태양 위치와 낮 동안의 태양의 \n움직임을 관찰하고, 춘분, 하지, 추분, 동지의 \n낮의 길이와 기온 변화를 확인 할 수 있어요.`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/6.png`}
            />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/7.png`}
            />
            <ProjectDescription
              textPosition={'right'}
              text={`노르웨이의 노르카프는 북극권에 위치한 \n지역으로, 여름에 태양이 하루종일 지지 않는 \n백야 현상을 관찰할 수 있어요. 증강된 지표면 \n위에서 노르카프의 하짓날 태양 움직임을 \n알아보며, 지구의 자전축 기울기로 인해 \n발생하는 독특한 현상을 체험해 보세요!`}
            />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <ProjectDescription
              text={`적도 지방에 위치한 우간다의 수도 캄팔라는 춘분\n날에 태양이 거의 머리 위 정점에 오르는 모습을\n 볼 수 있어요. 증강된 지표면 위에서 캄팔라의 \n춘분날 태양의 움직임을 살펴보고, 적도 지방의\n 계절 변화와 낮의 길이를 학습할 수 있어요.`}
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/8.png`}
            />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne pcPaddingBottom="200px">
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/9.png`}
            />
            <ProjectDescription
              textPosition={'right'}
              text={`이 콘텐츠는 여러분의 책상 위에서 계절의 \n변화를 손쉽게 이해할 수 있게 한답니다.\n증강현실(AR)을 통해 지구의 자전축과 \n공전궤도를 실제로 보는 듯한 경험을 제공하며\n“지구의 변화를 내 눈 앞에서!” 라는 느낌을 줘요.\n지구과학의 복잡한 개념을 직관적으로 \n이해하고, 우주의 아름다움을 느껴보세요!`}
            />
          </WidthImgOneTextsOne>
        </div>
      </StyledEarthRotationChangingSeasons>
    </>
  );
};

export default EarthRotationChangingSeasons;
