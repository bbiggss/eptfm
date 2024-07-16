import React, { useEffect, useState } from 'react';

const ProjectDescription = (data) => {
  console.log('data: ', data.textPosition);
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
    <div className={`texts NanumSquareB ${positionRight}`}>
      {data && renderTextWithLineBreaks(data.text)}
    </div>
  );
};

export default ProjectDescription;
