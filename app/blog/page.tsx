import AllPosts from '@/app/components/blog/AllPosts';
export default function Blog() {
  return (
    <div className="container">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl w-fit mx-auto font-heading before:content-[''] before:block before:w-3/4 before:h-full before:absolute relative before:top-0 before:-right-4 before:translate-y-[20%] before:bg-lemon-500 before:-z-10 font-medium my-8 sm:my-10 lg:my-14">
        Wszystkie wpisy
      </h1>

      <AllPosts />
    </div>
  );
}
