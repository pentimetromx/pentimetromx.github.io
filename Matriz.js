var idsArray = [];
var currentID = null;
var btnAtras = document.getElementById('bot-atras');
var butInicio = document.getElementById('bot-inic')
var botGrande = document.getElementById('iniciar')

const grupOblicuos = document.getElementById('agrupaOblicuos')
const contPadreMA = document.getElementById('conteneMantaut')
const videoElements = document.querySelectorAll('.video-training');   
const video = document.getElementById("videoBackground");
const imgsDistribuidor = document.getElementById('contImgDistribuidor')
const imgsForma = document.getElementById('contImgEntintador')
const toggleVideoButton = document.getElementById("toggleVideoButton");
const images = document.querySelectorAll('.image-training, .image-training-a');
const Cilimpresor = document.getElementById('contCilImpresor')
const imageElementsi = document.querySelectorAll('.image-training');
const contPortaPlancha = document.getElementById('contPortPlaca')
const imgsLaterales = document.getElementById('contPortManta')
const padreImagenes = document.getElementById('padreImagenes')
const inputsContainer = document.getElementById('contInput');
const portManta = document.getElementById('contPortaManta')
const padreOblicuos = document.getElementById('agrupaOblicuos-II')
const inputs = document.querySelectorAll('.inpt-class');
const input = document.querySelectorAll('.input-class');
var contOblicuosList = document.querySelectorAll('.contOblicuosTorre');
var contOblicuosIniList = document.querySelectorAll('.contOblicuos');
const imagesFull = document.querySelectorAll('img');
const inpt = document.querySelectorAll('grafMini');

let miCanvas2 = document.getElementById('MiSegundaGrafica').getContext('2d');
let miCanvas3 = document.getElementById('MiTerceraGrafica').getContext('2d');
let miCanvas4 = document.getElementById('MiCuartaGrafica').getContext('2d');
let miCanvas5 = document.getElementById('MiQuintaGrafica').getContext('2d');
let miCanvas = document.getElementById('MiGrafica').getContext('2d');
var botones = document.querySelectorAll('.butt-mautonomo');
var linksTorre = document.getElementById('contLinksTorre')

let currentIndex = 0;
let actualtIndex = 0;
let nowIndex = 0;

idsArray.push('contenedorInic');
console.log(idsArray)

function VolveraInicio(){
  location.reload();
  document.body.style.overflow = 'block';
  idsArray = [];

}
function irContenedorAnterior() {

  // Ocultar el contenedor actual
  var contenedorActual = document.getElementById(idsArray[idsArray.length - 1]);
  contenedorActual.style.display = 'none';

  // Obtener el ID del contenedor anterior
  var previousElementID = idsArray[idsArray.length - 2];
  var contenedorAnterior = document.getElementById(previousElementID);
  contenedorAnterior.style.display = 'flex';

  // Actualizar el array quitando el último ID almacenado
  idsArray.pop();
  console.log(idsArray)

  // Actualizar la variable currentID con el nuevo ID
  currentID = previousElementID;
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
 
function changeButtonStyles(videoId, elementId ) { 
  var elementsToHide = document.querySelectorAll('.alimentador, .uTeñido, .desbobinador,.unidProceso,.rebobinador, .contTorrImp'); 
  btnAtras.style.display='block'
  btnAtras.style.left='313px'
  botGrande.style.left='333px'
  butInicio.style.left='297px'

  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = 'none';
  }

  // Verificar si el elementoId ya está presente en el array
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
  }
  console.log(idsArray)

  var videoBackground = document.getElementById('videoBackground');
  videoBackground.pause();
  videoBackground.style.display = 'none'; // Oculta el video

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
    
      videoElements.forEach(video => {
        if (video.id === videoId) {
          video.style.display = 'block';
          video.play();      
        } else {
          video.style.display = 'none';
        }
      });    
    break;
    case 'contLinksTorre':
      padreOblicuos.style.display='flex'
      linksTorre.style.display='block' 

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
 
function cambioContenedor(contenedorSeleccion) {
  var elementsToHide = document.querySelectorAll('.alimentador, .uTeñido, .desbobinador,.unidProceso,.rebobinador'); 
  var torreImpresion = document.getElementById('torre-imp') 
  
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
  }
  butInicio.style.display='flex'
  btnAtras.style.display='block'
  btnAtras.style.left = '57px'; 
   
  if (contenedorSeleccion==='torre-imp'){
    torreImpresion.style.left='11px'
    toggleVideoButton.style.left='47px'
  }
}

