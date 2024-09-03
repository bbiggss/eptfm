import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const PortfolioLists = ({ data, index }) => {
  const location = useLocation();

  return (
    <li>
      {/* <Link to={`/portfolio/${location.pathname.split('/')[2]}/${index + 1}`}> */}
      <Link to={`/portfolio/${location.pathname.split('/')[2]}/${data.pfItemSmallTitle}`}>
        <div className="thumbnail">
          <img src={`${data.pfItemImg}`} alt="" />
        </div>
        <div className="thumbnailTexts">
          <p className="NanumSquareB">{data.pfItemBigTitle}</p>
          <p className="NanumSquareEB">{renderTextWithLineBreaks(data.pfItemSmallTitle)}</p>
        </div>
      </Link>
    </li>
  );
};

export default PortfolioLists;
