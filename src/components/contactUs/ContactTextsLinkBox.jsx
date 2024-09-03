import React from 'react';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

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
      <div id="ContactTextsLinkBoxWrap">
        <div className="c1">
          <p className="NanumSquareEB">{data.mainText}</p>
          <p className="NanumSquareB">{renderTextWithLineBreaks(data.subText)}</p>
        </div>
        <div className="c2">
          <button
            className="NanumSquareEB"
            onClick={() => {
              btnClick();
            }}
          >
            <p className="popupText">{data.popupText}</p>
            <img className="moveIcon" src={`${process.env.PUBLIC_URL}/assets/images/contact/moveIcon.png`} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactTextsLinkBox;
