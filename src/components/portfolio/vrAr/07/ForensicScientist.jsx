import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import ProjectImg from '../../common/ProjectImg';
import TextCenter from '../../common/TextCenter';

const ForensicScientistBox = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  .textCenter {
    margin-bottom: 80px;
  }
  .box1 {
    position: relative;
    width: 100%;
    height: 618px;
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .mainBackgroundImg {
    position: relative;
    height: 900px;
    .backgroundImg {
      position: absolute;
      width: 100%;
    }
    .mainTexts {
      /* display: flex;
      justify-content: center; */
      padding-top: 270px;
      text-align: center;

      .subTexts {
        color: #292929;
      }
    }
    .powder {
      margin-top: 100px;
    }
  }
  .margin200 {
    margin-top: 200px;
    margin-bottom: 200px;
    margin-left: 800px;
    text-align: left;
  }
  .detailedDescription {
    position: relative;
    text-align: center;
    margin-bottom: 160px;
    /* background-color: yellow; */
    &:last-child {
      margin-bottom: 200px;
    }
    .left {
      position: absolute;
      left: 0;
      bottom: 510px;
    }
    .right {
      position: absolute;
      right: 0;
      top: -209px;
    }

    .projectImg {
      background-color: red;
      margin-bottom: 60px;
    }
  }
`;

const ForensicScientist = () => {
  return (
    <>
      <Breadcrumb />
      <ForensicScientistBox>
        <PortfolioTitle
          organization={'한국교육학술정보원'}
          field={'VR'}
          title={'과학수사요원이 되어 범인을 찾아라!'}
        />
        <div className="box1">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/main.png`}
            alt=""
          />
        </div>

        <div className="mainBackgroundImg">
          <img
            className="backgroundImg"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/main2.png`}
            alt=""
          />
          <div className="mainTexts">
            <PortfolioIntroduction
              title={'크로마토그래피로 범인을 찾는 과학수사 체험!'}
              description={
                '과학수사요원이 되어 혼합물 분리 방법을 배우고,\n 혈흔 분석, 족적 확인, 지문 채취 등 다양한 과학수사 과정을 체험해보세요.'
              }
            />
            <img
              className="powder"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/main3.png`}
              alt=""
            />
          </div>
        </div>
        <div className="margin200">
          <TextCenter
            className="textLeft"
            text={
              "'과학수사요원이 되어 범인을 찾아라!' 콘텐츠를 제작하면서, \n우리 팀은 CSI 요원이 된 듯한 기분이었어요. \n잉크를 분리하는 크로마토그래피 실험 중에는 누가 내 커피를 \n훔쳐 마셨는지까지 알아낼 뻔 했어요."
            }
          />
        </div>
        <div className="detailedDescription">
          <img
            className="left"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/side1.png`}
            alt=""
          />
          <img
            className="right"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/side2.png`}
            alt=""
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/1.png`}
          />
          <TextCenter
            text={
              '‘과학수사요원이 되어 범인을 잡아라!’ 콘텐츠를 통해 학습자가 과학수사요원이 되어 범죄 현장을 조사하고,\n증거를 수집하며 최종적으로 범인을 검거하는 과정까지 체험할 수 있어요.'
            }
          />
        </div>
        <div className="detailedDescription">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/2.png`}
          />
          <TextCenter
            text={
              'VR을 통해 현실감 넘치는 범죄 현장을 둘러보고, 과학적인 방법을 활용해\n범인을 찾아가는 재미와 교육적 가치를 동시에 제공한답니다!\n현장에서 발견된 증거들을 사진 촬영하여 발생 사건 분석 보고서를 확인 할 수 있어요.'
            }
          />
        </div>
        <div className="detailedDescription">
          <img
            className="left"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/side3.png`}
            alt=""
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/3.png`}
          />
          <TextCenter
            text={
              '현장에서 수집한 지문을 수집하여 국립과학수사연구원으로 전달할 수 있어요.\n지문 데이터베이스와 비교하여 범인을 특정하는 데 사용된답니다!\n지문 하나가 진실을 밝혀낼 수 있어요. 손끝에서 시작되는 추적의 여정!'
            }
          />
        </div>
        <div className="detailedDescription">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/4.png`}
          />
          <TextCenter
            text={
              '혈청을 사용한 혈흔 확인 실험을 통해 혈액형을 분석하고, 이를 기반으로 범인의 특성을 추정할 수 있어요.\n이 범죄는 피로 쓰여진 퍼즐이다! 혈액형 분석으로 그 퍼즐을 맞춰보세요!'
            }
          />
        </div>
        <div className="detailedDescription">
          <img
            className="right"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/side4.png`}
            alt=""
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/5.png`}
          />
          <TextCenter
            text={
              '현장에 남아있는 족적을 통해 신발 크기와 종류를 예측할 수 있고, 범인의 이동 경로와 신장을 추정할 수 있어요.\n발자국은 말을 하지 않지만, 우리가 찾는 진실을 속삭인답니다!'
            }
          />
        </div>
        <div className="detailedDescription">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/6.png`}
          />
          <TextCenter
            text={
              '현장에서 발견된 머리카락을 통해 곱슬, 직모 여부와 염색 여부를 판단해보세요.\n용의자의 외모를 특정하는 데 중요한 단서가 된답니다.\n머리카락 한 올이 수사의 방향을 결정짓기도 해요. 여러분의 관찰력이 빛날 차례에요!'
            }
          />
        </div>
        <div className="detailedDescription">
          <img
            className="left"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/side5.png`}
            alt=""
          />
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/7.png`}
          />
          <TextCenter
            text={
              '현관에서 범인이 흘린 수첩을 발견해보세요! \n이 수첩은 크로마토그래피 실험에서 중요한 단서로 활용된답니다.\n범인의 비밀이 담긴 수첩을 찾으면, 수첩 속 글자가 여러분들의 열쇠가 될 수 있어요!'
            }
          />
        </div>
        <div className="detailedDescription">
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ForensicScientist/8.png`}
          />
          <TextCenter
            text={
              '크로마토그래피를 통해 혼합물을 어떻게 분리할 수 있는지 학습할 수 있어요.\n우리 팀은 학습자들이 몰입할 수 있도록 디테일한 부분까지 신경 썼답니다.\n크로마토그래피 실험은 마치 실험실에 있는 듯한 현실감을 주기 위해 여러번의 테스트를 거쳤어요!\n‘과학수사요원이 되어 범인을 찾아라’ 콘텐츠를 통해 과학수사의 매력을 체험해보세요. '
            }
          />
        </div>
      </ForensicScientistBox>
      <FixedButton />
    </>
  );
};

export default ForensicScientist;
