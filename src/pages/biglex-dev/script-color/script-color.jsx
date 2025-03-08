<link rel="icon" type="image/x-icon" href="../assets/Marca/Logo.ico">
<link rel="stylesheet" href="../../assets.css">
<link rel="stylesheet" href="script-color.css">
<link rel="stylesheet" href="script-color.js">

<body>
  <main>
    <div class="container">
    <div class="container-contend">
        <h1>Generador de Colores Pastel</h1>
        <label for="hexInput">Ingresa el color hexadecimal:</label>
        <input type="text" id="hexInput" placeholder="#3498db" maxlength="7">

        <div class="slider-container">
          <div class="slider-label">Saturación: <span id="saturationValue">70</span>%</div>
          <input type="range" id="saturationSlider" min="40" max="80" value="70">
        </div>

        <div class="slider-container">
          <div class="slider-label">Luminosidad: <span id="lightnessValue">80</span>%</div>
          <input type="range" id="lightnessSlider" min="60" max="90" value="80">
        </div>

        <button onclick="generatePastelColor()">Generar Color Pastel</button>

        <div class="color-box" id="colorBox"></div>
        <p>Color Pastel Hex: <span id="pastelHex">#</span></p>
      </div>
    </div>

  <script src="script-color.js"></script>
  </main>

</body>