function cierraContenedores(SeleccionClass) {
  const coleccion = document.querySelectorAll('.desbobinador, .uTeñido, .alimentador, .unidProceso, .rebobinador, .contTorrImp');

  switch (SeleccionClass) {
    case 'desbobinador':
      btnAtras.style.display='block'
      btnAtras.style.left = '57px';
      coleccion.forEach(elemento => {
        if (elemento.classList.contains(SeleccionClass)) {
          elemento.style.display = 'flex';
        } else {
          elemento.style.display = 'none';
        }
      });
      break;
  
    case 'uTeñido':
      btnAtras.style.display='block'
      btnAtras.style.left = '57px';
        coleccion.forEach(elemento => {
          if (elemento.classList.contains(SeleccionClass)) {
            elemento.style.display = 'flex';
          } else {
            elemento.style.display = 'none';
          }
        });
      break;
      case 'alimentador':
        btnAtras.style.display='block'
        btnAtras.style.left = '57px';
          coleccion.forEach(elemento => {
            if (elemento.classList.contains(SeleccionClass)) {
              elemento.style.display = 'flex';
            } else {
              elemento.style.display = 'none';
            }
        });
      break;
      case 'unidProceso':
        btnAtras.style.display='block'
        btnAtras.style.left = '57px';
        coleccion.forEach(elemento => {
          if (elemento.classList.contains(SeleccionClass)) {
            elemento.style.display = 'flex';
          } else {
            elemento.style.display = 'none';
          }
        });
        break;
            case 'rebobinador':
              btnAtras.style.display='block'
              btnAtras.style.left = '57px';
              coleccion.forEach(elemento => {
                if (elemento.classList.contains(SeleccionClass)) {
                  elemento.style.display = 'flex';
                } else {
                  elemento.style.display = 'none';
                }
              });
              break;
            
    default:
  }
}

