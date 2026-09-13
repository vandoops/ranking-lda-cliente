(() => {
  const loader = document.createElement("div");
  loader.className = "page-loader page-loader-hidden";
  loader.setAttribute("aria-label", "Carregando");
  loader.innerHTML = `
    <img src="logopng.png" alt="LDA" class="loader-logo">
    <div class="loader-spinner" aria-hidden="true"></div>
  `;

  document.body.appendChild(loader);

  const esconderLoader = () => {
    loader.classList.add("page-loader-hidden");
    window.setTimeout(() => loader.remove(), 400);
  };

  window.setTimeout(esconderLoader, 1200);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");

    if (!link || link.target === "_blank" || event.defaultPrevented) {
      return;
    }

    const destino = new URL(link.href, window.location.href);

    if (destino.origin !== window.location.origin || destino.pathname === window.location.pathname) {
      return;
    }

    event.preventDefault();
    loader.classList.remove("page-loader-hidden");
    window.setTimeout(() => {
      window.location.href = destino.href;
    }, 500);
  });
})();
