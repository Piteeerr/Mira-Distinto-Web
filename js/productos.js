// ===== Catálogo =====
// Para agregar un producto, copiá una línea y cambiá los datos.
//  nombre, marca, categoria  -> texto (la categoría crea el filtro sola)
//  precio                    -> "$85.000" o "" para mostrar "Consultar precio"
//  foto                      -> opcional, ej: "img/productos/luna.jpg" (sin foto se dibuja un modelo simple)
//  forma / color / sol       -> solo para el dibujo sin foto (redondo, cuadrado, aviador, cat, lc)
//  destacado: true           -> lo muestra en la página de Inicio
var PRODUCTS = [
  {nombre:"Modelo Luna",marca:"Marca A",categoria:"Armazones de receta",precio:"$85.000",color:"#5a1f3a",forma:"redondo",destacado:true},
  {nombre:"Modelo Norte",marca:"Marca B",categoria:"Armazones de receta",precio:"$92.000",color:"#1c1a1f",forma:"cuadrado"},
  {nombre:"Modelo Brisa",marca:"Marca C",categoria:"Armazones de receta",precio:"",color:"#a98348",forma:"cat",destacado:true},
  {nombre:"Modelo Costa",marca:"Marca A",categoria:"Anteojos de sol",precio:"$78.000",color:"#8a5a2b",forma:"aviador",sol:true,destacado:true},
  {nombre:"Modelo Sol",marca:"Marca D",categoria:"Anteojos de sol",precio:"$69.000",color:"#222",forma:"cuadrado",sol:true},
  {nombre:"Lentes de contacto mensuales",marca:"Marca E",categoria:"Lentes de contacto",precio:"",color:"#5a1f3a",forma:"lc"},
  {nombre:"Líquido multipropósito",marca:"Marca F",categoria:"Accesorios",precio:"$12.000",color:"#a98348",forma:"lc"}
];
