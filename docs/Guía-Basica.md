### **1. Tamaño (Width & Height)**
- **Ancho:**  
  - `w-full`: Ocupa el 100% del contenedor.  
  - `w-1/2`: Ocupa el 50% del ancho.  
  - `w-screen`: Igual al ancho del viewport.  
  - `w-[200px]`: Valor arbitrario (200px).

- **Altura:**  
  - `h-full`: Ocupa el 100% del contenedor.  
  - `h-screen`: Altura igual a la pantalla.  
  - `h-10`: Altura basada en la escala (por ejemplo, h-10 ≈ 2.5rem).  
  - `h-[150px]`: Altura arbitraria (150px).

---

### **2. Espaciado (Margin & Padding)**
- **Margin (margen):**  
  - `m-4`: Margen uniforme (1rem, aproximadamente).  
  - `mt-4`, `mr-4`, `mb-4`, `ml-4`: Margen superior, derecho, inferior o izquierdo.  
  - `mx-4`: Margen horizontal (izquierda y derecha).  
  - `my-4`: Margen vertical (arriba y abajo).

- **Padding (relleno):**  
  - `p-4`: Padding uniforme en todos lados.  
  - `pt-4`, `pr-4`, `pb-4`, `pl-4`: Padding en la parte superior, derecha, inferior o izquierda.  
  - `px-4`: Padding horizontal.  
  - `py-4`: Padding vertical.

---

### **3. Colores (Background & Text)**
- **Fondo:**  
  - `bg-blue-500`: Fondo azul (500 es la intensidad, según la paleta de Tailwind).  
  - `bg-red-200`, `bg-green-600`, etc.  
  - Valores arbitrarios: `bg-[#4CFF5B]` para usar un código hexadecimal directamente.

- **Texto:**  
  - `text-white`: Texto blanco.  
  - `text-gray-800`, `text-blue-700`, etc.

---

### **4. Bordes y Border Radius**
- **Bordes:**  
  - `border`: Aplica un borde de 1px.  
  - `border-2`, `border-4`, `border-8`: Bordes de distintos grosores.  
  - `border-blue-500`: Define el color del borde.

    Bordes Redondeados (border-radius)
    1. Bordes Generales
    rounded → Bordes ligeramente redondeados.
    rounded-sm → Un radio de borde más pequeño.
    rounded-md → Moderadamente redondeado.
    rounded-lg → Aún más redondeado.
    rounded-xl → Bordes bastante redondeados.
    rounded-2xl, rounded-3xl → Redondeado extremo.
    rounded-full → Hace el elemento completamente circular (ideal para avatares o botones redondos).
    Ejemplo:

    jsx
    Copiar
    Editar
    <div className="rounded-lg bg-blue-500 p-4">Caja con bordes redondeados</div>
    2. Bordes en esquinas específicas
    Puedes aplicar el redondeado en esquinas específicas:

    Clase	Descripción
    rounded-tl-lg	Redondea solo la esquina superior izquierda.
    rounded-tr-lg	Redondea solo la esquina superior derecha.
    rounded-bl-lg	Redondea solo la esquina inferior izquierda.
    rounded-br-lg	Redondea solo la esquina inferior derecha.
    Ejemplo:

    jsx
    Copiar
    Editar
    <div className="rounded-tl-xl rounded-br-xl bg-green-500 p-4">
    Esquinas superior izquierda e inferior derecha redondeadas
    </div>
    3. Redondeo por lados completos
    Si quieres redondear todo un lado completo (arriba, abajo, izquierda o derecha):

    Clase	Descripción
    rounded-t-lg	Redondea ambas esquinas superiores.
    rounded-b-lg	Redondea ambas esquinas inferiores.
    rounded-l-lg	Redondea ambas esquinas izquierdas.
    rounded-r-lg	Redondea ambas esquinas derechas.
    Ejemplo:

    jsx
    Copiar
    Editar
    <div className="rounded-t-2xl bg-red-500 p-4">
    Bordes superiores redondeados
    </div>
    4. Uso con imágenes (para avatares o iconos redondos)
    Si quieres que una imagen tenga un borde circular perfecto:

    jsx
    Copiar
    Editar
    <img src="avatar.jpg" className="rounded-full w-16 h-16" alt="Avatar" />
    🔹 rounded-full asegura que la imagen siempre sea circular.

