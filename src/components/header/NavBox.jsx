import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBox = ({ title, link }) => {
  const nav = useNavigate();
  return (
    <>
      <li>
        <Link to={link}>{title}</Link>
      </li>
    </>
  );
};

export default NavBox;
