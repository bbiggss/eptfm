import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

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

  const width = useWindowWidth();
  const isMobile = width <= 767;

  const smallTitle = isMobile ? data.mobile_pfItemSmallTitle : data.pfItemSmallTitle;

  return (
    <li>
      {/* <Link to={`/portfolio/${location.pathname.split('/')[2]}/${index + 1}`}> */}
      <Link to={`/portfolio/${location.pathname.split('/')[2]}/${data.pfItemSmallTitle}`}>
        <div className="thumbnail">
          <img src={`${data.pfItemImg}`} alt="" />
        </div>
        <div className="thumbnailTexts">
          <p className="NanumSquareB">{data.pfItemBigTitle}</p>
          <p className="NanumSquareEB">{renderTextWithLineBreaks(smallTitle)}</p>
        </div>
      </Link>
    </li>
  );
};

export default PortfolioLists;
