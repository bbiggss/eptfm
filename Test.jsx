import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitle from '../../common/PortfolioTitle';
import FixedButton from '../../../common/button/FixedButton';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};
const TestBox = styled.div``;

const Test = () => {
  return (
    <TestBox>
      <Breadcrumb />

      <div className="textCenter">
        <PortfolioTitle
          organization={'한국교육학술정보원'}
          field={'VR'}
          title={'우리 땅, 독도 탐험하기'}
        />
      </div>
      <FixedButton />
    </TestBox>
  );
};

export default Test;
