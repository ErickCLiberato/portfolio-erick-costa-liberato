import React, { createContext, useContext, useState, ReactNode } from 'react';
import { QRConfig, defaultConfig } from '../types/qr';

interface QRContextType {
  config: QRConfig;
  updateConfig: (newConfig: Partial<QRConfig>) => void;
  updateDotsOptions: (newOptions: Partial<QRConfig['dotsOptions']>) => void;
  updateCornersSquareOptions: (newOptions: Partial<QRConfig['cornersSquareOptions']>) => void;
  updateCornersDotOptions: (newOptions: Partial<QRConfig['cornersDotOptions']>) => void;
}

const QRContext = createContext<QRContextType | undefined>(undefined);

export function QRProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<QRConfig>(defaultConfig);

  const updateConfig = (newConfig: Partial<QRConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const updateDotsOptions = (newOptions: Partial<QRConfig['dotsOptions']>) => {
    setConfig(prev => ({
      ...prev,
      dotsOptions: { ...prev.dotsOptions, ...newOptions }
    }));
  };

  const updateCornersSquareOptions = (newOptions: Partial<QRConfig['cornersSquareOptions']>) => {
    setConfig(prev => ({
      ...prev,
      cornersSquareOptions: { ...prev.cornersSquareOptions, ...newOptions }
    }));
  };

  const updateCornersDotOptions = (newOptions: Partial<QRConfig['cornersDotOptions']>) => {
    setConfig(prev => ({
      ...prev,
      cornersDotOptions: { ...prev.cornersDotOptions, ...newOptions }
    }));
  };

  return (
    <QRContext.Provider value={{ 
      config, 
      updateConfig, 
      updateDotsOptions, 
      updateCornersSquareOptions, 
      updateCornersDotOptions 
    }}>
      {children}
    </QRContext.Provider>
  );
}

export function useQR() {
  const context = useContext(QRContext);
  if (context === undefined) {
    throw new Error('useQR must be used within a QRProvider');
  }
  return context;
}
