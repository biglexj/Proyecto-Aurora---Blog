import React, { useState, useEffect, useCallback } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

interface HSLColor {
  h: number;
  s: number;
  l: number;
}

const ScriptColor: React.FC = () => {
  const [hexInput, setHexInput] = useState<string>('#3498db');
  const [saturation, setSaturation] = useState<number>(70);
  const [lightness, setLightness] = useState<number>(80);
  const [pastelHex, setPastelHex] = useState<string>('#');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');

  const hexToHsl = (hex: string): HSLColor => {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  };

  const hslToHex = (h: number, s: number, l: number): string => {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) { r = c; g = x; b = 0; }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
    else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

    const rHex = Math.round((r + m) * 255).toString(16).padStart(2, '0');
    const gHex = Math.round((g + m) * 255).toString(16).padStart(2, '0');
    const bHex = Math.round((b + m) * 255).toString(16).padStart(2, '0');

    return `#${rHex}${gHex}${bHex}`;
  };

  const generatePastelColor = useCallback(() => {
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(hexInput)) {
      setBackgroundColor('#ffffff');
      setPastelHex('Invalid hex color');
      return;
    }

    let hex = hexInput;
    if (hex.length === 4) {
      hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
    }

    const hsl = hexToHsl(hex);
    const pastelColor = hslToHex(hsl.h, saturation, lightness);
    setBackgroundColor(pastelColor);
    setPastelHex(pastelColor.toUpperCase());
  }, [hexInput, saturation, lightness]);

  useEffect(() => {
    generatePastelColor();
  }, [generatePastelColor]);

  const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith('#')) {
      value = '#' + value;
    }
    setHexInput(value);
  };

  const handleColorChange = (color: ColorResult) => {
    setHexInput(color.hex);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pastelHex);
    alert('Color copied to clipboard!');
  };

  return (
    <main>
      <div className="flex flex-col items-center rounded-2xl md:p-0 p-4">
        <div className="w-full max-w-4xl text-center bg-white rounded-2xl my-8 md:my-4 p-6">
          <h1 className="text-2xl font-bold mb-8">Generador de Colores Pastel</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section: Color Input and Picker */}
            <div className="flex-1">
              <label htmlFor="hexInput" className="block mb-2 text-center">
                Ingresa el color hexadecimal o seleciona en el cuadro:
              </label>
              <input
                type="text"
                id="hexInput"
                placeholder="#3498db"
                maxLength={7}
                value={hexInput}
                onChange={handleHexInput}
                className="w-60 px-3 py-2 border rounded-md mb-4"
              />
              <div className="flex justify-center">
                <ChromePicker 
                  color={hexInput} 
                  onChangeComplete={handleColorChange}
                  styles={{
                    default: {
                      picker: {
                        width: '270px', // Adjust width
                        height: '320px', // Adjust height
                      }
                    }
                  }}
                />
              </div>
            </div>

            {/* Right Section: Controls and Output */}
            <div className="flex-1">
              <div className="mb-4">
                <div className="font-bold mb-1">
                  Saturación: <span>{saturation}%</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="80"
                  value={saturation}
                  onChange={(e) => setSaturation(parseInt(e.target.value))}
                  className="w-60"
                />
              </div>

              <div className="mb-4">
                <div className="font-bold mb-1">
                  Luminosidad: <span>{lightness}%</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="90"
                  value={lightness}
                  onChange={(e) => setLightness(parseInt(e.target.value))}
                  className="w-60"
                />
              </div>

              <button 
                onClick={generatePastelColor}
                className="w-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mb-4"
              >
                Generar Color Pastel
              </button>

              <div 
                className="h-24 w-24 mx-auto my-5 border border-gray-300 rounded-lg"
                style={{ backgroundColor }}
              />
              <p className="font-medium">
                Color Pastel Hex: <span className="font-bold">{pastelHex}</span>
              </p>
              <button 
                onClick={copyToClipboard}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors mt-2 w-auto"
              >
                Copiar Hex
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ScriptColor;