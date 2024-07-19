import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';
import styled from 'styled-components';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};
const TestBox = styled.div``;

const Bimetal = () => {
  return (
    <BimetalBox>
      <Breadcrumb />
      <FixedButton />

      <div className="textCenter">
        <PortfolioTitle
          organization={'한국교육학술정보원'}
          field={'VR'}
          title={'우리 땅, 독도 탐험하기'}
        />
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/main.png`}
        alt=""
      />
    </BimetalBox>
  );
};

export default Bimetal;
