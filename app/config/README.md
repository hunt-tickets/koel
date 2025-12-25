# Sistema de Tipografía Centralizado de KOEL

Este sistema permite cambiar las fuentes de todo el sitio desde un solo lugar, sin necesidad de modificar cada componente individualmente.

## 📁 Archivos principales

- **`typography.ts`** - Configuración centralizada de fuentes y estilos
- **`../components/ui/Typography.tsx`** - Componentes reutilizables

## 🎨 Cómo cambiar las fuentes del sitio

### Paso 1: Actualizar Google Fonts (si usas fuentes de Google)

Edita `app/globals.css` línea 2:

```css
@import url('https://fonts.googleapis.com/css2?family=TU_FUENTE_SERIF&family=TU_FUENTE_SANS&display=swap');
```

### Paso 2: Actualizar configuración de tipografía

Edita `app/config/typography.ts`:

```typescript
export const typography = {
  fonts: {
    heading: 'Tu Fuente Serif',  // Ej: 'Playfair Display', 'Merriweather'
    body: 'Tu Fuente Sans',      // Ej: 'Poppins', 'Inter', 'Roboto'
  },
  // ...
}
```

### Paso 3: Actualizar Tailwind config

Edita `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["Tu Fuente Sans", "system-ui", "sans-serif"],
  serif: ["Tu Fuente Serif", "Georgia", "serif"],
},
```

### Paso 4: Actualizar globals.css

Edita `app/globals.css` línea 10:

```css
font-family: 'Tu Fuente Sans', system-ui, sans-serif;
```

¡Listo! Todos los títulos y textos del sitio usarán las nuevas fuentes automáticamente.

## 📖 Uso de componentes de tipografía

### Heading (Títulos)

```tsx
import { Heading } from '@/app/components/ui';

// H1 grande
<Heading level="h1">
  Título Principal
</Heading>

// H2 con gradiente
<Heading level="h2" gradient>
  Título con Gradiente
</Heading>

// H3 con clases personalizadas
<Heading level="h3" className="text-blue-500">
  Título Personalizado
</Heading>
```

### SectionTitle (Títulos de sección)

```tsx
import { SectionTitle } from '@/app/components/ui';

// Título simple
<SectionTitle>
  Mi Sección
</SectionTitle>

// Título con gradiente
<SectionTitle gradient="Texto con Gradiente">
  Texto Normal
</SectionTitle>
```

### Text (Párrafos y texto)

```tsx
import { Text } from '@/app/components/ui';

// Texto normal
<Text>
  Este es un párrafo normal
</Text>

// Texto en negrita
<Text variant="bodyBold">
  Texto importante
</Text>

// Texto light
<Text variant="bodyLight">
  Texto sutil
</Text>
```

### SectionSubtitle (Subtítulos de sección)

```tsx
import { SectionSubtitle } from '@/app/components/ui';

<SectionSubtitle>
  Este es un subtítulo de sección
</SectionSubtitle>
```

## 🎯 Ejemplo completo

```tsx
import { SectionTitle, SectionSubtitle, Text } from '@/app/components/ui';

export default function MySection() {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <SectionTitle gradient="tu historia">
          Tu fragancia,
        </SectionTitle>
        <SectionSubtitle>
          Dos fragancias diseñadas para adaptarse a tu día a día.
        </SectionSubtitle>
      </div>

      <Text variant="bodyMedium">
        Contenido de la sección...
      </Text>
    </section>
  );
}
```

## 🔧 Configuración disponible

### Niveles de heading
- `h1` - Título principal
- `h2` - Título de sección
- `h3` - Subtítulo
- `h4`, `h5`, `h6` - Títulos menores

### Variantes de texto
- `body` - Texto normal
- `bodyLight` - Texto ligero
- `bodyMedium` - Texto medio
- `bodySemibold` - Texto semi-negrita
- `bodyBold` - Texto negrita

## 💡 Recomendaciones de fuentes

### Combinaciones elegantes y minimalistas

1. **Playfair Display + Poppins** (Actual)
   - Serif elegante + Sans moderna
   - Ideal para: Lujo, premium, sofisticación

2. **Merriweather + Open Sans**
   - Clásica y legible
   - Ideal para: Profesional, corporativo

3. **Cormorant + Montserrat**
   - Elegante y contemporánea
   - Ideal para: Moda, lifestyle

4. **Lora + Raleway**
   - Equilibrada y versátil
   - Ideal para: Editorial, contenido

5. **Crimson Text + Work Sans**
   - Tradicional meets moderna
   - Ideal para: Artesanal, premium

## 📝 Notas

- Los cambios en `typography.ts` se aplican automáticamente a todos los componentes que usen `<Heading>`, `<Text>`, etc.
- Para cambios rápidos, solo edita `typography.ts`
- Para cambios completos de fuente, sigue los 4 pasos arriba
