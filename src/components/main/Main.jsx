import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainBox } from '../../assets/styles/main.styled';

const Main = ({ data }) => {
  return (
    <MainBox>
      <div>Main</div>
      <Link to={'/page1'}>page1 이동</Link>
      <br />
      <img src={data && data.testImg3} alt="" />
      <br />
      <img src={data && data.testImg1} alt="" />
      <br />
      <img src={data && data.testImg2} alt="" />
    </MainBox>
  );
};

export default Main;
