import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import ProjectImg from '../../common/ProjectImg';
import TextCenter from '../../common/TextCenter';
import CustomText from '../../common/CustomText';

const MapExpertBox = styled.div`
  .PortfolioTitleBox {
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
  }
  .heroSection {
    position: relative;
    .customText {
      position: absolute;
      margin-left: 330px;
      margin-top: 118px;

      color: #292929;
      font-size: 40px;
      line-height: 56px;
      font-family: 'NanumSquareEB';
    }
    img {
      width: 100%;
    }
  }
`;

const MapExpert = () => {
  return (
    <MapExpertBox>
      <Breadcrumb />

      <PortfolioTitle
        organization={'한국교육학술정보원'}
        field={'AR'}
        title={'지도를 볼 줄 아는, 나는 지도박사'}
      />

      <div className="fullScreen heroSection">
        <CustomText text={'지도를 자로 잴 수 있다고? \n놀라운 축척의 세계'} />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/main1.png`}
          alt=""
        />
      </div>

      <div className="paddingTop160 marginBottom100">
        <TextCenter
          text={
            "'지도를 볼 줄 아는, 나는 지도박사' 콘텐츠를 제작하면서, 우리 팀은 지도를 단순히 보는 것에서 벗어나\n학습자가 직접 만들고 측정해보는 체험형 학습을 제공하기 위해 노력했어요.\n지도의 기호와 범례를 직접 만들어보니, 마치 비밀 암호를 해독하는 기분이었어요!"
          }
        />
      </div>

      <div className="textCenter paddingBottom160">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/main2.png`}
          alt=""
        />
      </div>

      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/1.png`}
        />
        <TextCenter
          text={
            '학습자는 영상 지도를 참고하여 주요 도로, 일반 도로, 병원, 시청, 학교, 주택, 할인점 등의 \n범례에 맞는 기호를 통해 지도를 만들 수 있어요. \n지도의 비밀 기호를 풀어가며 나만의 지도를 완성할 수 있답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/2.png`}
        />
        <TextCenter
          text={
            '지도에서 볼 수 있는 다양한 구성 요소인 축적, 방위, 범례, 등고선 등을 학습할 수 있어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/3.png`}
        />
        <TextCenter
          text={
            'AR을 통해 실제 지도 위에 구성 요소를 표시하고, 각 요소의 역항을 학습해볼까요?\nAR 지도 속으로! 지도의 기본 구성 요소를 하나씩 살펴보며 지도 박사가 되어보세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/4.png`}
        />
        <TextCenter
          text={'지도의 방위를 이해하고, 나침반을 사용해 방위를 찾는 법을 체험해 볼 수 있어요.'}
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/5.png`}
        />
        <TextCenter
          text={
            'AR 지도를 책상에 띄워 나침반을 사용해 도전과제를 해결해보세요.\n최단거리를 이동해 목적지에 도착하여 미션을 해결할 수 있답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/6.png`}
        />
        <TextCenter
          text={
            '축척은 지도의 특정 길이가 실제 거리에서 얼마나 되는지를 나타내는 비율이에요.\n지도의 축적과 방위를 이해하고, 실제 거리를 계산하는 방법을 학습할 수 있어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent className="lastChild">
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/7.png`}
        />
        <TextCenter
          text={
            'AR을 통해 다양한 축척을 시각적으로 비교하고,\n축척이 다른 지도에서 같은 거리가 어떻게 표현되는지 체험해보세요!'
          }
        />
      </WidthOneContent>
      <FixedButton />
    </MapExpertBox>
  );
};

export default MapExpert;
