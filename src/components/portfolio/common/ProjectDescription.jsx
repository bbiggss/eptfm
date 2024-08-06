import React, { useEffect, useState } from 'react';

const ProjectDescription = (data) => {
  const [positionRight, setPositionRight] = useState('');

  useEffect(() => {
    if (data.textPosition === 'right') {
      setPositionRight('positionRight');
    }
  }, [data.textPosition]);

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  return (
    <div style={data.style} className={`texts NanumSquareB ${positionRight}`}>
      {data && renderTextWithLineBreaks(data.text)}
    </div>
  );
};

export default ProjectDescription;
