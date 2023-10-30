var arrayFunctions = ['updateMario','updateAna','updateCarlos','updateAndres','updateJorge','updateJesus','updateSandra']; 
var arrayIdButtsMA = ['resultados','troubleshoot','def1','def2','adtBut','fua1','lup'];
var arrayPosicionnador = [];
var arrayContador = [];
var destino = 257;
var idsArray = [];
var idsArrayEliminados = [];
var idsMA = ['canvasContainer2', 'canvasContainer3', 'canvasContainer4','canvasContainer5','canvasContainer6','canvasContainer7','canvasContainer8', 'canvasContainer9', 'contChecks','troubleshooting','contImagNeg','contImagGraf'];
var idsMAhijos = ['troubleshooting','canvasContainer2','contChecks','canvasContainer3','contImagNeg','contImagGraf'];
var idsResultados = ['icon-ana','icon-carlos','icon-andres','icon-jorge','icon-jesus','icon-sandra','icon-mario'];
var elementosContUser = document.querySelectorAll('.cont-user');
var lineasGrid = document.getElementById('contLineas');
var contTitulo = document.getElementById('cont-titulo');
var linkList = document.getElementById("linkList");
var linkListI = document.getElementById("linkListI");



var currentID = null;
var btnAtras = document.getElementById('bot-atras');
var butInicio = document.getElementById('bot-inic');
var botGrande = document.getElementById('iniciar');
var imgTorreI = document.getElementById('imgTorre');
var contInicial = document.getElementById('container1');
var botonMa = document.getElementById('bot-mantaut');
var imagPasoApaso = document.querySelectorAll('.img1');
var allContenedores = ['container1','pantalla-inicial','desbobinadorId','uTeñidos','alimentadorId','verticales-alimentador','uniProceso','rebobinador','rotatek-1','torre-imp','tinter-o','bateria-entintado','pantalla-tintero','cont-links','imgTorre','imgsRepuestos','agrupaOblicuos-II','pantalla-frente','pantalla-mandos','pantalla-servicio','pantalla-atras','videosTraining','conteneMantaut','contPortPlaca','contPerfilesPlancha','contPortManta','contPerfilesManta','contImpresor','contPerfilesImpresor','contImgDistribuidor','contImgEntintador','cont-variable','cont-plana','bancada-torre-II','bateria-entintado-II','cont-secador','sitema-humedad','pre-prensa','agrupaOblicuos-placa','densitometria','contImagGraf','contImagNeg','linksMA','contImgEntrenos','lubricacion','title-interfaz','iconos','canvasContainer4','canvasContainer5', 'canvasContainer6', 'canvasContainer7','canvasContainer8','canvasContainer9','conte-secundario','contenedor-vertical','contene-11','franja-gris','franja-Blanca','cont-titulo','videoBackground','videoBackgroundII'];
var linksIniciales = ['links-inicialesI','links-iniciales']
var allContIniciales = ['container1','pantalla-inicial','desbobinadorId','uTeñidos','alimentadorId','uniProceso','rebobinador','rotatek-1','torre-imp','tinter-o','bateria-entintado'];
var contenedoresHijo = ['contImgDistribuidor','rodillForma','portaPlancha','portaMantilla','cilindroImpresor'];
var allContTintero = ['pantalla-tintero','cont-links','imgTorre','vidTintero','imgsRepuestos','agrupaOblicuos-II','container2'];
var allContPantafrente = ['pantalla-frente','container2','imgsRepuestos-II','imgTorre-f','agrupaOblicuos-III'];
var allContTorreImp = ['rotatek-1','toggleVideoButton','torre-imp','tinter-o','cont-Verticales2','bateria-entintado','cont-Verticales3','bancada-torre','cont-Verticales4','sis-humedad','cont-Verticales5'];
var allContBaterImp = ['contenedor-7','videoElement1-II','container7'];
var allContSisHumedad = ['contenedor-9','contene-10','sitema-humedad'];
var contVid = document.getElementById('videosTraining');
var contIMPlaca = document.getElementById('placa');
var contIMmanta = document.getElementById('manta');

var allContMA = ['conteneMantaut','conti-boton'];
var buttonsMA = document.getElementsByClassName("butt-mautonomo");

const grupOblicuos = document.getElementById('agrupaOblicuos-I');
const oblicuosVI = document.getElementById('agrupaOblicuos-VI');

var contOblicuosMandos = document.getElementById('agrupaOblicuos-VII');
let contVariable = document.getElementById('cont-variable');
let contPlana = document.getElementById('cont-plana');
let contSecador = document.getElementById('cont-secador');

const textToColor = document.getElementById("textToColor");
const textToColorI = document.getElementById("textToColorI");
const line = document.getElementById("line");
const lineI = document.getElementById("lineI");
let hoverTimeout;
let hideTimeout;

var conteHijosTintero = ['cont-links', 'imgTorre', 'imgsRepuestos','agrupaOblicuos-II'];
var conteHijosFrente = ['imgTorre-f','imgsRepuestos-II', 'agrupaOblicuos-III'];
var conteHijosMandos = ['imgTorre-m','imgsRepuestos-III','agrupaOblicuos-IV'];
var imgesDistribuidor = ['imgs-I','imgs-II','imgs-III','imgs-IV','imgs-V'];
var imgesPlancha = ['portPlaca','portPlaca1','portPlaca2','portPlaca3','portPlaca4'];
var contImgsManta = document.getElementById('contPerfilesManta');

const coleccImgFront = document.querySelectorAll('.rep-frente');
const coleccImgIzq = document.querySelectorAll('.rep-izquierda');
const conteRepDistrib = document.querySelectorAll('.imgRow');
const uniTeñido = document.getElementById('uTeñidos');
const alimentadorId = document.getElementById('alimentadorId');
const unidadProcess = document.getElementById('uniProceso');
const reBobinado = document.getElementById('rebobinador');
const rotatPanel = document.getElementById('rotatek-1');
const seccionTintero = document.getElementById('pantalla-tintero');
const seccionFrente = document.getElementById('pantalla-frente');
const seccionMandos = document.getElementById('pantalla-mandos');
const pantallas = ['pantalla-frente', 'pantalla-mandos','pantalla-servicio','pantalla-atras'];

const contieneLinks = document.getElementById('cont-links');
const imgsRepuestos = document.getElementById('imgsRepuestos');// HIJO IMAGENES
const imgsRepuestosII = document.getElementById('imgsRepuestos-II');// HIJO IMAGENES 
const imgsRepuestosIII = document.getElementById('imgsRepuestos-III');// HIJO IMAGENES      
const imgsRepuestosIV = document.getElementById('imgsRepuestos-IV');// HIJO IMAGENES     

const contPadreMA = document.getElementById('conteneMantaut');
const videoElements = document.querySelectorAll('.video-training','vidBackGrPress');   
const video = document.getElementById("videoBackground");
const videoII = document.getElementById("videoBackgroundII");
const imgsDistribuidor = document.getElementById('contImgDistribuidor');
const imgsForma = document.getElementById('contImgEntintador');
const toggleVideoButton = document.getElementById("toggleVideoButton");
const images = document.querySelectorAll('.image-training, .image-training-a'); 
const imageElementsi = document.querySelectorAll('.image-training');
const contPortaPlancha = document.getElementById('contPortPlaca');
const contPortaManta = document.getElementById('contPortManta');
const contImpresor = document.getElementById('contImpresor');
const inputs = document.querySelectorAll('.input-class');
const input = document.querySelectorAll('.input-class');
const checks = document.querySelectorAll('.input-class');
const imagesFull = document.querySelectorAll('img');
const inpt = document.querySelectorAll('grafMini');
const imagesPrepress = ['primerCont','segundoCont','tercerCont'];

let miCanvas2 = document.getElementById('MiSegundaGrafica').getContext('2d');
let miCanvas3 = document.getElementById('MiTerceraGrafica').getContext('2d');
let miCanvas4 = document.getElementById('MiCuartaGrafica').getContext('2d');
let miCanvas5 = document.getElementById('MiQuintaGrafica').getContext('2d');
let miCanvas = document.getElementById('MiGrafica').getContext('2d');
let miCanvas6 = document.getElementById('MiGrafica4').getContext('2d');
let miCanvas7 = document.getElementById('MiGrafica5').getContext('2d');
let miCanvas8 = document.getElementById('MiGrafica6').getContext('2d');
let miCanvas9 = document.getElementById('MiGrafica7').getContext('2d');
let miCanvas10 = document.getElementById('MiGrafica8').getContext('2d');
let miCanvas11 = document.getElementById('MiGrafica9').getContext('2d');

var botones = document.querySelectorAll('.butt-mautonomo');
var linksTorre = document.getElementById('contLinksTorre');

let currentIndex = 0;
let actualtIndex = 0;
let nowIndex = 0;

idsArray.push("pantalla-inicial");
idsArrayEliminados.push('salir');
console.log(idsArrayEliminados);
console.log(idsArray);

