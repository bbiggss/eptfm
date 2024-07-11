import React from 'react';

const BusinessItems = (data) => {
  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  return (
    <li>
      <div className="noHoverBox">
        <p>{data && data.text}</p>
        <img src={data && data.img} alt="" />
      </div>

      <div className="hoverBox">
        <img src={data && data.hoverImg} alt="" />
        <div>
          <p>{data && data.text}</p>
          <p>{renderTextWithLineBreaks(data && data.hoverText)}</p>
        </div>
      </div>
    </li>
  );
};

export default BusinessItems;
