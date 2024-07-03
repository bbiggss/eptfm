import React from 'react';
import { Link } from 'react-router-dom';

const NavBox = ({ title, link }) => {
  // const nav = useNavigate();
  return (
    <>
      <li>
        <a href={`#${link}`}>{title}</a>
        {/* <Link to={link}>{title}</Link> */}
      </li>
    </>
  );
};

export default NavBox;
