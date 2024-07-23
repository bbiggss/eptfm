import React from 'react';

const ProjectImg = (data) => {
  return (
    <>
      <img className={`projectImg ${data && data.className}`} src={data && data.src} alt="" />
    </>
  );
};

export default ProjectImg;
