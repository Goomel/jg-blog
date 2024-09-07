import React from 'react';

const CategoryChip = ({ categoryName }: { categoryName: string }) => {
  return (
    <div>
      <div className="rounded bg-black-200 px-2 py-1 lg:px-3">
        <span className="text-gray-100">{categoryName}</span>
      </div>
    </div>
  );
};

export default CategoryChip;
