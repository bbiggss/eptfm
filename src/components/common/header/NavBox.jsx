import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBox = ({ title, link, activeLink, setActiveLink }) => {
  const linkClick = ({ title }) => {
    setActiveLink(title);
  };
  return (
    <>
      <li>
        <Link
          onClick={() => linkClick({ title })}
          className={activeLink === title ? 'active' : ''}
          to={link}
        >
          {title}
        </Link>
      </li>
    </>
  );
};

export default NavBox;
