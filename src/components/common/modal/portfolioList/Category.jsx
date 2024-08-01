import React from 'react';

const Category = (data) => {
  return (
    <p className="category" style={data && data.style}>
      {data.category}
    </p>
  );
};

export default Category;
