let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

// Inicializamos la visibilidad de las imágenes
images[currentIndex].style.display = 'block';

// Función para cambiar de imagen automáticamente
function changeImage() {
  // Ocultar todas las imágenes
  images.forEach(image => image.style.display = 'none');

  // Mostrar la imagen correspondiente al índice
  images[currentIndex].style.display = 'block';

  // Incrementar el índice y asegurarse de que no salga del rango
  currentIndex = (currentIndex + 1) % totalImages;
}

// Cambiar la imagen cada 3 segundos
setInterval(changeImage, 3000);