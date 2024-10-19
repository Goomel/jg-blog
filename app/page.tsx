import RecentPosts from './components/blog/RecentPosts';
import ContactForm from './components/form/ContactForm';
import PlussesPattern from '@/public/bg/plusses-pattern.svg';

export default function Home() {
  return (
    <main className="lg:px-6">
      <section className="relative py-10 lg:py-14">
        <div className="space-y-6 lg:w-4/5 lg:space-y-8 xl:w-3/4">
          <p className="font-heading text-3xl font-medium sm:text-4xl 2xl:text-5xl">
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
        <div className="absolute -bottom-5 right-8 z-[-1] hidden lg:block">
          <PlussesPattern />
        </div>
      </section>

      <div className="border-t border-gray-400"></div>

      <section>
        <h2 className="my-8 text-3xl font-medium sm:my-10 sm:text-4xl lg:my-14 2xl:text-5xl">
          Ostatnie wpisy
        </h2>
        <RecentPosts />
      </section>

      <section id="kontakt" className="relative pt-14 lg:pt-16">
        <div className="absolute left-8 top-5 z-[-1] hidden lg:block">
          <PlussesPattern />
        </div>
        <div className="absolute bottom-5 right-8 z-[-1] hidden lg:block">
          <PlussesPattern />
        </div>
        <div className="mb-8 space-y-2 sm:text-center lg:mb-14 lg:space-y-4">
          <p className="text-[15px] text-lemon-500 lg:text-base">Masz pytania?</p>
          <h2 className="mb-8 text-3xl font-medium sm:mb-10 sm:text-4xl lg:mb-14 2xl:text-5xl">
            Wyślij wiadomość
          </h2>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
