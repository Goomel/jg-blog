import React from 'react';

const CategoryChip = ({ categoryName }: { categoryName: string }) => {
  return (
    <div>
      <div className="rounded border border-lemon-500 px-2">
        <span className="text-sm font-medium text-gray-100">{categoryName}</span>
      </div>
    </div>
  );
};

export default CategoryChip;
