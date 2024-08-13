import ButtonPrimary from './components/buttons/ButtonPrimary';

export default function NotFound() {
  return (
    <div className="mt-10 lg:mt-20 text-center space-y-5">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold">
        404<span className="text-lemon-500">.</span>
      </h2>
      <p className="text-lg lg:text-xl">Niestety, strona nie istnieje.</p>
      <ButtonPrimary as="link" href="/">
        Wróć do strony głównej
      </ButtonPrimary>
    </div>
  );
}
