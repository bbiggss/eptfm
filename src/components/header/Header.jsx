import React, { useEffect, useState } from 'react';
import { HeaderBox, HeaderPlaceholder } from '../../assets/styles/header.styled';
import NavBox from './NavBox';
import { Link } from 'react-router-dom';

const Header = ({ img }) => {
  const [headerClass, setHeaderClass] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderClass('colored');
      } else {
        setHeaderClass('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <HeaderBox id="header" className={headerClass}>
        <div id="headerContainer">
          <Link to={'/'}>
            <img id="logoImg" src={img && img.logoImg} alt="" />
          </Link>
          <span>
            <img id="dropDownImg" src={img && img.dropDown} alt="" />
            <ul>
              <NavBox title={'ABOUT US'} link={'about'} />
              <NavBox title={'BUSSINESS'} link={'business'} />
              <NavBox title={'PORTFOLIO'} link={'portfolio'} />
            </ul>
          </span>
        </div>
      </HeaderBox>
      <HeaderPlaceholder />
    </>
  );
};

export default Header;
