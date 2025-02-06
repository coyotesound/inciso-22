let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

// Inicializamos la visibilidad de las imágenes
images[currentIndex].style.display = 'block';

// Función para cambiar de imagen con las teclas
function changeImage(event) {
  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % totalImages;
  } else if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  }
  // Ocultar todas las imágenes y mostrar la correspondiente al índice
  images.forEach(image => image.style.display = 'none');
  images[currentIndex].style.display = 'block';
}

// Escuchar eventos del teclado
window.addEventListener('keydown', changeImage);