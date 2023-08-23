const images = document.querySelectorAll('.image-training, .image-training-a');
let miCanvas2 = document.getElementById('MiSegundaGrafica').getContext('2d');
let miCanvas3 = document.getElementById('MiTerceraGrafica').getContext('2d');
let miCanvas4 = document.getElementById('MiCuartaGrafica').getContext('2d');
let miCanvas5 = document.getElementById('MiQuintaGrafica').getContext('2d');
let miCanvas = document.getElementById('MiGrafica').getContext('2d');
const imageElementsi = document.querySelectorAll('.image-training');
const inputsContainer = document.getElementById('contInput');
var botones = document.querySelectorAll('.butt-mautonomo');
var contTorre = document.getElementById('contieneTorre')
const inputs = document.querySelectorAll('.inpt-class');
const input = document.querySelectorAll('.input-class');
const imagesFull = document.querySelectorAll('img');
const inpt = document.querySelectorAll('grafMini');

let currentIndex = 0;
let actualtIndex = 0;
let nowIndex = 0;

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

  switch (videoId) {
    case 'videoElement1':
      var contVid = document.getElementById('videosTraining')  
      contVid.style.display='flex'
    
      const buttonElements = document.querySelectorAll('.boton-f');
      var delay = 100;
      for (var i = 0; i < buttonElements.length; i++) {
        setTimeout(function(index) {
          buttonElements[index].style.display = 'block';
        }, delay * i,i);
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
    
      var butInicio = document.getElementById('bot-inic')
      butInicio.style.marginLeft='310px  '
    
      var butGrande = document.getElementById('iniciar')
      butGrande.style.marginLeft='363px'
    
      var videoBackground = document.getElementById('videoBackground');
      videoBackground.style.display = 'none'; // Oculta el video

    break;
    case 'contieneTorre':
      var videoBackground = document.getElementById('videoBackground');
      videoBackground.style.display = 'none';
      contTorre.style.display='block'

      videoBackground.style.display = 'none'; // Oculta el video      

    break;
    case 'def-tipo2':
      
    break;
    case 'ayudastrabajo':

    break;
    case 'fua':

    break;
    case 'lup':

    break;
    default:
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

function muestraRodillo (videoId, imageClas) {

  const correctPassword = '123'; // Cambia por la contraseña correcta
  const enteredPassword = prompt('Ingrese la contraseña de verificación:');

  if (enteredPassword === correctPassword) {
    // Aquí puedes poner el resto de la lógica de muestraRodillo()
  ////////////////////////////////////////////////////////////////////////////////////////////////////
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

  const imageContainerEras = document.querySelectorAll('.image-training, .image-training-a')
  for (i=0; i < imageContainerEras.length; i ++){
    imageContainerEras[i].style.display='none'
  }  

  const imageContainer = document.getElementsByClassName(imageClas)
  for (i=0; i < imageContainer.length; i ++){
    imageContainer[i].style.display='block'
  }

  var botPanel = document.getElementById('bot-inic')
  botPanel.style.marginLeft='190px'

  var botMantaut = document.getElementById('bot-mantaut')
  botMantaut.style.display='block'
  botMantaut.style.marginLeft='17px'
 
  var botGrand = document.getElementById('iniciar')
  botGrand.style.marginLeft='17px'

  var buttRepuest = document.getElementById('butt-repuestos')
  buttRepuest.style.display='block'

  var contImages = document.getElementById('contene-images')
  contImages.style.marginLeft='10px'

  var videoBackground = document.getElementById('videoBackground'); 
  videoBackground.style.display = 'none';

  setTimeout(() => {
    applyImageEffects();
  }, 300); // Retardo de 0.9 segundos (900 milisegundos)


} else {
  alert('Contraseña incorrecta. Acceso denegado.');
}
}

function applyImageEffects() { // aumento secuencial imagenes repuestos
  const imageElements = document.querySelectorAll('.image-training, .image-training-a');
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


}

function ElementosMa() {
  var elementosOcultar = document.querySelectorAll('.boton-a, .boton-g, .boton-f, .video-training, .image-training, .image-training-a');
  for (var i = 0; i < elementosOcultar.length; i++) {
    elementosOcultar[i].style.display = 'none';
  }

  var botonMa = document.getElementById('bot-mantaut')
  botonMa.style.display='block'

  var botRepuesto = document.getElementById('butt-repuestos')
  botRepuesto.style.display='none'

  var botPanel = document.getElementById('bot-inic')
  botPanel.style.display='block'

  const buttonElements = document.querySelectorAll('.butt-mautonomo');
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'block';
    }, delay * i,i);
  }

  var contVid = document.getElementById('videosTraining')
  contVid.style.display='none'
}

