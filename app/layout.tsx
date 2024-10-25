import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { HelpGuide } from '@/components/help-guide';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VapeCommerce - Premium Vaping Products',
  description: 'Premium vaping devices and accessories for the discerning vaper.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <HelpGuide />
          <Toaster />
        </div>
      </body>
    </html>
  );
}