import { Inter, Archivo } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import cn from 'classnames';

import '@/styles/globals.css';

import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin-ext'], variable: '--font-inter' });
const archivo = Archivo({
  subsets: ['latin-ext'],
  variable: '--font-archivo',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(archivo.variable, inter.variable)}>
      <body>
        <Navbar />
        <div className="container">
          <div className="border-t border-gray-400 pt-8 lg:pt-14">{children}</div>
        </div>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true' && (
        <GoogleAnalytics gaId="G-LXK56RZHXW" />
      )}
    </html>
  );
}
