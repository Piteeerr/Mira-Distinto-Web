(function () {
  var FALLBACK = {
    wsp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg>'
  };

  function wa(texto) {
    return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto);
  }

  function esc(valor) {
    return String(valor == null ? "" : valor).replace(/[&<>"']/g, function (caracter) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[caracter];
    });
  }

  function tarjeta(producto) {
    var mensaje = "Hola, quisiera consultar por " + producto.nombre + ".";
    return '<article class="product-card">' +
      '<a class="product-photo" href="' + esc(producto.foto) + '" target="_blank" rel="noopener" aria-label="Ver imagen de ' + esc(producto.nombre) + '">' +
      '<img src="' + esc(producto.foto) + '" alt="' + esc(producto.nombre) + '" loading="lazy" decoding="async">' +
      '</a>' +
      '<div class="product-info">' +
      '<span class="product-category">' + esc(producto.tipo) + '</span>' +
      '<h3>' + esc(producto.nombre) + '</h3>' +
      '<p>' + esc(producto.descripcion) + '</p>' +
      '<a class="product-link" href="' + wa(mensaje) + '" target="_blank" rel="noopener">Consultar por este modelo <span aria-hidden="true">↗</span></a>' +
      '</div>' +
      '</article>';
  }

  // --- Galería única de modelos ---
  var grid = document.getElementById("grid");
  if (grid) {
    grid.innerHTML = PRODUCTS.map(tarjeta).join("");
  }

  // --- Modelos destacados en la portada ---
  var destacados = document.getElementById("featured");
  if (destacados) {
    destacados.innerHTML = PRODUCTS.filter(function (producto) {
      return producto.destacado;
    }).map(tarjeta).join("");
  }

  // --- Enlaces de WhatsApp ---
  document.querySelectorAll("[data-wa]").forEach(function (enlace) {
    enlace.href = wa(enlace.getAttribute("data-wa"));
    enlace.target = "_blank";
    enlace.rel = "noopener";
  });

  // --- Íconos de redes y contacto ---
  document.querySelectorAll("[data-icon]").forEach(function (contenedor) {
    var clave = contenedor.getAttribute("data-icon");
    var imagen = new Image();

    imagen.alt = "";
    imagen.onerror = function () {
      contenedor.innerHTML = FALLBACK[clave] || "";
    };
    imagen.src = ICONS[clave];
    contenedor.appendChild(imagen);
  });
})();