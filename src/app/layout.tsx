import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'instantsearch.css/themes/satellite-min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Scannable - Search',
  description: 'Search for anything',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
