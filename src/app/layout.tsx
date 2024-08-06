import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/navbar';
const inter = Inter({ subsets: ['latin'] });
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'E-book',
  description: 'e-book reader in online pdf',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
