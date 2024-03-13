document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Muestra o oculta el botón en función de la posición de desplazamiento
  window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Desplazamiento suave al hacer clic en el botón
  scrollToTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0; // Para navegadores que no soportan document.documentElement
    document.documentElement.scrollTop = 0;
  });
});
