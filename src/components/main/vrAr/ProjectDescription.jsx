import React from 'react';

const ProjectDescription = (data) => {
  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  return <div className="texts NanumSquareB">{data && renderTextWithLineBreaks(data.text)}</div>;
};

export default ProjectDescription;
