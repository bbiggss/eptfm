import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBox = ({ title, link, activeLink }) => {
  // console.log(activeLink);

  return (
    <>
      <li>
        <Link className={activeLink === link ? 'active' : ''} to={link}>
          {title}
        </Link>
      </li>
    </>
  );
};

export default NavBox;
