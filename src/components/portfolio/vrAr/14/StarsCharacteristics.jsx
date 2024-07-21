import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';
import PortfolioIntroduction from '../../common/PortfolioIntroduction';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import ProjectImg from '../../common/ProjectImg';
import TextCenter from '../../common/TextCenter';

const StarsCharacteristicsBox = styled.div`
  .mainTexts {
    position: absolute;
    right: 0;
    margin-top: 358px;
  }
`;
const StarsCharacteristics = () => {
  return (
    <StarsCharacteristicsBox>
      <Breadcrumb />

      <PortfolioTitle
        organization={'한국교육학술정보원'}
        field={'AR'}
        title={'별의 색과 밝기를 이용한 별의 특성 알아보기'}
      />

      <div className="fullScreen marginTop80 marginBottom111">
        <div className="mediumScreen relative">
          <div className="mainTexts">
            <PortfolioIntroduction
              title={'물고기와 함께 떠나는 바다 탐험! '}
              description={
                '동해, 홍해, 북극해의 수온과 염분을 직접 측정하고,\n다양한 해양 생물을 채집해보세요.\n과학적 발견의 즐거움을 만끽하며 바다의 비밀을 \n파헤쳐보세요!'
              }
            />
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/StarsCharacteristics/main1.png`}
          alt=""
        />
      </div>

      <div className="smallScreen">
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/StarsCharacteristics/1.png`}
          />
          <TextCenter
            text={
              '이 콘텐츠는 밤하늘의 수많은 별을 관찰하는 것에서 시작되었어요.\n 천체 망원경으로 별을 보며, 우리가 어릴 적 꿈꿨던 우주 탐험가가 된 듯한 기분을 되살려주는 프로젝트죠. \n여러분도 별의 세계로 떠나보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/StarsCharacteristics/2.png`}
          />
          <TextCenter
            text={
              '별은 저마다 다른 색을 띠며, 그 색은 별의 표면 온도와 관련이 있단 사실 알고 있었나요?\n별들도 옷 색깔처럼 온도에 따라 색이 변한답니다! 뜨거운 별은 쿨톤, 차가운 별은 웜톤이에요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/StarsCharacteristics/3.png`}
          />
          <TextCenter
            text={
              '학습자들은 우리 눈에 보이는 별의 밝기를 겉보기 등급으로 나타내고,\n별의 실제 밝기는 절대 등급으로 나타낸다는 것을 배울 수 있어요.\n가까이서 보면 밝지만, 멀리서 보면 흐릿해지는 마법 같은 이야기를 들어보세요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/StarsCharacteristics/4.png`}
          />
          <TextCenter
            text={
              '별의 스펙트럼을 측정하여 표면 온도를 알 수 있어요.\n스펙트럼형은 별들의 온도 무지개!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/StarsCharacteristics/5.png`}
          />
          <TextCenter
            text={
              '별의 색과 스펙트럼 노트를 통해서 학습자들은 스펙트럼의 특징에 따라\nO, B, A, F, G, K, M의 7가지 형태로 분류할 수 있다는 것을 알 수 있어요.\nO형은 불타는 태양, M형은 시원한 얼음별이랍니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/StarsCharacteristics/6.png`}
          />
          <TextCenter
            text={
              '학습자들이 직접 눈에 보이는 별의 밝기 순서대로 배치해보며 \n겉보기 등급을 나누어 볼 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/StarsCharacteristics/7.png`}
          />
          <TextCenter
            text={
              '별의 밝기 등급은 별들의 성적표 같아요.\n가까이서 보면 밝지만, 멀리서 보면 흐릿해지는 마법같은 이야기!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/StarsCharacteristics/8.png`}
          />
          <TextCenter
            text={
              '다양한 별의 색과 밝기를 AR로 관찰하며 복습할 수 있어요.\n별의 표면 온도와 밝기 등급을 시각적으로 이해하고 기억할 수 있답니다!\n별들의 성격을 모두 알아볼까요?'
            }
          />
        </WidthOneContent>
      </div>

      <FixedButton />
    </StarsCharacteristicsBox>
  );
};

export default StarsCharacteristics;