function VolveraInicio(){
  location.reload();
  idsArray = [];
  idsArrayEliminados = [];
}
function botoGrand() {

}
function muestraBateria(elementId) {  
  // Recorre el array y oculta los elementos por su ID
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = 'none';
    }
  }
    // Recorre el array y oculta los elementos por su ID
    for (var i = 0; i < allContTintero.length; i++) {
      var elemento = document.getElementById(allContTintero[i]);
      if (elemento) {
        elemento.style.display = 'flex';
      }
    }  

    for (var i = 0; i < linksIniciales.length; i++) {
      var elemento = document.getElementById(linksIniciales[i]);
      if (elemento) {
        elemento.style.display = 'block';
      }
    }

  var videoBackground = document.getElementById('videoBackground');
  videoBackground.pause();
  videoBackground.style.display = 'none'; // Oculta el video
  seccionTintero.style.display='block'

  const video = document.getElementById("vidTintero");

  // Reproducir el video
  video.play();
  // Después de 3 segundos, ocultar el video
  setTimeout(function() {
  video.style.display = "none"; // Esto ocultará el elemento de video
  }, 977); // 2000 milisegundos = 2 segundos

 if (!idsArray.includes(elementId)) {
  idsArray.push(elementId);
  console.log(idsArray)
  }
}
function ElementosMa(elementId) {
  var contenedor = document.getElementById("container8"); 
  // Recorre el array y oculta los elementos por su ID
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = 'none';
    }
  }
  if (contPadreMA) {
    contPadreMA.style.display = 'flex';
  }
  contenedor.style.display = 'block';
  showButtonsMAconRetraso()
  linkListI.style.display = "none";  
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  }  
}
function showButtonsMAconRetraso() {
  var botones = document.querySelectorAll('.butt-mautonomo'); // Selecciona todos los botones
  function mostrarBotonConRetraso(i) {
    if (i < botones.length) {
      var boton = botones[i];
      boton.style.display = 'inline-block';
      setTimeout(function() {
        mostrarBotonConRetraso(i + 1);
      }, 50); // 100 milisegundos de retraso entre botones
    }
  }
  mostrarBotonConRetraso(0); // Comienza desde el primer botón
}
function changeButtonStyles(elementId) { //TINTERO-BATERIA-BANCADA-HUMEDAD
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = 'none';
    }
  }
  var videoBackground = document.getElementById('videoBackground');
  videoBackground.pause();
  videoBackground.style.display = 'none'; // Oculta el video
  switch (elementId) {
    case 'pantalla-tintero':
    // Recorre el array y muestra los elementos por su ID
    for (var i = 0; i < allContTintero.length; i++) {
      var elemento = document.getElementById(allContTintero[i]);
      if (elemento) {
        elemento.style.display = 'flex';
      }
    }
  seccionTintero.style.display='block'
  const video = document.getElementById("vidTintero");
  // Reproducir el video
  video.play();
  // Después de 3 segundos, ocultar el video
  setTimeout(function() {
  video.style.display = "none"; // Esto ocultará el elemento de video
  }, 977); // 2000 milisegundos = 2 
  var contoblicuosII = document.getElementById('agrupaOblicuos-II');
  contoblicuosII.style.display = 'flex'
  
 if (!idsArray.includes(elementId)) {
  idsArray.push(elementId);
  console.log(idsArray)
  }
    break;
    case 'bateria-entintado-II': 
    var contenedor = document.getElementById("contenedor-7");
    contenedor.style.display = "block";

    for (var i = 0; i < allContBaterImp.length; i++) {
      var elemento = document.getElementById(allContBaterImp[i]);
      if (elemento) {
        elemento.style.display = 'flex';
      }
    }
    var contBateria = document.getElementById('bateria-entintado-II')
    contBateria.style.display='block'
    const buttonElements = document.querySelectorAll('.boton-f');
    var delay = 100;
    for (var i = 0; i < buttonElements.length; i++) {
      setTimeout(function(index) {
        buttonElements[index].style.display = 'block';
      }, delay * i,i);
    } 
    contVid.style.display='block' 
    videoElements.forEach(video => {
      if (video.id === 'videoElement1-II') {
        video.style.display = 'block';
        video.play();      
      } else {
        video.style.display = 'none';
      }
    });
    if (!idsArray.includes(elementId)) {
      idsArray.push(elementId);
      console.log(idsArray)
      }    
    break;
    case 'bancada-torre-II': 
    var contenedor = document.getElementById("bancada-torre-II");
    contenedor.style.display = "block";

    for (var i = 0; i < allContBaterImp.length; i++) {
      var elemento = document.getElementById(allContBaterImp[i]);
      if (elemento) {
        elemento.style.display = 'flex';
      }
    }    
    var contBateria = document.getElementById('bancada-torre-II')
    contBateria.style.display='block'
    const botonElement = document.querySelectorAll('.boton-g');
    var delay = 100;
    for (var i = 0; i < botonElement.length; i++) {
      setTimeout(function(index) {
        botonElement[index].style.display = 'block';
      }, delay * i,i);
    } 
    contVid.style.display='block' 
    videoElements.forEach(video => {
      if (video.id === 'plate-smed') {
        video.style.display = 'block';
        video.play();      
      } else {
        video.style.display = 'none';
      }
    });
    if (!idsArray.includes(elementId)) {
      idsArray.push(elementId);
      console.log(idsArray)
      } 
    break;
    case 'sitema-humedad':
      const bancadaVideo = document.getElementById('bancada');
      var contenedorHumedad = document.getElementById("sitema-humedad");
      contenedorHumedad.style.display = "block";
  
      for (var i = 0; i < allContSisHumedad.length; i++) {
        var elemento = document.getElementById(allContSisHumedad[i]);
        if (elemento) {
          elemento.style.display = 'block';
        }
      }    
      const botonElemento = document.querySelectorAll('.boton-f');
      var delay = 100;
      for (var i = 0; i < botonElemento.length; i++) {
        setTimeout(function(index) {
          botonElemento[index].style.display = 'block';
        }, delay * i,i);
      } 
      contVid.style.display='block' 

// Ocultar todos los videos excepto el video 'bancada'
videoElements.forEach(video => {
  if (video !== bancadaVideo) {
    video.style.display = 'none';
  }
});

// Reproducir el video 'bancada' si está definido
if (bancadaVideo) {
  bancadaVideo.style.display = 'block';
  bancadaVideo.play();
}
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
      } 
  
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
function cambioContenedor(elementId) { 
  var elementsToHide = document.querySelectorAll('.alimentador, .uTeñido, .desbobinador,.unidProceso,.rebobinador'); 
  var torreImpresion = document.getElementById('torre-imp') // PADRE TORRE IMPRESION  */
  var botonTorre = document.getElementById('toggleVideoButton');
  var botAtras = document.getElementById('bot-atras10')
  var botTrasII = document.getElementById('bot-atras11')

  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = 'none';
  }

  botAtras.style.display='block'
  botTrasII.style.display='block'
  torreImpresion.style.position='absolute'
  torreImpresion.style.left='77px'
  botonTorre.style.position='absolute'
  botonTorre.style.left='307px'

  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  }
}
let firstClick = true;
function cierraContenedores(elementId) {
  const coleccion = document.querySelectorAll('.desbobinador, .desbobinador-I, .uTeñido, .alimentador, .unidProceso, .rebobinador, .contTorrImp');

  coleccion.forEach(element => {
    const button = element.querySelector('button'); // Acceder al elemento 'button' dentro de cada elemento
    if (button) {
      /* button.style.backgroundColor = 'green';  */
      /* button.style.background = 'linear-gradient(135deg, green, red)'; */
      button.style.background = 'linear-gradient(177deg, rgb(0, 252, 0), rgb(0, 255, 0))';
      button.style.color = 'black'

      let isIncreased = false;
      let intervalId; // Variable para almacenar el ID del intervalo
      function toggleSize() {
      if (isIncreased) {
      button.style.transform = 'scale(1)'; // Tamaño normal
      } else {
      button.style.transform = 'scale(1.3)'; // Aumentar el tamaño 1:1.1
      }
      isIncreased = !isIncreased; // Alternar entre aumentado y normal
      }
      // Iniciar el intervalo y almacenar el ID del intervalo en la variable intervalId
      intervalId = setInterval(toggleSize, 100); // Llamar a la función cada 500 milisegundos (0.5 segundos)
      // Para detener el intervalo, puedes hacerlo en respuesta a algún evento o condición
      // Por ejemplo, aquí lo detenemos después de 5 segundos (5000 milisegundos)
      setTimeout(() => {
      clearInterval(intervalId); // Detener el intervalo
      }, 1000);
    }
  });

  if (firstClick) {
    if (!idsArray.includes(elementId)) {
      idsArray.push(elementId);
      console.log(idsArray);
    }

    switch (elementId) {
      case 'desbobinador':
        coleccion.forEach(elemento => {
          if (elemento.classList.contains(elementId)) {
            elemento.style.display = 'flex';
          } else {
            elemento.style.display = 'none';
          }
        });

        video.style.display = 'none';
        break;
      case 'uTeñido':
        coleccion.forEach(elemento => {
          if (elemento.classList.contains(elementId)) {
            elemento.style = display = 'flex';
          } else {
            elemento.style.display = 'none';
          }
        });
        break;
      case 'alimentador':
        coleccion.forEach(elemento => {
          if (elemento.classList.contains(elementId)) {
            elemento.style.display = 'flex';
          } else {
            elemento.style.display = 'none';
          }
        });
        break;
      case 'unidProceso':
        coleccion.forEach(elemento => {
          if (elemento.classList.contains(elementId)) {
            elemento.style.display = 'flex';
          } else {
            elemento.style.display = 'none';
          }
        });
        break;
      case 'rebobinador':
        coleccion.forEach(elemento => {
          if (elemento.classList.contains(elementId)) {
            elemento.style.display = 'flex';
          } else {
            elemento.style.display = 'none';
          }
        });
        break;
      default:
    }
    firstClick = false;
  } else {
    // En el segundo clic, recarga la página
    location.reload();
  }
}
function muestraRodillo (videoId, imageClas) {
  var botMantaut = document.getElementById('bot-mantaut')
  var contVideos = document.getElementById('videos-training')

  botMantaut.style.display='block'
  botMantaut.style.marginLeft='57px' 
  contInicial.style.left='107px'
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
  var buttRepuest = document.getElementById('butt-repuestos')
  buttRepuest.style.display='block'
  var contImages = document.getElementById('contene-images')
  contImages.style.marginLeft='10px'
  var videoBackground = document.getElementById('videoBackground'); 
  videoBackground.style.display = 'none';
  setTimeout(() => {
    applyImageEffects();
  }, 300); // Retardo de 0.9 segundos (900 milisegundos)

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
function mostrarBotMa(id) {
  var elemento = document.getElementById(id);
  if (elemento.style.display === 'none') {
      elemento.style.display = 'block';
  } else {
      elemento.style.display = 'none';
  }
}
////////////////////////////////////////////////////////////////////////
function showNextGraf() {
  if (nowIndex < inpt.length ){
    inpt[nowIndex].style.display = 'block';
    nowIndex++;
    setTimeout(showNextGraf, 57);
  }
}
function showRepuesto(elementId) {
  switch (elementId) {
    case 'contImgDistribuidor':  
      allContenedores.forEach(elemen => {
      var element = document.getElementById(elemen);
      if (element) {
        element.style.display = 'none';
      }
    });
    
      conteHijosTintero.forEach(elementCont => {
        var element = document.getElementById(elementCont);
        if (element) {
          element.style.display = 'none';
        }
      });
      if (imgsDistribuidor) {
        imgsDistribuidor.style.display = 'block';
        // Recorre el arreglo y muestra las imágenes
        var imagenesDistribuidor = document.querySelectorAll('.imag-distri');
        imagenesDistribuidor.forEach(function(imagen) {
          imagen.style.display = 'block';
        });
      }
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
      }       
   break;
    case 'contImgEntintador':
      allContenedores.forEach(elemen => {
        var element = document.getElementById(elemen);
        if (element) {
          element.style.display = 'none';
        }
      });

      conteHijosTintero.forEach(elementId => {
        var element = document.getElementById(elementId);
        if (element) {
          element.style.display = 'none';
        }
      });
      if (imgsForma) {
        imgsForma.style.display = 'block';
        // Recorre el arreglo y muestra las imágenes
        var imagenesForma = document.querySelectorAll('.imag-distri');
        imagenesForma.forEach(function(imagen) {
          imagen.style.display = 'block';
        });
      } 
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
        }    
    break;
    case 'contPortPlaca':     
      conteHijosTintero.forEach(elementId => {
        var element = document.getElementById(elementId);
        if (element) {
          element.style.display = 'none';
        }
      }); 
      var contenedorPrincipal = document.getElementById('contPerfilesPlancha');
      var hijosDelContenedor = contenedorPrincipal.children;
      for (var i = 0; i < hijosDelContenedor.length; i++) {
        var hijo = hijosDelContenedor[i];  
        hijo.style.display = 'none';
      }
      
      contPortaPlancha.style.display='block'
      videoElements.forEach(video => {
      if (video.id !== 'video-placa') {
        video.style.display = 'none';   
        } else {
        video.style.display = 'block';
        video.currentTime = 0;
        video.play();   
      }});
      var contOblicuoPlaca = document.getElementById('agrupaOblicuos-placa')
      contOblicuoPlaca.style.display='block'  
      var botonesInicio = document.getElementById('container01')
      botonesInicio.style.display='none'
     var imagenesPlancha = document.querySelectorAll('.imagesTorre')
     imagenesPlancha.forEach(function (imagen) {
      var elementosPortPlaca = imagen.querySelectorAll('portPlaca');
      elementosPortPlaca.forEach(function (elemento) {
        elemento.style.display = 'flex';
      });
    });
    if (!idsArray.includes(elementId)) {
      idsArray.push(elementId);
      console.log(idsArray)
      }
    break;       
    case 'contPortManta':
      conteHijosTintero.forEach(elemento => {
        var element = document.getElementById(elemento);
        if (element) {
          element.style.display = 'none';
        }
      });
      var contenedorPrincipal = document.getElementById('contPerfilesManta');
      var hijosDelContenedor = contenedorPrincipal.children;
      for (var i = 0; i < hijosDelContenedor.length; i++) {
        var hijo = hijosDelContenedor[i];  
        hijo.style.display = 'none';
      }
      contPortaManta.style.display='block'
      videoElements.forEach(video => {
      if (video.id !== 'videoManta') {
        video.style.display = 'none';   
        } else {
        video.style.display = 'block';
        video.pause();
        video.currentTime = 0;
        video.play();   
      }}); 
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
        }       
    break;
    case 'contImpresor':
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
        }
      conteHijosTintero.forEach(elementId => {
        var element = document.getElementById(elementId);
        if (element) {
          element.style.display = 'none';
        }
      });  
      contImpresor.style.display='block'

  // Obtener el elemento padre
  var contenedorPadre = document.getElementById("contImpresor");
  // Obtener todos los elementos hijos del contenedor padre
  var elementosHijos = contenedorPadre.children;
  // Recorrer los elementos hijos sin usar clases ni 'id'
  for (var i = 0; i < elementosHijos.length; i++) {
  var elementoHijo = elementosHijos[i];
  // Realizar las operaciones que desees con cada elemento hijo aquí
  elementoHijo.style.display='block'
  }

      videoElements.forEach(video => {
      if (video.id !== 'video-impresor') {
        video.style.display = 'none';   
        } else {
        video.style.display = 'block';
        video.pause();
        video.currentTime = 0;
        video.play();   
      }});
    break;
    default: 
  }  
} 
function muestraPerfiles(elementId){
  var video = document.getElementById('video-placa');
  var imgPlancha = document.querySelectorAll('.imagesTorre') 
  var imagesPlancha = document.getElementById('contPerfilesPlancha')
  var imgsPlancha = document.getElementById('imagenes-plancha')
  var cont10 = document.getElementById('container10')
  switch (elementId) {
    case 'imagen1':
      // Detener el video
      video.pause();
      // Ocultar el video estableciendo su estilo de visualización en 'none'
      video.style.display = 'none';
      cont10.style.display='block'
      imagesPlancha.style.display='flex'
      imgsPlancha.style.display='flex'
      imgPlancha.forEach(function (imagen) {
        if (imagen.id === 'portPlaca') {
          imagen.style.display = 'block';
        }else{
          imagen.style.display = 'none';
        }
      });
      contIMPlaca.style.display='none' 
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
      }
    break;
    case 'imagen2':
      // Detener el video
      video.pause();
      // Ocultar el video estableciendo su estilo de visualización en 'none'
      video.style.display = 'none';
      
      imagesPlancha.style.display='flex'
      imgsPlancha.style.display='flex'
      imgPlancha.forEach(function (imagen) {
        if (imagen.id === 'portPlaca2') {
          imagen.style.display = 'block';
        }else{
          imagen.style.display = 'none';
        }
      });
      contIMPlaca.style.display='none' 
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
      }
    break; 
    case 'imagen3':
      // Detener el video
      video.pause();
      // Ocultar el video estableciendo su estilo de visualización en 'none'
      video.style.display = 'none';    
      imagesPlancha.style.display='flex'
      imgsPlancha.style.display='flex'
      imgPlancha.forEach(function (imagen) {
        if (imagen.id === 'portPlaca3') {
          imagen.style.display = 'block';
        }else{
          imagen.style.display = 'none';
        }
      });
      contIMPlaca.style.display='none' 
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
      }
    break;
    case 'imagen4':
      // Detener el video
      video.pause();
      // Ocultar el video estableciendo su estilo de visualización en 'none'
      video.style.display = 'none';    
      imagesPlancha.style.display='flex'
      imgsPlancha.style.display='flex'
      imgPlancha.forEach(function (imagen) {
        if (imagen.id === 'portPlaca4') {
          imagen.style.display = 'block';
        }else{
          imagen.style.display = 'none';
        }
      });
      contIMPlaca.style.display='none' 
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
      }
    break;
    default:
  }
}
function muestraAngulos(elementId){
var contPadManta = document.getElementById('contPerfilesManta');
var contChildManta = document.getElementById('imagenes-manta');
var imgsManta = document.querySelectorAll('.imgMant')
  switch (elementId) {
    case 'mantilla1':
    contPortaManta.style.display='block'  
    videoElements.forEach(video => {
    if (video.id == 'videoManta') {
      video.style.display = 'none';   
      }}); 

      contPadManta.style.display='block'
      contChildManta.style.display='block'
  
      imgsManta.forEach(function (imagen) {
        if (imagen.id === 'manta' || imagen.id === 'manta1') {
          imagen.style.display = 'block';
        }else{
          imagen.style.display = 'none';
        }
      });
      contIMmanta.style.display='none' 
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
      }    
    break;
    case 'mantilla2':
      contPortaManta.style.display='block'
      videoElements.forEach(video => {
      if (video.id == 'videoManta') {
        video.style.display = 'none';   
        }});   
        contPadManta.style.display='flex'
        contChildManta.style.display='flex'    
        imgsManta.forEach(function (imagen) {
          if (imagen.id === 'manta2' || imagen.id === 'manta3') {
            imagen.style.display = 'block';
          }else{
            imagen.style.display = 'none';
          }
        });
        contIMmanta.style.display='none' 
        if (!idsArray.includes(elementId)) {
          idsArray.push(elementId);
          console.log(idsArray)
        } 
      break;     
    case 'mantilla3':
      contPortaManta.style.display='block'
      videoElements.forEach(video => {
      if (video.id == 'videoManta') {
        video.style.display = 'none';   
        }}); 
  
        contPadManta.style.display='flex'
        contChildManta.style.display='flex'
    
        imgsManta.forEach(function (imagen) {
          if (imagen.id === 'manta4' || imagen.id === 'manta5') {
            imagen.style.display = 'block';
          }else{
            imagen.style.display = 'none';
          }
        });
        contIMmanta.style.display='none' 
        if (!idsArray.includes(elementId)) {
          idsArray.push(elementId);
          console.log(idsArray)
        } 
    break;
    case 'mantilla4':
      contPortaManta.style.display='block'
      videoElements.forEach(video => {
      if (video.id == 'videoManta') {
        video.style.display = 'none';   
        }}); 
  
        contPadManta.style.display='flex'
        contChildManta.style.display='flex'
    
        imgsManta.forEach(function (imagen) {
          if (imagen.id === 'manta6' || imagen.id === 'manta7') {
            imagen.style.display = 'block';
          }else{
            imagen.style.display = 'none';
          }
        });
        contIMmanta.style.display='none' 
        if (!idsArray.includes(elementId)) {
          idsArray.push(elementId);
          console.log(idsArray)
        } 
    break;
    default:
  }
}
function muestraLados(elementId){
  var contPadImpresor = document.getElementById('contPerfilesImpresor');      
  var contChildImpresor = document.getElementById('imagenes-impresor');
  var imgsImpresor = document.querySelectorAll('.imgImpresor');
  var imgImpresorI = document.getElementById('impresor');
  imgImpresorI.style.display = 'none'
      switch (elementId) {
      case 'forward':
        videoElements.forEach(video => {
        if (video.id == 'video-impresor') {
        video.style.display = 'none';   
        }}); 
        contPadImpresor.style.display='flex'
        contChildImpresor.style.display='flex'      
        imgsImpresor.forEach(function (imagen) {
        if (imagen.id === 'impresor' || imagen.id === 'impresor1') {
          imagen.style.display = 'block';
        }else{
          imagen.style.display = 'none';
        }
        });
        if (!idsArray.includes(elementId)) {
          idsArray.push(elementId);
          console.log(idsArray)
        } 
      break;
      case 'comands':
        videoElements.forEach(video => {
        if (video.id == 'video-impresor') {
          video.style.display = 'none';   
          }}); 
    
          contPadImpresor.style.display='flex'
          contChildImpresor.style.display='flex'
      
          imgsImpresor.forEach(function (imagen) {
            if (imagen.id === 'impresor2' || imagen.id === 'impresor3') {
              imagen.style.display = 'block';
            }else{
              imagen.style.display = 'none';
            }
          });
          if (!idsArray.includes(elementId)) {
            idsArray.push(elementId);
            console.log(idsArray)
          } 
        break;     
      case 'service':
        videoElements.forEach(video => {
        if (video.id == 'video-impresor') {
          video.style.display = 'none';   
          }}); 
    
          contPadImpresor.style.display='flex'
          contChildImpresor.style.display='flex'
      
          imgsImpresor.forEach(function (imagen) {
            if (imagen.id === 'impresor4' || imagen.id === 'impresor5') {
              imagen.style.display = 'block';
            }else{
              imagen.style.display = 'none';
            }
          });
          if (!idsArray.includes(elementId)) {
            idsArray.push(elementId);
            console.log(idsArray)
          } 
      break;
      case 'back':
        videoElements.forEach(video => {
        if (video.id == 'video-impresor') {
          video.style.display = 'none';   
          }}); 
    
          contPadImpresor.style.display='flex'
          contChildImpresor.style.display='flex'
      
          imgsImpresor.forEach(function (imagen) {
            if (imagen.id === 'impresor6' || imagen.id === 'impresor7') {
              imagen.style.display = 'block';
            }else{
              imagen.style.display = 'none';
            }
          });
          if (!idsArray.includes(elementId)) {
            idsArray.push(elementId);
            console.log(idsArray)
          } 
      break;
      default:
    }
} 
function showNextInputChec() {
  var conteneChecks = document.getElementById('contChecks');
  if (conteneChecks.style.display === 'block') {
    for (var i = 0; i < checks.length; i++) {
      checks[i].style.display = 'none';
    }
    conteneChecks.style.display = 'none';
  } else {
    conteneChecks.style.display = 'block';
    if (actualtIndex < input.length) {
      input[actualtIndex].style.display = 'block';
      actualtIndex++;
    } else {
      actualtIndex = 0; // Restablecer el índice si alcanza el final
    }
    setTimeout(showNextInputChec, 37); // Ajusta el tiempo de espera en milisegundos
  }
}
function mantAutonomo (idElement) {
  var conteLinksI = document.getElementById('links-inicialesI'); 
  var videoBackground = document.getElementById('videoBackground');
  videoBackground.pause();
  videoBackground.style.display = 'none'; // Oculta el video
  switch (idElement) {
    case 'troubleshooting':       
        deslizarTrouble(idElement);
      /*///////////////////////////////////////////////////////////////////////////////////////////////////////*/
       /* modificarPosicion(); */
      /*///////////////////////////////////////////////////////////////////////////////////////////////////////*/
    break;
    case 'canvasContainer2':   
       deslizarCanvas2(idElement);
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/   
       /* modificarPosicion() */
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    break;
    case 'contChecks':
      // Capturar el contenedor padre
      var contenedorPadre = document.getElementById('largoImpresion');
      // Obtener todos los hijos del contenedor padre
      var hijos = contenedorPadre.children;
      // Inicializar variables para verificar si los elementos 'linksMA' y 'imgs-entrenos' están visibles
      var linksMAVisible = false;
      var imgsEntrenosVisible = false;
      // Iterar a través de los hijos del contenedor
      for (var i = 0; i < hijos.length; i++) {
      var hijo = hijos[i];
      // Verificar si el hijo es 'linksMA' y si está visible
      if (hijo.id === 'linksMA' || hijo.style.display !== 'none') {
      linksMAVisible = true;
      }
      // Verificar si el hijo es 'imgs-entrenos' y si está visible
      if (hijo.className === 'imgs-entrenos' || hijo.style.display !== 'none') {
      imgsEntrenosVisible = true;
      }
      }
      // Si tanto 'linksMA' como 'imgs-entrenos' están visibles, ocultarlos
      if (linksMAVisible && imgsEntrenosVisible) {
      document.getElementById('linksMA').style.display = 'none';
      document.getElementById('contImgEntrenos').style.display = 'none';
      }
      var contCheck = document.getElementById('contChecks');
      var inpts = document.querySelectorAll('.input-class');
      if (contCheck.style.display === 'block') {
      // Ocultar los elementos
      contCheck.style.display = 'none';
      for (var i = 0; i < inpts.length; i++) {
      inpts[i].style.display = 'none';
      }
      } else {
      // Ejecutar la lógica si el contenedor está visible
      contCheck.style.display = 'block';
      // Mostrar cada input con un intervalo de 77 milisegundos
      for (var i = 0; i < inpts.length; i++) {
      (function(index) {
      setTimeout(function() {
      inpts[index].style.display = 'block';
      }, 77 * index);
      })(i);
      }
      }
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
      if (index !== -1) {
        // Si se encontró el ID en el array, eliminarlo
        arrayPosicionnador.splice(index, 1);
        } else {
        // Si el ID no existe en el array, agrégalo
        arrayPosicionnador.push(idElement);
        }
        console.log(arrayPosicionnador);  
        modificarPosicion()
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    break;
    case 'canvasContainer3':
      // Capturar el contenedor padre
      var contenedorPadre = document.getElementById('largoImpresion');
      // Obtener todos los hijos del contenedor padre
      var hijos = contenedorPadre.children;
      // Inicializar variables para verificar si los elementos 'linksMA' y 'imgs-entrenos' están visibles
      var linksMAVisible = false;
      var imgsEntrenosVisible = false;

      // Iterar a través de los hijos del contenedor
      for (var i = 0; i < hijos.length; i++) {
      var hijo = hijos[i];
      // Verificar si el hijo es 'linksMA' y si está visible
      if (hijo.id === 'linksMA' || hijo.style.display !== 'none') {
      linksMAVisible = true;      }

      // Verificar si el hijo es 'imgs-entrenos' y si está visible
      if (hijo.className === 'imgs-entrenos' || hijo.style.display !== 'none') {
      imgsEntrenosVisible = true;
      }
      }
      // Si tanto 'linksMA' como 'imgs-entrenos' están visibles, ocultarlos
      if (linksMAVisible && imgsEntrenosVisible) {
      document.getElementById('linksMA').style.display = 'none';
      document.getElementById('contImgEntrenos').style.display = 'none';
      }
      const contGrafitos = document.getElementById('canvasContainer3')
      if (contGrafitos.style.display !== 'block') {
        contGrafitos.style.display = 'block'; 
        conteLinksI.style.left='547px'
      } else {
        contGrafitos.style.display = 'none';
        conteLinksI.style.left='187px'
      }
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
      if (index !== -1) {
        // Si se encontró el ID en el array, eliminarlo
        arrayPosicionnador.splice(index, 1);
        } else {
        // Si el ID no existe en el array, agrégalo
        arrayPosicionnador.push(idElement);
        }
        console.log(arrayPosicionnador);  
        modificarPosicion()
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    break;
    case 'contImagNeg':
      // Capturar el contenedor padre
      var contenedorPadre = document.getElementById('largoImpresion');
      // Obtener todos los hijos del contenedor padre
      var hijos = contenedorPadre.children;
      // Inicializar variables para verificar si los elementos 'linksMA' y 'imgs-entrenos' están visibles
      var linksMAVisible = false;
      var imgsEntrenosVisible = false;
      // Iterar a través de los hijos del contenedor
      for (var i = 0; i < hijos.length; i++) {
      var hijo = hijos[i];
      // Verificar si el hijo es 'linksMA' y si está visible
      if (hijo.id === 'linksMA' || hijo.style.display !== 'none') {
      linksMAVisible = true;
      }
      // Verificar si el hijo es 'imgs-entrenos' y si está visible
      if (hijo.className === 'imgs-entrenos' || hijo.style.display !== 'none') {
      imgsEntrenosVisible = true;
      }
      }
      // Si tanto 'linksMA' como 'imgs-entrenos' están visibles, ocultarlos
      if (linksMAVisible && imgsEntrenosVisible) {
      document.getElementById('linksMA').style.display = 'none';
      document.getElementById('contImgEntrenos').style.display = 'none';
      }
        /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/    
      var contGrafColor = document.getElementById('contImagNeg')
      if (contGrafColor.style.display === 'block') {
      contGrafColor.style.display = 'none'; 
      } else {
      contGrafColor.style.display = 'block';
      }
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
      if (index !== -1) {
        // Si se encontró el ID en el array, eliminarlo
        arrayPosicionnador.splice(index, 1);
        } else {
        // Si el ID no existe en el array, agrégalo
        arrayPosicionnador.push(idElement);
        }
        console.log(arrayPosicionnador); 
        modificarPosicion()
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    break;
    case 'contImagGraf':
      // Capturar el contenedor padre
      var contenedorPadre = document.getElementById('largoImpresion');
      // Obtener todos los hijos del contenedor padre
      var hijos = contenedorPadre.children;
      // Inicializar variables para verificar si los elementos 'linksMA' y 'imgs-entrenos' están visibles
      var linksMAVisible = false;
      var imgsEntrenosVisible = false;
      // Iterar a través de los hijos del contenedor
      for (var i = 0; i < hijos.length; i++) {
      var hijo = hijos[i];
      // Verificar si el hijo es 'linksMA' y si está visible
      if (hijo.id === 'linksMA' || hijo.style.display !== 'none') {
      linksMAVisible = true;
      }
      // Verificar si el hijo es 'imgs-entrenos' y si está visible
      if (hijo.className === 'imgs-entrenos' || hijo.style.display !== 'none') {
      imgsEntrenosVisible = true;
      }}
      // Si tanto 'linksMA' como 'imgs-entrenos' están visibles, ocultarlos
      if (linksMAVisible && imgsEntrenosVisible) {
      document.getElementById('linksMA').style.display = 'none';
      document.getElementById('contImgEntrenos').style.display = 'none';
      }
        /*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/    
      var contGrafNeg = document.getElementById('contImagGraf');
      if (contGrafNeg.style.display === 'block') {
      contGrafNeg.style.display = 'none'; 
      } else {
      contGrafNeg.style.display = 'block';
      }
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
      if (index !== -1) {
        // Si se encontró el ID en el array, eliminarlo
        arrayPosicionnador.splice(index, 1);
        } else {
        // Si el ID no existe en el array, agrégalo
        arrayPosicionnador.push(idElement);
        }
        console.log(arrayPosicionnador);  
        modificarPosicion()
        /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    break;
  default:
}}
var botonClicado = false;
var originalButtonColors = {}; // Objeto para almacenar los colores originales de los 

function deslizaContenedor(idElement, idButton) {
  var contLinkMant = document.getElementById('linksMA');
  var elementoAnterior = null;
  var elementoActual = null;

  idsMAhijos.forEach(function (elto) {
    var elemento = document.getElementById(elto);    
    if (elemento) {
      elemento.style.display = 'none';
    }
  });

  idsMA.forEach(function (elto) {
    var elemento = document.getElementById(elto);    
    if (elemento) {
      elemento.style.display = 'none';
    }
  });


  if (contLinkMant !== null && contImgEntrenos !== null) {
    contLinkMant.style.display = 'none';
    contImgEntrenos.style.display = 'none';
  }

  // Verificar si el elemento ya está en el array
  if (!arrayPosicionnador.includes(idElement)) {
    arrayPosicionnador.push(idElement);
  }
  var contenedor = document.getElementById(idElement);  
  contenedor.style.display = 'flex';
  contenedor.style.left = '257px';

  idsMA.forEach(element => {
    var elemento = document.getElementById(element);
    if (elemento === document.getElementById(idElement)) {
        elemento.style.display = 'flex';
    } else {
        elemento.style.display = 'none';
    }
  }); 

  for (var i = 1; i < arrayPosicionnador.length; i++) {
    var elementoActual = document.getElementById(arrayPosicionnador[i]);
    var elementoAnterior = document.getElementById(arrayPosicionnador[i - 1]);

    if (elementoActual && elementoAnterior) {
      var estiloAnterior = window.getComputedStyle(elementoAnterior);
      var posicionAnterior = parseFloat(estiloAnterior.getPropertyValue('left'));
      var anchoAnterior = parseFloat(estiloAnterior.getPropertyValue('width'));

      destino = posicionAnterior + anchoAnterior;
    }
  }

  arrayIdButtsMA.forEach(element => {
    var elemento = document.getElementById(element);
    if (elemento) {
        if (element === idButton) {
            elemento.style.backgroundColor = 'orange';
        } else {
            elemento.style.backgroundColor = 'rgba(83, 82, 82, 0.678)';
        }
    }
  });

}
function deslizAutomatic(){
  arrayPosicionnador = [];
  destino = 277;
  arrayIdButtsMA.forEach(function (elto) {
    var elemento = document.getElementById(elto);    
    if (elemento) {
      elemento.style.backgroundColor = 'rgba(83, 82, 82, 0.678)'; // Restaura el color original
    }
  });
  idsMA.forEach(function (elto) {
    var elemento = document.getElementById(elto);    
    if (elemento) {
      elemento.style.display = 'none';
    }
  });
  //setTimeout(function() {
    deslizaContenedorII('troubleshooting', 'troubleshoot');  
    // Esperar 400 milisegundos y ejecutar la tercera función
    setTimeout(function() {
      deslizaContenedorII('canvasContainer2', 'def1');  
      // Esperar 400 milisegundos y ejecutar la tercera función
      setTimeout(function() {
        deslizaContenedorII('contChecks', 'def2');  
        // Esperar 400 milisegundos y ejecutar la cuarta función
        setTimeout(function() {
          deslizaContenedorII('canvasContainer3', 'adtBut');  
          // Esperar 400 milisegundos y ejecutar la quinta función
          setTimeout(function() {
            deslizaContenedorII('contImagNeg', 'fua1');  
            // Esperar 400 milisegundos y ejecutar la sexta función
            setTimeout(function() {
              deslizaContenedorII('contImagGraf', 'lup');
            }, 300);
          }, 300);
        }, 300);
      }, 300);
    }, 300);
  //}, 50); 
  console.log('al final de la funcion ',arrayPosicionnador)
}
function deslizaContenedorII(idElement, idButton) {
  var contLinkMant = document.getElementById('linksMA');
  var elementoAnterior = null;
  var elementoActual = null;

  if (contLinkMant !== null && contImgEntrenos !== null) {
    contLinkMant.style.display = 'none';
    contImgEntrenos.style.display = 'none';
  }

  // Verificar si el elemento ya está en el array
  if (!arrayPosicionnador.includes(idElement)) {
    arrayPosicionnador.push(idElement);
  }

  var contenedor = document.getElementById(idElement);
  
  contenedor.style.display = 'flex';
  contenedor.style.left = '257px';

  var inicio = 1100;
  var velocidad = 500;
  var duracion = Math.abs(destino - inicio) / velocidad * 100;
  var inicioTiempo = null;

  function animar(tiempo) {
    if (!inicioTiempo) inicioTiempo = tiempo;
    var progreso = (tiempo - inicioTiempo) / duracion;
    var izquierda = inicio + progreso * (destino - inicio);
    if (progreso < 1) {
      contenedor.style.left = izquierda + 'px';
      requestAnimationFrame(animar);
    } else {
      contenedor.style.left = destino + 'px';
    }
  }
  requestAnimationFrame(animar);

  for (var i = 1; i < arrayPosicionnador.length; i++) {
    var elementoActual = document.getElementById(arrayPosicionnador[i]);
    var elementoAnterior = document.getElementById(arrayPosicionnador[i - 1]);

    if (elementoActual && elementoAnterior) {
      var estiloAnterior = window.getComputedStyle(elementoAnterior);
      var posicionAnterior = parseFloat(estiloAnterior.getPropertyValue('left'));
      var anchoAnterior = parseFloat(estiloAnterior.getPropertyValue('width'));

      destino = posicionAnterior + anchoAnterior;
    }
  }
  console.log('El valor final de destino es:', destino);
  console.log(arrayPosicionnador);
  // Cambiar el color de fondo del botón al hacer clic
  var boton = document.getElementById(idButton);
  if (originalButtonColors[idButton] === undefined) {
    originalButtonColors[idButton] = boton.style.backgroundColor; // Guarda el color original 
  }
  boton.style.backgroundColor = 'orange';
 /* boton.onclick = null;*/      
  setTimeout(function () {    
  }, 300);
}


function resetBotns() {  
  var contProblema = document.getElementById('linksMA');
  var contProblema2 = document.getElementById('contImgEntrenos');
  
  // Ocultar otros elementos y realizar otras acciones necesarias
  contProblema.style.display = 'none';
  contProblema2.style.display = 'none';
  console.log(arrayPosicionnador);

  idsMA.forEach(function (elto) {
    var elemento = document.getElementById(elto);    
    if (elemento) {
      elemento.style.display = 'none';
    }
  });

  arrayPosicionnador = [];
  destino = 257;
  // Restaurar el color original de los botones



  var miBoton1 = document.getElementById("troubleshoot");
  function handleClickEvent(event) {
  deslizaContenedor('troubleshooting', 'troubleshoot');
  }
  miBoton1.addEventListener("click", handleClickEvent);

  var miBoton2 = document.getElementById("def1");
  function handleClickEvent2(event) {
  deslizaContenedor('canvasContainer2','def1');
  }
  miBoton2.addEventListener("click", handleClickEvent2);

  var miBoton3 = document.getElementById("def2");
  function handleClickEvent3(event) {
  deslizaContenedor('contChecks','def2');
  }
  miBoton3.addEventListener("click", handleClickEvent3);

  var miBoton4 = document.getElementById("adtBut");
  function handleClickEvent4(event) {
  deslizaContenedor('canvasContainer3','adtBut');
  }
  miBoton4.addEventListener("click", handleClickEvent4);

  var miBoton5 = document.getElementById("fua1");
  function handleClickEvent5(event) {
  deslizaContenedor('contImagNeg','fua1');
  }
  miBoton5.addEventListener("click", handleClickEvent5);

  var miBoton6 = document.getElementById("lup");
  function handleClickEvent6(event) {
  deslizaContenedor('contImagGraf','lup');
  }
  miBoton6.addEventListener("click", handleClickEvent6);

  // Itera a través de cada ID de botón
  arrayIdButtsMA.forEach(function (buttonId) {
  // Obtiene el elemento del botón por su ID
  var button = document.getElementById(buttonId);
  // Establece el color de fondo del botón
  button.style.backgroundColor = 'rgba(83, 82, 82, 0.678)';
  });

  arrayPosicionnador = [];
  console.log(arrayPosicionnador)

}
function deslizarTrouble(idElemento) {
  // Verificar si el elemento ya está en el array
  if (!arrayPosicionnador.includes(idElemento)) {
    arrayPosicionnador.push(idElemento);
  }
  console.log(arrayPosicionnador);
  console.log(destino)
}
function deslizarCanvas2(idElement) {
  var index = arrayPosicionnador.indexOf(idElement); // Buscar el índice del ID en el array
  if (index !== -1) {
    // Si se encontró el ID en el array, eliminarlo
    arrayPosicionnador.splice(index, 1);
  } else {
    // Si el ID no existe en el array, agrégalo
    arrayPosicionnador.push(idElement);
  }
  console.log(arrayPosicionnador);
  /*////////////////////////////////////////////////////////////////////////////////////////////*/
  var contenedor = document.getElementById('troubleshooting')
  var contenedor1 = document.getElementById('canvasContainer2');
  if (contenedor1) {
    var estilo = getComputedStyle(contenedor1);
    var left = estilo.getPropertyValue('left');1
    var width = estilo.getPropertyValue('width');

    // Convierte los valores de left y width a números
    var leftValue = parseFloat(left);
    var widthValue = parseFloat(width);

    // Suma los valores y almacénalos en ultimaPosicion
    var ultimaPosicion = leftValue + widthValue;

    console.log(ultimaPosicion);
  } else {
  console.error("El contenedor con ID 'troubleshooting' no se encontró.");
  }
  /*////////////////////////////////////////////////////////////////////////////////////////////////*/  
  if (contenedor1) {
    // 1. Hacer visible el contenedor
    contenedor1.style.display = 'block';
    // 2. Iniciar en la posición left=1200px
    contenedor1.style.left = '1200px';
    // 3. Calcular el destino como la suma de left y width de troubleshooting
    var destino = parseInt(contenedor.style.left) + contenedor.clientWidth;
    // 4. Animación para desplazarse hacia la izquierda
    var inicio = 1200;
    var velocidad = 300; // 100px por 0.1s
    var duracion = Math.abs(destino - inicio) / velocidad * 100; // en milisegundos
    // Usar requestAnimationFrame para la animación suave
    var inicioTiempo = null;

    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio);
      contenedor1.style.left = izquierda + 'px';
    
      if (progreso < 1) {
        requestAnimationFrame(animar);
      } else {
        contenedor1.style.left = destino + 'px'
        /* deslizarChecks(); */
      }
    }
    requestAnimationFrame(animar);
  } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.");
  }
}
function deslizarChecks(idElement) {
  var index = arrayPosicionnador.indexOf(idElement); // Buscar el índice del ID en el array
  if (index !== -1) {
    // Si se encontró el ID en el array, eliminarlo
    arrayPosicionnador.splice(index, 1);
  } else {
    // Si el ID no existe en el array, agrégalo
    arrayPosicionnador.push(idElement);
  }
  console.log(arrayPosicionnador);
  /*//////////////////////////////////////////////////////////////////////////////////////////////*/
  var contenedor1 = document.getElementById('contChecks');
  var contenedor2 = document.getElementById('canvasContainer2');
  var contenedor4 = document.getElementById('canvasContainer4');
  var contenedor5 = document.getElementById('canvasContainer5');
  var contenedor6 = document.getElementById('canvasContainer6');
  var contenedor7 = document.getElementById('canvasContainer7');





  if (contenedor1) {
    // 1. Hacer visible el contenedor
    contenedor1.style.display = 'flex';
    // 2. Iniciar en la posición left=1200px
    contenedor1.style.left = '1200px';
    // 3. Calcular el destino como la suma de left y width de troubleshooting
    var destino = parseInt(contenedor2.style.left) + contenedor2.clientWidth;
    // 4. Animación para desplazarse hacia la izquierda
    var inicio = 1200;
    var velocidad = 300; // 100px por 0.1s
    var duracion = Math.abs(destino - inicio) / velocidad * 100; // en milisegundos
    // Usar requestAnimationFrame para la animación suave
    var inicioTiempo = null;

    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio);
      contenedor1.style.left = izquierda + 'px';

      if (progreso < 1) {
        requestAnimationFrame(animar);
      } else {
        contenedor1.style.left = destino + 'px';
      }
    }
    requestAnimationFrame(animar);
    } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.");
    }
}
function deslizarCanvas3(idElement) {
  var index = arrayPosicionnador.indexOf(idElement); // Buscar el índice del ID en el array
  if (index !== -1) {
    // Si se encontró el ID en el array, eliminarlo
    arrayPosicionnador.splice(index, 1);
  } else {
    // Si el ID no existe en el array, agrégalo
    arrayPosicionnador.push(idElement);
  }
  console.log(arrayPosicionnador);
  /*//////////////////////////////////////////////////////////////////////////////////////////////*/
  var contenedor1 = document.getElementById('canvasContainer3');
  var contenedor2 = document.getElementById('contChecks');

  if (contenedor1) {
    // 1. Hacer visible el contenedor
    contenedor1.style.display = 'block';
    // 2. Iniciar en la posición left=1200px
    contenedor1.style.left = '1200px';
    // 3. Calcular el destino como la suma de left y width de troubleshooting
    var destino = parseInt(contenedor2.style.left) + contenedor2.clientWidth;
    // 4. Animación para desplazarse hacia la izquierda
    var inicio = 1200;
    var velocidad = 300; // 100px por 0.1s
    var duracion = Math.abs(destino - inicio) / velocidad * 100; // en milisegundos
    // Usar requestAnimationFrame para la animación suave
    var inicioTiempo = null;

    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio);
      contenedor1.style.left = izquierda + 'px';

      if (progreso < 1) {
        requestAnimationFrame(animar);
      } else {
        contenedor1.style.left = destino + 'px';
      }
    }
    requestAnimationFrame(animar);
    } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.");
    }
}
function deslizarContImagNeg(idElement) {
  var index = arrayPosicionnador.indexOf(idElement); // Buscar el índice del ID en el array
  if (index !== -1) {
    // Si se encontró el ID en el array, eliminarlo
    arrayPosicionnador.splice(index, 1);
  } else {
    // Si el ID no existe en el array, agrégalo
    arrayPosicionnador.push(idElement);
  }
  console.log(arrayPosicionnador);
  /*//////////////////////////////////////////////////////////////////////////////////////////////*/
  var contenedor1 = document.getElementById('contImagNeg');
  var contenedor2 = document.getElementById('canvasContainer3');

  if (contenedor1) {
    // 1. Hacer visible el contenedor
    contenedor1.style.display = 'block';
    // 2. Iniciar en la posición left=1200px
    contenedor1.style.left = '1200px';
    // 3. Calcular el destino como la suma de left y width de troubleshooting
    var destino = parseInt(contenedor2.style.left) + contenedor2.clientWidth;
    // 4. Animación para desplazarse hacia la izquierda
    var inicio = 1200;
    var velocidad = 300; // 100px por 0.1s
    var duracion = Math.abs(destino - inicio) / velocidad * 100; // en milisegundos
    // Usar requestAnimationFrame para la animación suave
    var inicioTiempo = null;

    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio);
      contenedor1.style.left = izquierda + 'px';

      if (progreso < 1) {
        requestAnimationFrame(animar);
      } else {
        contenedor1.style.left = destino + 'px';
      }
    }
    requestAnimationFrame(animar);
    } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.");
    }
}
function deslizarContImagGraf(idElement) {
  var index = arrayPosicionnador.indexOf(idElement); // Buscar el índice del ID en el array
  if (index !== -1) {
    // Si se encontró el ID en el array, eliminarlo
    arrayPosicionnador.splice(index, 1);
  } else {
    // Si el ID no existe en el array, agrégalo
    arrayPosicionnador.push(idElement);
  }
  console.log(arrayPosicionnador);
  /*//////////////////////////////////////////////////////////////////////////////////////////////*/
  var contenedor1 = document.getElementById('contImagGraf');
  var contenedor2 = document.getElementById('contImagNeg');

  if (contenedor1) {
    // 1. Hacer visible el contenedor
    contenedor1.style.display = 'block';
    // 2. Iniciar en la posición left=1200px
    contenedor1.style.left = '1200px';
    // 3. Calcular el destino como la suma de left y width de troubleshooting
    var destino = parseInt(contenedor2.style.left) + contenedor2.clientWidth;
    // 4. Animación para desplazarse hacia la izquierda
    var inicio = 1200;
    var velocidad = 300; // 100px por 0.1s
    var duracion = Math.abs(destino - inicio) / velocidad * 100; // en milisegundos
    // Usar requestAnimationFrame para la animación suave
    var inicioTiempo = null;

    function animar(tiempo) {
      if (!inicioTiempo) inicioTiempo = tiempo;
      var progreso = (tiempo - inicioTiempo) / duracion;
      var izquierda = inicio + progreso * (destino - inicio);
      contenedor1.style.left = izquierda + 'px';

      if (progreso < 1) {
        requestAnimationFrame(animar);
      } else {
        contenedor1.style.left = destino + 'px';
      }
    }
    requestAnimationFrame(animar);
    } else {
    console.error("Los contenedores 'troubleshooting' o 'canvasContainer2' no se encontraron.");
    }
}
function modificarPosicion() {  
  // Valor fijo para el primer elemento
  var destino = '257px';

  // Iterar a través de los IDs y calcular la posición left
  arrayPosicionnador.forEach(function(id) {
  // Seleccionar el elemento por su ID
  var elemento = document.getElementById(id);

  if (elemento) {
    // Asignar el valor de destino como posición left al elemento actual
    elemento.style.left = destino;

    // Obtener el ancho (width) de cada elemento
    var width = window.getComputedStyle(elemento).getPropertyValue('width');
    
    // Eliminar 'px' del valor y convertirlo a un número
    var ancho = parseFloat(width);

    // Calcular la nueva posición left para el próximo elemento
    destino = parseInt(destino) + ancho + 'px';

    // Mostrar la posición en la consola
    console.log(id + " - posicion left:", destino);
  } else {
    console.error("Elemento con ID '" + id + "' no encontrado.");
  }
}); 
}
function muestraTorres(seleccion) {
  seccionTintero.style.display = 'none';
  for (var i = 0; i < pantallas.length; i++) {
    var elemento = document.getElementById(pantallas[i]);
    if (elemento) {
      elemento.style.display = 'none';
    }
  }

  switch (seleccion) {
    case 'frente':
      var contOblicuoT = document.getElementById('agrupaOblicuos-II');
      contOblicuoT.style.display = 'flex'
      contOblicuoT.style.marginTop = '3px'
      contOblicuoT.style.marginLeft = '3px'

    

      const elementoMandosFrente = document.getElementById('pantalla-frente');
      if (elementoMandosFrente) {
        elementoMandosFrente.style.display = 'block';
      }

      if (!idsArray.includes(seleccion)) {
        idsArray.push(seleccion);
        console.log(idsArray);
      }
      break;
    case 'mandos':
      const elementoMandos = document.getElementById('pantalla-mandos');
      if (elementoMandos) {
        elementoMandos.style.display = 'block';
      }
      if (!idsArray.includes(seleccion)) {
        idsArray.push(seleccion);
        console.log(idsArray);
      }
      break;
    case 'servicio':
      const elementoServicio = document.getElementById('pantalla-servicio');
      if (elementoServicio) {
        elementoServicio.style.display = 'block';
      }
      if (!idsArray.includes(seleccion)) {
        idsArray.push(seleccion);
        console.log(idsArray);
      }
      break;
    case 'atras':
      const elementoAtras = document.getElementById('pantalla-atras');
      if (elementoAtras) {
        elementoAtras.style.display = 'block';
      }
      if (!idsArray.includes(seleccion)) {
        idsArray.push(seleccion);
        console.log(idsArray);
      }
      break;
    default:
      break;
  }
}
function muestraTorresI (seleccion) {  // BOTON OBLICUO
  seccionTintero.style.display='none'
  switch (seleccion) {    
    case 'frente':
      for (var i = 0; i < pantallas.length; i++) {
        var elemento = document.getElementById(pantallas[i]);
        if (elemento) {
          elemento.style.display = 'none';
        }
      }

      for (var i = 0; i < pantallas.length; i++) {
        if (pantallas[i] === 'pantalla-frente') {
          const elementoMandos = document.getElementById('pantalla-frente');
          if (elementoMandos) {
            elementoMandos.style.display = 'block';
          }else {
            elementoMandos.style.display = 'none';            
          }
        }
      }  
      
    break; 
    case 'mandos':
      for (var i = 0; i < pantallas.length; i++) {
        var elemento = document.getElementById(pantallas[i]);
        if (elemento) {
          elemento.style.display = 'none';
        }
      }

      for (var i = 0; i < pantallas.length; i++) {
        if (pantallas[i] === 'pantalla-mandos') {
          const elementoMandos = document.getElementById('pantalla-mandos');
          if (elementoMandos) {
            elementoMandos.style.display = 'block';
          }else {
            elementoMandos.style.display = 'none';            
          }
        }
      } 
    break;
    case 'servicio': 
    for (var i = 0; i < pantallas.length; i++) {
      var elemento = document.getElementById(pantallas[i]);
      if (elemento) {
        elemento.style.display = 'none';
      }
    }

    for (var i = 0; i < pantallas.length; i++) {
      if (pantallas[i] === 'pantalla-servicio') {
        const elementoMandos = document.getElementById('pantalla-servicio');
        if (elementoMandos) {
          elementoMandos.style.display = 'block';
        }else {
          elementoMandos.style.display = 'none';            
        }
      }
    }   
    break;
    case 'atras':
      for (var i = 0; i < pantallas.length; i++) {
        var elemento = document.getElementById(pantallas[i]);
        if (elemento) {
          elemento.style.display = 'none';
        }
      }      
      
      for (var i = 0; i < pantallas.length; i++) {
        if (pantallas[i] === 'pantalla-atras') {
          const elementoMandos = document.getElementById('pantalla-atras');
          if (elementoMandos) {
            elementoMandos.style.display = 'block';
          }else {
            elementoMandos.style.display = 'none';            
          }
        }
      }        

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
function abrirSeccionContinua(){
  allContenedores.forEach(elemen => {
    var element = document.getElementById(elemen);
    if (element) {
      element.style.display = 'none';
    }
  });
  allContIniciales.forEach(elemen => {
    var element = document.getElementById(elemen);
    if (element) {
      element.style.display = 'flex';
    }
  });
  contVariable.style.display='none'
  contPlana.style.display='none'
  contSecador.style.display='none'
  linkList.style.display = "none";
  location.reload();
}
function abrirSeccionVariable(elementId){
  allContenedores.forEach(elemen => {
    var element = document.getElementById(elemen);  
    if (element) {
      element.style.display = 'none';
    }
  });
  contPlana.style.display='none'
  contVariable.style.display='flex'
  linkList.style.display = "none";
  contSecador.style.display='none'
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  }
} 
function abrirSeccionPlanas(elementId){
  allContenedores.forEach(elemen => {
    var element = document.getElementById(elemen);  
    if (element) {
      element.style.display = 'none';
    }
  });
  contVariable.style.display='none'
  contPlana.style.display='flex'
  linkList.style.display = "none";
  contSecador.style.display='none'
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  }  
}
function abrirSeccionCurado(elementId){
  allContenedores.forEach(elemen => {
    var element = document.getElementById(elemen);  
    if (element) {
      element.style.display = 'none';
    }
  });
  contVariable.style.display='none'
  contPlana.style.display='none'
  linkList.style.display = "none";
  contSecador.style.display='block'

  videoElements.forEach(video => {
    try {
      if (video.id !== 'curado-uv') {             
        video.style.display = 'none';     
      } else {
        video.style.display = 'block';
        video.pause();
        video.currentTime = 0;
        video.play();           
      } 
    } catch (error) {
      // Manejar la excepción aquí si es necesario
      console.error('Error al manipular videos:', error);
    }
  });  
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  }  
}
function cerrarSecciones(){
 linkList.style.display = "none";
 linkListI.style.display = "none";
}
function abrirPilarMA(){
  linkListI.style.display = "none";    
  // Recorre el array y oculta los elementos por su ID
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = 'none';
    }
  }
  botonMa.style.display='block'
  butInicio.style.display='block'
  const buttonElements = document.querySelectorAll('.butt-mautonomo');
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'block';
    }, delay * i,i);
  }    
}
function abrirPrepress(elementId) {
  var linksIniciales = ['links-inicialesI', 'links-iniciales'];
  var arrayImgPress = [];
  var contBotPress = document.getElementById('contene-11');
  var contImgsPrepress = document.getElementById('imgs-prepress');
  var videoBackground = document.getElementById('videoBackground');
  var prePrensaElemento = document.getElementById('pre-prensa');

  allContenedores.forEach(contenedor => {
    if (contenedor === 'vidColor') {
      contenedor.style.display = 'none';         
    }  
  });
  
  contBotPress.style.display = 'block';
  contImgsPrepress.style.display = 'block';
  arrayImgPress.forEach(image => {
    if(image) {
      image.style.display = 'block'
    }
  })

  videoBackground.pause();
  videoBackground.style.display = 'none'; // Oculta el video

  videoElements.forEach(video => {
    if (video) {
      video.pause();      
      video.style.display = 'none';
    }
    });

  // Ocultar todos los elementos
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = 'none';
    }
  }
  var contBotEspeciales = document.getElementById('conte-botDensitoII')
  contBotEspeciales.style.display='block'

  var botEspecial = document.getElementById('conte-botDensitoII');
  // Obtén todos los botones y guárdalos en un array
  var botones = botEspecial.querySelectorAll('button');    
  // Recorre el array de botones y muestra cada botón
  for (var i = 0; i < botones.length; i++) {
      botones[i].style.display = 'flex';
  }

  // Mostrar el elemento "pre-prensa"
  if (prePrensaElemento) {
    prePrensaElemento.style.display = 'block';
    prePrensaElemento.style.zIndex = '0';

    // Establecer el mismo z-index para linksIniciales
    for (var j = 0; j < linksIniciales.length; j++) {
      var linkInicial = document.getElementById(linksIniciales[j]);
      if (linkInicial) {
        linkInicial.style.zIndex = '1';
      }
    }
  }
  const videos = document.querySelectorAll('.vidTeoria');
    // Reproducir todos los videos simultáneamente
    videos.forEach(video => {
    video.style.display='block'
    video.play();
  });


  linkList.style.display = "none";    
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  } 
}
function abrirDensitometria(elementId){
  var densiitoElemento = document.getElementById('densitometria');  
  var linksIniciales = ['links-inicialesI', 'links-iniciales'];
  var contBotDensito = document.getElementById('contene-12');
  var contImgsDensito = document.getElementById('imgs-densito');
  var videoBackground = document.getElementById('videoBackground');
  // Ocultar todos los elementos
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = 'none';
    }
  } 
  videoBackground.pause();
  videoBackground.style.display = 'none'; // Oculta el video
  // Mostrar el elemento "densitometria"
  if (densiitoElemento) {
    densiitoElemento.style.display = 'block';
    densiitoElemento.style.zIndex = '0';

    var botEspecial = document.getElementById('conte-botDensito');
    // Obtén todos los botones y guárdalos en un array
    var botones = botEspecial.querySelectorAll('button');    
    // Recorre el array de botones y muestra cada botón
    for (var i = 0; i < botones.length; i++) {
        botones[i].style.display = 'flex';
    }


    // Establecer el mismo z-index para linksIniciales
    for (var j = 0; j < linksIniciales.length; j++) {
      var linkInicial = document.getElementById(linksIniciales[j]);
      if (linkInicial) {
        linkInicial.style.zIndex = '1';
      }
    }
  }
 
  contBotDensito.style.display = 'block';
  contImgsDensito.style.display = 'block'; 

    videoElements.forEach(video => {
      if (video) {
        video.style.display = 'none';
        video.pause();      
      }
      });
      const videos = document.querySelectorAll('.vidTeoria');
      // Reproducir todos los videos simultáneamente
          videos.forEach(video => {
            video.style.display='block'
              video.play();
          });      
      linkList.style.display = "none";
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
      }   
}
function muestraVidPrisma(elementId) {
  allContenedores.forEach(contenedor => {
  if (contenedor === 'vidColor') {
    contenedor.style.display = 'none';         
  }  
  });
  
  var contImgsTeoria = document.getElementsByClassName('imgTeoria'); // Obtén elementos por su 
  for (var i = 0; i < contImgsTeoria.length; i++) {
    var teorImage = contImgsTeoria[i]; // Accede al elemento actual
    teorImage.style.display = 'none'; // Oculta el elemento  
  }
  videoElements.forEach(video => {
  if (video.id === 'prisma-vid') {
    video.style.display = 'block';
    video.play();      
  } else {
    video.pause();
    video.style.display = 'none';
  }
  });
  const videos = document.querySelectorAll('.vidTeoria');
  // Detener todos los videos simultáneamente
  videos.forEach(video => {
      video.pause();
      video.style.display='none'
  });
     
  /* if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  } */  
}
function muestraVidColor(elementId){
  allContenedores.forEach(contenedor => {
    if (contenedor === 'vidColor') {
      contenedor.style.display = 'none';         
    }  
    });

  var contImgsTeoria = document.getElementsByClassName('imgTeoria'); // Obtén elementos por su
  for (var i = 0; i < contImgsTeoria.length; i++) {
    var teorImage = contImgsTeoria[i]; // Accede al elemento actual
    teorImage.style.display = 'none'; // Oculta el elemento  
  }
  videoElements.forEach(video => {
  if (video.id === 'color-vid') {
    video.style.display = 'block';
    video.play();      
  } else {
    video.style.display = 'none';
  }
  });
  const videos = document.querySelectorAll('.vidTeoria'); 
  // Reproducir todos los videos simultáneamente
      videos.forEach(video => {
          video.pause();
          video.style.display='none'
      });
  /* if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  } */ 
}
function irContenedorAnterior() {
  const coleccion = document.querySelectorAll('.desbobinador, .desbobinador-I, .uTeñido, .alimentador, .unidProceso, .rebobinador, .contTorrImp');
  var contTrouble = document.getElementById('troubleshooting');
  var linksTemporales = document.getElementById('links-inicialesI');
  var linksTemporalesII = document.getElementById('links-iniciales')
  linksTemporales.style.display = 'none'
  linksTemporalesII.style.display = 'none'

  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);
    elemento.style.display='none'}

  if(contTrouble);{
    contTrouble.style.display = 'none'
  } 
  var previousElementID = idsArray[idsArray.length - 2];
  for (var i = 0; i < idsArray.length; i++) { 
    switch (previousElementID) { 
      case "pantalla-inicial":
        location.reload();;
        idsArray = [];
        break;
      case "pantalla-tintero":
        var botonesInicio = document.getElementById('container01');
        botonesInicio.style.display='block'
        changeButtonStyles('pantalla-tintero');  
      break;
      case "videoElement1-II":
        changeButtonStyles('videoElement1-II');  
      break;          
      case "contImgEntintador":
        showRepuesto('contImgEntintador')
      break; 
      case "contImgDistribuidor":
        showRepuesto ('contImgDistribuidor') 
      break;          
      case "contPortPlaca":
        contIMPlaca.style.display='block'
        showRepuesto('contPortPlaca');
      break;
      case "contPortManta":
        var contBotManta = document.getElementById('container01')
        contBotManta.style.display='block'
        contIMmanta.style.display='block'
        showRepuesto('contPortManta', 'videoTrain03');  
      break;
      case "contImpresor":
        showRepuesto('contImpresor', 'videoTrain01')
      break;
      case "imagen1":
        muestraPerfiles('imagen1')
      break;
      case "imagen2":
        muestraPerfiles('imagen2')
      break; 
      case "imagen3":
        muestraPerfiles('imagen3')
      break;
      case "imagen4":
        muestraPerfiles('imagen4')
      break; 
      case "cont-variable":
        abrirSeccionVariable('cont-variable')
      break; 
      case "cont-plana":
        abrirSeccionPlanas('cont-plana')
      break; 
      case "cont-secador":
        abrirSeccionCurado('cont-secador')
      break;
      case "bateria-entintado-II":
        changeButtonStyles('bateria-entintado-II', 'contene-7')
      break; 
      case "bancada-torre-II":
        changeButtonStyles('bancada-torre-II')
      break; 
      case "conteneMantaut":
        var contIconos = document.getElementById('iconos')
        var contUsers = document.getElementById('contenedor-vertical')
        var contenedorPrincipal = document.getElementById('conteneMantaut');
        var hijosDelContenedor = contenedorPrincipal.children;        
        for (var i = 0; i < hijosDelContenedor.length; i++) {
          var hijo = hijosDelContenedor[i];
          var idDelHijo = hijo.id;          
          // Verificar si el ID del hijo coincide con los IDs deseados
          if (idDelHijo !== 'container8' && idDelHijo !== 'conti-boton') {
            // Ocultar el hijo si su ID no coincide
            hijo.style.display = 'none';
          }
        }
        ElementosMa('conteneMantaut')
        contIconos.style.display = 'none'
        contUsers.style.display = 'none'

      break; 
      case "rotatek-1":
        location.reload();
      break; 
      case "frente":
        muestraTorresI('frente')
      break;  
      case "pantalla-frente":
        muestraTorres('frente')
      break; 
      case "sitema-humedad":
        changeButtonStyles('sitema-humedad');
      break; 
      case "pre-prensa":
        for (var i = 0; i < allContenedores.length; i++) {
          var elemento = document.getElementById(allContenedores[i]); 
          elemento.style.display='none'}
        var contenedorPrincipal = document.getElementById('pre-prensa');
        var hijosDelContenedor = contenedorPrincipal.children;
        contenedorPrincipal.style.display='block'        
        for (var i = 0; i < hijosDelContenedor.length; i++) {
          var hijo = hijosDelContenedor[i];
          var idDelHijo = hijo.id;          
          // Verificar si el ID del hijo coincide con los IDs deseados
          if (idDelHijo) {
            // Ocultar el hijo si su ID no coincide
            hijo.style.display = 'block';
          }
        }
      break; 
      case "densitometria":
        for (var i = 0; i < allContenedores.length; i++) {
          var elemento = document.getElementById(allContenedores[i]); 
          elemento.style.display='none'}

        var contenedorPrincipal = document.getElementById('densitometria');
        var hijosDelContenedor = contenedorPrincipal.children;
        contenedorPrincipal.style.display='block'        
        for (var i = 0; i < hijosDelContenedor.length; i++) {
          var hijo = hijosDelContenedor[i];
          var idDelHijo = hijo.id;          
          // Verificar si el ID del hijo coincide con los IDs deseados
          if (idDelHijo) {
            // Ocultar el hijo si su ID no coincide
            hijo.style.display = 'block';
          }
        }
      break;  
      case "vidColor":
        for (var i = 0; i < allContenedores.length; i++) {
          var elemento = document.getElementById(allContenedores[i]); 
          elemento.style.display='none'}
          videoElements.forEach(vide => {
            if (vide) {
              vide.pause()
              vide.style.display = 'none';
         
            }        
            });          
        var contenedorPrincipal = document.getElementById('pre-prensa');
        var hijosDelContenedor = contenedorPrincipal.children;
        contenedorPrincipal.style.display='block'        
        for (var i = 0; i < hijosDelContenedor.length; i++) {
          var hijo = hijosDelContenedor[i];
          var idDelHijo = hijo.id;          
          // Verificar si el ID del hijo coincide con los IDs deseados
          if (idDelHijo) {
            // Ocultar el hijo si su ID no coincide
            hijo.style.display = 'block';
          }
        }
        var contVidCicodelia = document.getElementById('vidCicodelia')
        contVidCicodelia.style.height = '7px'
      break;
      case "vidColor-II":
      var mostrari = document.getElementById('pre-prensa');
      var videos = document.getElementById('vidColor-II');
      mostrari.style.display='flex'
      videos.style.style='flex'
      videoElements.forEach(vid => {
        if (vid.id === 'color-vid') {
          vid.style.display = 'block';
          vid.currentTime = 0;
          vid.loop = true;                            
          vid.play();      
        } else {
          vid.style.display = 'none';
        }
        });
      break;
      case "mantilla1" :
        muestraAngulos('mantilla1')
      break;
      case "mantilla2" :
        for (var i = 0; i < allContenedores.length; i++) {
          var elemento = document.getElementById(allContenedores[i]); 
            elemento.style.display='none'
          }
        muestraAngulos('mantilla2')
      break;
      case "mantilla3" :
        for (var i = 0; i < allContenedores.length; i++) {
          var elemento = document.getElementById(allContenedores[i]); 
            elemento.style.display='none'
          }
        muestraAngulos('mantilla3')
      break; 
      case 'desbobinador':
        for (var i = 0; i < allContenedores.length; i++) {
          var elemento = document.getElementById(allContenedores[i]); 
          elemento.style.display='none'}              
          // Obtener el elemento padre
          var contenedorPadre = document.getElementById("pantalla-inicial");
          contenedorPadre.style.display='block'
          // Obtener todos los elementos hijos del contenedor padre
          var elementosHijos = contenedorPadre.children;
          // Recorrer los elementos hijos sin usar clases ni 'id'
          for (var i = 0; i < elementosHijos.length; i++) {
          var elementoHijo = elementosHijos[i];
          // Realizar las operaciones que desees con cada elemento hijo aquí
          elementoHijo.style.display='block'         } 
          cierraContenedores('desbobinador')
          contInicial.style.display='block'
          contInicial.style.marginLeft = '128px'
          var botTwin = ['bot-atras32','bot-atras31']
          botTwin.forEach(twinId => {
            var twinElement = document.getElementById(twinId);
            if (twinElement) {
              twinElement.style.display = 'block';
          }
        });        
      break; 
      case 'uTeñido':
      for (var i = 0; i < allContenedores.length; i++) {
      var elemento = document.getElementById(allContenedores[i]); 
      elemento.style.display='none'}
          
      // Obtener el elemento padre
      var contenedorPadre = document.getElementById("pantalla-inicial");
      contenedorPadre.style.display='block'
      // Obtener todos los elementos hijos del contenedor padre
      var elementosHijos = contenedorPadre.children;
      // Recorrer los elementos hijos sin usar clases ni 'id'
      for (var i = 0; i < elementosHijos.length; i++) {
      var elementoHijo = elementosHijos[i];
      // Realizar las operaciones que desees con cada elemento hijo aquí
      elementoHijo.style.display='block'
      }          
      cierraContenedores('uTeñido')
      contInicial.style.display='block'
      contInicial.style.marginLeft = '128px'
      var botTwin = ['bot-atras32','bot-atras31']
      botTwin.forEach(twinId => {
        var twinElement = document.getElementById(twinId);
        if (twinElement) {
          twinElement.style.display = 'block';
        }
      });        
      break;
      case 'alimentador':
        for (var i = 0; i < allContenedores.length; i++) {
          var elemento = document.getElementById(allContenedores[i]); 
          elemento.style.display='none'}
              
          // Obtener el elemento padre
          var contenedorPadre = document.getElementById("pantalla-inicial");
          contenedorPadre.style.display='block'
          // Obtener todos los elementos hijos del contenedor padre
          var elementosHijos = contenedorPadre.children;
          // Recorrer los elementos hijos sin usar clases ni 'id'
          for (var i = 0; i < elementosHijos.length; i++) {
          var elementoHijo = elementosHijos[i];
          // Realizar las operaciones que desees con cada elemento hijo aquí
          elementoHijo.style.display='block'
          }          
          cierraContenedores('alimentador')
          contInicial.style.display='block'
          contInicial.style.marginLeft = '128px'
          var botTwin = ['bot-atras32','bot-atras31']
          botTwin.forEach(twinId => {
            var twinElement = document.getElementById(twinId);
            if (twinElement) {
              twinElement.style.display = 'block';
            }
          });       
      break;
      case 'unidProceso':
        for (var i = 0; i < allContenedores.length; i++) {
          var elemento = document.getElementById(allContenedores[i]); 
          elemento.style.display='none'}
              
          // Obtener el elemento padre
          var contenedorPadre = document.getElementById("pantalla-inicial");
          contenedorPadre.style.display='block'
          // Obtener todos los elementos hijos del contenedor padre
          var elementosHijos = contenedorPadre.children;
          // Recorrer los elementos hijos sin usar clases ni 'id'
          for (var i = 0; i < elementosHijos.length; i++) {
          var elementoHijo = elementosHijos[i];
          // Realizar las operaciones que desees con cada elemento hijo aquí
          elementoHijo.style.display='block'
          }          
          cierraContenedores('unidProceso')
          contInicial.style.display='block'
          contInicial.style.marginLeft = '128px'
          var botTwin = ['bot-atras32','bot-atras31']
          botTwin.forEach(twinId => {
            var twinElement = document.getElementById(twinId);
            if (twinElement) {
              twinElement.style.display = 'block';
            }
          });       
      break;
      case 'rebobinador':
        for (var i = 0; i < allContenedores.length; i++) {
          var elemento = document.getElementById(allContenedores[i]); 
          elemento.style.display='none'}
              
          // Obtener el elemento padre
          var contenedorPadre = document.getElementById("pantalla-inicial");
          contenedorPadre.style.display='block'
          // Obtener todos los elementos hijos del contenedor padre
          var elementosHijos = contenedorPadre.children;
          // Recorrer los elementos hijos sin usar clases ni 'id'
          for (var i = 0; i < elementosHijos.length; i++) {
          var elementoHijo = elementosHijos[i];
          // Realizar las operaciones que desees con cada elemento hijo aquí
          elementoHijo.style.display='block'
          }          
          cierraContenedores('rebobinador')
          contInicial.style.display='block'
          contInicial.style.marginLeft = '128px'
          var botTwin = ['bot-atras32','bot-atras31']
          botTwin.forEach(twinId => {
            var twinElement = document.getElementById(twinId);
            if (twinElement) {
              twinElement.style.display = 'block';
          }
        });       
      break;
      case 'forward':
        muestraLados('forward');
        var contImpresor = document.getElementById('contImpresor');
        contImpresor.style.display = 'block'

        var boton01 = document.getElementById('bot-inic');
        boton01.style.display = 'block'
      break;
      case 'comands':
        muestraLados('comands');
        var contImpresor = document.getElementById('contImpresor');
        contImpresor.style.display = 'block'

        var boton01 = document.getElementById('bot-inic');
        boton01.style.display = 'block'
      break; 
      case 'service':
        muestraLados('service');
        var contImpresor = document.getElementById('contImpresor');
        contImpresor.style.display = 'block'

        var boton01 = document.getElementById('bot-inic');
        boton01.style.display = 'block'
      break;
      case 'back':
        muestraLados('back');
        var contImpresor = document.getElementById('contImpresor');
        contImpresor.style.display = 'block'

        var boton01 = document.getElementById('bot-inic');
        boton01.style.display = 'block'        
      break;                   
    default:
  }}
  var eltoAnterior = idsArray[idsArray.length - 2];
  idsArrayEliminados.push(eltoAnterior);
  console.log('ELIMINADOS',idsArrayEliminados)
  idsArray.pop();  
  console.log(idsArray) 
} 
function irContenedorSiguiente() {
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = 'none';
    }
  }

  var previoElementID = idsArrayEliminados[idsArrayEliminados.length - 2];
  for (var i = 0; i < idsArrayEliminados.length; i++) {
    switch (previoElementID) {
      case "salir":
        location.reload();
        idsArrayEliminados = [];
      break;        
      case "pantalla-tintero":
        var botonesInicio = document.getElementById('container01')                  
        botonesInicio.style.display='block'
        changeButtonStyles('pantalla-tintero');  
      break;
      case "videoElement1-II":
        changeButtonStyles('videoElement1-II');  
      break;          
      case "contImgEntintador":
        showRepuesto('contImgEntintador')
      break; 
      case "contImgDistribuidor":
        showRepuesto ('contImgDistribuidor') 
      break;          
      case "contPortPlaca":
        contIMPlaca.style.display='block'
        showRepuesto('contPortPlaca');
      break;
      case "contPortManta":
        var contBotManta = document.getElementById('container01')
        contBotManta.style.display='block'
        contIMmanta.style.display='block'
        showRepuesto('contPortManta', 'videoTrain03');  
      break;
      case "contImpresor":
        showRepuesto('contImpresor', 'videoTrain01')
      break;
      case "imagen1":
        muestraPerfiles('imagen1')
      break;
      case "imagen2":
        muestraPerfiles('imagen2')
      break; 
      case "imagen3":
        muestraPerfiles('imagen3')
      break;
      case "imagen4":
        muestraPerfiles('imagen4')
      break; 
      case "cont-variable":
        abrirSeccionVariable('cont-variable')
      break; 
      case "cont-plana":
        abrirSeccionPlanas('cont-plana')
      break; 
      case "cont-secador":
        abrirSeccionCurado('cont-secador')
      break;
      case "bateria-entintado-II":
        changeButtonStyles('bateria-entintado-II', 'contene-7')
      break; 
      case "bancada-torre-II":
        changeButtonStyles('bancada-torre-II')
      break; 
      case "conteneMantaut":
        ElementosMa('conteneMantaut')
      break; 
      case "rotatek-1":
        location.reload();
      break; 
      case "frente":
        muestraTorresI('frente')
      break;  
      case "pantalla-frente":
        muestraTorres('frente')
      break; 
      case "sitema-humedad":
        changeButtonStyles('sitema-humedad');
      break; 
      case "pre-prensa":
        var mostrar = document.getElementById('pre-prensa');
        var contImg = document.getElementById('imgs-prepress')
        mostrar.style.display='block'
        contImg.style.style='block'
        var contImgsTeoria = document.getElementsByClassName('imgTeoria'); // Obtén elementos por su
        for (var i = 0; i < contImgsTeoria.length; i++) {
          var teorImage = contImgsTeoria[i]; // Accede al elemento actual
          teorImage.style.display = 'block'; // muestra el elemento  
        } 
        const vidTeoria = document.querySelectorAll('.vidTeoria');
        // Reproducir todos los videos simultáneamente
        vidTeoria.forEach(video => {
          video.style.display='block'
          video.play();
        });                       
      break; 
      case "densitometria":
        var mostraDensit = document.getElementById('densitometria');
        var contDensit = document.getElementById('imgs-densito')
        mostraDensit.style.display='block'
        contDensit.style.style='block'
        var contImgsDensito = document.getElementsByClassName('imgDensito'); // Obtén elementos por su
        for (var i = 0; i < contImgsDensito.length; i++) {
          var teorImage = contImgsDensito[i]; // Accede al elemento actual
          teorImage.style.display = 'block'; // muestra el elemento  
        }            
      break;  
      case "vidColor":
      var mostrario = document.getElementById('pre-prensa');
      var videos = document.getElementById('vidColor');
      mostrario.style.display='flex'
      videos.style.style='flex'
      videoElements.forEach(vide => {
        if (vide.id === 'prisma-vid') {
          vide.style.display = 'block';
          vide.currentTime = 0;
          vide.loop = true;               
          vide.play();      
        } else {
          vide.style.display = 'none';
        }
        });
      break; 
      case "vidColor-II":
      var mostrari = document.getElementById('pre-prensa');
      var videos = document.getElementById('vidColor-II');
      mostrari.style.display='flex'
      videos.style.style='flex'
      videoElements.forEach(vid => {
        if (vid.id === 'color-vid') {
          vid.style.display = 'block';
          vid.currentTime = 0;
          vid.loop = true;                            
          vid.play();      
        } else {
          vid.style.display = 'none';
        }
        });
      break; 
      case "mantilla1" :
        muestraAngulos('mantilla1')
      break;
      case "mantilla2" :
        for (var i = 0; i < allContenedores.length; i++) {
          var elemento = document.getElementById(allContenedores[i]); 
            elemento.style.display='none'
          }
        muestraAngulos('mantilla2')
      break;
      case "mantilla3" :
        for (var i = 0; i < allContenedores.length; i++) {
          var elemento = document.getElementById(allContenedores[i]); 
            elemento.style.display='none'
          }
        muestraAngulos('mantilla3')
      break; 
      case "mantilla4" :
        for (var i = 0; i < allContenedores.length; i++) {
          var elemento = document.getElementById(allContenedores[i]); 
            elemento.style.display='none'
          }
        muestraAngulos('mantilla4')
      break;
      case 'forward':
        muestraLados('forward');
        var contImpresor = document.getElementById('contImpresor');
        contImpresor.style.display = 'block'

        var boton01 = document.getElementById('bot-inic');
        boton01.style.display = 'block'
      break;
      case 'comands':
        muestraLados('comands');
        var contImpresor = document.getElementById('contImpresor');
        contImpresor.style.display = 'block'

        var boton01 = document.getElementById('bot-inic');
        boton01.style.display = 'block'
      break; 
      case 'service':
        muestraLados('service');
        var contImpresor = document.getElementById('contImpresor');
        contImpresor.style.display = 'block'

        var boton01 = document.getElementById('bot-inic');
        boton01.style.display = 'block'
      break;
      case 'back':
        muestraLados('back');
        var contImpresor = document.getElementById('contImpresor');
        contImpresor.style.display = 'block'

        var boton01 = document.getElementById('bot-inic');
        boton01.style.display = 'block'        
      break;                   
    default:
    }
  }  
  idsArrayEliminados.pop();  
  console.log('ELIMINADOS',idsArrayEliminados)
}
function listaEntrenamientosII() {
  // Crear un array de IDs de enlaces
  var enlacesIDs = ['vinc1', 'vinc2', 'vinc3', 'vinc4'];
  // Recorrer el array y cambiar el color de los enlaces
  enlacesIDs.forEach(function (id) {
  var enlace = document.getElementById(id);
  if (enlace) {
    enlace.style.color = 'blue';
  }
  });
  var elements = ['linksMA','linkLis','contImgEntrenos','largoImpresion'];
  var elementos = ['canvasContainer2','canvasContainer3','canvasContainer4','canvasContainer5','contChecks','contImagGraf','contImagNeg'];
  var alMenosUnoVisible = elementos.some(function(id) {
    var elemento = document.getElementById(id);
    var estilo = window.getComputedStyle(elemento);
    return estilo.display !== 'none';
  });
  if (alMenosUnoVisible) {
    console.log(arrayPosicionnador);
  } else {
    listaEntrenamientos();
  }
  var todosOcultos = elements.every(function (id) {
    var elemento = document.getElementById(id);
    var estilo = window.getComputedStyle(elemento);
    return estilo.display === 'none';
  });
  if (todosOcultos) {
    // Mostrar los elementos si todos están ocultos
    elements.forEach(function (id) {
      var elemento = document.getElementById(id);
      elemento.style.display = 'block'; // O el valor apropiado
    });
  }
}   
function listaEntrenamientos(){
  var videoBackground = document.getElementById('videoBackground');
  var contTraining = document.getElementById('largoImpresion')
  var contBotMA = document.getElementById('conti-boton');
  var contLinksMA = document.getElementById('linksMA')

  videoBackground.pause();
  videoBackground.style.display = 'none';  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]); 
    if(elemento.id !== 'conteneMantaut'){
      elemento.style.display='none'
    }else{
      elemento.style.display='block'
    }}
  contTraining.style.display='block'
  contTraining.style.top='73px'
  contLinksMA.style.display='block'
  contLinksMA.style.marginLeft='427px'
  contLinksMA.style.marginTop='-16px'
  contBotMA.style.marginTop='45px'
}
function toggleFullScreen(element) {
  if (!document.fullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari y Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari y Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  }
}
function imagenesPasoApaso(idElto, id) {
  var contImgEntrenos = document.getElementById('contImgEntrenos'); 
  var botOrange = document.getElementById(id)

  switch (id) {
    case 'vinc1':
      botOrange.style.color = 'orange';
      // Cambiar otros enlaces a azul
      var botones = document.getElementsByClassName('colorClick');
      for (var i = 0; i < botones.length; i++) {
      if (botones[i].id !== id) {
      botones[i].style.color = 'blue';
      }}
    break; 
    case 'vinc2':
      botOrange.style.color = 'orange';
      // Cambiar otros enlaces a azul
      var botones = document.getElementsByClassName('colorClick');
      for (var i = 0; i < botones.length; i++) {
      if (botones[i].id !== id) {
      botones[i].style.color = 'blue';
      }}
     break;
     case 'vinc3':
      botOrange.style.color = 'orange';
      // Cambiar otros enlaces a azul
      var botones = document.getElementsByClassName('colorClick');
      for (var i = 0; i < botones.length; i++) {
      if (botones[i].id !== id) {
      botones[i].style.color = 'blue';
      }}
     break; 
     case 'vinc4':
      botOrange.style.color = 'orange';
      // Cambiar otros enlaces a azul
      var botones = document.getElementsByClassName('colorClick');
      for (var i = 0; i < botones.length; i++) {
      if (botones[i].id !== id) {
      botones[i].style.color = 'blue';
      }}
     break;          
    default:
  }  


 


  contImgEntrenos.style.display = 'flex';
  imagPasoApaso.forEach(imag => {
    if (imag.id == idElto) {
      imag.style.display = 'block';
    } else {
      imag.style.display = 'none';
    }
  });
}
function lubricacion(){
  var contLubrica = document.getElementById('lubricacion');
  contLubrica.style.display = 'block'
  var contTorre = document.getElementById('rotatek-1');

  if (contTorre.style.display === 'none'){
    showButtonsMAconRetrasoDesb()
  }
}  
function showButtonsMAconRetrasoDesb() {
  var botones = document.querySelectorAll('.butt-mautonomo-desb'); // Selecciona todos los botones
  function mostrarBotonConRetrasoDesb(i) {
    if (i < botones.length) {
      var boton = botones[i];
      boton.style.display = 'inline-block';
      setTimeout(function() {
        mostrarBotonConRetrasoDesb(i + 1);
      }, 150); // 100 milisegundos de retraso entre botones
    }
  }
  mostrarBotonConRetrasoDesb(0); // Comienza desde el primer botón
}
function LubricaDesbobinador(){
   showLablsLubricacion();
}
function showLablsLubricacion() {
  var contLabelsLub = document.getElementById('frec-lubrica')
  
  var botones = document.querySelectorAll('.labl-lub'); // Selecciona todos los botones
  function mostrarLabelConRetraso(i) {
    if (i < botones.length) {
      var boton = botones[i];
      boton.style.display = 'inline-block';
      setTimeout(function() {
        mostrarLabelConRetraso(i + 1);
      }, 150); // 100 milisegundos de retraso entre botones
    }
  }
  mostrarLabelConRetraso(0); // Comienza desde el primer botón
}
function lubricaDiario(){
  var conteLub = document.getElementById('aceitera')
  var contLabel = document.getElementById('aceite')
  var conteLabels = document.getElementById('indicaciones')
  var vertLine = document.getElementById('vertcal-line')
  videoElements.forEach(video => {
  if (video.id === 'lubri-vid') {
    video.style.display = 'block';
    video.play();      
  } else {
    video.style.display = 'none';
  }})
  conteLub.style.display = 'flex'
  contLabel.style.display = 'flex'
  conteLabels.style.display = 'flex'
  vertLine.style.display = 'flex'

  var contenedorPrincipal = document.getElementById('lubri-II');
  contenedorPrincipal.style.display = 'flex'
  var hijosDelContenedor = contenedorPrincipal.children;
  for (var i = 0; i < hijosDelContenedor.length; i++) {
    var hijo = hijosDelContenedor[i];  
    hijo.style.display = 'flex';
  }
  var contenedorPrincipalII = document.getElementById('indicaciones-II');
  contenedorPrincipalII.style.display = 'block'
  var hijosDelContenedorII = contenedorPrincipalII.children;
  for (var i = 0; i < hijosDelContenedorII.length; i++) {
    var hijo = hijosDelContenedorII[i];  
    hijo.style.display = 'block';
  }
}
function lubricaSemanal(){ 
  var conteLub = document.getElementById('aceitera')
  var contLabel = document.getElementById('aceite')
  var conteLabels = document.getElementById('indicaciones')
  var vertLine = document.getElementById('vertcal-line')

  videoElements.forEach(video => {
    if (video) {
      video.style.display = 'none';
      video.play();      
    }})

  conteLub.style.display = 'none'
  contLabel.style.display = 'none'
  conteLabels.style.display = 'none'
  vertLine.style.display = 'none'

  var contenedorPrincipal = document.getElementById('lubri-II');
  contenedorPrincipal.style.display = 'none'
  var hijosDelContenedor = contenedorPrincipal.children;
  for (var i = 0; i < hijosDelContenedor.length; i++) {
    var hijo = hijosDelContenedor[i];  
    hijo.style.display = 'none';
  }
  var contenedorPrincipalII = document.getElementById('indicaciones-II');
  contenedorPrincipalII.style.display = 'none'
  var hijosDelContenedorII = contenedorPrincipalII.children;
  for (var i = 0; i < hijosDelContenedorII.length; i++) {
    var hijo = hijosDelContenedorII[i];  
    hijo.style.display = 'none';
  }
}
function resultadosMA(){
  var iconosElement = document.getElementById('iconos');    
  var title = document.getElementById('title-interfaz');
  var contButtons = document.getElementById('container99');
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = 'none';
    }
  } 
  video.pause();
  video.style.display = 'none'  
  //// AUMENTA TAMANO SECUENCIAL DE IMAGENES /////////////////////////////////////////////////////////////////////////
  const iconos = document.querySelectorAll('.icono-user'); // Selecciona todos los elementos con la clase .icono-user
  iconos.forEach((icono, index) => {
    // Aplica la función de aumentarTamaño con un retraso entre cada imagen
    setTimeout(() => {
      aumentarTamaño(icono, 1.8, 0.5);
    }, index * 0.2 * 100); // Aumenta cada imagen con un retraso de 0.2 segundos
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Verifica si el elemento está visible
  var estilos = window.getComputedStyle(lineasGrid);
  var display = estilos.getPropertyValue('display');
  if (display === 'none') {
    contSecundario = document.getElementById('conte-secundario')
    contSecundario.style.display = 'flex'
    /* contUsuarios.style.display = 'block' */
    if (iconosElement.style.display === 'none' || iconosElement.style.display === '') {
      // Si está oculto o no tiene un estilo "display" (por defecto), mostrarlo
      iconosElement.style.display = 'block';
    } else {
      // Si está visible, ocultarlo
      iconosElement.style.display = 'none';
    }
    title.style.display = 'flex'
    contButtons.style.display = 'flex' 
  } else {
    /* location.reload(); */
    graficosAutomaticos('canvasContainer4');
  }

}
function aumentarTamaño(element, factor, tiempo) {
  const originalWidth = element.clientWidth; // Ancho original del elemento
  const originalHeight = element.clientHeight; // Alto original del elemento

  element.style.transition = `transform ${tiempo}s`; // Aplica una transición CSS para la animación
  element.style.transform = `scale(${factor})`; // Escala el elemento al tamaño aumentado

  // Después de un tiempo, quita la transición y restaura el tamaño original
  setTimeout(() => {
    element.style.transition = 'none';
    element.style.transform = 'scale(1)';
  }, tiempo * 500);
}
function deslizaMosaico(){

  //setTimeout(function() {
    deslizaMosaicoII('icon-carlos', 'troubleshoot');  
    // Esperar 400 milisegundos y ejecutar la tercera función
    setTimeout(function() {
      deslizaMosaicoII('icon-andres', 'def1');  
      // Esperar 400 milisegundos y ejecutar la tercera función
      setTimeout(function() {
        deslizaMosaicoII('icon-jorge', 'def2');  
        // Esperar 400 milisegundos y ejecutar la cuarta función
        setTimeout(function() {
          deslizaMosaicoII('icon-jesus', 'adtBut');  
          // Esperar 400 milisegundos y ejecutar la quinta función
          setTimeout(function() {
            deslizaMosaicoII('icon-sandra', 'fua1');  
            // Esperar 400 milisegundos y ejecutar la sexta función
            setTimeout(function() {
              deslizaMosaicoII('icon-mario', 'lup');
              setTimeout(function() {
              deslizaMosaicoII('icon-ana', 'lup');
            }, 300);
          }, 300);
        }, 300);
      }, 300);
    }, 300);
    }, 300);
  //}, 50); 
}
function resultadosEmpleado(idEmpleado, functionExe) {
  var colors = ['rgb(255, 255, 0)', 'rgb(0, 255, 0)', 'orangered']; // Colores en formato RGB
  var contUserScroll = document.getElementById('contenedor-vertical');
  var contUserElementsI = document.getElementsByClassName('cont-userI'); 
  var contUserArrayI = Array.from(contUserElementsI);  
  var contUserElements = document.getElementsByClassName('cont-user'); 
  var tituloMA = document.getElementById('title-interfaz');
  var colorIndex = 0; // Índice del color actual
  lineasGrid.style.display = 'block';
  tituloMA.style.display = 'flex';


  for (var i = 0; i < contUserElements.length; i++) {
    var element = contUserElements[i];
    if (element.id === idEmpleado) {
      element.style.display = 'flex';
      element.style.top = '-157px';

      // Accede al label dentro del div
      var label = element.querySelector('label');
      if (label) {
        setInterval(function () {
          label.style.color = colors[colorIndex]; // Cambia el color del texto
          colorIndex = (colorIndex + 1) % colors.length; // Alterna entre los colores
        }, 200); // Cambia el color cada 0.2 segundos (200 milisegundos)
      }
    } else {
      element.style.display = 'none';
    }
  }

  if (contUserScroll) {
    contUserScroll.style.display = 'flex';
  }

  contUserArrayI.forEach(element => {
    if (element.id === idEmpleado) {
      element.style.background = 'green';
      (function (element) {
        setTimeout(function () {
          element.style.backgroundColor = ''; // Vacío para volver al color normal
        }, 200); // 0.2 segundos (200 milisegundos)
      })(element); // Pasa el elemento actual como argumento a la función anónima
    }
    
  });

  /*var contUserElements = document.getElementsByClassName('cont-userI');
  for (var i = 0; i < contUserElements.length; i++) {
    var element = contUserElements[i];
    element.style.backgroundColor = 'green';
    (function (currentElement) {
      setTimeout(function () {
        currentElement.style.backgroundColor = ''; // Vacío para volver al color normal
      }, 200); // 0.2 segundos (200 milisegundos)
    })(element); // Pasa el elemento actual como argumento a la función anónima
  }*/


  switch (functionExe) {
    case 'updateAna':
      updateAna();
      break;
    case 'updateMario':
      updateMario();
      break;
    case 'updateSandra':
      updateSandra();
      break;
    case 'updateJesus':
      updateJesus();
      break;
    case 'updateJorge':
      updateJorge();
      break;
    case 'updateAndres':
      updateAndres();
      break;
    case 'updateCarlos':
      updateCarlos();
      break;
    default:
      // Lógica para un caso predeterminado si es necesario
      break;
  }
}
function graficosAutomaticos(idGrafico){

  for (var i = 0; i < idsMA.length; i++) {
    var elto = idsMA[i];
    var elemento = document.getElementById(elto);
    
    if (elto === idGrafico) {
      elemento.style.display = 'flex';      
    }
  }
}
function updateAna() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4');
  },500); // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8');
  }, 700); // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9');
  }, 700); // 0.3 segundos (300 ms + 300 ms)

  var nuevosDatos = [/* Nuevos valores de datos */ 0,70,30,70,50,90];
  // Actualiza los datos del gráfico
  chart7.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7.update();
  ///////////////////////////////////////////////////////////////////
  var nuevosDatosI = [/* Nuevos valores de datos */ 55,5,95,30,10,10];
  // Actualiza los datos del gráfico
  chart8.data.datasets[0].data = nuevosDatosI;
  // Actualiza el gráfico
  chart8.update();
  //////////////////////////////////////////////////////////////////
  var nuevosDatosII = [/* Nuevos valores de datos */ 30,50,60,77,20,8];
  // Actualiza los datos del gráfico
  chart9.data.datasets[0].data = nuevosDatosII;
  // Actualiza el gráfico
  chart9.update(); 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 5,17,8,30,44,10];
  // Actualiza los datos del gráfico
  chart10.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10.update();
    //////////////////////////////////////////////////////////////////
  var nuevosDatosIIII = [/* Nuevos valores de datos */ 11,50,20,80,10,100];
  // Actualiza los datos del gráfico
  chart11.data.datasets[0].data = nuevosDatosIIII;
  // Actualiza el gráfico
  chart11.update(); 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 5,17,33,45,51,57,67,99];
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update(); 

}
function updateMario() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4');
  },500); // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8');
  }, 700); // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 100,20,70,10,80,90];
  // Actualiza los datos del gráfico
  chart7.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7.update();
  ///////////////////////////////////////////////////////////////////
  var nuevosDatosI = [/* Nuevos valores de datos */ 30,25,90,110,50,77];
  // Actualiza los datos del gráfico
  chart8.data.datasets[0].data = nuevosDatosI;
  // Actualiza el gráfico
  chart8.update();
  //////////////////////////////////////////////////////////////////
  var nuevosDatosII = [/* Nuevos valores de datos */ 100,90,10,30,70,10];
  // Actualiza los datos del gráfico
  chart9.data.datasets[0].data = nuevosDatosII;
  // Actualiza el gráfico
  chart9.update(); 
    //////////////////////////////////////////////////////////////////
    var nuevosDatosIII = [/* Nuevos valores de datos */ 99,11,70,47,17,80];
    // Actualiza los datos del gráfico
    chart10.data.datasets[0].data = nuevosDatosIII;
    // Actualiza el gráfico
    chart10.update();
      //////////////////////////////////////////////////////////////////
  var nuevosDatosIIII = [/* Nuevos valores de datos */ 10,80,50,20,90,40];
  // Actualiza los datos del gráfico
  chart11.data.datasets[0].data = nuevosDatosIIII;
  // Actualiza el gráfico
  chart11.update(); 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 55,67,73,70,65,80,80,91];
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update(); 
}
function updateSandra() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4');
  },500); // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8');
  }, 700); // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
 var nuevosDatos = [/* Nuevos valores de datos */ 33,20,100,50,80,10];
 // Actualiza los datos del gráfico
 chart7.data.datasets[0].data = nuevosDatos;
 // Actualiza el gráfico
 chart7.update();
 ///////////////////////////////////////////////////////////////////
 var nuevosDatosI = [/* Nuevos valores de datos */ 30,75,20,100,50,17];
 // Actualiza los datos del gráfico
 chart8.data.datasets[0].data = nuevosDatosI;
 // Actualiza el gráfico
 chart8.update();
 //////////////////////////////////////////////////////////////////
 var nuevosDatosII = [/* Nuevos valores de datos */ 33,50,30,90,100,5];
 // Actualiza los datos del gráfico
 chart9.data.datasets[0].data = nuevosDatosII;
 // Actualiza el gráfico
 chart9.update(); 
 //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 9,5,70,97,37,60];
  // Actualiza los datos del gráfico
  chart10.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10.update();
  //////////////////////////////////////////////////////////////////
 var nuevosDatosIIII = [/* Nuevos valores de datos */ 30,40,250,600,45,800];
 // Actualiza los datos del gráfico
 chart11.data.datasets[0].data = nuevosDatosIIII;
 // Actualiza el gráfico
 chart11.update(); 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 50,37,33,17,51,77,67,70];
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update();  
}
function updateJesus() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4');
  },500); // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8');
  }, 700); // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 10,100,10,20,50,90];
  // Actualiza los datos del gráfico
  chart7.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7.update();  
  ///////////////////////////////////////////////////////////////////
 var nuevosDatosI = [/* Nuevos valores de datos */ 100,50,10,100,50,17];
 // Actualiza los datos del gráfico
 chart8.data.datasets[0].data = nuevosDatosI;
 // Actualiza el gráfico
 chart8.update();
 //////////////////////////////////////////////////////////////////
 var nuevosDatosII = [/* Nuevos valores de datos */ 10,100,50,30,10,90];
 // Actualiza los datos del gráfico
 chart9.data.datasets[0].data = nuevosDatosII;
 // Actualiza el gráfico
 chart9.update(); 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 9,90,70,47,87,10];
  // Actualiza los datos del gráfico
  chart10.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10.update();
    //////////////////////////////////////////////////////////////////
 var nuevosDatosIIII = [/* Nuevos valores de datos */ 100,8,50,70,30,10];
 // Actualiza los datos del gráfico
 chart11.data.datasets[0].data = nuevosDatosIIII;
 // Actualiza el gráfico
 chart11.update();
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 33,37,33,77,45,77,80,87];
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update();   
}
function updateJorge() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4');
  },500); // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8');
  }, 700); // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 10,20,50,10,10,5];
 // Actualiza los datos del gráfico
 chart7.data.datasets[0].data = nuevosDatos;
 // Actualiza el gráfico
 chart7.update();
 ///////////////////////////////////////////////////////////////////
 var nuevosDatosI = [/* Nuevos valores de datos */ 77,33,44,66,55,17];
 // Actualiza los datos del gráfico
 chart8.data.datasets[0].data = nuevosDatosI;
 // Actualiza el gráfico
 chart8.update();
 //////////////////////////////////////////////////////////////////
 var nuevosDatosII = [/* Nuevos valores de datos */ 50,5,5,10,100,77];
 // Actualiza los datos del gráfico
 chart9.data.datasets[0].data = nuevosDatosII;
 // Actualiza el gráfico
 chart9.update(); 
   //////////////////////////////////////////////////////////////////
   var nuevosDatosIII = [/* Nuevos valores de datos */ 55,17,77,100,47,7];
   // Actualiza los datos del gráfico
   chart10.data.datasets[0].data = nuevosDatosIII;
   // Actualiza el gráfico
   chart10.update();
     //////////////////////////////////////////////////////////////////
 var nuevosDatosIIII = [/* Nuevos valores de datos */ 44,99,17,77,10,5];
 // Actualiza los datos del gráfico
 chart11.data.datasets[0].data = nuevosDatosIIII;
 // Actualiza el gráfico
 chart11.update(); 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 100,37,55,77,77,77,81,99];
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update();  
}
function updateAndres() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4');
  },500); // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8');
  }, 700); // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 0,20,10,0,0,5];
 // Actualiza los datos del gráfico
 chart7.data.datasets[0].data = nuevosDatos;
 // Actualiza el gráfico
 chart7.update();
 ///////////////////////////////////////////////////////////////////
 var nuevosDatosI = [/* Nuevos valores de datos */ 7,3,4,6,5,7];
 // Actualiza los datos del gráfico
 chart8.data.datasets[0].data = nuevosDatosI;
 // Actualiza el gráfico
 chart8.update();
 //////////////////////////////////////////////////////////////////
 var nuevosDatosII = [/* Nuevos valores de datos */ 5,15,55,10,100,77];
 // Actualiza los datos del gráfico
 chart9.data.datasets[0].data = nuevosDatosII;
 // Actualiza el gráfico
 chart9.update(); 
   //////////////////////////////////////////////////////////////////
   var nuevosDatosIII = [/* Nuevos valores de datos */ 0,17,37,50,97,27];
   // Actualiza los datos del gráfico
   chart10.data.datasets[0].data = nuevosDatosIII;
   // Actualiza el gráfico
   chart10.update();
     //////////////////////////////////////////////////////////////////
 var nuevosDatosIIII = [/* Nuevos valores de datos */ 5,29,17,47,3,19];
 // Actualiza los datos del gráfico
 chart11.data.datasets[0].data = nuevosDatosIIII;
 // Actualiza el gráfico
 chart11.update();
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 77,37,55,41,33,77,50,60];
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update();  
}
function updateCarlos() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4');
  },500); // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8');
  }, 700); // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9');
  }, 700); // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 17,99,44,0,7,5];
 // Actualiza los datos del gráfico
 chart7.data.datasets[0].data = nuevosDatos;
 // Actualiza el gráfico
 chart7.update();
 ///////////////////////////////////////////////////////////////////
 var nuevosDatosI = [/* Nuevos valores de datos */ 27,33,84,6,15,97];
 // Actualiza los datos del gráfico
 chart8.data.datasets[0].data = nuevosDatosI;
 // Actualiza el gráfico
 chart8.update();
 //////////////////////////////////////////////////////////////////
 var nuevosDatosII = [/* Nuevos valores de datos */ 15,5,55,90,100,17];
 // Actualiza los datos del gráfico
 chart9.data.datasets[0].data = nuevosDatosII;
 // Actualiza el gráfico
 chart9.update(); 
   //////////////////////////////////////////////////////////////////
   var nuevosDatosIII = [/* Nuevos valores de datos */ 20,97,27,80,7,77];
   // Actualiza los datos del gráfico
   chart10.data.datasets[0].data = nuevosDatosIII;
   // Actualiza el gráfico
   chart10.update();
     //////////////////////////////////////////////////////////////////
 var nuevosDatosIIII = [/* Nuevos valores de datos */ 50,91,17,77,33,89];
 // Actualiza los datos del gráfico
 chart11.data.datasets[0].data = nuevosDatosIIII;
 // Actualiza el gráfico
 chart11.update(); 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 17,37,22,30,5,60,77,80];
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update();  
}
function deslizaMosaicoII(idElement) {
  var contLinkMant = document.getElementById('linksMA');
  var elementoAnterior = null;
  var elementoActual = null;

  if (contLinkMant !== null && contImgEntrenos !== null) {
    contLinkMant.style.display = 'none';
    contImgEntrenos.style.display = 'none';
  }

  // Verificar si el elemento ya está en el array
  if (!arrayPosicionnador.includes(idElement)) {
    arrayPosicionnador.push(idElement);
  }

  var contenedor = document.getElementById(idElement);
  
  contenedor.style.display = 'flex';
  contenedor.style.left = '257px';

  var inicio = 1100;
  var velocidad = 500;
  var duracion = Math.abs(destino - inicio) / velocidad * 100;
  var inicioTiempo = null;

  function animar(tiempo) {
    if (!inicioTiempo) inicioTiempo = tiempo;
    var progreso = (tiempo - inicioTiempo) / duracion;
    var izquierda = inicio + progreso * (destino - inicio);
    if (progreso < 1) {
      contenedor.style.left = izquierda + 'px';
      requestAnimationFrame(animar);
    } else {
      contenedor.style.left = destino + 'px';
    }
  }
  requestAnimationFrame(animar);

  for (var i = 1; i < arrayPosicionnador.length; i++) {
    var elementoActual = document.getElementById(arrayPosicionnador[i]);
    var elementoAnterior = document.getElementById(arrayPosicionnador[i - 1]);

    if (elementoActual && elementoAnterior) {
      var estiloAnterior = window.getComputedStyle(elementoAnterior);
      var posicionAnterior = parseFloat(estiloAnterior.getPropertyValue('left'));
      var anchoAnterior = parseFloat(estiloAnterior.getPropertyValue('width'));

      destino = posicionAnterior + anchoAnterior;
    }
  }

}
function muestraOperacion(){
  var franjaGris = document.getElementById('franja-gris');
  var franjaBlanca = document.getElementById('franja-Blanca');
  var pantaInicial = document.getElementById('pantalla-inicial');
  var links = document.getElementById('links-iniciales');
  var linksI = document.getElementById('links-inicialesI');
  franjaBlanca.style.display = 'none'
  franjaGris.style.display = 'none'
  contTitulo.style.display = 'none'  
  videoII.pause();
  videoII.style.display = 'none'
  video.play();
  video.style.display = 'flex'

  pantaInicial.style.display = 'flex'
  contInicial.style.display = 'flex'
  links.style.display = 'flex'
  linksI.style.display = 'flex'
}  

