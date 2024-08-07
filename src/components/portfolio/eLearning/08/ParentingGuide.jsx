import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import Img from '../../common/Img';
import ImageTextBlock from '../../common/ImageTextBlock';
import TextCenter from '../../common/TextCenter';

const StyledParentingGuide = styled.div`
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

    .title {
      line-height: 56px;
    }
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
            title={
              '위탁모와 입양 부모를 위한 실질적이고 따뜻한 양육 가이드,\n아이와 함께하는 새로운 여정의 길잡이'
            }
            description={
              '우리 팀은 입양과 위탁 보호의 중요한 역할을 사회에 알리고, \n이를 지원하는 실질적인 정보를 제공하기 위해 많은 노력을 했어요.'
            }
          />
        </div>
      </div>

      <ImageTextBlock>
        <Img
          $whiteImgBackgroundBorder
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/1.png`}
        />
        <TextCenter
          text={
            '위탁모와 입양 가정의 특수한 상황과 요구를 고려하여,\n아이들이 새로운 환경에 잘 적응하고 성장할 수 있도록 필요한 지식과 기술을 제공해요.'
          }
        />
      </ImageTextBlock>
      <ImageTextBlock>
        <Img
          $whiteImgBackgroundBorder
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/2.png`}
        />
        <TextCenter
          text={
            '학습자는 입양 및 위탁 보호의 개념과 절차,\n그리고 그들이 아동에게 미치는 영향에 대해 학습할 수 있어요.'
          }
        />
      </ImageTextBlock>
      <ImageTextBlock>
        <Img
          $whiteImgBackgroundBorder
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/3.png`}
        />
        <TextCenter
          text={
            '법적, 사회적 측면에서 입양과 위탁 보호가 갖는 중요성과 역할을 학습하고,\n아동의 정서적 필요를 이해하고, 상처받은 마음을 치유하는 법을 배울 수 있답니다!'
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
          $whiteImgBackgroundBorder
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/4.png`}
        />
        <TextCenter
          text={
            '국가와 지역사회에서 제공하는 다양한 지원 프로그램과 리소스를 안내해요.\n생활 환경을 아이들에게 친숙하게 만드는 다양한 팁도 확인해볼 수 있답니다!'
          }
        />
      </ImageTextBlock>
      <ImageTextBlock>
        <Img
          $whiteImgBackgroundBorder
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/5.png`}
        />
        <TextCenter
          text={
            '아이들의 발달 단계에 맞는 양육 방법과 건강 관리, 교육 및 생활 습관 \n지도에 대한 구체적인 조언을 확인해볼 수 있어요.'
          }
        />
      </ImageTextBlock>
      <ImageTextBlock style={{ marginBottom: '200px' }}>
        <Img
          $whiteImgBackgroundBorder
          style={{ marginBottom: '60px' }}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/6.png`}
        />
        <TextCenter
          text={
            '위탁모와 입양 가정의 특별한 여정,\n그들의 역할이 얼마나 중요한지 그들이 마주하게 되는 도전과 보람을 이해해볼까요?'
          }
        />
      </ImageTextBlock>

      <div className="centerAlignment">
        <Img
          style={{}}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group2/2.png`}
        />
      </div>
    </StyledParentingGuide>
  );
};

export default ParentingGuide;
