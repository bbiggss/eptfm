import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/portfolioTitle/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import ProjectImg from '../../common/ProjectImg';
import TextCenter from '../../common/TextCenter';
import ZigZagImgTexts from '../../common/ZigZagImgTexts';
import { Zigzag } from '../../../../assets/styles/portfolio/common/zigZag.styled';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';

const BoneJointMuscleBox = styled.div`
  .PortfolioTitleBox {
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
  }
  .fff6df {
    background-color: #fff6df;
    margin-bottom: 160px;
  }
  .mainContainer {
    position: relative;
    margin-bottom: 200px;
    padding-top: 158px;

    img {
      position: absolute;
      top: 0;
      right: 0;
    }

    .rectangle {
      position: relative;
      background-color: rgba(234, 181, 102, 0.9);
      width: 950px;
      height: 680px;

      .PortfolioIntroductionBox {
        position: absolute;
        margin-top: 187px;
        margin-left: 330px;
        .title,
        .subTexts {
          color: #ffffff;
        }
      }
    }
  }
  .common {
    display: flex;
    /* background-color: yellow; */
    text-align: center;
    padding-bottom: 200px;
    .left + .right {
      margin-left: 60px;
    }
    .right {
      position: relative;
      margin-top: 130px;
      .sideImg1 {
        top: -453px;
        right: -173px;
        position: absolute;
      }
    }
  }
`;

const BoneJointMuscle = () => {
  return (
    <BoneJointMuscleBox>
      <Breadcrumb />

      <PortfolioTitle
        organization={'한국교육학술정보원'}
        field={'AR'}
        title={'뼈, 관절, 근육! 우리 몸을 움직이는 세박자'}
      />
      <div className="fullScreen mainContainer">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/main1.png`}
          alt=""
        />
        <div className="rectangle">
          <PortfolioIntroduction
            title={'관절의 움직임을 따라 춤추는\n뼈의 하모니를 경험해보세요!'}
            description={
              "'뼈, 관절,근육! 우리 몸을 움직이는 세 박자' \n콘텐츠를 제작하면서, 우리 팀은 학습자들이 \n몸의 구조와 기능을 재미있고 흥미롭게 \n학습할 수 있도록 많은 고민을 했어요."
            }
          />
        </div>
      </div>

      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_1.png`}
        />
        <TextCenter
          text={
            '뼈를 직접 조립하고, 관절을 움직이며, 근육의 변화를 관찰하는 과정에서\n학습자가 직접 체험하고 느낄 수 있도록 다양한 인터랙션을 설계했어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_2.png`}
        />
        <TextCenter
          text={
            '학습자는 머리뼈, 목뼈, 팔뼈, 갈비뼈, 척추뼈(등뼈), 다리뼈 등\n우리 몸의 주요 뼈들을 직접 조립해보며 뼈의 구조와 기능을 학습할 수 있어요. '
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_3.png`}
        />
        <TextCenter
          text={
            'AR로 직접 탐험하는 뼈의 세계! \n두개골에서 발끝까지 우리몸을 지탱하는 뼈들을 자세히 살펴볼까요?'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_4.png`}
        />
        <TextCenter
          text={
            '인체의 다양한 관절 종류와 그 기능을 학습할 수 있어요.\n구부리고 펴는 관절, 회전하는 관절 등 다양한 관절의 움직임을 AR로 확인할 수 있답니다!'
          }
        />
      </WidthOneContent>

      <div className="fullScreen fff6df">
        <Zigzag className="paddingTop160">
          <div className="left">
            <ZigZagImgTexts
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group2_1.png`}
              text={'관절을 구성하는 연골, 인대, 활액 등의\n구조에 대해 학습할 수 있어요.'}
            />
            <ZigZagImgTexts
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group2_2.png`}
              text={'관절의 건강을 유지하고\n관절 질환을 예방하는 방법을 학습해요.'}
            />
          </div>
          <div className="right">
            <ZigZagImgTexts
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group2_3.png`}
              text={
                'AR을 통해 관절의 단면을 시각적으로 확인하고\n각 구성 요소의 역할을 배울 수도 있답니다!'
              }
            />
            <ZigZagImgTexts
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group2_4.png`}
              text={
                'AR로 배우는 관절 건강 비법!\n관절을 보호하고 건강하게 유지하는 방법을 배워볼까요?'
              }
            />
          </div>
        </Zigzag>
      </div>

      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_5.png`}
        />
        <TextCenter
          text={
            '인체를 움직이게 하는 근육의 구조와 기능을 학습할 수 있어요!\n주요 근육의 위치와 이름을 AR로 확인하고, 각 근육의 역할을 배울 수 있답니다.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_6.png`}
        />
        <TextCenter
          text={
            '근육이 어떻게 수축하고 이완하는지 알고 있나요?\n근육의 작용 원리를 AR 애니메이션을 통해 시각적으로 확인할 수 있어요.\n근육이 어떻게 작용하는지 직접 눈으로 확인해보세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent className="lastChild">
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_7.png`}
        />
        <TextCenter
          text={
            '걷기, 공차기, 점프하기 그리고 춤추는 해골친구를 만나보세요!\n인체의 놀라운 구조와 기능을 눈앞에서 확인하는 신나는 여정이 기다리고 있답니다!'
          }
        />
      </WidthOneContent>
      <FixedButton />
    </BoneJointMuscleBox>
  );
};

export default BoneJointMuscle;
