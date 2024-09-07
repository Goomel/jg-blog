import RecentPosts from './components/blog/RecentPosts';
import ContactForm from './components/form/ContactForm';

export default function Home() {
  return (
    <main className="lg:px-6">
      <section className="py-10 lg:py-14">
        <div className="space-y-6 lg:w-4/5 lg:space-y-8 xl:w-3/4">
          <p className="font-heading text-2xl font-medium sm:text-3xl lg:text-4xl">
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
        <h2 className="my-8 text-3xl font-medium sm:my-10 sm:text-4xl lg:my-14 lg:text-5xl">
          Ostatnie wpisy
        </h2>
        <RecentPosts />
      </section>
      <section id="kontakt" className="py-10 lg:pt-16">
        <div className="space-y-2 text-center lg:space-y-4">
          <p className="text-[15px] text-lemon-500 lg:text-base">Masz pytania?</p>
          <h2 className="my-8 text-3xl font-medium sm:my-10 sm:text-4xl lg:my-14 lg:text-5xl">
            Napisz do mnie!
          </h2>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