function mostrarBotMa(id) {
  var elemento = document.getElementById(id);
  if (elemento.style.display === 'none') {
      elemento.style.display = 'block';
  } else {
      elemento.style.display = 'none';
  }
}
////////////////////////////////////////////////////////////////////////

function showNextInput() {
  if (currentIndex < inputs.length) {
    inputs[currentIndex].style.display = 'block';
    currentIndex++;
    setTimeout(showNextInput, 57);
  }
}
function showNextInputChec() {
  if (actualtIndex < input.length) {
    input[actualtIndex].style.display = 'block';
    actualtIndex++;
    setTimeout(showNextInputChec, 57);
  }
}
function showNextGraf() {
  if (nowIndex < inpt.length ){
    inpt[nowIndex].style.display = 'block';
    nowIndex++;
    setTimeout(showNextGraf, 57);
  }
}

function showRepuesto(parteopcionada) {
  switch (parteopcionada) {
    case 'portaPlancha':
      contTorre.style.display='none'
      var imgPlancha = document.querySelectorAll('.imagesTorre')  
      imgPlancha.forEach(imagen => { 
        if(imagen.id==='portPlaca'){
          imagen.style.display='block'
        }

      });

      break; 
      
      
    case 'lup':

    break;
    default:
  }
} 

function muestraPerfiles(ladoSeleccion){
  switch (ladoSeleccion) {
    case 'frente':
      var imgPlancha = document.querySelectorAll('.imagesTorre')  
      imgPlancha.forEach(imagen => { 
        if(imagen.id==='portPlaca'){
          imagen.style.display='block'
        }else {
          imagen.style.display='none'
        }
      });
    break;
    case 'mandos':
      var imgPlancha = document.querySelectorAll('.imagesTorre')  
      imgPlancha.forEach(imagen => { 
        if(imagen.id==='portPlaca2'){
          imagen.style.display='block'
        }else {
          imagen.style.display='none'
        }
      });
      break;     
    case 'servicio':
      var imgPlancha = document.querySelectorAll('.imagesTorre')  
      imgPlancha.forEach(imagen => { 
        if(imagen.id==='portPlaca3'){
          imagen.style.display='block'
        }else {
          imagen.style.display='none'
        }
      });
    break;
    case 'atras':
      var imgPlancha = document.querySelectorAll('.imagesTorre')  
      imgPlancha.forEach(imagen => { 
        if(imagen.id==='portPlaca4'){
          imagen.style.display='block'
        }else {
          imagen.style.display='none'
        }
      });
    break;
    default:
  }
}

  // Agregar evento de pantalla completa a cada imagen
  imagesFull.forEach(image => {
    image.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        if (image.requestFullscreen) {
          image.requestFullscreen();
        } else if (image.mozRequestFullScreen) { // Firefox
          image.mozRequestFullScreen();
        } else if (image.webkitRequestFullscreen) { // Chrome, Safari and Opera
          image.webkitRequestFullscreen();
        } else if (image.msRequestFullscreen) { // IE/Edge
          image.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
          document.msExitFullscreen();
        }
      }
    });
  });

//////////////////////////////////////////////////////////////////////////

// Recorrer todos los botones y hacerlos visibles
botones.forEach(function(boton) {
var id = boton.getAttribute('id');
alternarVisibilidad(id);
});

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

