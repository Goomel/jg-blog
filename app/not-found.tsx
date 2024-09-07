import ButtonPrimary from './components/buttons/ButtonPrimary';

export default function NotFound() {
  return (
    <div className="mt-10 space-y-5 text-center lg:mt-20">
      <h2 className="font-heading text-4xl font-semibold sm:text-5xl lg:text-6xl">
        404<span className="text-lemon-500">.</span>
      </h2>
      <p className="text-lg lg:text-xl">Niestety, strona nie istnieje.</p>
      <ButtonPrimary as="link" href="/" additionalClassNames="mx-auto">
        Wróć do strony głównej
      </ButtonPrimary>
    </div>
  );
}
