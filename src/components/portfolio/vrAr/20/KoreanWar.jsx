import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import styled from 'styled-components';

import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import CustomText from '../../common/CustomText';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import ProjectImg from '../../common/ProjectImg';
import TextCenter from '../../common/TextCenter';

const StyledKoreanWar = styled.div`
  .heroImg {
    width: 100%;
  }

  .introductionArea {
    padding-top: 200px;
    margin-bottom: 540px;
  }

  .introudctionImg1,
  .introudctionImg2,
  .introudctionImg3 {
    position: absolute;
  }
  .introudctionImg1 {
    left: 100px;
    top: 160px;
  }
  .introudctionImg2 {
    left: 320px;
    top: 580px;
  }
  .introudctionImg3 {
    right: 100px;
    top: 220px;
  }
`;

const KoreanWar = () => {
  return (
    <StyledKoreanWar>
      <div className="fullScreen heroArea relative">
        <Breadcrumb style={{ position: 'absolute' }} />

        <PortfolioTitleWrap
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '180px',
          }}
        >
          <PortfolioOrganization
            style={{ color: '#292929', fontFamily: 'NanumSquareB' }}
            organization={'한국교육학술정보원'}
          />
          <PortfolioFieldTitle
            style={{ color: '#292929', whiteSpace: 'nowrap' }}
            field={'VR'}
            title={'이중섭 작품을 통해 알아보는 6·25 전쟁'}
          />
        </PortfolioTitleWrap>

        <CustomText
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '460px',
            textAlign: 'center',
            color: '#292929',
            fontSize: '28px',
            lineHeight: '42px',
          }}
          text={
            '이중섭의 그림 속에서 625의 전쟁의 슬픔과 희망을 탐험하세요.\n전쟁의 역사를 예술로 배워보는 시간!'
          }
        />

        <img
          className="heroImg"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/hero.png`}
          alt=""
        />
      </div>

      <div className="introductionArea fullScreen relative">
        <img
          className="introudctionImg1"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group1/1.png`}
          alt=""
        />
        <img
          className="introudctionImg2"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group1/2.png`}
          alt=""
        />
        <img
          className="introudctionImg3"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group1/3.png`}
          alt=""
        />
        <CustomText
          style={{
            textAlign: 'center',
            fontSize: '26px',
            lineHeight: '42px',
          }}
          text={
            "'이중섭 그림을 통해 알아보는 625 전쟁' 콘텐츠는\n전쟁의 참상을 예술적으로 표현하고, 이를 통해 학습자들이\n역사적 사건을 더 깊이 이해할 수 있도록 기획되었어요.\n\n이중섭의 작품에 담긴 감정을 체험함으로써,\n전쟁의 아픔을 공감하고 현재의 평화와 \n자유의 가치를 다시 한번 되새겨볼까요?"
          }
        />
      </div>

      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/1.png`}
        />
        <TextCenter
          text={
            '‘이중섭 그림을 통해 알아보는 6.25 전쟁’ 콘텐츠를 제작하면서 우리팀은\n이중섭 화가의 섬세한 붓질과 깊은 감정을 VR로 재현하는 데 중점을 두었어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/2.png`}
        />
        <TextCenter
          text={
            '고화질 스캔과 3D 모델링 기술을 활용하여, 학습자가 마치 그림 속에 들어간 것처럼\n생생한 경험을 할 수 있도록 제작하려고 많은 노력을 했답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/3.png`}
        />
        <TextCenter
          text={
            '‘가난의 방’ 작품은 우리에게 진정한 가난의 의미를 다시금 일깨워줘요.\n‘가난의 방’에서 느껴지는 좁은 공간의 답답함과 인물들의 절박한 감정을\nVR환경에서 생생하게 전달하기 위해 많은 노력을 기울였어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/4.png`}
        />
        <TextCenter
          text={
            '‘환상의 방’은 이중섭의 작품 중에서도 특히나 독특한 분위기를 자아내는 작품이에요.\n작품 속의 몽환적인 분위기를 디지털 공간에서도 그대로 재현했어요.\n전쟁과 현실의 고통에서 잠시 벗어나고 싶은 사람들의 마음을 살펴보세요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/5.png`}
        />
        <TextCenter
          text={
            '아이들의 순수한 모습과 밝은 분위기를 표현하기 위해 작품의 색채와 질감을 세심하게 재현했어요.\n가장 중요한 포인트 중 하나는, 학습자들이 이 방에서 느낄 수 있는 감정적 교감을\n극대화 하는 것이었어요. 그 시대의 아이들이 지금도 이곳에서 놀고 있는 것 같은 느낌을 주고자 노력했답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/6.png`}
        />
        <TextCenter
          text={
            '‘길 떠나는 가족’을 기획할 때, 우리팀은 당시 피난민들이 겪었던 감정과 상황을 최대한 실감나게 재현하려 했어요.\n작품의 색감과 질감, 그리고 인물들의 표정까지 세심하게 디지털로 복원하였고,\nVR 환경에서 작품을 감상할 때 학습자들이 직접 그 시대로 돌아간 듯한 몰입감을 느낄 수 있도록 신경썼어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent $last>
        <ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/7.png`}
        />
        <TextCenter
          text={
            '학습자는 이 콘텐츠를 통해 단순한 역사적 사실의 나열이 아닌,\n예술작품을 통해 전쟁과 사회를 이해하는 깊은 경험을 느낄 수 있어요.'
          }
        />
      </WidthOneContent>
    </StyledKoreanWar>
  );
};

export default KoreanWar;
