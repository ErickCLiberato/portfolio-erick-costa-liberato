/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { QRProvider } from './context/QRContext';
import { MainLayout } from './components/layout/MainLayout';
import { CustomizationPanel } from './components/qr/CustomizationPanel';
import { QRPreview } from './components/qr/QRPreview';

export default function App() {
  return (
    <QRProvider>
      <MainLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1">
            <CustomizationPanel />
          </div>
          
          <div className="order-1 lg:order-2 lg:sticky lg:top-24 flex justify-center">
            <QRPreview />
          </div>
        </div>
      </MainLayout>
    </QRProvider>
  );
}


