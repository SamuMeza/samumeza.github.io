(() => {
  const getNextSection = (current) => {
    let el = current && current.nextElementSibling;
    while (el) {
      if (el.tagName && el.tagName.toLowerCase() === 'section') return el;
      el = el.nextElementSibling;
    }
    return null;
  };

  const scrollToSection = (target) => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const wireArrow = (section) => {
    const arrow = section.querySelector('.arrow-container');
    if (!arrow) return;

    const nextSection = getNextSection(section);
    if (!nextSection) return;

    // Click
    arrow.addEventListener('click', () => scrollToSection(nextSection));

    // Accesibilidad por teclado
    arrow.setAttribute('role', 'button');
    arrow.setAttribute('tabindex', '0');
    arrow.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        scrollToSection(nextSection);
      }
    });
  };

  const init = () => {
    document.querySelectorAll('main section').forEach(wireArrow);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();