---

### **5. Efectos y Transiciones (Hover, Active)**
- **Efectos Hover:**  
  - `hover:bg-blue-600`: Cambia el fondo a azul 600 al pasar el mouse.  
  - `hover:text-green-500`: Cambia el color del texto al pasar el mouse.

- **Transiciones y Animaciones:**  
  - `transition`: Aplica una transición por defecto a propiedades como color, fondo o transformación.  
  - `duration-300`: Duración de 300ms para la transición.  
  - Ejemplo combinado:  
    ```jsx
    <button className="bg-blue-500 text-white transition duration-300 hover:bg-blue-600">
      Botón
    </button>
    ```
  - **Efecto de escala:**  
    - `hover:scale-105`: Aumenta el tamaño al 105% cuando se pasa el mouse.  
    - Ejemplo:
      ```jsx
      <img src={logo} alt="Logo" className="transition duration-300 hover:scale-105" />
      ```
  - **Efecto de sombra al hover:**  
    - `hover:shadow-lg`: Agrega una sombra grande al pasar el mouse.

---

### **6. Otros Útiles**
- **Flexbox:**  
  - `flex`: Activa display flex.  
  - `justify-center`: Centra elementos horizontalmente.  
  - `items-center`: Centra elementos verticalmente.

- **Valores arbitrarios:**  
  - `w-[300px]`, `h-[150px]`, etc. para definir tamaños exactos.

---

### **Ajustes de Texto**

---

### **1. Tamaño del Texto**
- `text-xs`: Extra pequeño.
- `text-sm`: Pequeño.
- `text-base`: Tamaño base.
- `text-lg`: Grande.
- `text-xl`: Extra grande.
- `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, etc.: Tamaños mayores.

---

### **2. Peso de la Fuente**
- `font-thin`: Muy delgado.
- `font-extralight`: Extra ligero.
- `font-light`: Ligero.
- `font-normal`: Normal.
- `font-medium`: Medio.
- `font-semibold`: Seminegrita.
- `font-bold`: Negrita.
- `font-extrabold`: Extra negrita.
- `font-black`: Súper negrita.

---

### **3. Estilo y Transformación del Texto**
- `italic`: Aplica cursiva.
- `not-italic`: Quita cursiva.
- `uppercase`: Todo en mayúsculas.
- `lowercase`: Todo en minúsculas.
- `capitalize`: Primera letra de cada palabra en mayúscula.
- `normal-case`: Texto con el caso normal (sin transformar).

---

### **4. Decoración y Subrayado**
- `underline`: Subraya el texto.
- `line-through`: Aplica una línea de tachado.
- `no-underline`: Sin subrayado ni tachado.

---

### **5. Alineación y Espaciado**
- **Alineación:**
  - `text-left`: Alineación a la izquierda.
  - `text-center`: Alineación centrada.
  - `text-right`: Alineación a la derecha.
  - `text-justify`: Texto justificado.
- **Interlineado (leading):**
  - `leading-none`: Sin espacio extra entre líneas.
  - `leading-tight`: Interlineado ajustado.
  - `leading-normal`: Interlineado normal.
  - `leading-relaxed`: Interlineado relajado.
  - `leading-loose`: Interlineado amplio.
- **Espaciado entre letras (tracking):**
  - `tracking-tighter`: Menor espaciado.
  - `tracking-tight`: Espaciado ajustado.
  - `tracking-normal`: Espaciado normal.
  - `tracking-wide`: Espaciado amplio.
  - `tracking-wider`, `tracking-widest`: Aumenta el espaciado progresivamente.

---

### **6. Fuente y Familias Tipográficas**
- `font-sans`: Usa una fuente sans-serif.
- `font-serif`: Usa una fuente serif.
- `font-mono`: Usa una fuente monoespaciada.
- También puedes definir tus propias fuentes en `tailwind.config.js` y usar clases personalizadas, por ejemplo: `font-display`, `font-body`, etc.

---

Estas utilidades te permiten personalizar de forma rápida y coherente la apariencia del texto en tus componentes. Puedes combinarlas para lograr el estilo deseado, por ejemplo:

```jsx
<p className="text-lg font-semibold italic text-center tracking-tight">
  Texto de ejemplo estilizado con Tailwind
