const saturationSlider = document.getElementById("saturationSlider");
const lightnessSlider = document.getElementById("lightnessSlider");
const saturationValue = document.getElementById("saturationValue");
const lightnessValue = document.getElementById("lightnessValue");

// Actualizar valores en tiempo real
saturationSlider.addEventListener("input", () => {
    saturationValue.textContent = saturationSlider.value;
  });
  lightnessSlider.addEventListener("input", () => {
    lightnessValue.textContent = lightnessSlider.value;
  });

  function hexToHsl(hex) {
    // Convierte un color hex a HSL
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
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
  }

  function hslToHex(h, s, l) {
    // Convierte un color HSL a hex
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r, g, b;

    if (0 <= h && h < 60) { r = c; g = x; b = 0; }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
    else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

    r = Math.round((r + m) * 255).toString(16).padStart(2, '0');
    g = Math.round((g + m) * 255).toString(16).padStart(2, '0');
    b = Math.round((b + m) * 255).toString(16).padStart(2, '0');

    return `#${r}${g}${b}`;
  }

  function generatePastelColor() {
    let hex = document.getElementById("hexInput").value;
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
      alert("Por favor, ingresa un color hexadecimal válido.");
      return;
    }

    let { h, s, l } = hexToHsl(hex);
    s = parseInt(saturationSlider.value);
    l = parseInt(lightnessSlider.value);

    let pastelHex = hslToHex(h, s, l);
    document.getElementById("colorBox").style.backgroundColor = pastelHex;
    document.getElementById("pastelHex").textContent = pastelHex;
}