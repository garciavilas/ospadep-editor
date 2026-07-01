# OSPADEP Salud — Editor de imágenes de marca

Herramienta web para que equipos no técnicos puedan producir imágenes de comunicación respetando el Manual de Marca v3, el Manual de Usos en Redes y el Blueprint Web de OSPADEP Salud.

**URL pública:** https://editor.ospadepsalud.ar

---

## Qué hace

Permite tomar una fotografía, aplicarle el tratamiento visual definido por el manual de marca, agregar texto con la tipografía correcta, y descargar el resultado como PNG listo para publicar en redes sociales o usar en comunicaciones digitales.

No requiere instalar nada. Funciona directamente en el browser.

---

## Qué puede hacer el usuario

1. **Subir una foto** — arrastrando o eligiendo un archivo desde el equipo.
2. **Reencuadrar** — arrastrando sobre la imagen para elegir qué parte se muestra, con control de zoom hasta 300%.
3. **Elegir el formato de salida** — cuadrado 1:1 (1080×1080), vertical 4:5 (1080×1350) o Story 9:16 (1080×1920).
4. **Elegir el registro de comunicación** — Institucional, Marketing o Promociones. Cada registro bloquea automáticamente los colores que le corresponden; los colores de otros registros no aparecen.
5. **Aplicar intervención fotográfica** — duotono, recorte en caja D, ambos, o ninguno.
6. **Escribir texto** — etiqueta (tag), titular y cuerpo, con posición configurable.
7. **Agregar elementos de marca** — logo oficial, contorno D (con posición, tamaño y opacidad ajustables), grilla de puntos, doble chevron.
8. **Descargar** — PNG a resolución completa con nombre de archivo que incluye registro y formato.

---

## En qué criterios se basa

### Los tres registros de comunicación

La regla más importante del manual es que la marca comunica en **tres registros distintos con paletas separadas que no se mezclan**:

| Registro | Paleta permitida | Uso |
|---|---|---|
| **Institucional** | Azul `#004f9f` · Azul profundo `#032b6e` · Cian `#00a2c8` · Verde `#15af97` | Hero, planes, prestadores, navegación. Mucho aire y blanco. |
| **Marketing** | Verde teal `#15af97` | Mensajes cálidos y descontracturados, tipografía blanca grande. |
| **Promociones** | Naranja `#e94e1b` · Ámbar `#f8ab16` | Descuentos, beneficios, comercios. Único lugar donde viven los complementarios. |

La herramienta implementa esto de forma técnica: al elegir un registro, los selectores de color muestran únicamente los colores de ese registro. Es imposible poner ámbar en una pieza institucional, por ejemplo.

### Intervención fotográfica

El manual establece que nunca se usa una foto "cruda". Toda fotografía debe recibir una intervención cromática que la integre a la identidad visual. La herramienta implementa dos técnicas del manual:

- **Duotono**: la foto se lleva a escala de grises y se le aplica un overlay de color de marca con dos capas de blend (multiply para las sombras, screen para las luces). La intensidad es ajustable.
- **Caja D (contraforma)**: la foto se recorta dentro de la silueta de la letra "D" de OSPADEP, que funciona como marco fotográfico. El área exterior muestra el color de fondo elegido.

Ambas técnicas pueden combinarse.

### Tipografía

- **Raleway Black (900)** para titulares. Raleway Bold (700) para etiquetas y llamadores.
- **Poppins Regular (400)** para texto de cuerpo.
- Las etiquetas se muestran siempre en mayúsculas con tracking amplio.

### Logo

Se usa el logo oficial extraído del Manual de Marca (el wordmark OSPADEP con la D intervenida con el símbolo del avión). La herramienta lo muestra en tono claro (blanco) sobre fondos oscuros o fotografías, y en tono oscuro (azul) sobre fondos blancos o grises claros.

### Sistema 60/30/10

El manual define que el 60% de cada pieza es el color dominante, el 30% el secundario, y el 10% son acentos. La herramienta guía hacia esto: un color principal de fondo, el color de intervención de la foto, y el color de acento que aparece en la etiqueta de texto.

---

## Qué NO hace (y por qué)

- **No guarda historial** — es una herramienta local sin backend. Cada sesión empieza de cero. Si se necesita guardar configuraciones, sería una mejora futura que requiere agregar un servidor o un sistema de almacenamiento.
- **No publica directamente en redes** — descarga el archivo al equipo del usuario, quien lo sube desde ahí. Integrar publicación directa requeriría autenticación con cada red social.
- **No acepta vectores SVG como foto de entrada** — solo imágenes raster (JPG, PNG, WEBP).

---

## Cómo actualizar la herramienta

Los tres archivos son:

- `index.html` — estructura de la interfaz y controles
- `style.css` — apariencia del editor (no del canvas)
- `editor.js` — toda la lógica de canvas, paletas y reglas de marca

Para agregar un nuevo color a un registro, editar el objeto `REGISTERS` en `editor.js`. Para cambiar tamaños de tipografía, buscar las variables `tagSize`, `hlSize`, `bdSize` en la función `drawText`.

Cualquier cambio pusheado a la rama `main` se publica automáticamente en Netlify en 1-2 minutos.

---

## Infraestructura y deploy

- **Repositorio:** `garciavilas/ospadep-editor` (público en GitHub)
- **Hosting:** Netlify — conectado a la rama `main`, deploy automático en cada push
- **Dominio:** `editor.ospadepsalud.ar` (subdominio del dominio principal de OSPADEP)
- **DNS:** gestionado por Netlify DNS (nameservers `dns1-4.p08.nsone.net`)
- **SSL:** certificado automático por Let's Encrypt vía Netlify

El dominio `ospadepsalud.ar` está registrado en NIC Argentina y delegado a los nameservers de Netlify, que manejan todos los subdominios desde ahí.

---

## Tecnología

HTML + CSS + JavaScript puro. Sin frameworks, sin dependencias, sin build. Funciona offline una vez cargada la página.

Construido en julio de 2026 por Claude (Anthropic) en colaboración con el equipo de OSPADEP.
