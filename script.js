// Selecciona todos los botones
      const buttons = document.querySelectorAll('.button');

      // Itera sobre cada botón para añadirle el comportamiento
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          // Después de 1000 milisegundos (1 segundo), quita el foco del botón
          setTimeout(() => {
            button.blur();
          },3000);
        });
      });