import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import Img from '../../common/Img';
import ProjectDescription from '../../common/ProjectDescription';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';

const StyledCyberSocializingOne = styled.div`
  .heroArea {
    img {
      width: 100%;
    }
  }
  .cloud,
  .circle1,
  .circle2,
  .circle3,
  .heart,
  .yellowWordBalloon {
    position: absolute;
    z-index: -1;
  }

  .cloud {
    top: -170px;
    left: 0;
    z-index: -1;
  }
  .circle1 {
    left: -330px;
    top: 229px;
  }
  .circle2 {
    right: -275px;
    top: -100px;
  }
  .yellowWordBalloon {
    left: -295px;
    top: 178px;
  }
  .circle3 {
    right: 0;
  }
  .heart {
    left: -330px;
    top: -310px;
  }
`;

const CyberSocializingOne = () => {
  return (
    <StyledCyberSocializingOne>
      <Breadcrumb style={{ paddingBottom: '104px' }} />

      <PortfolioTitle
        style={{ marginBottom: '47px', display: 'flex', justifyContent: 'center' }}
        organization={'한국교육학술정보원'}
        title={'사이버어울림'}
      />

      <div className="fullScreen heroArea">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/hero.png`}
          alt=""
        />
      </div>

      <div className="smallScreen centerAlignment relative">
        <img
          className="cloud"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/side/cloud.png`}
          alt=""
        />

        <PortfolioIntroduction
          style={{ marginTop: '213px', marginBottom: '200px' }}
          title={'기술·가정, 진로와 직업, 한문과 교과 연계,\n사이좋게 지내요!'}
          description={
            '사이버 폭력 예방을 위해 영어와 체육 교과와 \n연계해 학습해보아요!\n긍정적인 언어 사용, 안전한 사이버 만들기!'
          }
        />

        <WidthImgOneTextsOne>
          <img
            className="circle1"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/side/circle1.png`}
            alt=""
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/1.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`이 콘텐츠는 기술·가정 교과와 연계되어\n사이버 폭력의 문제를 인식하고, \n이를 예방하고 대처하는 방법에 대해\n학습자들이 배울 수 있어요.`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`자신의 가치와 소중함, 그리고 \n긍정적인 자아존중감을 자세히 이해하고\n그 중요성을 인식할 수 있어요.`}
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/2.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/3.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`말이 사람들에게 미치는 긍정적, 부정적\n영향을 사례를 통해 알아볼 수 있어요.`}
          />
          <img
            className="circle2"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/side/circle2.png`}
            alt=""
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`우리 팀은 저수지·댐 안전관리 및 재해예방 \ne-Learning 컨텐츠를 개발하면서 다양한 저수지·댐 \n전문가들과 협력하여 심층적인 자료를 수집하고 \n분석했어요.`}
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/4.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <img
            className="yellowWordBalloon"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/side/yellowWordBalloon.png`}
            alt=""
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/5.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`콘텐츠의 시각적 요소는 학습자들이 쉽게 이해하고\n흥미를 느낄 수 있도록 3D 모델링과 애니메이션을\n활용하여 제작되었답니다!`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`우리 팀은 저수지·댐 안전관리 및 재해예방 \ne-Learning 컨텐츠를 개발하면서 다양한 저수지·댐 \n전문가들과 협력하여 심층적인 자료를 수집하고 \n분석했어요.`}
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/6.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/7.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`콘텐츠의 시각적 요소는 학습자들이 쉽게 이해하고\n흥미를 느낄 수 있도록 3D 모델링과 애니메이션을\n활용하여 제작되었답니다!`}
          />
          <img
            className="circle3"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/side/circle3.png`}
            alt=""
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <ProjectDescription
            text={`우리 팀은 저수지·댐 안전관리 및 재해예방 \ne-Learning 컨텐츠를 개발하면서 다양한 저수지·댐 \n전문가들과 협력하여 심층적인 자료를 수집하고 \n분석했어요.`}
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/8.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne style={{ paddingBottom: '200px' }}>
          <img
            className="heart"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/side/heart.png`}
            alt=""
          />
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/9.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`콘텐츠의 시각적 요소는 학습자들이 쉽게 이해하고\n흥미를 느낄 수 있도록 3D 모델링과 애니메이션을\n활용하여 제작되었답니다!`}
          />
        </WidthImgOneTextsOne>
      </div>

      <FixedButton />
    </StyledCyberSocializingOne>
  );
};

export default CyberSocializingOne;
