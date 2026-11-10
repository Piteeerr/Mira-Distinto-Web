# Mirá Distinto - sitio web

Sitio institucional de la óptica. La web está pensada para presentar la propuesta, mostrar una selección de productos y facilitar el contacto; no funciona como tienda online.

## Estructura
- `index.html`: portada y selección de destacados.
- `catalogo.html`: catálogo de productos con filtros por categoría.
- `servicios.html`: resumen de la propuesta de la óptica.
- `nosotros.html`: presentación de Mirá Distinto.
- `contacto.html`: canales de contacto.
- `css/estilos.css`: identidad visual y diseño responsive.
- `js/config.js`: teléfono de WhatsApp y rutas de íconos.
- `js/productos.js`: listado de productos y rutas a las fotos.
- `js/app.js`: tarjetas, filtros y enlaces de WhatsApp.
- `img/`: logo, íconos y fotografías.

## Cómo agregar un producto
Editá el arreglo `PRODUCTS` en `js/productos.js`. Cada elemento puede incluir:
- `nombre`: nombre descriptivo del producto.
- `categoria`: categoría que se utiliza para generar los filtros.
- `descripcion`: breve descripción visible en el catálogo.
- `foto`: ruta relativa a la imagen, por ejemplo `img/productos/nombre-del-archivo.jpg`.
- `destacado: true`: muestra el producto también en la portada.

No se muestran precios ni marcas por defecto. Agregalos únicamente cuando estén confirmados y la web realmente los necesite.

## Datos que deben mantenerse actualizados
- Número de WhatsApp en `js/config.js`.
- Usuario de Instagram y enlace en `contacto.html`.
- Dirección y horarios: incorporarlos en `contacto.html` cuando estén confirmados.
- Textos de servicios: publicar únicamente prestaciones que la óptica efectivamente ofrezca.

## Imágenes
Guardá las fotografías de productos en `img/productos/` y usá sus nombres exactos en `js/productos.js`. Para mejorar la velocidad de carga, conviene comprimir las imágenes grandes y priorizar JPG o WebP cuando sea posible.
