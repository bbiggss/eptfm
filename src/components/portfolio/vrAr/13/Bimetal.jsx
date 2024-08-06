import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import FixedButton from '../../../common/button/UpButton';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import ProjectDescription from '../../common/ProjectDescription';
import ProjectImg from '../../common/ProjectImg';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';

const BimetalBox = styled.div`
  .mainImgTexts {
    position: relative;
    .mainTexts {
      position: absolute;
      right: 0;
      margin-top: 142px;
      margin-right: 330px;
      text-align: right;

      .subTexts {
        color: #000000;
      }
    }
  }
`;

const Bimetal = () => {
  return (
    <BimetalBox>
      <Breadcrumb />

      <PortfolioTitle
        className="centeredContentWithMarginBottom"
        organization={'한국교육학술정보원'}
        field={'AR'}
        title={'열팽창 활용하여 바이메탈 만들기'}
      />
      <div className="fullScreen hidden">
        <div className="mainImgTexts">
          <div className="mainTexts">
            <PortfolioIntroduction
              title={'열팽창의 마법, 바이메탈'}
              description={
                '각기 다른 금속의 열팽창 특성을 실험하고, 온도에 따라 반응하는 구조물을 설계해보세요.\n온도 변화가 가져오는 놀라운 과학의 세계를 직접 체험해보세요!'
              }
            />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/main1.png`}
            alt=""
          />
        </div>
      </div>
      <div className="smallScreen paddingTop100">
        <WidthImgOneTextsOne pcPaddingBottom="160px">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/1.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`열팽창의 원리를 적용한 이 프로젝트는 저희팀의\n 실험실에서 뜨거운 열정으로 탄생했어요. \n다양한 금속을 테스트하는 과정에서 \n약간의 '불꽃놀이'도 경험했지만, \n그 덕분에 더 재미있는 콘텐츠가 완성되었답니다.`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="160px">
          <ProjectDescription
            text={`열팽창의 원리와 각 금속별로 열팽창\n 정도가 다름을 실험을 통해 학습하고,\n 이를 활용하여 구조물의 재료를 \n선택하거나 바이메탈을 만드는 \n과정을 체험할 수 있어요.`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/2.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="160px">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/3.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`AR(증강현실) 기술을 활용하여\n열팽창을 고려한 건축물의 안정성을\n학습할 수 있어요.`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="160px">
          <ProjectDescription
            text={`텅스텐, 철, 구리 중에서 올바른 \n건축자제를 선택하지 않으면\n건물이 와장창 무너질 수 있으니 \n조심해야 해요!`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/4.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="160px">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/5.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`실생활에서 자주 찾아볼 수 있는\n토스터기에도 바이메탈의 원리가\n적용되었다는 사실 알고 있었나요?`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="160px">
          <ProjectDescription
            text={`온도 감지 역할을 하는 바이메탈의\n원리를 잘 이해하고 직접 구성할 수 \n있어요. 빵이 타지 않게 조심하세요!`}
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/6.png`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne pcPaddingBottom="200px">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/7.png`}
          />
          <ProjectDescription
            textPosition={'right'}
            text={`열팽창 정도를 확인하고 적절하게\n조합해서 바이메탈의 비밀을 \n풀어보세요!`}
          />
        </WidthImgOneTextsOne>
      </div>
      <FixedButton />
    </BimetalBox>
  );
};

export default Bimetal;
