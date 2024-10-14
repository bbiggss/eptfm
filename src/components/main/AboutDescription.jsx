import React, { forwardRef, useEffect, useState } from 'react';
import { StyledAboutDescription } from '../../assets/styles/main/aboutDescription.styled';

const AboutDescription = forwardRef((props, ref) => {
  const [valueBox, setValueBox] = useState('');

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  useEffect(() => {
    if (props.textsTitle === 'VALUE' && window.innerWidth > 1025) {
      setValueBox('marginLeft182');
    } else {
      setValueBox('');
    }
  }, [props.textsTitle]);
  return (
    <StyledAboutDescription ref={ref} className="slideUp">
      {props.img && <img src={props && props.img} alt="" />}
      <div className={`textsBoxContainer ${valueBox}`}>
        <p className="textsTitle">{props && props.textsTitle}</p>
        <p className="textsSubTitle">{props && props.textsSubTitle}</p>
        <p className="textsContents">{renderTextWithLineBreaks(props && props.textsContents)}</p>
      </div>
    </StyledAboutDescription>
  );
});

export default AboutDescription;
