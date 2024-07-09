import React, { useEffect, useState } from 'react';
import { HeaderBox } from '../../assets/styles/header.styled';
import NavBox from './NavBox';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
      <div className="w-full bg-orange-300 border-2 border-zinc-500">
        <div className="sm:my-[20px] lg:my-[42px] bg-lime-300">
          <Link to={'/'}>
            <img src={img && img.logoImg} alt="" className="w-[122px] h-[18px]" />
          </Link>
          <span>{/* <FontAwesomeIcon icon={faBars} /> */}</span>
        </div>
      </div>

      {/* <HeaderBox id="header" className={headerClass}>
        <div id="headerContainer">
          <Link to={'/'}>
            <img src={img && img.logoImg} alt="" />
          </Link>
          <span>
            <ul>
              <NavBox title={'ABOUT US'} link={'about'} />
              <NavBox title={'BUSSINESS'} link={'business'} />
              <NavBox title={'PORTFOLIO'} link={'portfolio'} />
            </ul>
          </span>
        </div>
      </HeaderBox> */}
    </>
  );
};

export default Header;
