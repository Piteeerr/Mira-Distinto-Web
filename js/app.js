(function () {
  var FALLBACK = {
    wsp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg>'
  };

  function wa(texto) { return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // --- Dibujo de armazón cuando un producto no tiene foto ---
  function lente(forma, x, color, sol) {
    var r = forma === "redondo" ? 27 : forma === "cuadrado" ? 8 : forma === "cat" ? 18 : forma === "aviador" ? 26 : 20;
    var h = forma === "aviador" ? 60 : 54, y = forma === "aviador" ? 18 : 20;
    return '<rect x="' + x + '" y="' + y + '" width="64" height="' + h + '" rx="' + r + '" fill="' + (sol ? "#1c1c1c" : "var(--gold)") + '" opacity="' + (sol ? 0.78 : 0.14) + '"/>' +
           '<rect x="' + x + '" y="' + y + '" width="64" height="' + h + '" rx="' + r + '" fill="none" stroke="' + color + '" stroke-width="4"/>';
  }
  function imagen(p) {
    if (p.foto) return '<img src="' + esc(p.foto) + '" alt="' + esc(p.nombre) + '" loading="lazy">';
    if (p.forma === "lc") return '<svg viewBox="0 0 200 100" aria-hidden="true"><circle cx="100" cy="50" r="30" fill="' + p.color + '" opacity=".15" stroke="' + p.color + '" stroke-width="3"/><circle cx="100" cy="50" r="14" fill="none" stroke="' + p.color + '" stroke-width="2" opacity=".6"/></svg>';
    return '<svg viewBox="0 0 200 100" aria-hidden="true">' + lente(p.forma, 26, p.color, p.sol) + lente(p.forma, 110, p.color, p.sol) +
           '<path d="M90 42 Q100 34 110 42" stroke="' + p.color + '" stroke-width="4" fill="none"/><path d="M26 38 L8 34 M174 38 L192 34" stroke="' + p.color + '" stroke-width="4" stroke-linecap="round"/></svg>';
  }
  function tarjeta(p) {
    return '<article class="card"><div class="ph">' + imagen(p) + '</div><div class="in"><small>' + esc(p.marca) + '</small><h3>' + esc(p.nombre) + '</h3>' +
      '<div class="price">' + (p.precio ? esc(p.precio) : "Consultar precio") + '</div>' +
      '<a class="btn" href="' + wa("Hola! Quisiera consultar por: " + p.nombre + " (" + p.marca + ")") + '" target="_blank" rel="noopener">Consultar este modelo</a></div></article>';
  }

  // --- Catálogo con filtros ---
  var grid = document.getElementById("grid"), filtros = document.getElementById("filters");
  if (grid && filtros) {
    var cats = ["Todos"].concat(PRODUCTS.map(function (p) { return p.categoria; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
    var actual = "Todos";
    var dibujar = function () {
      filtros.innerHTML = "";
      cats.forEach(function (c) {
        var b = document.createElement("button");
        b.type = "button"; b.textContent = c; b.setAttribute("aria-pressed", c === actual);
        b.onclick = function () { actual = c; dibujar(); };
        filtros.appendChild(b);
      });
      grid.innerHTML = PRODUCTS.filter(function (p) { return actual === "Todos" || p.categoria === actual; }).map(tarjeta).join("");
    };
    dibujar();
  }

  // --- Destacados en Inicio ---
  var dest = document.getElementById("featured");
  if (dest) dest.innerHTML = PRODUCTS.filter(function (p) { return p.destacado; }).map(tarjeta).join("");

  // --- Links de WhatsApp ---
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = wa(a.getAttribute("data-wa")); a.target = "_blank"; a.rel = "noopener";
  });

  // --- Íconos (usa tu logo si existe, si no un ícono simple) ---
  document.querySelectorAll("[data-icon]").forEach(function (s) {
    var k = s.getAttribute("data-icon"), img = new Image();
    img.alt = ""; img.onerror = function () { s.innerHTML = FALLBACK[k]; }; img.src = ICONS[k]; s.appendChild(img);
  });

  // --- Formulario de contacto -> WhatsApp ---
  var f = document.getElementById("form");
  if (f) f.addEventListener("submit", function (e) {
    e.preventDefault();
    var t = "Hola! Soy " + document.getElementById("n").value + ". Motivo: " + document.getElementById("m").value + ". " + document.getElementById("t").value;
    window.open(wa(t), "_blank", "noopener");
  });
})();
