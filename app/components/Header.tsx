'use client';

import { Palette } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b sticky top-0 z-50 backdrop-blur-lg" style={{ 
      borderColor: 'rgba(255, 255, 255, 0.1)',
      backgroundColor: 'rgba(10, 25, 41, 0.8)'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Interactive Content Studio</h1>
              <p className="text-xs text-secondary">Powered by Base</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-opacity-90 transition-all">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
