import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBox = ({ data }) => {
  const nav = useNavigate();
  return (
    <>
      <Link to={'/page1'}>
        <li>{data}</li>
      </Link>
    </>
  );
};

export default NavBox;