function mantAutonomo (opcionSeleccionada) {
  switch (opcionSeleccionada) {
    case 'troubleshooting':
      showNextInput();
      break;
    case 'def-tipo1':
/*       var contGrafi = document.getElementById('grafiCuadro')
      contGrafi.style.display='block' */
      const conteneCanvas = document.getElementById('canvasContainer2')
      conteneCanvas.style.display='block'
      break;
    case 'def-tipo2':
     var conticheck = document.getElementById('contChecks')
      conticheck.style.display='block'
      showNextInputChec();
      
      break;
    case 'ayudastrabajo':
/*       var contGrafvert = document.getElementById('grafiCuadro2')
      contGrafvert.style.display='block'
      showNextGraf(); */ 
      var contGrafitos =  document.getElementById('canvasContainer3')
      contGrafitos.style.display= 'block'
      var segundaGraf = document.getElementById('MiSegundaGrafica')
      segundaGraf.style.display='block'
      break;
    case 'fua':
      var contGrafColor = document.getElementById('contImagGraf')
      contGrafColor.style.display='block'
      break;
    case 'lup':
      var contGrafNeg = document.getElementById('contImagNeg')
      contGrafNeg.style.display='block'
      break;
    default:
  }
  
}

var chart = new Chart(miCanvas, {
    type: 'bar',    
    data: {
        labels: ['TROUBLESHOOTING', 'DEFECTOS TIPO 1', 'DEFECTOS TIPO 2', 'ADT', 'FUA', 'LUP'],
        datasets: [
            {
                label: 'Participación en M.A',
                backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)', 'rgb(255, 0, 255)'],
                data: [57, 88, 62, 33, 14, 20]
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,255)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,255)' ,// Color de las etiquetas de texto en el eje X

                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'y', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
});

var chart2 = new Chart(miCanvas2, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'Datos del Segundo Gráfico',
                backgroundColor: ['rgb(0, 128, 0)', 'rgb(0,0,255)', 'rgb(255, 102, 0)', 'rgb(255, 0, 0)'],
                data: [15, 25, 35, 20, 10, 19]
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,0)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,0)', // Color de las etiquetas de texto en el eje X
                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'x', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
});

var chart2 = new Chart(miCanvas3, {
    type: 'line',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        datasets: [
            {
                label: 'Datos del Segundo Gráfico',
                backgroundColor: ['rgb(0, 128, 0)', 'rgb(255, 102, 0)', 'rgb(0,0,255)', 'rgb(255,255,0)', 'rgb(255, 0, 0)', 'rgb(255, 0, 255)' ],
                data: [15, 25, 35, 20, 10, 19]
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,255)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(255,255,255)', // Color de las etiquetas de texto en el eje X
                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'x', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
});

var chart2 = new Chart(miCanvas4, {
    type: 'pie',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        datasets: [
            {
                label: 'Datos del Segundo Gráfico',
                backgroundColor: ['#ff1700', '#ff2e00', '#ff4500', '#ff7300', '#ffa200)', '#ffff00'],
                data: [15, 25, 35, 20, 10, 19],
                borderWidth: 0.3,
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(3, 237, 253)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(3, 237, 253)', // Color de las etiquetas de texto en el eje X
                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'x', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
});

var chart2 = new Chart(miCanvas5, {
    type: 'bar',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        datasets: [
            {
                label: 'Datos del Segundo Gráfico',
                backgroundColor: ['rgb(0,255,0)', '#ff1700', 'green', '#ff1700', '#ffa200)', '#ffff00'],
                data: [55, -65, 35, -90, 10, 19],
                borderWidth: 0.3,
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(3, 237, 253)' // Color de las etiquetas de texto en el eje X
                }
            },
            y: {
                grid: {
                    display: false // Ocultar líneas de la cuadrícula en el eje X
                },
                ticks: {
                    color: 'rgb(3, 237, 253)', // Color de las etiquetas de texto en el eje X
                    beginAtZero: true // Empezar el eje Y desde cero
                }

            }
        },
        indexAxis: 'x', // Mostrar barras horizontalmente
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            }
        }
    }
});

