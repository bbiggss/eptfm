import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import TextCenter from '../../common/TextCenter';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import ProjectImg from '../../common/ProjectImg';

const SurvivalBagBox = styled.div`
  .mainTitle {
    position: absolute;
    color: #ffffff;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: -2%;
    filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .absolute img {
    z-index: -1;
  }
  .test {
    margin-top: 400px;
    margin-bottom: 160px;
  }
`;

const SurvivalBag = () => {
  return (
    <SurvivalBagBox>
      <Breadcrumb />

      <PortfolioTitle
        organization={'한국교육학술정보원'}
        field={'VR'}
        title={'나만의 생존가방 준비하기'}
      />

      <div className="fullScreen marginTop80 relative hidden">
        <p className="mainTitle NanumSquareEB">지진 발생! 올바른 대피 방법은 무엇일까?</p>
        <img
          className="mainImg"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/main.png`}
          alt=""
        />
      </div>
      {/* <div className="hidden absolute">
        <img
          className="mainImg"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/backImg.png`}
          alt=""
        />
      </div> */}
      <div className="test">
        <TextCenter
          text={
            "'나만의 생존가방 준비하기' 콘텐츠는 현실적인 재난 상황을 체험하면서 생존에 필요한 지식과 기술을\n학습할 수 있도록 설계되었어요. 지진 대피 요령을 학습하고 생존가방을 꾸리는 과정을 체험해서\n진짜 재난 상황에서도 당황하지 않고 대처할 수 있답니다!"
          }
        />
      </div>

      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/1.png`}
        />
        <TextCenter
          text={
            '우리 팀은 ‘나만의 생존가방 준비하기’ 콘텐츠에 재난 상황에서 필요한\n생존가방을 준비하는 과정을 체험할 수 있도록 설계했어요.\n학습자들은 가상의 생존가방을 구성하면서 필수 아이템들을 학습하고,\n다양한 재난 상황에 맞춘 생존 전략을 익힐 수 있답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/2.png`}
        />
        <TextCenter
          text={
            'AR로 지진 상황을 체험하면서 재난 발생 시 생존가방의 중요성을 깨닫을 수 있어요.\n생존가방 구성의 기본 원칙과 필수 아이템들에 대해 학습해 볼까요?'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/3.png`}
        />
        <TextCenter
          text={
            '어떤 생존가방을 챙겨야 할까요?\n학습자들의 필요에 따라 추가해야 할 아이템들을 선택해서 올바른 생존가방 아이템을 챙겨보세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/4.png`}
        />
        <TextCenter
          text={
            'AR을 통해 물, 비상식량, 응급 키트, 손전등, 라디오, 방진 마스크, 헬멧 등\n필수 아이템을 생존가방에 추가해야 해요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/5.png`}
        />
        <TextCenter
          text={
            '실내에서 지진이 발생했을 때는 책상 아래로 몸을 숨겨야해요!\n그리고 우리 주변에서 쉽게 찾을 수 있는 비상 물품이 무엇이 있는지 같이 살펴보아요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/6.png`}
        />
        <TextCenter
          text={
            '물건을 다 챙겼다면, 실외에서 지진이 발생했을 때의 대피 요령을 학습할 수 있어요.\nAR 기술을 통해 가방을 챙겨 공터로 대피해보세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/7.png`}
        />
        <TextCenter
          text={
            '신발장 세우기 등 간단한 미니게임을 통해 지진의 위험성을 한번더 상기시킬 수 있어요.\n무시무시한 지진의 상황, 신발장을 세울 수 있도록 노력해보세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/8.png`}
        />
        <TextCenter
          text={
            '학습자의 참여를 유도하기 위해 인터랙티브한 요소를 많이 추가했답니다!\n지진 대비, 나만의 생존가방 준비하기! 안전을 위해 지금 바로 시작해볼까요?'
          }
        />
      </WidthOneContent>
      <FixedButton />
    </SurvivalBagBox>
  );
};

export default SurvivalBag;
