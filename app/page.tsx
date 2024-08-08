import RecentPosts from './components/blog/RecentPosts';
import { getAllBlogPosts } from './lib/mdxUtils';

export default function Home() {
  const allPosts = getAllBlogPosts();

  return (
    <main className="container">
      <section className="py-10 lg:py-14">
        <div className="xl:w-3/4 lg:w-4/5 space-y-6 lg:space-y-8">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque imperdiet arcu
            ut convallis.
          </p>
          <p className="text-[15px] lg:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel natus adipisci cumque
            dolore doloribus mollitia sapiente placeat, blanditiis inventore fugiat tempora
            provident? Voluptas itaque perferendis mollitia unde laboriosam quis eum voluptates
            autem aliquid quas, maxime totam possimus? Cupiditate cumque, totam nihil sapiente
            similique itaque incidunt tenetur harum at eligendi culpa?
          </p>
        </div>
      </section>
      <div className="border-t border-gray-400"></div>
      <section>
        <p className="text-3xl sm:text-4xl lg:text-5xl w-fit font-heading before:content-[''] before:block before:w-3/4 before:h-full before:absolute relative before:top-0 before:-right-4 before:translate-y-[20%] before:bg-lemon-500 before:-z-10 font-medium my-8 sm:my-10 lg:my-14">
          Ostatnie wpisy
        </p>
        {/* first example post link */}
        <RecentPosts posts={allPosts} />
      </section>
    </main>
  );
}
