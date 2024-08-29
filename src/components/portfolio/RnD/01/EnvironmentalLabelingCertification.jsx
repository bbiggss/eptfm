import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import styled from 'styled-components';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import Img from '../../common/Img';
import ProjectDescription from '../../common/ProjectDescription';
import CustomText from '../../common/CustomText';
import HeroImg from '../../common/Hero/HeroImg';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';

const StyledEnvironmentalLabelingCertification = styled.div`
  .heroImg {
    width: 100%;
  }
  .F5F5F7 {
    background-color: #f5f5f7;
    /* background-color: yellow; */
    height: max-content;
    padding-bottom: 110px;
  }

  .FFFFFF {
    background-color: #ffffff;
    /* background-color: aqua; */
    text-align: center;
    padding-top: 160px;
    width: 1400px;
    /* height: 5011px; */
    margin: 0 auto;
    /* margin-bottom: 200px; */
    position: relative;
    top: -90px;
  }
  .introductionImg1 {
    margin-top: 60px;
    margin-bottom: 160px;
  }
  .customLeftTemp {
    position: relative;
    left: -78px;
    padding-bottom: 160px;
  }
  .customRight,
  .customLeft {
    padding-bottom: 160px;
    /* width: 1344px; */
    width: auto;
    height: 763px;
  }
  .customLeft {
    position: relative;
    left: -78px;
  }
  .customRight {
    position: relative;
    left: 120px;
  }

  .threeImgs {
    img {
      border: 1px solid #ededed;
    }
    img:nth-child(2) {
      /* margin: 10px; */
      margin-left: 48px;
      margin-right: 48px;
    }
  }
`;

const EnvironmentalLabelingCertification = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledEnvironmentalLabelingCertification>
      <Breadcrumb />

      <div className="fullScreen">
        <PortfolioTitleWrap
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '180px',
            textAlign: 'center',
          }}
        >
          <PortfolioOrganization style={{ color: '#FFFFFF', fontFamily: 'NanumSquareB' }} organization={'환경산업기술원'} />
          <PortfolioFieldTitle
            style={{ color: '#FFFFFF', whiteSpace: 'nowrap' }}
            // field={'VR'}
            title={'친환경 소비의 첫걸음,\n환경표지인증을 통한 더 나은 선택'}
          />
        </PortfolioTitleWrap>
        <HeroImg
          pcHeight={'1080px'}
          tabletHeight={''}
          mobileHeight={''}
          // isLoaded={isLoaded}
          // setIsLoaded={setIsLoaded}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/hero.png`}
        />
        {/* <img
          className="heroImg"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/hero.png`}
          alt=""
        /> */}
      </div>
      <div className="fullScreen F5F5F7">
        <div className="FFFFFF">
          <PortfolioIntroduction
            style={{ textAlign: 'center' }}
            title={'지속 가능한 미래를 위한 친환경 인증'}
            description={
              '친환경 인증의 개념부터 절차, 혜택까지 심층적으로 탐구하세요! 인터랙티브 학습을 통해\n환경표지인증의 중요성을 체험하고, 지속 가능한 소비를 실천해 볼 수 있어요.'
            }
          />
          <img
            className="introductionImg1"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/introduction1.png`}
            alt=""
          />
          <div className="customLeftTemp">
            <WidthImgOneTextsOne>
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/introduction2.png`} />
              <ProjectDescription
                textPosition={'right'}
                text={`다양한 인증 사례와 데이터를 조사하고 분석하여,\n복잡한 절차를 쉽게 이해할 수 있는 상호작용 학습\n컨텐츠를 만들었어요. \n이제 여러분도 친환경 인증의 중요성을 이해하고\n실천할 수 있어요!\n\n인증 받은 제품을 사용할 때마다 지구가 살짝 미소\n짓는 것 같지 않나요?`}
              />
            </WidthImgOneTextsOne>
          </div>
          <div className="customRight">
            <div className="threeImgs">
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group1/1.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group1/2.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group1/3.png`} />
            </div>
            <CustomText
              style={{ textAlign: 'left', marginTop: '60px' }}
              text={
                '환경표지인증 제도는 우리가 일상에서 사용하는 제품들이 환경에 미치는 영향을 줄이고,\n환경 보호에 기여할 수 있도록 하는 인증 시스템이에요.\n이 콘텐츠를 통해 학습자들은 이 제도의 의미와 중요성을 이해하고, 환경을 보호하는 소비 습관을 기를 수 있도록 도와요.'
              }
            />
          </div>
          <div className="customLeft">
            <div className="threeImgs">
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group2/1.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group2/2.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group2/3.png`} />
            </div>
            <CustomText
              style={{ textAlign: 'right', marginTop: '60px' }}
              text={
                '환경표지가 붙은 제품이 무엇을 의미하는지 설명하고, 환경표지가 소비자에게 제공하는 정보와 신뢰성에 대해 설명해요.\n환경표지가 붙은 제품을 왜 사용해야 할까요?\n환경표지가 붙은 제품을 선택할 때의 이점과 그 제품이 환경에 미치는 긍정적인 영향을 확인해보세요!'
              }
            />
          </div>
          <div className="customRight">
            <div className="threeImgs">
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group3/1.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group3/2.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group3/3.png`} />
            </div>
            <CustomText
              style={{ textAlign: 'left', marginTop: '60px' }}
              text={
                '생태적 발자국, 에너지 효율성, 유해물질 감소 등 주요 기준을 소개해요.\n일상 생활에서 쉽게 접할 수 있는 환경표지인증 제품들을 예로 들어 설명한답니다!\n우리 주변에 환경표지인증을 받은 제품이 있는지 둘러봐보세요!'
              }
            />
          </div>
          <div className="customLeft">
            <div className="threeImgs">
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group6/1.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group6/2.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group6/3.png`} />
            </div>
            <CustomText
              style={{ textAlign: 'right', marginTop: '60px' }}
              text={
                '환경표지와 관련된 이미지, 인증 과정의 다양한 사례들을 활용하여 시청각적으로 이해를 도와요.\n환경표지인증 제도의 중요성을 인식하고, 일상생활에서 환경 보호에 기여하는 방법을 배워보세요.\n환경 문제에 대한 관심을 높이고, 미래 세대가 환경을 생각하며 책임감 있는 소비 습관을 형성할 수 있을 때까지!'
              }
            />
          </div>
        </div>
      </div>
    </StyledEnvironmentalLabelingCertification>
  );
};

export default EnvironmentalLabelingCertification;