</p>
```


### **Display y Modelos de Caja**

---

### **1. Display y Modelos de Caja**  
- `block`: Elemento en bloque (ocupa todo el ancho disponible).  
- `inline`: Elemento en línea (solo ocupa el contenido).  
- `inline-block`: Como `inline`, pero permite modificar `width` y `height`.  
- `hidden`: Oculta el elemento sin eliminarlo del DOM.  
- `box-border`: Usa `box-sizing: border-box;` para evitar que `padding` y `border` aumenten el tamaño del elemento.  

---

### **2. Flexbox (Diseño flexible)**  
- `flex`: Activa Flexbox en un contenedor.  
- `flex-row`: Elementos en fila.  
- `flex-col`: Elementos en columna.  
- `justify-start`: Alinea elementos a la izquierda.  
- `justify-center`: Alinea elementos al centro.  
- `justify-end`: Alinea elementos a la derecha.  
- `justify-between`: Espacia los elementos uniformemente.  
- `items-start`: Alinea los ítems arriba.  
- `items-center`: Alinea los ítems al centro.  
- `items-end`: Alinea los ítems abajo.  
- `gap-x-{n}` / `gap-y-{n}`: Espaciado entre columnas o filas.  

---

### **3. Grid (Diseño en cuadrícula)**  
- `grid`: Activa CSS Grid en un contenedor.  
- `grid-cols-{n}`: Define `n` columnas en el grid.  
- `grid-rows-{n}`: Define `n` filas en el grid.  
- `col-span-{n}`: Un elemento ocupa `n` columnas.  
- `row-span-{n}`: Un elemento ocupa `n` filas.  
- `gap-{n}`: Espaciado entre celdas.  

---

### **4. Posicionamiento**  
- `relative`: El elemento se mueve en relación con su posición original.  
- `absolute`: Se posiciona en relación con su contenedor padre `relative`.  
- `fixed`: Se mantiene fijo en la pantalla aunque se haga scroll.  
- `sticky`: Se mantiene fijo solo cuando llega a un punto del scroll.  
- `top-{n}`, `bottom-{n}`, `left-{n}`, `right-{n}`: Controlan la posición exacta.  
- `z-{n}`: Controla la superposición de elementos (capas).  

---

### **5. Tamaños y Espaciado**  
- **Altura y Anchura:**  
  - `w-{n}` → Ancho (`w-1/2` = 50% del contenedor).  
  - `h-{n}` → Altura (`h-32` = 8rem).  
  - `max-w-{n}` → Ancho máximo.  
  - `min-h-{n}` → Altura mínima.  
- **Margen y Padding:**  
  - `m-{n}` → Margen (`m-4` = 1rem).  
  - `p-{n}` → Padding (`p-2` = 0.5rem).  
  - `mx-auto` → Centra horizontalmente.  

---

### **6. Scroll y Overflow**  
- `overflow-hidden`: Oculta el contenido que sobresale.  
- `overflow-scroll`: Activa el scroll.  
- `overflow-auto`: Agrega scroll solo si es necesario.  

---

### **7. Estilos y Decoración**  
- `opacity-{n}`: Transparencia (`opacity-0` = invisible, `opacity-100` = visible).  
- `rounded-{n}`: Bordes redondeados (`rounded-full` = círculo).  
- `shadow-{n}`: Sombras (`shadow-lg` = más intensa).  
- `backdrop-blur-{n}`: Efecto borroso de fondo.  

---