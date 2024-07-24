import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import ProjectImg from '../../common/ProjectImg';
import TextCenter from '../../common/TextCenter';

const WaterTemperatureSalinityExplorationBox = styled.div`
  .mainImgContainer {
    margin-bottom: 89px;
    .medium {
      position: relative;
    }
    .rectangular {
      position: absolute;
      right: 0;
      width: 660px;
      height: 580px;
      background-color: rgba(15, 52, 79, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .right {
    position: ab;
    right: 0;
  }

  .title,
  .subTexts {
    color: white;
  }
  .fullScreen img {
    width: 100%;
  }
`;

const WaterTemperatureSalinityExploration = () => {
  return (
    <WaterTemperatureSalinityExplorationBox>
      <Breadcrumb />
      <PortfolioTitle
        className="centeredContentWithMarginBottom"
        organization={'한국교육학술정보원'}
        field={'VR'}
        title={'바닷속 생물 채집과 수온, 염분 탐사'}
      />
      <div className="fullScreen mainImgContainer">
        <div className="mediumScreen medium">
          <div className="rectangular">
            <div className="mainTexts">
              <PortfolioIntroduction
                title={'물고기와 함께 떠나는 바다 탐험! '}
                description={
                  '동해, 홍해, 북극해의 수온과 염분을 직접 측정하고,\n다양한 해양 생물을 채집해보세요.\n과학적 발견의 즐거움을 만끽하며 바다의 비밀을 \n파헤쳐보세요!'
                }
              />
            </div>
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/main.png`}
          alt=""
        />
      </div>
      <div className="smallScreen">
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/1.png`}
          />
          <TextCenter
            text={
              '이 콘텐츠를 만들기 위해 저희 팀은 물고기와 함께 수중 탐사대가 된 듯한 기분을 느꼈답니다.\n덕분에 진정한 바다 탐험의 매력을 담아낼 수 있었어요. 이젠 여러분도 가상 현실에서 바닷속 탐험가가 되어보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/2.png`}
          />
          <TextCenter
            text={
              '학습자들이 “바닷속 생물 채집과 수온, 염분 탐사” 콘텐츠를 통해 물고기를 잡으면서\n해수의 연직 수온 분포와 온도를 탐사하고, 해수에 녹아있는 물질과 염분의 차이를 학습할 수 있도록 구성했어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/3.png`}
          />
          <TextCenter
            text={
              'VR 기술을 활용하여 다양한 바닷속 생물과 함께 해양 과학의 신비를 탐헐할 수 있어요.\n다양한 해양 환경과 수온 분포를 이해하고, 물고기의 서식지를 탐사할 수 있답니다.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/4.png`}
          />
          <TextCenter
            text={
              '동해의 다양한 수온 분포와 물고기의 서식지를 체험할 수 있어요.\n고등어 잡으러 동해로! 물렁가시붉은새우와 향고래도 함께 발견해보세요. '
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/5.png`}
          />
          <TextCenter
            text={
              '깊은 바닷속으로 여행을 떠나볼까요?\n은지느러미상어와 초롱아귀도 만나 볼 수 있어요.\n 홍해의 고유한 해양 생태계와 온도 변화를 경험해보세요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/6.png`}
          />
          <TextCenter
            text={
              '북극해는 전체적으로 온도가 비슷해 연직 분포가 나타나지 않는다는 것을 알고 있나요?\n북극해에서 북대서양대구와 검정가자미 그리고 그린란드상어를 잡아보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/7.png`}
          />
          <TextCenter
            text={
              '모든 물고기를 잡으면 도감이 완성되고 연구실이 열린답니다.\n채취한 동해, 홍해, 북극해의 해수를 연구실로 가져와보세요.\n모든 물고기를 잡았다면, 이제 연구실에서 해수의 비밀을 파헤쳐볼 차례에요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent className="lastChild">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/8.png`}
          />
          <TextCenter
            text={
              '학습자들은 해수에 녹아 있는 물질을 실험을 통해 확인할 수 있어요.\n각 해수의 염분비를 그래프로 시각화하고 분석해요.\n바닷물이 왜 짠지 궁금하지 않나요? 해수에 어떤 물질이 녹아 있는지 실험으로 알아보세요!'
            }
          />
        </WidthOneContent>
      </div>
      <div className="fullScreen">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/bottom.png`}
          alt=""
        />
      </div>
      <FixedButton />
    </WaterTemperatureSalinityExplorationBox>
  );
};

export default WaterTemperatureSalinityExploration;
