import Logo from '@/app/components/Logo';

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black-500">
      <div className="grid grid-cols-1 gap-3 text-center">
        <Logo />
        <p className="text-sm text-gray-100 lg:text-base">Loading...</p>
      </div>
    </div>
  );
}
