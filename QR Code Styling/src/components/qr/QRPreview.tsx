import React, { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { useQR } from '../../context/QRContext';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

export function QRPreview() {
  const { config } = useQR();
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    qrCode.current = new QRCodeStyling(config);
    if (qrRef.current) {
      qrCode.current.append(qrRef.current);
    }
  }, []);

  useEffect(() => {
    if (qrCode.current) {
      qrCode.current.update(config);
    }
  }, [config]);

  const onDownload = (extension: 'png' | 'svg') => {
    if (qrCode.current) {
      qrCode.current.download({ extension });
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="p-8 bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 transition-all duration-500 hover:scale-[1.02]">
        <div ref={qrRef} className="qr-container" />
      </div>
      
      <div className="flex gap-3">
        <Button 
          onClick={() => onDownload('png')}
          className="bg-[#1a1a1a] hover:bg-black text-white px-6 rounded-full h-11"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PNG
        </Button>
        <Button 
          variant="outline"
          onClick={() => onDownload('svg')}
          className="border-gray-200 hover:bg-gray-50 px-6 rounded-full h-11"
        >
          Download SVG
        </Button>
      </div>
    </div>
  );
}
