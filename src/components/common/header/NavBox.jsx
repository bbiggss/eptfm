import React from 'react';
import { Link } from 'react-router-dom';

const NavBox = ({ title, link }) => {
  return (
    <>
      <li>
        <Link to={link}>{title}</Link>
      </li>
    </>
  );
};

export default NavBox;
