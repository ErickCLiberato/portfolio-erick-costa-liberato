import React from 'react';
import { useQR } from '../../context/QRContext';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../ui/accordion';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../ui/select';
import { Slider } from '../ui/slider';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { QRStyle, QRErrorCorrectionLevel } from '../../types/qr';

export function CustomizationPanel() {
  const { 
    config, 
    updateConfig, 
    updateDotsOptions, 
    updateCornersSquareOptions, 
    updateCornersDotOptions 
  } = useQR();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateConfig({ image: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const exportAsJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(config, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "qr-config.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="space-y-6 pb-20">
      <Accordion type="multiple" defaultValue={['main']} className="w-full">
        
        {/* Main Options */}
        <AccordionItem value="main" className="border-b-gray-100">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">Main Options</AccordionTrigger>
          <AccordionContent className="pt-4 space-y-4">
            <div className="space-y-2">
              <Label>Data</Label>
              <Input 
                value={config.data} 
                onChange={(e) => updateConfig({ data: e.target.value })}
                placeholder="https://example.com"
              />
            </div>
            <div className="space-y-2">
              <Label>Image File</Label>
              <div className="flex gap-2">
                <Input type="file" onChange={handleImageUpload} className="cursor-pointer" />
                {config.image && (
                  <Button variant="destructive" onClick={() => updateConfig({ image: undefined })}>
                    Clear
                  </Button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Width</Label>
                <Input 
                  type="number" 
                  value={config.width} 
                  onChange={(e) => updateConfig({ width: Number(e.target.value) })} 
                />
              </div>
              <div className="space-y-2">
                <Label>Height</Label>
                <Input 
                  type="number" 
                  value={config.height} 
                  onChange={(e) => updateConfig({ height: Number(e.target.value) })} 
                />
              </div>
              <div className="space-y-2">
                <Label>Margin</Label>
                <Input 
                  type="number" 
                  value={config.margin} 
                  onChange={(e) => updateConfig({ margin: Number(e.target.value) })} 
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Dots Options */}
        <AccordionItem value="dots" className="border-b-gray-100">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">Dots Options</AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <div className="space-y-2">
              <Label>Dots Style</Label>
              <Select 
                value={config.dotsOptions.type} 
                onValueChange={(v) => updateDotsOptions({ type: v as QRStyle })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="square">Square</SelectItem>
                  <SelectItem value="dots">Dots</SelectItem>
                  <SelectItem value="rounded">Rounded</SelectItem>
                  <SelectItem value="extra-rounded">Extra Rounded</SelectItem>
                  <SelectItem value="classy">Classy</SelectItem>
                  <SelectItem value="classy-rounded">Classy Rounded</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Dots Color</Label>
              <div className="flex gap-4 items-center">
                <Input 
                  type="color" 
                  value={config.dotsOptions.color} 
                  onChange={(e) => updateDotsOptions({ color: e.target.value })}
                  className="w-12 h-12 p-1 rounded-lg cursor-pointer"
                />
                <Input 
                  type="text" 
                  value={config.dotsOptions.color} 
                  onChange={(e) => updateDotsOptions({ color: e.target.value })}
                  className="font-mono"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Corners Square Options */}
        <AccordionItem value="corners-square" className="border-b-gray-100">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">Corners Square Options</AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <div className="space-y-2">
              <Label>Corners Square Style</Label>
              <Select 
                value={config.cornersSquareOptions.type} 
                onValueChange={(v) => updateCornersSquareOptions({ type: v as any })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="square">Square</SelectItem>
                  <SelectItem value="dot">Dot</SelectItem>
                  <SelectItem value="extra-rounded">Extra Rounded</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Corners Square Color</Label>
              <div className="flex gap-4 items-center">
                <Input 
                  type="color" 
                  value={config.cornersSquareOptions.color} 
                  onChange={(e) => updateCornersSquareOptions({ color: e.target.value })}
                  className="w-12 h-12 p-1 rounded-lg cursor-pointer"
                />
                <Input 
                  type="text" 
                  value={config.cornersSquareOptions.color} 
                  onChange={(e) => updateCornersSquareOptions({ color: e.target.value })}
                  className="font-mono"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Corners Dot Options */}
        <AccordionItem value="corners-dot" className="border-b-gray-100">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">Corners Dot Options</AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <div className="space-y-2">
              <Label>Corners Dot Style</Label>
              <Select 
                value={config.cornersDotOptions.type} 
                onValueChange={(v) => updateCornersDotOptions({ type: v as any })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="square">Square</SelectItem>
                  <SelectItem value="dot">Dot</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Corners Dot Color</Label>
              <div className="flex gap-4 items-center">
                <Input 
                  type="color" 
                  value={config.cornersDotOptions.color} 
                  onChange={(e) => updateCornersDotOptions({ color: e.target.value })}
                  className="w-12 h-12 p-1 rounded-lg cursor-pointer"
                />
                <Input 
                  type="text" 
                  value={config.cornersDotOptions.color} 
                  onChange={(e) => updateCornersDotOptions({ color: e.target.value })}
                  className="font-mono"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Background Options */}
        <AccordionItem value="background" className="border-b-gray-100">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">Background Options</AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <div className="space-y-2">
              <Label>Background Color</Label>
              <div className="flex gap-4 items-center">
                <Input 
                  type="color" 
                  value={config.backgroundOptions.color} 
                  onChange={(e) => updateConfig({ backgroundOptions: { color: e.target.value } })}
                  className="w-12 h-12 p-1 rounded-lg cursor-pointer"
                />
                <Input 
                  type="text" 
                  value={config.backgroundOptions.color} 
                  onChange={(e) => updateConfig({ backgroundOptions: { color: e.target.value } })}
                  className="font-mono"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Image Options */}
        <AccordionItem value="image-options" className="border-b-gray-100">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">Image Options</AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <div className="flex items-center justify-between">
              <Label>Hide Background Dots</Label>
              <Switch 
                checked={config.imageOptions.hideBackgroundDots}
                onCheckedChange={(v) => updateConfig({ 
                  imageOptions: { ...config.imageOptions, hideBackgroundDots: v } 
                })}
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label>Image Size</Label>
                <span className="text-sm text-gray-500">{config.imageOptions.imageSize}</span>
              </div>
              <Slider 
                value={[config.imageOptions.imageSize]} 
                min={0.1} 
                max={1} 
                step={0.1}
                onValueChange={(vals) => updateConfig({ 
                  imageOptions: { ...config.imageOptions, imageSize: vals[0] } 
                })}
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label>Margin</Label>
                <span className="text-sm text-gray-500">{config.imageOptions.margin}</span>
              </div>
              <Slider 
                value={[config.imageOptions.margin]} 
                min={0} 
                max={50} 
                step={1}
                onValueChange={(vals) => updateConfig({ 
                  imageOptions: { ...config.imageOptions, margin: vals[0] } 
                })}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* QR Options */}
        <AccordionItem value="qr-options" className="border-b-gray-100">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">QR Options</AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <div className="space-y-2">
              <Label>Type Number</Label>
              <Input 
                type="number" 
                value={config.qrOptions.typeNumber} 
                onChange={(e) => updateConfig({ 
                  qrOptions: { ...config.qrOptions, typeNumber: Number(e.target.value) } 
                })} 
              />
            </div>
            <div className="space-y-2">
              <Label>Mode</Label>
              <Select 
                value={config.qrOptions.mode} 
                onValueChange={(v) => updateConfig({ 
                  qrOptions: { ...config.qrOptions, mode: v } 
                })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Numeric">Numeric</SelectItem>
                  <SelectItem value="Alphanumeric">Alphanumeric</SelectItem>
                  <SelectItem value="Byte">Byte</SelectItem>
                  <SelectItem value="Kanji">Kanji</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Error Correction Level</Label>
              <Select 
                value={config.qrOptions.errorCorrectionLevel} 
                onValueChange={(v) => updateConfig({ 
                  qrOptions: { ...config.qrOptions, errorCorrectionLevel: v as QRErrorCorrectionLevel } 
                })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">L (7%)</SelectItem>
                  <SelectItem value="M">M (15%)</SelectItem>
                  <SelectItem value="Q">Q (25%)</SelectItem>
                  <SelectItem value="H">H (30%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button 
        variant="outline" 
        className="w-full border-dashed border-gray-300 h-12 text-gray-600 hover:bg-gray-50"
        onClick={exportAsJSON}
      >
        Export Options as JSON
      </Button>
    </div>
  );
}
