import Image from 'next/image';
import coffePhoto from '@/public/images/coffee.jpg';

export default function Home() {
  return (
    <main className="container">
      <section className="py-10 lg:py-14">
        <div className="xl:w-3/4 lg:w-4/5 space-y-6 lg:space-y-8">
          <p className="text-3xl lg:text-5xl font-heading font-medium">
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
        <p className="lg:text-5xl w-fit font-heading mt-10 lg:mt-14 before:content-[''] before:block before:w-3/4 before:h-full before:absolute relative before:top-0 before:-right-4 before:translate-y-[20%] before:bg-lemon-500 before:-z-10 font-medium">
          Ostatnie wpisy
        </p>

        {/* first example post link */}
        <div className="mt-10 lg:mt-14">
          <div className="w-full">
            <div className="flex lg:flex-row flex-col lg:gap-16">
              <div className="lg:basis-1/2">
                <div className="w-full h-full">
                  <div className="aspect-[4/3] relative">
                    <Image
                      className="object-cover"
                      src={coffePhoto}
                      fill
                      alt="Picture of the author"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 lg:py-4 xl:py-8">
                <div className="lg:w-[90%] space-y-4 xl:space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="lg:py-1 lg:px-3 rounded bg-black-500">
                      <p className="text-sm lg:text-base text-gray-100">Inne</p>
                    </div>
                    <p className="text-base lg:text-lg font-heading text-black-100">Lip 26, 2024</p>
                  </div>
                  <p className="text-2xl xl:text-4xl font-heading">
                    Debitis velit iure sunt doloribus necessitatibus qui fuga commodi ullam
                    voluptas.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis velit iure
                    sunt doloribus necessitatibus qui fuga commodi ullam voluptas, porro soluta
                    alias provident numquam, sit animi quia repellat dignissimos minus consequuntur
                    eveniet neque! Reprehenderit, placeat!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
