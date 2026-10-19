/* Viaje a Bilbao 2026 — presentación del vídeo (vertical 9:16) */
(function () {
  // Vercel Web Analytics (solo funciona en despliegues de Vercel; inocuo fuera)
  try {
    (window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); });
    if (!document.head.querySelector('script[src*="/_vercel/insights/script.js"]')) {
      var s = document.createElement("script");
      s.src = "/_vercel/insights/script.js";
      s.defer = true;
      document.head.appendChild(s);
    }
  } catch (e) {}

  var TITLE = "Viaje a Bilbao 2026";
  var VIDEO_SRC = "video/viaje-bilbao-2026.mp4";
  var DOWNLOAD_NAME = "ViajeABilbao2026.mp4";

  var STRINGS = {
    en: {
      tagline: "A trip to remember",
      play: "Play video",
      download: "Download",
      share: "Share",
      fullscreen: "Fullscreen",
      copied: "Link copied",
      meta: "2:35 min · 1080p · MP4",
      hint: "Best experienced with sound on.",
      author: "Developed by",
      extrasTitle: "Bonus content",
      extrasSub: "Two short clips from the trip.",
      extras: [
        { caption: "Toast at the winery", file: "extra-01.mp4", dl: "Bilbao2026-extra-brindis.mp4" },
        { caption: "In the garden", file: "extra-02.mp4", dl: "Bilbao2026-extra-jardin.mp4" }
      ]
    },
    es: {
      tagline: "Un viaje para recordar",
      play: "Reproducir vídeo",
      download: "Descargar",
      share: "Compartir",
      fullscreen: "Pantalla completa",
      copied: "Enlace copiado",
      meta: "2:35 min · 1080p · MP4",
      hint: "Se disfruta mejor con sonido.",
      author: "Desarrollado por",
      extrasTitle: "Contenido extra",
      extrasSub: "Dos clips cortos del viaje.",
      extras: [
        { caption: "Brindis en la bodega", file: "extra-01.mp4", dl: "Bilbao2026-extra-brindis.mp4" },
        { caption: "En el jardín", file: "extra-02.mp4", dl: "Bilbao2026-extra-jardin.mp4" }
      ]
    }
  };

  var lang = "es";
  var app = document.getElementById("app");
  app.innerHTML =
    '<div class="bg" aria-hidden="true"></div>' +
    '<header class="top">' +
    '  <span class="brand">Viaje a Bilbao&nbsp;2026</span>' +
    '  <button id="langToggle" class="lang" aria-label="Cambiar idioma / Switch language">ES</button>' +
    "</header>" +
    '<main class="wrap">' +
    '  <section class="hero">' +
    '    <div class="player" id="player">' +
    '      <video id="video" src="' + VIDEO_SRC + '" poster="poster.jpg"' +
    '             preload="metadata" playsinline controls></video>' +
    '      <button id="bigPlay" class="big-play" aria-label="Play">' +
    '        <svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true">' +
    '          <circle cx="32" cy="32" r="30" fill="rgba(11,14,20,.55)" stroke="#e8b34b" stroke-width="2.5"/>' +
    '          <path d="M26 20v24l18-12z" fill="#e8b34b"/>' +
    "        </svg>" +
    "      </button>" +
    "    </div>" +
    '    <div class="info">' +
    '      <p class="kicker">' + TITLE + "</p>" +
    '      <h1 id="tagline"></h1>' +
    '      <p class="meta" id="meta"></p>' +
    '      <p class="hint" id="hint"></p>' +
    '      <div class="actions">' +
    '        <a class="btn primary" id="btnDownload" href="' + VIDEO_SRC + '" download="' + DOWNLOAD_NAME + '"></a>' +
    '        <button class="btn" id="btnShare"></button>' +
    '        <button class="btn" id="btnFull"></button>' +
    "      </div>" +
    "    </div>" +
    "  </section>" +
    '  <section class="extras" id="extras">' +
    '    <h2 class="extras-title" id="extrasTitle"></h2>' +
    '    <p class="extras-sub" id="extrasSub"></p>' +
    '    <div class="extras-grid" id="extrasGrid"></div>' +
    "  </section>" +
    '  <footer><span id="author"></span>&nbsp;<a href="mailto:jpecina@gmail.com">jpecina@gmail.com</a></footer>' +
    "</main>";

  var video = document.getElementById("video");
  var bigPlay = document.getElementById("bigPlay");
  var player = document.getElementById("player");

  function render() {
    var t = STRINGS[lang];
    document.documentElement.lang = lang;
    document.getElementById("tagline").textContent = t.tagline;
    document.getElementById("meta").textContent = t.meta;
    document.getElementById("hint").textContent = t.hint;
    document.getElementById("author").textContent = t.author;
    document.getElementById("btnDownload").textContent = "↓ " + t.download;
    document.getElementById("btnShare").textContent = t.share;
    document.getElementById("btnFull").textContent = t.fullscreen;
    document.getElementById("langToggle").textContent = lang === "en" ? "ES" : "EN";
    bigPlay.setAttribute("aria-label", t.play);
    renderExtras(t);
  }

  function renderExtras(t) {
    document.getElementById("extrasTitle").textContent = t.extrasTitle;
    document.getElementById("extrasSub").textContent = t.extrasSub;
    var grid = document.getElementById("extrasGrid");
    var html = "";
    t.extras.forEach(function (x, n) {
      var src = "video/extras/" + x.file;
      var poster = "video/extras/" + x.file.replace(/\.mp4$/, ".jpg");
      html +=
        '<div class="extra-card">' +
        '  <div class="mini-player" id="xp' + n + '">' +
        '    <video id="xv' + n + '" src="' + src + '" poster="' + poster + '"' +
        '           preload="metadata" playsinline controls></video>' +
        '    <button class="big-play" data-v="xv' + n + '" data-p="xp' + n + '" aria-label="' + t.play + '">' +
        '      <svg viewBox="0 0 64 64" width="48" height="48" aria-hidden="true">' +
        '        <circle cx="32" cy="32" r="30" fill="rgba(11,14,20,.55)" stroke="#e8b34b" stroke-width="2.5"/>' +
        '        <path d="M26 20v24l18-12z" fill="#e8b34b"/>' +
        "      </svg>" +
        "    </button>" +
        "  </div>" +
        '  <p class="extra-cap">' + x.caption + "</p>" +
        '  <a class="mini-dl" href="' + src + '" download="' + x.dl + '">↓ ' + t.download + "</a>" +
        "</div>";
    });
    grid.innerHTML = html;
    Array.prototype.forEach.call(grid.querySelectorAll(".big-play"), function (btn) {
      btn.addEventListener("click", function () {
        document.getElementById(btn.getAttribute("data-v")).play();
      });
    });
    t.extras.forEach(function (x, n) {
      var v = document.getElementById("xv" + n);
      var p = document.getElementById("xp" + n);
      v.addEventListener("play", function () { p.classList.add("playing"); });
      v.addEventListener("pause", function () { p.classList.remove("playing"); });
    });
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    lang = lang === "en" ? "es" : "en";
    render();
  });
  bigPlay.addEventListener("click", function () { video.play(); });
  video.addEventListener("play", function () { player.classList.add("playing"); });
  video.addEventListener("pause", function () { player.classList.remove("playing"); });
  document.getElementById("btnFull").addEventListener("click", function () {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (player.requestFullscreen) {
      player.requestFullscreen();
    }
  });
  document.getElementById("btnShare").addEventListener("click", function () {
    var t = STRINGS[lang];
    var url = location.href;
    function fallback() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function () {
          var b = document.getElementById("btnShare");
          b.textContent = "✓ " + t.copied;
          setTimeout(render, 1800);
        }).catch(function () {});
      }
    }
    if (navigator.share) {
      navigator.share({ title: TITLE, url: url }).catch(fallback);
    } else {
      fallback();
    }
  });

  render();

  // Service worker (PWA): solo la carcasa, no el vídeo
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
