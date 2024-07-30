import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import TextCenter from '../../common/TextCenter';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import ProjectImg from '../../common/ProjectImg';

const FrenchClimateLifestyleBox = styled.div`
  .mainContainer {
    display: flex;
    .mainImg {
      width: 50%;
    }
    .mainTextsMonet {
      width: 50%;
      /* background-color: yellow; */
      padding-top: 63px;
      padding-left: 100px;

      .mainTexts {
        .title {
          color: #292929;
          font-size: 40px;
          line-height: 56px;
          letter-spacing: -2%;
        }
        .subTexts {
          margin-top: 34px;
          color: #767676;
          font-size: 26px;
          line-height: 40px;
          letter-spacing: -2%;
        }
      }
      .monet {
        width: 312px;
        margin-top: 100px;
        margin-left: 114px;
        img {
          width: 100%;
          &:first-child {
            margin-bottom: 31.44px;
          }
        }
      }
    }
  }
`;

const FrenchClimateLifestyle = () => {
  return (
    <FrenchClimateLifestyleBox>
      <Breadcrumb />
      <PortfolioTitle
        className="centeredContentWithMarginBottom"
        organization={'한국교육학술정보원'}
        field={'VR'}
        title={'모네의 작품으로 알아보는 프랑스 기후와 주민생활'}
      />
      <div className="fullScreen">
        <div className="mainContainer">
          <img
            className="mainImg"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/main1.png`}
            alt=""
          />
          <div className="mainTextsMonet">
            <div className="mainTexts">
              <p className="title NanumSquareEB">
                모네의 그림 속에서 만나는 프랑스의
                <br />
                기후와 생활!
              </p>
              <div className="subTexts NanumSquareB">
                <p>
                  모네의 작품을 감상하며 프랑스의 다양한 기후와 지리를 <br />
                  학습해보세요.
                  <br />
                  서안 해양성 기후와 지중해성 기후의 특성을 예술과 함께
                  <br />
                  즐길 수 있습니다.
                </p>
              </div>
            </div>

            <div className="monet">
              <img
                className="mainImg"
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/main2.png`}
                alt=""
              />
              <img
                className="mainImg"
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/main3.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="paddingTopBottom160">
        <TextCenter
          text={
            "'모네의 작품으로 알아보는 프랑스 기후와 주민생활'을 만들면서, 우리 팀은 모네의 화폭 속으로 여행을 떠났습니다.\n아, 그림 속 풍경을 보다가 커피를 엎지르는 일도 있었죠. 여러분도 모네의 작품을 통해 프랑스의 기후를 즐겨보세요!"
          }
        />
      </div>

      <div className="fullScreen paddingBottom160 hidden">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group1_1.png`}
          alt=""
        />
      </div>

      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_1.png`}
        />
        <TextCenter
          text={
            '우리팀은 “모네의 작품으로 알아보는 프랑스 기후와 주민 생활” 콘텐츠를\nVR로 구현하기 위해 미디어 아트 기술을 활용하여 그림을 생동감 있게 재현했어요.\n프랑스의 기후와 생활상을 쉽게 이해할 수 있도록 스토리텔링 요소를 가미했답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_2.png`}
        />
        <TextCenter
          text={
            '모네의 작품을 감상하면서 프랑스의 기후와 다양한 지리 정보를 학습할 수 있어요.\n서안 해양성 기후와 지중해성 기후의 특징과 관련 생활상을 작품을 통해 이해할 수 있답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_3.png`}
        />
        <TextCenter
          text={
            '모네가 오랜 기간 머물렀던 지베르니에서 그린 수련 시리즈는\n서안 해양성 기후의 온화한 기후화 연중 일정한 강수량을 잘 보여줘요.\n수련 연못에 비치는 초록빛 자연을 담아내어 기후의 온화함을 시각적으로 느껴볼 수 있어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_4.png`}
        />
        <TextCenter
          text={
            '건초더미를 다양한 시각과 기후 조건에서 그려낸 시리즈로,\n계절과 시간에 따른 기후 변화를 생생하게 볼 수 있답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_5.png`}
        />
        <TextCenter
          text={
            '모네가 보트 위에서 작업하면 그린 작품을 통해\n학습자들은 아르장퇴유의 온화한 기후와 고요한 강을 체험할 수 있어요.\n아루장퇴유 강가의 풍경이 담긴 작품은 강 주변의 자연과 일상생활을 잘 보여준답니다!'
          }
        />
      </WidthOneContent>

      <div className="fullScreen paddingBottom160 hidden">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group1_2.png`}
          alt=""
        />
      </div>

      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_6.png`}
        />
        <TextCenter
          text={
            '밀밭을 가로지르는 길을 그린 작품을 통해 \n학습자들은 온화한 기후가 만들어낸 풍성한 밀밭을 볼 수 있어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_7.png`}
        />
        <TextCenter
          text={
            '푸르빌 언덕에서 내려다 본 풍경이 궁금하지 않나요?\n이 작품을 통해 서안 해양성 기후의 영향을 받은 자연을 맘껏 둘러봐보세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_8.png`}
        />
        <TextCenter
          text={
            '태양빛이 강하게 비추는 에스테렐 산맥을 그린 이 작품을 통해\n학습자들은 지중해성 기후의 특징을 살펴볼 수 있어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_9.png`}
        />
        <TextCenter
          text={
            '모네의 작품을 통해 살펴본 프랑스의 다양한 기후를 한눈에 복습할 수 있어요.\n각 지역별 대표 작품과 기후적 특징을 다시 한번 정리하며, 학습자가 이해한 내용을 확인할 수 있어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent className="lastChild">
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_10.png`}
        />
        <TextCenter
          text={
            '프랑스의 주요 지역과 그 지역의 기후를 표시한 인터랙티브 지도를 통해\n모네의 작품을 한번 더 살펴보세요!'
          }
        />
      </WidthOneContent>
      <FixedButton />
    </FrenchClimateLifestyleBox>
  );
};

export default FrenchClimateLifestyle;
