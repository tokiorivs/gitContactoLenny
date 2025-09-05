// Selecciona todos los botones
const buttons = document.querySelectorAll('.button');

// Itera sobre cada botón para añadirle el comportamiento
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Después de 3000 milisegundos (3 segundos), quita el foco del botón
    setTimeout(() => {
      button.blur();
    }, 3000);
  });
});

// --- Funcionalidad para cambiar imagen de fondo ---

// 1. Seleccionar los elementos necesarios
const themeToggleButton = document.querySelector('.theme-toggle-button');
const container = document.querySelector('.container');

// 2. Crear la lista de imágenes de fondo
const backgroundImages = [
  // 'url("https://images.unsplash.com/photo-1659951525583-de3448450437?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // Nueva imagen
  // 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop")', // Bosque
  // 'url("https://images.unsplash.com/photo-1536532184021-da5392b55da1?q=80&w=1935&auto=format&fit=crop")', // Montaña nevada
  'url("./images/patron_2.jpeg")', // Imagen de patrón local
  'url("./images/patron_4.jpg")', // Imagen de patrón local
  'url("./images/patron_3.jpeg")', // Imagen de patrón local
  'url("./images/patrones_5.jpeg")', // Imagen de patrón local
  // 'none' // Opción para volver al color sólido original
];

let currentImageIndex = 0;

themeToggleButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  container.style.backgroundImage = backgroundImages[currentImageIndex];
});