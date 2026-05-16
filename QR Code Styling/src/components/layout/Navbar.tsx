import React from 'react';
import { QrCode } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="h-12 bg-[#1a1a1a] flex items-center px-6 border-b border-white/10 sticky top-0 z-50">
      <div className="flex items-center gap-2 text-white font-medium">
        <QrCode className="w-5 h-5" />
        <span className="text-sm tracking-tight">QR Code Styling</span>
      </div>
    </nav>
  );
}
