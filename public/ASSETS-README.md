# Assets Guide - KOEL

Este directorio contiene todos los assets multimedia del sitio KOEL.

## Estructura

```
/public
├── /images
│   ├── /products       - Renders 3D y fotos del producto
│   ├── /lifestyle      - Fotografías lifestyle y testimonios
│   └── /fragrances     - Ilustraciones de fragancias
├── /videos             - Videos premium del sitio
├── /models             - Modelos 3D (.gltf)
└── logo.png            - Logo KOEL
```

---

## Assets Requeridos (PLACEHOLDERS ACTUALES)

### 🎥 VIDEOS

#### 1. Hero Background Video
**Archivo:** `/videos/hero-background.mp4`
**Descripción:** Video premium del producto KOEL en fondo unicolor
**Especificaciones:**
- Resolución: 1920x1080 mínimo (4K preferido)
- Duración: 10-15 segundos (loop perfecto)
- Formato: MP4 (H.264)
- Sin audio
- Muestra el Deodorant Case en rotación suave o aplicación elegante

#### 2. Tutorial de Recarga
**Archivo:** `/videos/tutorial-recarga.mp4`
**Descripción:** Demostración del sistema 1-2-3
**Especificaciones:**
- Resolución: 1920x1080
- Duración: 15-20 segundos
- Formato: MP4
- Muestra claramente: GIRA → ENCAJA → EMPUJA

#### 3. Video Propuesta de Valor
**Archivo:** `/videos/bathroom-experience.mp4`
**Descripción:** Mujer en baño aplicando KOEL con espejo como marco
**Especificaciones:**
- Resolución: 1920x1080
- Duración: 30 segundos
- Formato: MP4
- Overlay: "Más que un desodorante, una experiencia única"

---

### 🖼️ IMÁGENES DE PRODUCTO

#### 1. Starter Kit Completo
**Archivo:** `/images/products/starter-kit.png`
**Descripción:** Case + Pod juntos en fondo blanco
**Especificaciones:**
- Formato: PNG con transparencia
- Resolución: 2000x2000px mínimo
- Fondo: Blanco o transparente
- Iluminación profesional premium

#### 2. Deodorant Case (Individual)
**Archivo:** `/images/products/case-blue.png`
**Descripción:** Solo el case azul claro
**Especificaciones:**
- Formato: PNG con transparencia
- Resolución: 2000x2000px
- Vista frontal y lateral

#### 3. Deodorant Pod - Bamboo
**Archivo:** `/images/products/pod-bamboo.png`
**Descripción:** Recarga con diseño de Bamboo Whisper
**Especificaciones:**
- Formato: PNG con transparencia
- Resolución: 2000x2000px
- Muestra el cartón biodegradable con gráficos verdes

#### 4. Deodorant Pod - Ginger
**Archivo:** `/images/products/pod-ginger.png`
**Descripción:** Recarga con diseño de Ginger Grap
**Especificaciones:**
- Formato: PNG con transparencia
- Resolución: 2000x2000px
- Muestra el cartón biodegradable con gráficos beige/dorados

#### 5. Empaque Preventa
**Archivo:** `/images/products/packaging-preventa.png`
**Descripción:** Caja de cartón reciclado con arte exclusivo
**Especificaciones:**
- Formato: PNG/JPG
- Resolución: 2000x2000px
- Muestra el diseño del artista colombiano

---

### 🌿 FRAGANCIAS - ILUSTRACIONES

#### 1. Bamboo Whisper
**Archivo:** `/images/fragrances/bamboo-illustration.svg`
**Descripción:** Ilustración minimalista de hojas de bambú
**Especificaciones:**
- Formato: SVG (vectorial)
- Colores: Tonos verdes (#88B68D y variantes)
- Estilo: Minimalista, elegante, líneas simples

#### 2. Ginger Grap
**Archivo:** `/images/fragrances/ginger-illustration.svg`
**Descripción:** Ilustración minimalista de jengibre
**Especificaciones:**
- Formato: SVG (vectorial)
- Colores: Tonos beige/dorados (#D4A574 y variantes)
- Estilo: Minimalista, elegante, líneas simples

---

### 📸 LIFESTYLE & TESTIMONIOS

#### 1. Galería Ser Pionero
**Archivos:** `/images/lifestyle/pioneer-[1-6].jpg`
**Descripción:** 6 fotos de personas usando KOEL en su día a día
**Especificaciones:**
- Formato: JPG optimizado
- Resolución: 1500x1500px
- Personas diversas, diferentes contextos
- Iluminación natural, estética premium

#### 2. Fundadores
**Archivo:** `/images/lifestyle/founders.jpg`
**Descripción:** Foto de los 4 fundadores de KOEL
**Especificaciones:**
- Formato: JPG
- Resolución: 2000x1200px
- Para página /pioneros

---

### 🎨 ICONOGRAFÍA

#### Iconos para Propuesta de Valor
Usar **react-icons** para:
- ⚡ Recarga rápida
- 💎 Diseño premium
- 🌺 Fragancias exclusivas
- 💰 Ahorro inteligente
- 🇨🇴 100% colombiano
- 🌿 Cuidado natural

---

### 📦 MODELOS 3D

#### 1. Modelo 3D del Producto
**Archivo:** `/models/koel-product.gltf` *(ya existe: tall_can_copy.gltf)*
**Descripción:** Modelo 3D del Deodorant Case para visualizador interactivo
**Especificaciones:**
- Formato: GLTF/GLB
- Texturas de alta calidad
- Optimizado para web (< 5MB)

---

## Optimización de Assets

### Para PRODUCCIÓN:

**Imágenes:**
- Comprimir con TinyPNG o ImageOptim
- Convertir a WebP para navegadores modernos
- Crear versiones responsive (@1x, @2x, @3x)

**Videos:**
- Comprimir con Handbrake
- Crear versiones: Mobile (720p) / Desktop (1080p) / Desktop HD (4K)
- Formato: MP4 (H.264) o WebM

**Modelos 3D:**
- Usar Draco compression
- Optimizar geometría y texturas
- Máximo 5MB por modelo

---

## Placeholders Actuales

Los siguientes placeholders se están usando temporalmente:

- `hero1.jpg` / `hero2.jpg` - Imágenes hero actuales
- `hero-video.mp4` / `hero-video-2.mp4` - Videos actuales
- `logo.png` - Logo actual de KOEL
- `tall_can_copy.gltf` - Modelo 3D actual

**Status:** ✅ Mantendremos estos hasta recibir assets finales de producción.

---

**Fecha de creación:** Diciembre 2024
**Última actualización:** Diciembre 2024
