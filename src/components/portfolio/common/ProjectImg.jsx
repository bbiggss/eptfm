import React from 'react';

const ProjectImg = (data) => {
  return (
    <div className="img">
      <img src={data && data.src} alt="" />
    </div>
  );
};

export default ProjectImg;
