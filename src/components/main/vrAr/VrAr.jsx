import React from 'react';
import { useParams } from 'react-router-dom';

const VrAr = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div>VrAr</div>
    </>
  );
};

export default VrAr;
