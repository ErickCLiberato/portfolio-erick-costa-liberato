import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}

