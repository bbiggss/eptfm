import React from 'react';
import { BongsuPavalBox } from '../../../../assets/styles/main/vrAr/bongsuPaval.styled';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import TextCenter from '../../common/TextCenter';
import ProjectImg from './ProjectImg';
import FixedButton from '../../../common/button/FixedButton';

const BongsuPaval = () => {
  return (
    <>
      <BongsuPavalBox>
        <div className="topImgTitle">
          <div className="mainImg">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/main.png`}
              alt=""
            />
          </div>
          <Breadcrumb />

          <div className="smallScreen">
            <div className="portfolioTitle">
              <p className="NanumSquareB">한국교육학술정보원</p>
              <p className="NanumSquareEB">
                AR <span className="NanumSquareL">I</span> 옛 사람들의 통신수단, 봉수제도와 파발제도
              </p>
            </div>
            <div className="imgTexts">
              <div className="left">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/left.png`}
                  alt=""
                />
              </div>
              <div className="right">
                <div className="mainDescriptionTextBox">
                  <p className="title NanumSquareEB">불과 연기로 전하는 고대의 지혜!</p>
                  <div className="subTexts NanumSquareB">
                    <p>증강현실로 5개의 봉수대를 설치하고, 상황에 맞게 연기와 횃불을 올려보세요.</p>
                    <p>
                      봉수제도와 파발제도를 통해 옛 사람들의 통신 방법과 지혜를 체험할 수 있습니다.
                    </p>
                  </div>
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/right.png`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="smallScreen">
          <div className="margin160">
            <TextCenter
              text={
                "'옛 사람들의 통신수단, 봉수제도와 파발제도' 콘텐츠를 개발하며,\n 우리 팀은 작은 불씨를 꺼트리지 않으려고 애쓰는 옛 사람들의 심정을 느꼈답니다."
              }
            />
          </div>

          <div className="projectDescriptions">
            <ProjectImg
              src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/1.png`}
              src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/2.png`}
            />
            <TextCenter
              text={
                "'옛 사람들의 통신수단, 봉수제도와 파발제도' 콘텐츠를 개발하며,\n 우리 팀은 작은 불씨를 꺼트리지 않으려고 애쓰는 옛 사람들의 심정을 느꼈답니다."
              }
            />
          </div>
          <div className="projectDescriptions">
            <ProjectImg
              src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/3.png`}
              src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/4.png`}
            />
            <TextCenter
              text={
                '평상시에는 하나의 신호, 적이 국경에 나타날 때는 둘, 국경에 근접할 경우 셋, 국경을 침입할 경우 넷,\n적군과 접전할 경우 다섯 개의 신호를 보냈어요. 신호의 숫자가 상황을 명확히 전달했답니다!'
              }
            />
          </div>
          <div className="projectDescriptions">
            <ProjectImg
              src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/5.png`}
              src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/6.png`}
            />
            <TextCenter
              text={
                '소식을 신속히 전달하기 위해 파발제도가 생겼어요.\n봉수제도가 구름이나 안개로 신호 전달이 어려울 때 이를 보완하는 역할을 했답니다.'
              }
            />
          </div>
          <div className="projectDescriptions">
            <ProjectImg
              src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/7.png`}
              src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/8.png`}
            />
            <TextCenter
              text={
                '파발은 말을 이용한 ‘기발’과 도보를 이용한 ‘보발’로 나뉘어요.\n두 방식 모두 빠르고 정확하게 정보를 전달하는 데 중요한 역할을 했답니다.\n우리는 ‘타임 어택’ 게임형식을 도입하여,  봉수제도와 파발제도의 이해를 도왔어요. '
              }
            />
          </div>
          <div className="projectDescriptions">
            <ProjectImg
              src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/9.png`}
              src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/10.png`}
            />
            <TextCenter
              text={
                '주어진 시간 내에 봉수제도와 파발제도의 미션을 완료하지 못하면 실패적인 결말을 맞이하고,\n시간 내에 완료하면 성공하는 두 가지 결말을 경험할 수 있답니다!\n긴장감 넘치는 게임 형식으로 역사적 통신 수단을 체험할 수 있어요.'
              }
            />
          </div>
          <div className="projectDescriptions">
            <ProjectImg
              src1={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/11.png`}
              src2={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/BongsuPaval/12.png`}
            />
            <TextCenter
              text={
                '‘옛 사람들의 통신 수단, 봉수제도와 파발제도’ 콘텐츠는 단순한 학습을 넘어, 사용자에게 몰입감을 주는 VR 체험을 제공해요.\n긴급한 상황에서 봉수대 신호를 보내고, 빠른 시간 내에 파발을 통해 문서를 전달하는 미션을 통해\n옛 통신 방식을 재미있게 배울 수 있답니다! 이 콘텐츠와 함께 옛 통신 수단의 신비를 체험해보세요!'
              }
            />
          </div>
        </div>
      </BongsuPavalBox>
      <FixedButton />
    </>
  );
};

export default BongsuPaval;
