const botonesArray = Array.from(document.querySelectorAll('.boton-c'));
const divPpal = document.getElementsByClassName('.cont-ppal')[0];  

function volverInicio(videClass){
  ocultaVideo = document.getElementsByClassName(videClass)[0];
  ocultaVideo.style.display='none';

  var elementsToHide = document.querySelectorAll('cont-ppal, .mostrar-cont');   
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'flex';
  }
  var botIn = document.getElementById('bot-inic')
  botIn.style.display='none'

  document.body.style.overflow = 'hidden';  
}
 
function changeButtonStyles() {    
  var button = document.querySelector('.boton-a');

  // Guardar estilos originales
  var originalBackgroundColor = button.style.backgroundColor;
  var originalColor = button.style.color;

  // Cambiar estilos con click
  button.style.backgroundColor = 'white';
  button.style.color = 'red';

  // Restablecer estilos después de ... segundos
  setTimeout(function() {
      button.style.backgroundColor = originalBackgroundColor;
      button.style.color = originalColor;
  }, 300);

  // Retardo de 0.2 segundos antes de ejecutar esta parte
  setTimeout(function() {
      const divPpal = document.querySelector('.cont-ppal');
      if (divPpal.style.display === 'none') {
          divPpal.style.display = 'block'; 
      } else {
          divPpal.style.display = 'none'; 
      }
  }, 200);
}

function cambioContenedor() {
  var elementsToHide = document.querySelectorAll('.alimentador, .uTeñido, .desbobinador');   
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
  }
  var botIn = document.getElementById('bot-inic')
  botIn.style.display='flex'

  videoElement.play();
}

function cierraContenedores(desbobClas,teñiClas,alimClas){
  var desbobina = document.getElementsByClassName(desbobClas)[0];
  desbobina.style.display='none'
  var tiñe = document.getElementsByClassName(teñiClas)[0];
  tiñe.style.display='none'
  var alimenta = document.getElementsByClassName(alimClas)[0];
  alimenta.style.display='none'

  var botIn = document.getElementById('bot-inic')
  botIn.style.display='flex'
}



document.addEventListener('DOMContentLoaded', () => {
  const botonesC = document.querySelectorAll('.boton-c');
  const botonesB = document.querySelectorAll('.boton-b');
  const botonesD = document.querySelectorAll('.boton-d');
  async function cambioColorTemporal(boton) {
    const originalColor = boton.getAttribute('data-original-color');
    
   // Cambia el color de fondo del botón a blanco y espera 80 milisegundos
   boton.style.backgroundColor = 'white';
   await new Promise(resolve => setTimeout(resolve, 80));
   
   // Cambia el color a azul y espera nuevamente
   boton.style.backgroundColor = 'blue';
   await new Promise(resolve => setTimeout(resolve, 80));  

   boton.style.backgroundColor = 'green';
   await new Promise(resolve => setTimeout(resolve, 80));
   boton.style.backgroundColor = 'red';
   await new Promise(resolve => setTimeout(resolve, 80));
   boton.style.backgroundColor = 'yellow';
   await new Promise(resolve => setTimeout(resolve, 80));
   boton.style.backgroundColor = 'black';
   await new Promise(resolve => setTimeout(resolve, 80));    

   // Restaura el color original del botón
   boton.style.backgroundColor = originalColor;
  }

  function recorrerYCambiarColores(botones) {
    let indiceActual = 0;

    async function recorrerBotones() {
      await cambioColorTemporal(botones[indiceActual]);

      indiceActual = (indiceActual + 1) % botones.length;

      if (indiceActual === 0) {
        clearInterval(intervalId);
      }
    }

    const intervalId = setInterval(recorrerBotones, 30);
  }

  // Llama a la función para los botones 'boton-c'
  recorrerYCambiarColores(botonesC);

  // Llama a la función para los botones con ID 'boton-b'
  recorrerYCambiarColores(botonesB);

  // Llama a la función para los botones con ID 'boton-b'
  recorrerYCambiarColores(botonesD);

  document.getElementById('detener').onclick = () => {
    clearInterval(intervalId);
  };
})



document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("videoBackground");
  const toggleVideoButton = document.getElementById("toggleVideoButton");

  // Agregar evento click al botón
  toggleVideoButton.addEventListener("click", function() {
      if (video.paused) {
          video.play();
          toggleVideoButton.textContent = "Detener Video";
      } else {
          video.pause();
          toggleVideoButton.textContent = "Reproducir Video";
      }
  });
});