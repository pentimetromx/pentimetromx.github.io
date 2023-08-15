function VolveraInicio(){
  location.reload();
  document.body.style.overflow = 'block'; 
}
function botoGrand() {

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
  }, 200);
}
 
function changeButtonStyles(videoId) { 
  var elementsToHide = document.querySelectorAll('.alimentador, .uTeñido, .desbobinador,.unidProceso,.rebobinador, .contTorrImp');   
  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = 'none';
  } 

 const videoElements = document.querySelectorAll('.video-training');  
  videoElements.forEach(video => {
    if (video.id === videoId) {
      video.style.display = 'block';
      video.play();      
    } else {
      video.style.display = 'none';
    }
  });

  const buttonElements = document.querySelectorAll('.bot-entre');
  buttonElements.forEach(elemento => {
  elemento.style.display = 'block';
  });

  var imageElements = document.querySelectorAll('.image-training');  
  for (var i= 0; i< imageElements.length; i++) {
    imageElements[i].style.display='block'
  }

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
  }, 200);

  var videoBackground = document.getElementById('videoBackground');
  videoBackground.style.display = 'none'; // Oculta el video
}
 
function cambioContenedor() {
  var elementsToHide = document.querySelectorAll('.alimentador, .uTeñido, .desbobinador,.unidProceso,.rebobinador');   
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
  }
  var botIn = document.getElementById('bot-inic')
  botIn.style.display='flex'


}

function cierraContenedores(desbobClas,teñiClas,alimClas,uniProClas,rebobClas){
  var desbobina = document.getElementsByClassName(desbobClas)[0];
  desbobina.style.display='none'
  var tiñe = document.getElementsByClassName(teñiClas)[0];
  tiñe.style.display='none'
  var alimenta = document.getElementsByClassName(alimClas)[0];
  alimenta.style.display='none'
  var uniPro = document.getElementsByClassName(uniProClas)[0];
  uniPro.style.display='none'
  var reboBin = document.getElementsByClassName(rebobClas)[0];
  reboBin.style.display='none'  
  var botIn = document.getElementById('bot-inic')
  botIn.style.display='flex'
  var video = document.getElementById("videoBackground"); 
  video.pause();
}

function muestraRodillo (videoId) {
  const videoElements = document.querySelectorAll('.video-training');
  
  videoElements.forEach(video => {
    if (video.id === videoId) {
      video.style.display = 'block';
      video.currentTime = 0; // Establecer el tiempo actual al inicio
      video.play();      
    } else {
      video.style.display = 'none';
      video.pause();
    }
  });

  var videoBackground = document.getElementById('videoBackground');
  videoBackground.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const botonesB = document.querySelectorAll('.boton-b');
  const botonesC = document.querySelectorAll('.boton-c');
  const botonesD = document.querySelectorAll('.boton-d');
  const botonesE = document.querySelectorAll('.boton-e');

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

  // Llama a la función para los botones con ID 'boton-b'
  recorrerYCambiarColores(botonesB);

  // Llama a la función para los botones 'boton-c'
  recorrerYCambiarColores(botonesC);

  // Llama a la función para los botones con ID 'boton-d'
  recorrerYCambiarColores(botonesD);

    // Llama a la función para los botones con ID 'boton-e'
    recorrerYCambiarColores(botonesE);

/*   document.getElementById('detener').onclick = () => {
    clearInterval(intervalId);
  }; */
})

document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("videoBackground");
  const toggleVideoButton = document.getElementById("toggleVideoButton");

  toggleVideoButton.addEventListener("click", function() {
    video.pause();
  })

});


// LOGICA PARA FULL SCREEN A IMAGENES
const images = document.querySelectorAll('.image-training');
images.forEach(image => {
  let isFullscreen = false;
  image.addEventListener('click', () => {
    if (!isFullscreen) {
      if (image.requestFullscreen) {
        image.requestFullscreen();
      } else if (image.mozRequestFullScreen) {
        image.mozRequestFullScreen();
      } else if (image.webkitRequestFullscreen) {
        image.webkitRequestFullscreen();
      } else if (image.msRequestFullscreen) {
        image.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    isFullscreen = !isFullscreen;
  });
});
////////////////////////////////////////////////////////////////////////////////////







