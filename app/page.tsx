import RecentPosts from './components/blog/RecentPosts';
import ContactForm from './components/form/ContactForm';

export default function Home() {
  return (
    <main className="lg:px-6">
      <section className="py-10 lg:py-14">
        <div className="space-y-6 lg:w-4/5 lg:space-y-8 xl:w-3/4">
          <p className="font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
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
        <p className="relative my-8 w-fit font-heading text-3xl font-medium before:absolute before:-right-4 before:top-0 before:-z-10 before:block before:h-full before:w-3/4 before:translate-y-[20%] before:bg-lemon-500 before:content-[''] sm:my-10 sm:text-4xl lg:my-14 lg:text-5xl">
          Ostatnie wpisy
        </p>
        <RecentPosts />
      </section>
      <section>
        <ContactForm />
      </section>
    </main>
  );
}
