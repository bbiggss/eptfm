import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import TextCenter from '../../common/TextCenter';
import ProjectImg from '../../common/ProjectImg';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import Img from '../../common/Img';
// PortfolioTitleWrap
// PortfolioOrganization
// PortfolioFieldTitle

const ClassroomRevolutionBox = styled.div`
  .heroArea {
    width: 100%;
    height: 1124px;
    position: relative;

    .ellipse1,
    .ellipse2 {
      position: absolute;
      z-index: -1;
    }
    .ellipse2 {
      right: 0;
    }

    .ellipseContainer {
      /* width: 1400px;
      height: 1400px; */

      /* position: absolute; */
      /* overflow: hidden; */
      z-index: -1;
      .ellipse {
        position: absolute;
        width: 1400px;
        height: 1400px;

        background-image: radial-gradient(circle, #50dfff, #68e9f9, #9effec);
        filter: blur(10px); /* 블러 효과 */
        border-radius: 50%; /* 원형 또는 타원형으로 설정 */
        opacity: 0.5;
        top: -50%;
        left: -50%;
      }
    }

    .PortfolioIntroductionBox {
      position: absolute;
      margin-top: 118px;
      margin-left: 830px;
    }

    .hero1,
    .hero2 {
      position: absolute;
      bottom: 0;
    }
    .hero1 {
      margin-left: 330px;
      margin-bottom: -66px;
    }
    .hero2 {
      margin-left: 1109px;
      margin-bottom: -59px;
    }
  }

  .area2 {
    height: 1120px;
    background-color: #30bbc7;

    .customCss {
      line-height: 40px;
      font-size: 26px;
      color: #ffffff;
    }

    .customPadding {
      padding-top: 200px;
      padding-bottom: 160px;
    }
  }

  .doubleImgWrapper {
    display: flex;
    margin-bottom: 60px;
    .projectImg {
      border-radius: 30px;
    }
    img + img {
      margin-left: 40px;
    }
  }
`;

const ClassroomRevolution = () => {
  return (
    <ClassroomRevolutionBox>
      <div className="fullScreen heroArea">
        <img
          className="ellipse1"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/ellipse1.png`}
          alt=""
        />
        <img
          className="ellipse2"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/ellipse2.png`}
          alt=""
        />

        <Breadcrumb style={{ position: 'absolute' }} />

        {/* <PortfolioTitleWrap
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '180px',
          }}
        >
          <PortfolioOrganization
            style={{ color: '#292929', fontFamily: 'NanumSquareB' }}
            organization={'한국교육학술정보원'}
          />
          <PortfolioFieldTitle
            style={{ color: '#292929', whiteSpace: 'nowrap' }}
            field={'VR'}
            title={'이중섭 작품을 통해 알아보는 6·25 전쟁'}
          />
        </PortfolioTitleWrap> */}

        <PortfolioTitle
          style={{ paddingTop: '180px' }}
          className="centeredContentWithMarginBottom"
          organization={'한국교육학술정보원'}
          title={'교사가 이끄는 교실혁명'}
        />

        <PortfolioIntroduction
          title={'AI 디지털교과서의 새로운 시대가 열립니다!'}
          description={
            '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
          }
        />

        <img
          className="hero1"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/hero1.png`}
          alt=""
        />

        <img
          className="hero2"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/hero2.png`}
          alt=""
        />
      </div>
      <div className="fullScreen area2">
        <TextCenter
          className="customCss customPadding"
          text={
            "'교사가 이끄는 교실혁명'을 제작하면서, 우리 팀은 AI 기술이 학생 개개인의\n 학습 스타일에 맞춘 맞춤형 교육을 제공한다는 점에서 큰 가능성을 보았어요."
          }
        />
        <div className="smallScreen doubleImgWrapper">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group1/1.png`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group1/2.png`}
          />
        </div>
        <TextCenter
          className="customCss"
          text={
            '이 콘텐츠는 학습자의 학습 스타일에 맞추어 최적화된 학습 경험을 제공하며,\n다양한 주제와 과목을 다루는 포괄적인 학습 도구로써 제작되었어요.'
          }
        />
      </div>

      <WidthOneContent className="firstChild">
        <Img
          $whiteImgBackgroundBorder
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group2/1.png`}
        />
        <TextCenter
          text={
            'AI 디지털교과서 e-Learning 콘텐츠는 교육 전문가와 \nAI 기술 전문가의 협업을 통해 제작되었어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img
          $whiteImgBackgroundBorder
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group2/2.png`}
        />
        <TextCenter
          text={
            '기획 단계에서는 각 과목별 교육 목표와 학습자 요구를 분석하였으며,\n이를 바탕으로 학습자 맞춤형 학습 경로를 구현하였답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img
          $whiteImgBackgroundBorder
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group2/3.png`}
        />
        <TextCenter
          text={
            '학습자의 이해를 돕기 위해 적절한 이미지와 그래픽을 풍부하게 사용했어요.\n적용 대상이나 범위를 시각적으로 보여주는 다이어그램을 활용하거나\n애니메이션을 활용하여 학습자가 쉽게 이해할 수 있도록 했어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img
          $whiteImgBackgroundBorder
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group2/4.png`}
        />
        <TextCenter
          text={
            '다양한 형태로 구성되어 지루함을 방지해요!\n텍스트 설명 외에도 시뮬레이션, 인터랙티브 활동 등을 포함하여\n학습자가 몰입할 수 있도록 구성했어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img
          $whiteImgBackgroundBorder
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group2/5.png`}
        />
        <TextCenter
          text={
            '중요한 개념을 설명할 때는 인포그래픽을 사용하여\n복잡한 내용을 시각적으로 간단하게 표현할 수 있도록 구성했어요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent className="lastChild">
        <Img
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group2/6.png`}
        />
        <TextCenter
          text={
            'AI 기술로 맞춤형 학습을 제공하는 디지털교과서, 개인화된 학습 경험과 \n풍부한 e-Learning 콘텐츠를 통해 더욱 효과적이고 흥미롭게 학습해보세요!'
          }
        />
      </WidthOneContent>
    </ClassroomRevolutionBox>
  );
};

export default ClassroomRevolution;
