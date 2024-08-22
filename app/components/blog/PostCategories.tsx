const PostCategories = ({ categories }: { categories: string[] }) => {
  return (
    <div className="flex gap-4">
      {categories.map((category) => (
        <span key={category}>{category}</span>
      ))}
    </div>
  );
};

export default PostCategories;
