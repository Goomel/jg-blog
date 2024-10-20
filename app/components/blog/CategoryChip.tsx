import React from 'react';

const CategoryChip = ({ categoryName }: { categoryName: string }) => {
  return (
    <div>
      <div className="rounded bg-black-200 px-2 py-1 lg:px-3">
        <span className="text-sm text-gray-100 lg:text-base">{categoryName}</span>
      </div>
    </div>
  );
};

export default CategoryChip;
