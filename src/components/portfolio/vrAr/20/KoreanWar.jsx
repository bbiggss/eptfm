import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';

import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import CustomText from '../../common/CustomText';

const StyledKoreanWar = styled.div`
  .heroImg {
    width: 100%;
    /* position: relative; */
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

      <div className="centerAlignment">123</div>

      <FixedButton />
    </StyledKoreanWar>
  );
};

export default KoreanWar;
