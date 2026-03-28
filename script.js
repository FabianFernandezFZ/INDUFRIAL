// Inicializa iconos de Lucide una vez cargado el DOM.
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
