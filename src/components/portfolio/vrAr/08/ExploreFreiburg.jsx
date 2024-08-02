import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import FixedButton from '../../../common/button/UpButton';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import TextCenter from '../../common/TextCenter';
import styled from 'styled-components';
import ZigZagImgTexts from '../../common/ZigZagImgTexts';
import ProjectImg from '../../common/ProjectImg';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import { Zigzag } from '../../../../assets/styles/portfolio/common/zigZag.styled';

const ExploreFreiburgBox = styled.div`
  .textCenter {
    .mainImg1 {
      margin-top: 88px;
      margin-bottom: 52px;
    }
    .mainImg2 {
      margin-top: 160px;
      margin-bottom: 100px;
    }
    .marginBottom160 {
      margin-bottom: 160px;
    }
  }
  .topText {
    color: #292929;
    font-size: 28px;
    padding-top: 160px;
    padding-bottom: 100px;
  }
  .fff6df {
    background-color: #fff6df;
  }
`;

const ExploreFreiburg = () => {
  return (
    <ExploreFreiburgBox>
      <Breadcrumb />
      <PortfolioTitle
        className="centeredContentWithMarginBottom"
        organization={'한국교육학술정보원'}
        field={'VR'}
        title={'세계의 환경 수도 프라이부르크 구경하기'}
      />
      <div className="textCenter">
        <img
          className="mainImg1"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/main1.png`}
          alt=""
        />
        <PortfolioIntroduction
          title={'독일의 환경 수도, 생태도시 프라이부르크로 떠나는 여행!'}
          description={
            '가상의 프라이부르크에서 친환경 생태도시의 생활공간을 체험해보세요.\n여행을 통해 지속 가능한 도시의 미래를 만나보세요.'
          }
        />
        <img
          className="mainImg2"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/main2.png`}
          alt=""
        />
        <div className="marginBottom160">
          <TextCenter
            text={
              '메타버스 공간에서 자유롭게 이동하며 NPC와 대화해보세요.\n가상의 프라이부르크를 자유롭게 여행하며 친환경 생태도시의 일상생활을 체험할 수 있답니다!'
            }
          />
        </div>

        <div className="fullScreen fff6df">
          <p className="topText NanumSquareB">
            이제 여러분도 집에서 친환경 도시를 탐험하며, 녹색 미래를 경험해보세요!
          </p>
          <Zigzag>
            <div className="left">
              <ZigZagImgTexts
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_1.png`}
                text={
                  'VR 기술을 활용하여 학습자가 실제로\n 프라이부르크를 방문한 것처럼 생생한\n체험을 할 수 있도록 세밀하게 도시를 재현했어요!'
                }
              />
              <ZigZagImgTexts
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_3.png`}
                text={
                  '학습자가 프라이부르크의 친환경 정책을\n직접 경험하고 이해할 수 있도록 하는 것이\n콘텐츠 개발 과정에서 가장 중점을 둔 부분이에요.'
                }
              />
            </div>
            <div className="right">
              <img
                className="sideImg1"
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/side1.png`}
                alt=""
              />
              <ZigZagImgTexts
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_2.png`}
                text={'여러차례의 테스트를 통해\n사용자 경험을 최적화 했답니다!'}
              />
              <ZigZagImgTexts
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_4.png`}
                text={
                  '이러한 노력을 통해 학습자는 재미있고\n유익하게 지속 가능한 도시의 모델을 배울 수 있어요.\n프라이부르크의 숨은 매력을 발견해보세요!'
                }
              />
            </div>
          </Zigzag>
        </div>

        <div className="fullScreen">
          <WidthOneContent className="paddingTop160">
            <img
              className="left2"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/side2.png`}
              alt=""
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group2_1.png`}
            />
            <TextCenter
              text={
                '자전거와 트램을 이용한 친환경 교통정책을 체험할 수 있어요.\n여기는 자전거와 트램 천국!'
              }
            />
          </WidthOneContent>
          <WidthOneContent>
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group2_2.png`}
            />
            <TextCenter
              text={
                '자동차가 다닐 수 없는 보행자 전용 구역을 걸으며, 걷기 좋은 도시의 매력을\n만끽할 수 있어요. 차 없는 거리, 여유로운 보행의 즐거움을 느껴보세요!'
              }
            />
          </WidthOneContent>
          <WidthOneContent>
            <img
              className="right2"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/side3.png`}
              alt=""
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group2_3.png`}
            />
            <TextCenter
              text={
                '도심의 기온을 조절하고 시민들의 쉼터가 되어주는 수로를 통해\n자연이 주는 혜택을 체험할 수 있어요. 도심 속 오아시스, 베힐레 수로!'
              }
            />
          </WidthOneContent>
          <WidthOneContent>
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group2_4.png`}
            />
            <TextCenter
              text={
                '에너지 자립마을 보방에 위치한 패시브 하우스 단지와 솔라 주차장을 방문해서\n지속 가능한 에너지 사용을 경험할 수 있어요. 태양이 만드는 에너지 자립으로\n자동차도 포기한 재미있는 주민들의 이야기도 들어보세요!'
              }
            />
          </WidthOneContent>
          <WidthOneContent>
            <img
              className="left3"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/side4.png`}
              alt=""
            />
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group2_5.png`}
            />
            <TextCenter
              text={
                '세계 최초 회전형 태양광 주택을 탐험하며 에너지 생산의 혁신을 학습해보세요.\n돌아가는 태양광 주택, 헬리오트롭!'
              }
            />
          </WidthOneContent>
          <WidthOneContent>
            <ProjectImg
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group2_6.png`}
            />
            <TextCenter
              text={
                '탄소제로 축구장과 축구장에 설치된 태양광 발전소를 통해 스포츠와 환경의\n만남을 체험할 수 있어요. 탄소제로 축구의 미래를 확인해보세요!'
              }
            />
          </WidthOneContent>
        </div>

        <div className="fullScreen fff6df">
          <Zigzag className="paddingTop160">
            <div className="left">
              <ZigZagImgTexts
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_5.png`}
                text={
                  '프라이부르크 콘텐츠에 등장하는 귀여운 솔라의\n미션을 해결하면서 마을을 돌아다닐 수 있어요.'
                }
              />
              <ZigZagImgTexts
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_7.png`}
                text={'검은 숲의 비밀을 찾아서\n미션을 해결하고, 검은 숲을 탐험해보세요.'}
              />
            </div>
            <div className="right">
              <ZigZagImgTexts
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_6.png`}
                text={'빵집에서 프레첼을 구매해서\n숨어있는 퀘스트를 해결해보세요!'}
              />
              <ZigZagImgTexts
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_8.png`}
                text={'편리한 퀘스트 확인 창으로\n학습자들의 편의성도 도모했답니다!'}
              />
            </div>
          </Zigzag>
        </div>
      </div>
      <FixedButton />
    </ExploreFreiburgBox>
  );
};

export default ExploreFreiburg;
