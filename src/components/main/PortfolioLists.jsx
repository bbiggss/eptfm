import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PortfolioLists = ({ data, index }) => {
  const location = useLocation();
  console.log('location: ', location.pathname.split('/')[2]);
  console.log('index', index);
  return (
    <li>
      <Link to={`/${location.pathname.split('/')[2]}/${index + 1}`}>
        <div>
          <img src={data.pfItemImg} alt="" />
        </div>
        <div>
          <p>{data.pfItemBigTitle}</p>
          <p>{data.pfItemSmallTitle}</p>
        </div>
      </Link>
    </li>
  );
};

export default PortfolioLists;
