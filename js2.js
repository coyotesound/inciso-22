let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

// Inicializamos la visibilidad de las imágenes
images[currentIndex].style.display = 'block';

// Función para cambiar de imagen mediante los botones
function showImage(index) {
  // Ocultar todas las imágenes
  images.forEach(image => image.style.display = 'none');

  // Mostrar la imagen correspondiente al índice
  images[index].style.display = 'block';
}

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
});