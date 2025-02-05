import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Zen_Dots } from 'next/font/google';
import { Kanit } from 'next/font/google';

export const zen = Zen_Dots({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export const kanit = Kanit({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
