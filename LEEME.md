# Mirá Distinto - sitio web

Sitio institucional de la óptica. La web presenta la propuesta, muestra una selección de modelos y facilita el contacto; no funciona como tienda online.

## Estructura
- `index.html`: portada y modelos destacados.
- `catalogo.html`: galería única de modelos, sin filtros ni categorías de navegación.
- `nosotros.html`: presentación de Mirá Distinto.
- `contacto.html`: canales de contacto.
- `css/estilos.css`: identidad visual y adaptación responsive.
- `js/config.js`: teléfono de WhatsApp y rutas de íconos.
- `js/productos.js`: listado de modelos y rutas a las fotos.
- `js/app.js`: tarjetas, galería y enlaces de WhatsApp.
- `img/`: logo, íconos y fotografías.

## Cómo agregar un modelo
Editá el arreglo `PRODUCTS` en `js/productos.js`. Cada elemento puede incluir:
- `nombre`: nombre descriptivo del modelo.
- `tipo`: texto breve que aparece como referencia (por ejemplo, "Armazón de receta").
- `descripcion`: breve descripción visible debajo del nombre.
- `foto`: ruta relativa a la imagen, por ejemplo `img/productos/nombre-del-archivo.jpg`.
- `destacado: true`: muestra el modelo también en la portada.

La galería es única y no utiliza filtros. No se muestran precios ni marcas por defecto.

## Datos que deben mantenerse actualizados
- Número de WhatsApp en `js/config.js`.
- Usuario y enlace de Instagram en `contacto.html`.
- Dirección y horarios: incorporarlos cuando estén confirmados.
- Textos institucionales: evitar publicar prestaciones que la óptica no haya confirmado.

## Imágenes y rendimiento
Guardá las fotografías en `img/productos/` y usá sus nombres exactos en `js/productos.js`. Las imágenes de las tarjetas se cargan de forma diferida (`loading="lazy"`). Para mejorar aún más la velocidad, conviene exportar fotografías grandes a WebP o JPG optimizado y mantener dimensiones razonables para su uso en pantalla.

El favicon y las imágenes de vista previa al compartir enlaces utilizan `img/logo.png`. Cuando el sitio tenga una URL definitiva, conviene revisar que la imagen de Open Graph se resuelva correctamente desde esa dirección.
