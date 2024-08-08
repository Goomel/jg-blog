import React from 'react';

const CategoryChip = ({ categoryName }: { categoryName: string }) => {
  return (
    <div>
      <div className="py-1 px-2 lg:px-3 rounded bg-black-500">
        <p className="text-sm lg:text-base text-gray-100">{categoryName}</p>
      </div>
    </div>
  );
};

export default CategoryChip;
