# KOEL - El Primer Desodorante Recargable de Colombia

Sitio web premium de preventa para KOEL, construido con Next.js 15, TailwindCSS y Framer Motion.

---

## 🚀 Stack Técnico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript 5
- **Estilos:** TailwindCSS 3 + CSS Custom
- **Animaciones:** Framer Motion
- **Iconos:** React Icons (HeroIcons)
- **E-commerce:** Shopify Headless (Storefront API)
- **Deployment:** Vercel

---

## 📁 Estructura del Proyecto

```
koel/
├── app/
│   ├── components/
│   │   ├── ui/              # Componentes reutilizables
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── VideoPlayer.tsx
│   │   │   ├── ExpandableSection.tsx
│   │   │   └── LoadingScreen.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/        # Secciones de la página
│   │       ├── HeroSection.tsx
│   │       ├── ProductSystemSection.tsx
│   │       ├── TutorialSection.tsx
│   │       ├── FragrancesSection.tsx
│   │       ├── ValuePropositionSection.tsx
│   │       ├── PioneerSection.tsx
│   │       ├── EmailCaptureSection.tsx
│   │       └── FAQSection.tsx
│   ├── lib/                 # Utilidades y helpers
│   ├── globals.css          # Estilos globales + TailwindCSS
│   ├── layout.tsx           # Layout raíz
│   └── page.tsx             # Página principal
├── public/
│   ├── docs/                # Documentación del proyecto
│   ├── images/              # Imágenes y renders
│   ├── videos/              # Videos premium
│   ├── models/              # Modelos 3D (.gltf)
│   └── logo.png
├── docs/                    # PDFs de documentación KOEL
├── tailwind.config.ts       # Configuración TailwindCSS
├── postcss.config.mjs       # Configuración PostCSS
└── package.json
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores

**KOEL Blue**
- `koel-blue`: #6B9FD9 (Color principal del producto)
- `koel-blue-light`: #A8C8E8
- `koel-blue-dark`: #4A7BB8

**KOEL Bamboo** (Fragancia)
- `koel-bamboo`: #88B68D
- `koel-bamboo-light`: #B5D4B8
- `koel-bamboo-dark`: #5F9465

**KOEL Ginger** (Fragancia)
- `koel-ginger`: #D4A574
- `koel-ginger-light`: #E8C9A3
- `koel-ginger-dark`: #B8864F

**Neutrales**
- `koel-neutral-[50-900]`: Escala de grises

**Acento**
- `accent-gold`: #D4AF37 (Golden Box)

### Tipografía

- **Fuente principal:** Inter (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700, 800

### Animaciones Personalizadas

- `fadeIn` - Aparición suave
- `slideUp` - Deslizamiento hacia arriba
- `slideDown` - Deslizamiento hacia abajo
- `float` - Flotación suave (loop infinito)

### Efectos Especiales

- **Glassmorphism:** `.glass` y `.glass-dark`
- **Sombras Premium:** `shadow-premium`, `shadow-premium-lg`
- **Gradientes de texto:** `.text-gradient`, `.text-gradient-koel`

---

## 🛠️ Instalación y Desarrollo

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

### 3. Build de producción

```bash
npm run build
npm start
```

---

## 📦 Secciones Implementadas

### ✅ Completadas

1. **Hero Section**
   - Video de fondo en loop
   - Animación "RE" + palabras rotativas (CIBE/RECARGA/USA)
   - CTA principal "Pre-order now"
   - Badge de precio con descuento 30% OFF

2. **Product System Section**
   - Grid de 2 productos: Deodorant Case + Deodorant Pod
   - Botones "+" expandibles con animaciones
   - Descripciones detalladas de características

3. **Tutorial Section (1-2-3)**
   - 3 pasos animados: Gira, Encaja, Empuja
   - Iconografía con animaciones personalizadas
   - Video tutorial placeholder

4. **Fragrances Section**
   - Bamboo Whisper (verde) + Ginger Grap (beige/dorado)
   - Cards con hover effects
   - Placeholders para ilustraciones SVG

5. **Value Proposition Section**
   - 6 puntos de valor con iconografía
   - Video placeholder (mujer en baño)
   - Efectos decorativos animados

6. **Pioneer Section**
   - Galería de lifestyle (4 imágenes)
   - 2 testimonios de usuarios
   - Stats: 4 años, 100% colombiano, #1
   - Link a página "/pioneros"

7. **Email Capture Section**
   - Formulario premium con validación
   - Animación de ilustración del Starter Kit
   - Mensaje de éxito animado
   - Almacenamiento en localStorage como backup

8. **FAQ Section**
   - 9 preguntas frecuentes
   - Acordeones animados con Framer Motion
   - Link de contacto

9. **Header**
   - Sticky con glassmorphism on scroll
   - Menú móvil con animación lateral
   - Icono de carrito con contador

10. **Footer**
    - 4 columnas: Sobre KOEL, Producto, Legal, Síguenos
    - Newsletter signup
    - Redes sociales (Instagram, Facebook, TikTok)
    - Métodos de pago (PSE, Visa, Mastercard)

---

## 🎬 Assets Requeridos

Ver `/public/ASSETS-README.md` para la lista completa de assets necesarios.

### Videos
- `hero-background.mp4` - Video de fondo del hero
- `tutorial-recarga.mp4` - Tutorial del sistema 1-2-3
- `bathroom-experience.mp4` - Mujer aplicando KOEL

### Imágenes de Producto
- `starter-kit.png` - Kit completo (Case + Pod)
- `case-blue.png` - Deodorant Case individual
- `pod-bamboo.png` - Pod con diseño Bamboo
- `pod-ginger.png` - Pod con diseño Ginger
- `packaging-preventa.png` - Caja exclusiva de preventa

### Ilustraciones
- `bamboo-illustration.svg` - Hojas de bambú minimalistas
- `ginger-illustration.svg` - Jengibre minimalista

### Lifestyle
- `pioneer-[1-6].jpg` - 6 fotos de usuarios
- `founders.jpg` - Foto de los 4 fundadores

---

## 🛒 Integración Shopify (Pendiente)

El sitio está preparado para integración headless con Shopify:

1. **Crear Shopify Store**
2. **Configurar Storefront API**
3. **Crear producto:** Starter Kit KOEL - Preventa
   - Precio preventa: COP $35,000
   - Precio regular: COP $50,000
   - Variantes: Bamboo Whisper | Ginger Grap
4. **Variables de entorno:** Crear `.env.local`

```env
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your_token_here
NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
```

---

## 📝 TODOs

### High Priority

- [ ] Reemplazar placeholders con assets reales
- [ ] Integrar Shopify Storefront API
- [ ] Configurar métodos de pago (PSE, tarjetas)
- [ ] Implementar funcionalidad del carrito
- [ ] Conectar email capture con servicio (Klaviyo/Mailchimp)

### Medium Priority

- [ ] Crear páginas adicionales:
  - `/pioneros` - Historia de la marca
  - `/producto` - Detalles completos del producto
  - `/politicas/*` - Políticas legales (por Santi)
- [ ] Optimizar imágenes y videos
- [ ] Implementar model-viewer para 3D product
- [ ] SEO avanzado (structured data, sitemap)

### Low Priority

- [ ] A/B testing de copy y CTAs
- [ ] Analytics e integración con Facebook Pixel
- [ ] Blog/contenido educativo
- [ ] Programa de referidos

---

## 🚀 Deployment

### Vercel (Recomendado)

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push a `main`

### Variables de Entorno Requeridas

```env
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=
NEXT_PUBLIC_SHOPIFY_DOMAIN=
```

---

## 📄 Documentación Adicional

- **Docs de KOEL:** Ver `/docs`
- **Assets Guide:** Ver `/public/ASSETS-README.md`
- **Next.js:** https://nextjs.org/docs
- **TailwindCSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Shopify Hydrogen:** https://shopify.dev/docs/custom-storefronts/hydrogen-react

---

## 👥 Equipo

**Desarrolladores UI/UX**
- Enfoque en diseño premium, performance y seguridad

**KOEL Founders**
- 4 emprendedores universitarios colombianos
- 4 años de investigación y desarrollo

---

## 📞 Contacto

**Email:** hola@koel.co
**Instagram:** @koel
**Ubicación:** Colombia 🇨🇴

---

## 📜 Licencia

© 2024 KOEL. Todos los derechos reservados.

---

**Última actualización:** Diciembre 2024
**Versión:** 1.0.0 (Pre-Launch)
