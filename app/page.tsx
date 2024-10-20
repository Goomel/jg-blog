import RecentPosts from './components/blog/RecentPosts';
import ContactForm from './components/form/ContactForm';
import PlussesPattern from '@/public/bg/plusses-pattern.svg';

export default function Home() {
  return (
    <>
      <header className="relative lg:px-6">
        <div className="border-b border-gray-400 pb-10 lg:pb-14">
          <div className="space-y-6 lg:w-4/5 lg:space-y-8 xl:w-3/4">
            <p className="font-heading text-3xl font-medium sm:text-4xl 2xl:text-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque imperdiet
              arcu ut convallis.
            </p>
            <p className="text-sm lg:text-base">
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
        </div>
      </header>

      <main className="lg:px-6">
        <section>
          <h2 className="my-8 text-3xl font-medium sm:text-4xl lg:my-12 2xl:text-5xl">
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
          <div className="mb-6 space-y-2 sm:mb-8 sm:text-center lg:mb-14 lg:space-y-4">
            <p className="text-[15px] text-lemon-500 lg:text-base">Masz pytania?</p>
            <h2 className="text-3xl font-medium sm:text-4xl 2xl:text-5xl">Wyślij wiadomość</h2>
          </div>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
