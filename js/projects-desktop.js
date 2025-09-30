// Modo desktop (720–1440px): mostrar resumen y enlace en cada card
// y deshabilitar/ocultar el botón "Ver más". Fuera de ese rango,
// se remueven los resúmenes/enlaces y los botones vuelven a funcionar.

const DESKTOP_QUERY = '(min-width: 720px) and (max-width: 1440px)';
const mqDesktop = window.matchMedia(DESKTOP_QUERY);

const summaries = [
  'Lava-Dora es una landing page para un negocio de lavadoras. Este proyecto fue realizado con HTML, CSS y JavaScript puro.',
  'Este proyecto basico, pero efectivo de calculadora. Al igual que el proyecto anterior todo fue con las ya mencionadas tecnologias totalmente vanilla.',
  'Lista de tareas sencilla con añadir, eliminar y marcar completadas.',
];

const links = [
  'https://lava-dora.netlify.app/',
  'https://cal-cula-dora.netlify.app/',
  'https://samumeza-to-do.netlify.app/',
];

// Utilidades
const getContents = () => Array.from(document.querySelectorAll('.card .card-content'));

const ensureSummary = (contentEl, idx) => {
  let p = contentEl.querySelector('.card-summary');
  if (!p) {
    p = document.createElement('p');
    p.className = 'card-summary';
    contentEl.appendChild(p);
  }
  p.textContent = summaries[idx] || '';
  return p;
};

const ensureLink = (contentEl, idx) => {
  let a = contentEl.querySelector('.link-project.desktop-only');
  if (!a) {
    a = document.createElement('a');
    a.className = 'link-project desktop-only';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    contentEl.appendChild(a);
  }
  a.href = links[idx] || '#';
  a.textContent = 'Ver proyecto';
  return a;
};

const removeSummaries = () => {
  document.querySelectorAll('.card .card-content .card-summary').forEach((el) => el.remove());
};

const removeDesktopLinks = () => {
  document.querySelectorAll('.card .card-content .link-project.desktop-only').forEach((el) => el.remove());
};

const disableButtonsDesktop = () => {
  document.querySelectorAll('.card .card-content .show-more').forEach((btn) => {
    btn.setAttribute('aria-hidden', 'true');
    btn.setAttribute('disabled', 'true');
    btn.style.pointerEvents = 'none';
    btn.tabIndex = -1;
    // En CSS desktop ya está display: none; esto refuerza la intención y accesibilidad.
  });
};

const enableButtonsMobile = () => {
  document.querySelectorAll('.card .card-content .show-more').forEach((btn) => {
    btn.removeAttribute('aria-hidden');
    btn.removeAttribute('disabled');
    btn.style.pointerEvents = '';
    btn.tabIndex = 0;
  });
};

// Modo
const applyMode = () => {
  if (mqDesktop.matches) {
    const contents = getContents();
    contents.forEach((contentEl, idx) => {
      const summary = ensureSummary(contentEl, idx);
      ensureLink(contentEl, idx);
      // Nota: no movemos elementos si ya existen; mantener simple y estable.
      // Si quisieras forzar el enlace justo después del resumen:
      // if (summary.nextSibling !== a) contentEl.insertBefore(a, summary.nextSibling);
    });
    disableButtonsDesktop();
  } else {
    removeSummaries();
    removeDesktopLinks();
    enableButtonsMobile();
  }
};

// Inicialización
const init = () => {
  applyMode();
  mqDesktop.addEventListener('change', applyMode);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}