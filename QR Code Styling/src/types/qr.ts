export type QRStyle = 'square' | 'dots' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded';
export type QRErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export interface QRConfig {
  data: string;
  width: number;
  height: number;
  margin: number;
  qrOptions: {
    typeNumber: number;
    mode: string;
    errorCorrectionLevel: QRErrorCorrectionLevel;
  };
  imageOptions: {
    hideBackgroundDots: boolean;
    imageSize: number;
    margin: number;
    crossOrigin: string;
  };
  dotsOptions: {
    color: string;
    type: QRStyle;
    gradient?: {
      type: 'linear' | 'radial';
      rotation: number;
      colorStops: { offset: number; color: string }[];
    };
  };
  backgroundOptions: {
    color: string;
  };
  cornersSquareOptions: {
    color: string;
    type: 'square' | 'dot' | 'extra-rounded';
  };
  cornersDotOptions: {
    color: string;
    type: 'square' | 'dot';
  };
  image?: string;
}

export const defaultConfig: QRConfig = {
  data: "https://qr-code-styling.com",
  width: 300,
  height: 300,
  margin: 10,
  qrOptions: {
    typeNumber: 0,
    mode: "Byte",
    errorCorrectionLevel: "Q"
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.4,
    margin: 20,
    crossOrigin: "anonymous"
  },
  dotsOptions: {
    color: "#4267b2",
    type: "rounded"
  },
  backgroundOptions: {
    color: "#ffffff"
  },
  cornersSquareOptions: {
    color: "#4267b2",
    type: "extra-rounded"
  },
  cornersDotOptions: {
    color: "#4267b2",
    type: "dot"
  }
};
