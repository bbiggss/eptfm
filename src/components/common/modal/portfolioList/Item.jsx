import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ name, setPortfolioListModalStatus, link }) => {
  return (
    <Link onClick={() => setPortfolioListModalStatus(false)} to={link}>
      <li className="item">
        {name}
        <img
          className="move"
          src={`${process.env.PUBLIC_URL}/assets/images/common/move.png`}
          alt=""
        />
      </li>
    </Link>
  );
};

export default Item;
