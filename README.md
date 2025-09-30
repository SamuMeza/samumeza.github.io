# Portafolio | Samuel Meza

Este es mi portafolio personal como desarrollador web junior. El objetivo es presentar mis proyectos, mostrar mi proceso de aprendizaje y evidenciar que me mantengo al día con tecnologías actuales (incluida la IA), siempre priorizando código claro y legible.

## Características
- **[Responsive mobile‑first]** Estilos base para móvil y hoja adicional para desktop (720–1440px).
- **[Proyectos claros]**
  - En desktop: cada tarjeta muestra un resumen corto y un enlace directo al proyecto.
  - En móvil: botón "Ver más" para expandir/cerrar la descripción dentro de la tarjeta.
- **[Navegación fluida]** Flechas (`.arrow-container`) que avanzan a la siguiente sección con scroll suave.
- **[Accesibilidad básica]** Interacción por teclado (Enter/Espacio) en flechas, `role="button"` y `tabindex`.

## Tecnologías utilizadas
- **HTML5**: estructura semántica simple y ordenada.
- **CSS3**: mobile‑first con Flexbox. No se usan Grid ni variables CSS para mantener coherencia con el enfoque del proyecto.
- **JavaScript (ES6)**: scripts separados y legibles.
- **Editor con IA**: asistencia de IA en el editor para revisar estilos, accesibilidad y refactor a ES6, manteniendo el control humano del código.

## Diseño
- **Tema**: Dark con acento cian (inspiración tecnológica/IA).
  - Fondo principal: `#0B0F14`
  - Superficies (nav/cards): `#121821`
  - Texto primario: `#E6EDF3`
  - Texto secundario: `#9AA7B2`
  - Acento: `#22D3EE` (hover: `#0891B2`)
- **Tipografías**:
  - Títulos: Poetsen One.
  - Cuerpo: Share Tech Mono (con line-height aumentado para legibilidad).

## Estructura del proyecto
```
.
├─ index.html
├─ Css/
│  ├─ index.css              # estilos base mobile‑first
│  └─ styles-desktop.css     # estilos para 720–1440px
├─ js/
│  ├─ showMore.js            # botón "Ver más" (móvil)
│  ├─ projects-desktop.js    # resumen + enlaces (desktop) y control del botón
│  └─ arrow-scroll.js        # flechas: scroll a la siguiente sección + accesible
└─ src/                      # imágenes y recursos
```

## Comportamiento responsive
- **Móvil (por defecto)**: tarjetas en columna; botón "Ver más" para mostrar/ocultar descripción.
- **Desktop (720–1440px)**: fila de proyectos sin salto de línea (con scroll horizontal si es necesario); cada tarjeta muestra resumen y enlace; el botón se oculta/deshabilita para evitar conflictos.

## Scripts principales
- `js/showMore.js`: gestiona el botón "Ver más" en móvil.
- `js/projects-desktop.js`: añade resúmenes y enlaces en desktop, y desactiva el botón.
- `js/arrow-scroll.js`: implementa scroll suave a la siguiente sección y soporte por teclado.

## Cómo ejecutar
1. Clona o descarga el repositorio.
2. Abre `index.html` en tu navegador.
3. (Opcional) Usa una extensión tipo "Live Server" para recarga automática.

## Accesibilidad
- Navegación por teclado en flechas (`role="button"`, `tabindex="0"`, Enter/Espacio).
- Contraste de colores verificado para tema dark.
- Enlaces con estados de hover/focus visibles.

## roadmap (mejoras futuras)
- Estados de foco más visibles y consistentes en todos los elementos interactivos.
- Sección "En aprendizaje" con registro breve de progreso (IA, accesibilidad, performance).
- Optimización ligera (Lighthouse), minificación y lazy loading de imágenes.
- Imagen hero y recursos visuales más curados y optimizados.

## Aprendizajes
- Práctica de mobile‑first y adaptación gradual a desktop.
- Separación de responsabilidades en JavaScript con ES6.
- Uso responsable de herramientas de IA para iterar más rápido sin perder control ni comprensión del código.

## Sobre el autor
Soy Samuel Meza, aspirante a desarrollador web con enfoque en front‑end. Me gusta aprender constantemente, aplicar buenas prácticas y mantenerme al día con tecnologías como la IA para mejorar mis procesos y resultados. Busco oportunidades para seguir creciendo profesionalmente aportando valor en proyectos reales.

## Autor y contacto
- GitHub: https://github.com/SamuMeza
- Email: `samu12meza@gmail.com`

Si tienes feedback sobre usabilidad, accesibilidad o código, será muy bienvenido.
