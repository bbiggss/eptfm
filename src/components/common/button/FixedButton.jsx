import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BtnBox = styled.div`
  .btnBox {
    position: fixed;
    right: 72px;
    bottom: 0;
    /* background-color: yellow; */
    img {
      cursor: pointer;
      border-radius: 50%;
    }
    img:last-child {
      margin-top: 24px;
      margin-bottom: 60px;
    }
  }
`;

const FixedButton = () => {
  const [topBtnView, setTopBtnView] = useState('');
  //   const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 500) {
        setTopBtnView('');
      } else {
        setTopBtnView('displayNone');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const listBtn = () => {
    alert('리스트팝업');
  };
  return (
    <BtnBox>
      <div className={`btnBox`}>
        <img
          className={topBtnView}
          // onClick={() => nav(-1)}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          src={`${process.env.PUBLIC_URL}/assets/images/btn_up.png`}
          alt=""
        />
        <br />
        <img
          onClick={listBtn}
          src={`${process.env.PUBLIC_URL}/assets/images/btn_p_list.png`}
          alt=""
        />
      </div>
    </BtnBox>
  );
};

export default FixedButton;
