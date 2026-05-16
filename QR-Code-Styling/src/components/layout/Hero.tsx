import React from 'react';
import { motion } from 'motion/react';
import { useQR } from '../../context/QRContext';

export function Hero() {
  const { config } = useQR();
  const qrColor = config.dotsOptions.color;
  const bgColor = config.backgroundOptions.color;

  return (
    <section className="relative overflow-hidden">
      {/* Dynamic Background Gradient */}
      <div 
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background: `linear-gradient(to right, #000000 0%, ${qrColor} 50%, ${bgColor} 100%)`
        }}
      />
      
      <div className="relative z-10 px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
            QR Code Styling
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-2">
            An open source JS library
          </p>
          <p className="text-lg md:text-xl text-white/70">
            For generating styled QR codes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
