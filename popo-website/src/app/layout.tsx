"use client"
import '@rainbow-me/rainbowkit/styles.css';

import "~/styles/globals.css";

import localFont from 'next/font/local'


const PoetsenOne = localFont({ src: '../../public/fonts/PoetsenOne-Regular.ttf' })




// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cupcake" className={PoetsenOne.className}>
      <body>{children}</body>
    </html>
  );
}
