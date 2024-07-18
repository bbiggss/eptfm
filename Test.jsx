import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';

import { ExploreDokdoBox } from '../../../../assets/styles/main/vrAr/exploreDokdo.styled';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const Test = () => {
  return (
    <>
      <Breadcrumb />
      <ExploreDokdoBox>
        <div className="textCenter">
          <PortfolioTitle
            organization={'한국교육학술정보원'}
            field={'VR'}
            title={'우리 땅, 독도 탐험하기'}
          />
        </div>
        <div className="mainImg">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ExploreDokdo/main.png`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/ExploreDokdo/main2.png`}
            alt=""
          />
        </div>
      </ExploreDokdoBox>
      <FixedButton />
    </>
  );
};

export default Test;
