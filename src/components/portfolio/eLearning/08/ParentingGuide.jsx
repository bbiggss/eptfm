import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import Img from '../../common/Img';
import ImageTextBlock from '../../common/ImageTextBlock';
import TextCenter from '../../common/TextCenter';

const StyledParentingGuide = styled.div`
  .BreadcrumbBox {
    padding-bottom: 63px;
  }
  .PortfolioTitleBox {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 90px;
  }

  .heroArea {
    img {
      width: 100%;
    }

    .orgainzation {
      color: #767676;
      font-size: 22px;
    }
  }

  .PortfolioIntroductionBox {
    margin-bottom: 200px;

    .subTexts {
      color: #4f4f4f;
    }
  }
`;

const ParentingGuide = () => {
  return (
    <StyledParentingGuide>
      <Breadcrumb />

      <div className="fullScreen heroArea">
        <PortfolioTitle
          className="centeredContentWithMarginBottom"
          organization={'아동권리보장원'}
          title={'위탁모를 위한 양육 길잡이'}
        />

        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/hero.png`}
          alt=""
        />
      </div>

      <div className="fullScreen relative">
        <Img
          style={{ position: 'absolute', width: '100%', zIndex: '-1' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/background1.png`}
        />
        <div className="centerAlignment">
          <Img
            style={{ marginTop: '200px', marginBottom: '60px' }}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group2/1.png`}
          />
          <PortfolioIntroduction
            title={'AI 디지털교과서의 새로운 시대가 열립니다!'}
            description={
              '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
            }
          />
        </div>
      </div>

      <ImageTextBlock>
        <Img
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/1.png`}
        />
        <TextCenter
          text={
            '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
          }
        />
      </ImageTextBlock>
      <ImageTextBlock>
        <Img
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/2.png`}
        />
        <TextCenter
          text={
            '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
          }
        />
      </ImageTextBlock>
      <ImageTextBlock>
        <Img
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/3.png`}
        />
        <TextCenter
          text={
            '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
          }
        />
      </ImageTextBlock>

      <div className="fullScreen relative">
        <Img
          style={{ position: 'absolute', top: '-390px', width: '100%' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/background2.png`}
        />
      </div>

      <ImageTextBlock>
        <Img
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/4.png`}
        />
        <TextCenter
          text={
            '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
          }
        />
      </ImageTextBlock>
      <ImageTextBlock>
        <Img
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/5.png`}
        />
        <TextCenter
          text={
            '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
          }
        />
      </ImageTextBlock>
      <ImageTextBlock style={{ marginBottom: '200px' }}>
        <Img
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/6.png`}
        />
        <TextCenter
          text={
            '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
          }
        />
      </ImageTextBlock>

      <div className="centerAlignment">
        <Img
          style={{}}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group2/2.png`}
        />
      </div>

      <FixedButton />
    </StyledParentingGuide>
  );
};

export default ParentingGuide;
