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

function muestraRodillo (videoId, imageId) {
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

  const imagenElements = document.querySelectorAll('.image-training');  
  imagenElements.forEach(imagen => {
    if (imagen.id === imageId) {
      imagen.style.display = 'block';
    } else {
      imagen.style.display = 'none';
    }
  }); 

  var videoBackground = document.getElementById('videoBackground'); 
  videoBackground.style.display = 'none';

  var botInicio = document.getElementById('bot-inic')
  botInicio.style.marginLeft = '110px';

  var botGrande = document.getElementById('iniciar');
  botGrande.style.marginRight = '533px';

  var botRepuesto = document.getElementById('butt-repuestos')
  botRepuesto.style.display='block'

  var botManautonomo = document.getElementsByClassName('cont-bot-esp')[0];
  botManautonomo.style.display='flex'
  setTimeout(() => {
    applyImageEffects();
  }, 800); // Retardo de 0.9 segundos (900 milisegundos)
}

function applyImageEffects() { // aumento secuencial imagenes repuestos
  const imageElements = document.querySelectorAll('.image-training');
  let currentIndex = 0;
  function applyEffect() {
    if (currentIndex < imageElements.length) {
      const currentImage = imageElements[currentIndex];
      currentImage.style.transition = 'transform 0.1s';
      currentImage.style.transform = 'scale(2.0)';

      setTimeout(() => {
        currentImage.style.transition = 'transform 0.7s';
        currentImage.style.transform = 'scale(1)';
        currentIndex++;
        applyEffect();
      }, 100);
    }
  }
  applyEffect();
}

function alternarVisibilidad(docId) {
  var elementosParaAlternar = document.querySelectorAll('.bot-entre, .video-training,.image-training, .butt-partes, .documentos');
  for (var i = 0; i < elementosParaAlternar.length; i++) {
    if (elementosParaAlternar[i].id === docId) {
      elementosParaAlternar[i].style.display = "block";
    } else {
      elementosParaAlternar[i].style.display = "none";
    }
  }

  var contenedorButton = document.getElementById('contiene-button');
  contenedorButton.style.marginLeft = '-527px';
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

// Obtener todas las imágenes con la clase "image-training"
const imageElementsi = document.querySelectorAll('.image-training');
// Iterar a través de las imágenes y agregar eventos de mouse
imageElementsi.forEach((image, index) => {
  // Añadir el evento de aumento de tamaño al hacer clic
  image.addEventListener('click', () => {
    // Guardar el tamaño original para volver a él después
    const originalWidth = image.width;
    const originalHeight = image.height;
    // Aumentar el tamaño de la imagen en un 30% durante 0.1 segundos
    image.style.transition = 'transform 0.1s';
    image.style.transform = 'scale(1.3)';    
    // Volver al tamaño original después de 0.1 segundos
    setTimeout(() => {
      image.style.transition = 'transform 0.1s';
      image.style.transform = 'scale(1)';
    }, 400);
  });
});



