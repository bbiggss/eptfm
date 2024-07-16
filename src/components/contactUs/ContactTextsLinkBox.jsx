import React from 'react';

const ContactTextsLinkBox = (data) => {
  const btnClick = () => {
    if (data.clickOption === 'mail') {
      // 모달 on
      data.setModalStatus(true);
    } else {
      window.open('https://map.naver.com/p/entry/place/1597658006?c=15.15,0,0,0,dh', '_blank');
    }
  };
  return (
    <>
      <div id="common">
        <div className="c1">
          <p className="NanumSquareEB">{data.mainText}</p>
          <p className="NanumSquareB">{data.subText}</p>
        </div>
        <div className="c2">
          <button
            className="NanumSquareEB"
            onClick={() => {
              btnClick();
            }}
          >
            <p>{data.popupText}</p>
            <img src={`${process.env.PUBLIC_URL}/assets/images/contact/Group 25.png`} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactTextsLinkBox;
