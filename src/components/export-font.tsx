import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

export const virgilFont = localFont({
  src: '../../public/fonts/Virgil.woff2',
  display: 'swap',
  preload: true,
  fallback: ['sans-serif'],
});

export const montSerrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  fallback: ['sans-serif'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  preload: true,
});