// Obtén todas las imágenes con la clase "aumentar"
const imagenesAumentar = document.querySelectorAll('img.aumentar');
// Agrega un evento click a cada imagen con la clase "aumentar"
imagenesAumentar.forEach(image => {
  image.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      if (image.requestFullscreen) {
        image.requestFullscreen();
      } else if (image.mozRequestFullScreen) { // Firefox
        image.mozRequestFullScreen();
      } else if (image.webkitRequestFullscreen) { // Chrome, Safari y Opera
        image.webkitRequestFullscreen();
      } else if (image.msRequestFullscreen) { // IE/Edge
        image.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari y Opera
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

/// LOGICA PARA CAMBIO DE COLOR EN BOTONES ALINICIO 
/*document.addEventListener('DOMContentLoaded', () => {
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
})*/
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
var chart3 = new Chart(miCanvas2, {
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
var chart4 = new Chart(miCanvas3, {
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
var chart5 = new Chart(miCanvas4, {
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
var chart6 = new Chart(miCanvas5, {
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
// BARRAS
var chart7 = new Chart(miCanvas6, { 
  type: 'bar',
  data: {
      labels: ['DEFECTOS IDENTIFICADOS', 'DEFECTOS CORREGIDOS', 'TIPO 1', 'TIPO 2'],
      datasets: [
          {
              label: 'Participación en M.A',
              backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(128,128,128)', 'rgb(255, 255, 0)'],
              data: [57, 88, 62, 33]
          }
      ]
  },
  options: {
      scales: {
          x: {
              grid: {
                  display: false
              },
              ticks: {
                  color: 'rgb(255,255,255)',
                  font: {
                      size: 9
                  }
              }
          },
          y: {
              grid: {
                  display: false
              },
              ticks: {
                  color: 'rgb(255,255,255)',
                  font: {
                      size: 10
                  },
                  beginAtZero: true
              }
          }
      },
      indexAxis: 'x',
      plugins: {
          legend: {
              display: false
          },
          title: {  // Agregar un título al gráfico
              display: true,  // Mostrar el título
              text: 'Participacion semanal',  // Texto del título
              font: {
                  size: 16  // Tamaño del texto del título
              }
          }
      }
  }
});
// BARRAS VERTICALES
var chart8 = new Chart(miCanvas7, {
  type: 'bar',
  data: {
    labels: ['Propuestas', 'Ejecutadas','Entrenadas'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)'],
        data: [17, 9,27]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Lección de un punto',
        font: {
          size: 16
        }
      }
    }
  }
});
var chart9 = new Chart(miCanvas8, {
  type: 'line',
  data: {
    labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas','Transicion'],
    datasets: [
      {
        label: 'Participación en M.A',
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: ['rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)'],
        borderWidth: 1,        
        data: [17, 9,27,55,19,33]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Areas De Dificil Acceso',
        font: {
          size: 16
        }
      }
    }
  }
});
var chart10 = new Chart(miCanvas9, {
  type: 'doughnut',
  data: {
    labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)','rgb(255,255,0)','rgb(255,0,0)','rgb(0,0,255)'],
        data: [17, 9,27,55,19,33]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Ayudas De Trabajo',
        font: {
          size: 16
        }
      }
    }
  }
});
var chart11 = new Chart(miCanvas10, {
  type: 'pie',
  data: {
    labels: ['LUP', 'DEF 1','DEF 2','ADA','ADT'],
    datasets: [
      {
        label: 'Participación en M.A',
        backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','#d6919a','rgb(255,255,0)','rgb(128,128,128)','rgb(0,255,255)'],
        data: [7, 19,17,37,9,77]
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Ejecución ',
        font: {
          size: 16
        }
      }
    }
  }
});
var chart12 = new Chart(miCanvas11, {
  type: 'line',
  data: {
    labels: ['S1','S2','S3','S4','S5','S6','S7','S8'],
    datasets: [
      {
        label: 'Participación en M.A',
        borderColor: 'rgb(255,165,0)', 
        borderWidth: 1,
        pointRadius: 0,                       
        /* backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','#d6919a','rgb(255,255,0)','rgb(128,128,128)','rgb(255,255,0)','rgb(0,0,255)','rgb(177,0,255)'], */
        /* data: [7, 19, 27, 37, 59, 77, 81, 99] */
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 9
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(255,255,255)',
          font: {
            size: 10
          },
          beginAtZero: true
        }
      }
    },
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Tendencia ',
        font: {
          size: 16
        }
      }
    }
  }
});

// Aumentar el grosor de las barras
/* chart8.options.scales.x.barThickness = 100; // Ajusta el valor a un grosor mayor */
/* //////////////////////////////////AUMENTO Y MOVIMIENTO IMAGENES ///////////////////////////////////////////// */
const zoomableImages = document.querySelectorAll('.image-trainings');
const sensitivity = 5; 
zoomableImages.forEach((zoomableImage) => {
  zoomableImage.addEventListener('mouseenter', () => {
    zoomableImage.style.transition = 'transform 0.1s ease, filter 0.1s ease';
  });
  zoomableImage.addEventListener('mousemove', (e) => {
    const x = (zoomableImage.clientWidth / 2 - e.clientX + zoomableImage.getBoundingClientRect().left) / sensitivity;
    const y = (zoomableImage.clientHeight / 2 - e.clientY + zoomableImage.getBoundingClientRect().top) / sensitivity;

    zoomableImage.style.transform = `translate(${x}px, ${y}px) scale(1.5)`;
  });
  zoomableImage.addEventListener('mouseleave', () => {
    zoomableImage.style.transition = 'transform 0.1s ease';
    zoomableImage.style.transform = 'translate(0, 0) scale(1)';
  });
});
/* /////////////////////////////////////////////VINCULOS INICIALES//////////////////////////////////////////// */
textToColor.addEventListener("mouseover", () => {
    clearTimeout(hideTimeout);
    hoverTimeout = setTimeout(() => {
      linkList.style.display = "block";
      line.style.width = textToColor.offsetWidth + "px";
      linkListI.style.display = "none";
    }, 7);
});
linkList.addEventListener("mouseover", () => {
    clearTimeout(hideTimeout);
    linkListI.style.display = 'none'
});
textToColor.addEventListener("mouseout", () => {
    clearTimeout(hoverTimeout);
    hideTimeout = setTimeout(() => {
      textToColor.style.color = "white";
      linkList.style.display = "none";
      line.style.width = "0";
    }, 7);
});
linkList.addEventListener("mouseout", () => {
    hideTimeout = setTimeout(() => {
      textToColor.style.color = "white";
      linkList.style.display = "none";
      line.style.width = "0";
    }, 1);
});
textToColorI.addEventListener("mouseover", () => {
  clearTimeout(hideTimeout);
  hoverTimeout = setTimeout(() => {
    linkListI.style.display = "block";
    lineI.style.width = textToColorI.offsetWidth + "px"; // desde aqui se llevan las variables a que se lleven los demas estados de las funciones
  }, 7);
});
linkListI.addEventListener("mouseover", () => {
  clearTimeout(hideTimeout);
});
textToColorI.addEventListener("mouseout", () => {
  clearTimeout(hoverTimeout);
  hideTimeout = setTimeout(() => {
    textToColorI.style.color = "white";
    linkListI.style.display = "none";
    lineI.style.width = "0";
  }, 77);
});
linkListI.addEventListener("mouseout", () => {
  hideTimeout = setTimeout(() => {
    textToColorI.style.color = "white";
    linkListI.style.display = "none";
    lineI.style.width = "0";
  }, 1);
});
/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions'); // Agrega el elemento datalist
// Definir una lista de sugerencias (puedes cargarla desde una fuente externa si es necesario)
const sugerencias = [
  'autonomo',
  'bateria',
  'contra',
  'contraPresion',
  'impresor',
  'inicio',
  'manta',
  'mantenimiento autonomo',
  'mantilla',
  'planas',
  'plancha',
  'porta mantilla',
  'porta plancha',
  'rotatek-1',
  'secador uv',
  'secador',
  'smed',
  'tintero',
  'torre',
  'variable'
  
];
// Agregamos un evento para manejar la búsqueda
searchForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que se envíe el formulario
  const searchTerm = searchInput.value.toLowerCase(); // Obtenemos el término de búsqueda y lo convertimos a minúsculas

  // ... Tu código de manejo de búsqueda actual ...
  switch (searchTerm) {
    case 'inicio':
      VolveraInicio();
    break;
    case 'tintero':
      changeButtonStyles('pantalla-tintero');
    break;
    case 'bateria':
      changeButtonStyles('bateria-entintado-II', 'contene-7');
    break;
    case 'autonomo':
    case 'mantenimiento autonomo':
      ElementosMa('conteneMantaut');
    break;
    case 'variable':
      abrirSeccionVariable('cont-variable');
    break;
    case 'planas':
      abrirSeccionPlanas('cont-plana');
    break;
    case 'secador uv':
    case 'secador':      
      abrirSeccionCurado('cont-secador');
    break;
    case 'rotatek-1':
    case 'torre':      
      cambioContenedor('rotatek-1')
    break;
    case 'smed':      
    changeButtonStyles('bancada-torre-II')
    break;  
    case 'plancha':  
    case 'porta plancha': 
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]);
        if (elemento) {
          elemento.style.display = 'none';
        }
      }             
      showRepuesto('contPortPlaca')
    break;
    case 'mantilla': 
    case 'manta':      
    case 'porta mantilla': 
    for (var i = 0; i < allContenedores.length; i++) {
      var elemento = document.getElementById(allContenedores[i]);
      if (elemento) {
        elemento.style.display = 'none';
      }
    }          
    showRepuesto('contPortManta', 'videoTrain03')
    break;
    case 'contra':      
    case 'contraPresion':
    case 'impresor':
      for (var i = 0; i < allContenedores.length; i++) {
        var elemento = document.getElementById(allContenedores[i]);
        if (elemento) {
          elemento.style.display = 'none';
        }
      }       
    showRepuesto('contImpresor', 'videoTrain01')
      break;          
    default:
      // Manejo por defecto si ningún caso coincide con searchTerm
      // Puedes agregar un código aquí si es necesario
    break;
  }


  // Puedes agregar una lógica para autocompletar el término de búsqueda
  if (sugerencias.includes(searchTerm)) {
    // Si el término de búsqueda coincide con una sugerencia, lo autocompletamos
    suggestionsList.innerHTML = ''; // Borra cualquier sugerencia anterior
    const suggestionOption = document.createElement('option');
    suggestionOption.value = searchTerm;
    suggestionsList.appendChild(suggestionOption);
  }
});
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// Obtén los elementos canvas de canvasContainer2 y canvasContainer3
const canvasElements2 = document.querySelectorAll('#canvasContainer2 canvas');
const canvasElements3 = document.querySelectorAll('#canvasContainer3 canvas');
const canvasElements4 = document.querySelectorAll('#contChecks input')
// Función para agregar/eliminar pantalla completa a un elemento
// Agrega un evento click a cada elemento canvas en canvasContainer2
canvasElements2.forEach(canvas => {
  canvas.addEventListener('click', () => {
    toggleFullScreen(canvas);
  });
});
// Agrega un evento click a cada elemento canvas en canvasContainer3  
canvasElements3.forEach(canvas => {
  canvas.addEventListener('click', () => {
    toggleFullScreen(canvas);
  });
});
// Agrega un evento click a cada elemento checkbox  
canvasElements4.forEach(input => {
  input.addEventListener('click', () => {
    toggleFullScreen(input);
  });
});/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  // Obten todos los elementos con la clase "colorClick"
  var colorClickLinks = document.querySelectorAll('.colorClick');
  // Recorre todos los elementos y agrega el evento a cada uno
  colorClickLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      link.classList.add('orange-text');
      imagenesPasoApaso(link.getAttribute('data-imagen'));
    });
  });