function muestraRodillo (videoId, imageClas) {

  /* const correctPassword = '123'; // Cambia por la contraseña correcta
  /* const enteredPassword = prompt('Ingrese la contraseña de verificación:'); */

  /* if (enteredPassword === correctPassword) { */
    // Aquí puedes poner el resto de la lógica de muestraRodillo()

    btnAtras.style.left='313px'
    botGrande.style.left='333px'
    butInicio.style.left='297px'

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

  var botMantaut = document.getElementById('bot-mantaut')
  botMantaut.style.display='block'
  botMantaut.style.marginLeft='17px'
  botMantaut.style.marginTop='0px' 

  var buttRepuest = document.getElementById('butt-repuestos')
  buttRepuest.style.display='block'

  var contImages = document.getElementById('contene-images')
  contImages.style.marginLeft='10px'

  var videoBackground = document.getElementById('videoBackground'); 
  videoBackground.style.display = 'none';

  setTimeout(() => {
    applyImageEffects();
  }, 300); // Retardo de 0.9 segundos (900 milisegundos)


  /* } else {
    alert('Contraseña incorrecta. Acceso denegado.');
  } */

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

  butInicio.style.display='block'

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

function showRepuesto(parteopcionada, vidId) {
  padreImagenes.style.display='block' // PADRE CONTENEDORES FOTOS CON DIAMETROS
  linksTorre.style.display='block'
  conteneMantaut.style.display='none'
  padreOblicuos.style.display='none'         

  
  switch (parteopcionada) {
    case 'rodillDistribuidor':
      linksTorre.style.display='none'
      imgsDistribuidor.style.display='block' 
    break;
    case 'rodillForma':
      linksTorre.style.display='none'
      imgsForma.style.display='block' 
      break;

    case 'portaPlancha':
      contPortaPlancha.style.display='flex'
      linksTorre.style.display='none'
      var imgPlancha = document.querySelectorAll('.imagesTorre') 
      imgPlancha.forEach(imagen => { 
        if(imagen.id!=='portPlaca'){
          imagen.style.display='none'
        }else{
          imagen.style.display='block'
        }
      });
      
      var botOblicuos = document.querySelectorAll('.contOblicuos');
      botOblicuos.forEach(boton => {
        if (boton.classList.contains('contOblicuos')) {
          boton.style.display = 'block';
        }
      });

      var botOblicuos = document.querySelectorAll('.contOblicuosTorre');
      botOblicuos.forEach(boton => {
        if (boton.classList.contains('contOblicuosTorre')) {
          boton.style.display = 'none';
        }
      });

    break;       
    case 'portaMantilla':
      linksTorre.style.display='none' 
      Cilimpresor.style.display='flex'

      var vidElements = document.querySelectorAll('.video-training');   
      vidElements.forEach(video => {
        if (video.id !== vidId) {
          video.style.display = 'none';
          video.play();      
        } else {
          video.style.display = 'block';
        }
      });   
    break;
    case 'cilindroImpresor':
      linksTorre.style.display='none' 
      Cilimpresor.style.display='flex'

      var vidElements = document.querySelectorAll('.video-training');   
      vidElements.forEach(video => {
        if (video.id !== vidId) {
          video.style.display = 'none';
          video.play();      
        } else {
          video.style.display = 'block';
        }
      }); 
      break;

    default: 
  }
} 

function muestraPerfiles(ladoSeleccion){
  var imgPlancha = document.querySelectorAll('.imagesTorre')  

  switch (ladoSeleccion) {
    case 'frente':
        imgPlancha.forEach(imagen => { 
        if(imagen.id==='portPlaca'){
          imagen.style.display='block'
        }else {
          imagen.style.display='none'
        }
      });
    break;
    case 'mandos':
        imgPlancha.forEach(imagen => { 
        if(imagen.id==='portPlaca2'){
          imagen.style.display='block'
        }else {
          imagen.style.display='none'
        }
      });
      break;     
    case 'servicio':
        imgPlancha.forEach(imagen => { 
        if(imagen.id==='portPlaca3'){
          imagen.style.display='block'
        }else {
          imagen.style.display='none'
        }
      });
    break;
    case 'atras':
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
      const conteneCanvas = document.getElementById('canvasContainer2')
      conteneCanvas.style.display='block'
      break;
    case 'def-tipo2':
     var conticheck = document.getElementById('contChecks')
      conticheck.style.display='block'
      showNextInputChec();
      
      break;
    case 'ayudastrabajo':
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

function muestraTorres (seleccion) {
  let coleccImages = document.querySelectorAll('.imagenTorre') // FOTOS LATERALES
  contPortaPlancha.style.display='none'
  padreImagenes.style.display='block' // PADRE DE 2 CONTENEDORES DE FOTOS CON DIAMETROS  
  portManta.style.display='none'
  imgsLaterales.style.display='block'
  linksTorre.style.display='none'

  switch (seleccion) {    
    case 'torre':
      coleccImages.forEach(elemento => {
        if (elemento.id !== seleccion) {
          elemento.style.display = 'none';
        }else {
        elemento.style.display = 'block';       
        }
      });    

    break;       
  case 'torre1': 
    coleccImages.forEach(elemento => {
      if (elemento.id !== seleccion) {
        elemento.style.display = 'none';
      }else {
      elemento.style.display = 'block';
      }
    });
    break;
    case 'torre2': 
    coleccImages.forEach(elemento => {
      if (elemento.id !== seleccion) {
        elemento.style.display = 'none';
      }else {
        elemento.style.display = 'block';
      }
    });  
    break;
    case 'torre3': 
    coleccImages.forEach(elemento => {
      if (elemento.id !== seleccion) {
        elemento.style.display = 'none';
      }else {
        elemento.style.display = 'block';
      }
    });  
    break;
    default:
  }
}

function videosImpresor(videoId) {
  const video = document.getElementById(videoId);
  
  switch (videoId) {
    case 'videoTrain00':
      videoElements.forEach(video => {
      if (video.id !== videoId) {
        video.style.display = 'none';   
        } else {
        video.style.display = 'block';
        video.pause();
        video.currentTime = 0;
        video.play();   
      } 
    });
    break;
    case 'videoTrain02':
      videoElements.forEach(video => {
      if (video.id !== videoId) {
        video.style.display = 'none';     
        } else {
        video.style.display = 'block';
        video.pause();
        video.currentTime = 0;
        video.play();           
      } 
    });
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