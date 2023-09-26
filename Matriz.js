var idsArray = [];
var currentID = null;
var btnAtras = document.getElementById('bot-atras');
var butInicio = document.getElementById('bot-inic')
var botGrande = document.getElementById('iniciar')
var imgTorreI = document.getElementById('imgTorre')
var contInicial = document.getElementById('container1'); 
var botonMa = document.getElementById('bot-mantaut')

var allContenedores = ['container1','pantalla-inicial','desbobinadorId','uTeñidos','alimentadorId','verticales-alimentador','uniProceso','rebobinador','rotatek-1','torre-imp','tinter-o','bateria-entintado','pantalla-tintero','cont-links','imgTorre','imgsRepuestos','agrupaOblicuos-II','pantalla-frente','pantalla-mandos','pantalla-servicio','pantalla-atras','videosTraining','conteneMantaut','contPortPlaca','contPerfilesPlancha','contPortManta','contPerfilesManta','contImpresor','contPerfilesImpresor','contImgDistribuidor','contImgEntintador','cont-variable','cont-plana','bancada-torre-II','bateria-entintado-II','cont-secador','sitema-humedad','pre-prensa','agrupaOblicuos-placa','densitometria']
var linksIniciales = ['links-inicialesI','links-iniciales']
var allContIniciales = ['container1','pantalla-inicial','desbobinadorId','uTeñidos','alimentadorId','uniProceso','rebobinador','rotatek-1','torre-imp','tinter-o','bateria-entintado']
var contenedoresHijo = ['contImgDistribuidor','rodillForma','portaPlancha','portaMantilla','cilindroImpresor'];
var allContTintero = ['pantalla-tintero','cont-links','imgTorre','vidTintero','imgsRepuestos','agrupaOblicuos-II','container2'];
var allContPantafrente = ['pantalla-frente','container2','imgsRepuestos-II','imgTorre-f','agrupaOblicuos-III']
var allContTorreImp = ['rotatek-1','toggleVideoButton','torre-imp','tinter-o','cont-Verticales2','bateria-entintado','cont-Verticales3','bancada-torre','cont-Verticales4','sis-humedad','cont-Verticales5'];
var allContBaterImp = ['contenedor-7','videoElement1-II','container7']
var allContSisHumedad = ['contenedor-9','contene-10','sitema-humedad']
var contVid = document.getElementById('videosTraining')  

var allContMA = ['conteneMantaut','conti-boton']
var buttonsMA = document.getElementsByClassName("butt-mautonomo");

const grupOblicuos = document.getElementById('agrupaOblicuos-I')
const oblicuosVI = document.getElementById('agrupaOblicuos-VI')

var contOblicuosMandos = document.getElementById('agrupaOblicuos-VII');
let contVariable = document.getElementById('cont-variable');
let contPlana = document.getElementById('cont-plana');
let contSecador = document.getElementById('cont-secador')

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
const conteRepDistrib = document.querySelectorAll('.imgRow')
const uniTeñido = document.getElementById('uTeñidos')
const alimentadorId = document.getElementById('alimentadorId')
const unidadProcess = document.getElementById('uniProceso')
const reBobinado = document.getElementById('rebobinador')
const rotatPanel = document.getElementById('rotatek-1')
const seccionTintero = document.getElementById('pantalla-tintero')
const seccionFrente = document.getElementById('pantalla-frente')
const seccionMandos = document.getElementById('pantalla-mandos')
const pantallas = ['pantalla-frente', 'pantalla-mandos','pantalla-servicio','pantalla-atras'];


const contieneLinks = document.getElementById('cont-links')
const imgsRepuestos = document.getElementById('imgsRepuestos') // HIJO IMAGENES
const imgsRepuestosII = document.getElementById('imgsRepuestos-II') // HIJO IMAGENES 
const imgsRepuestosIII = document.getElementById('imgsRepuestos-III') // HIJO IMAGENES      
const imgsRepuestosIV = document.getElementById('imgsRepuestos-IV') // HIJO IMAGENES      


const contPadreMA = document.getElementById('conteneMantaut')
const videoElements = document.querySelectorAll('.video-training');   
const video = document.getElementById("videoBackground");
const imgsDistribuidor = document.getElementById('contImgDistribuidor')
const imgsForma = document.getElementById('contImgEntintador')
const toggleVideoButton = document.getElementById("toggleVideoButton");
const images = document.querySelectorAll('.image-training, .image-training-a'); 
const imageElementsi = document.querySelectorAll('.image-training');
const contPortaPlancha = document.getElementById('contPortPlaca')
const contPortaManta = document.getElementById('contPortManta')
const contImpresor = document.getElementById('contImpresor')
const inputs = document.querySelectorAll('.input-class');
const input = document.querySelectorAll('.input-class');
const checks = document.querySelectorAll('.input-class')
const imagesFull = document.querySelectorAll('img');
const inpt = document.querySelectorAll('grafMini');
const imagesPrepress = ['primerCont','segundoCont','tercerCont']

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

idsArray.push('pantalla-inicial');
console.log(idsArray)
function VolveraInicio(){
  location.reload();
  idsArray = [];
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

  contenedor.style.display='block'
  // Obtén una lista de todos los elementos de botón dentro del contenedor
  var botones = contenedor.getElementsByTagName("button");  
  // Itera a través de la lista de botones y establece su estilo para hacerlos visibles
  for (var i = 0; i < botones.length; i++) {
    var boton = botones[i];
    boton.style.display = "inline-block"; // Cambia "inline-block" por "block" si prefieres que ocupen todo el ancho
  }

  for (var i = 0; i < buttonsMA.length; i++) {
    buttonsMA[i].style.display = 'block';
  }
  
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  }
};
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
  }, 977); // 2000 milisegundos = 2 segundos
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

  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = 'none';
  }

/*   for (var i = 0; i < elementsToHide.length; i++) {
    var elemento = document.getElementById(elementsToHide[i]);                                 
    if (elemento) {
        elemento.style.display = 'none';
    }
  } */

  botAtras.style.display='block'
  torreImpresion.style.position='absolute'
  torreImpresion.style.left='77px'
  botonTorre.style.position='absolute'
  botonTorre.style.left='307px'

  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  }
}
function cierraContenedores(elementId) {
  const coleccion = document.querySelectorAll('.desbobinador, .desbobinador-I, .uTeñido, .alimentador, .unidProceso, .rebobinador, .contTorrImp');

  switch (elementId) {
    case 'desbobinador':
      /* btnAtras.style.display='block' */
      /* btnAtras.style.left = '57px'; */
      coleccion.forEach(elemento => {
        if (elemento.classList.contains(elementId)) {
          elemento.style.display = 'flex';
        } else {
          elemento.style.display = 'none';
        }
      });
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
        }
      break; 
    case 'uTeñido':
    /* btnAtras.style.display='block'
    btnAtras.style.left = '57px'; */
    coleccion.forEach(elemento => {
    if (elemento.classList.contains(elementId)) {
    elemento.style.display = 'flex';
    } else {
    elemento.style.display = 'none';
    }
    });
    break;
    case 'alimentador':
    /* btnAtras.style.display='block'
    btnAtras.style.left = '57px'; */
    coleccion.forEach(elemento => {
    if (elemento.classList.contains(elementId)) {
    elemento.style.display = 'flex';
    } else {
    elemento.style.display = 'none';
    }
    });
    break;
    case 'unidProceso':
    /* btnAtras.style.display='block'
    btnAtras.style.left = '57px'; */
    coleccion.forEach(elemento => {
    if (elemento.classList.contains(elementId)) {
    elemento.style.display = 'flex';
    } else {
    elemento.style.display = 'none';
    }
    });
    break;
    case 'rebobinador':
    /* btnAtras.style.display='block'
    btnAtras.style.left = '57px'; */
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
}
function muestraRodillo (videoId, imageClas) {
  var botMantaut = document.getElementById('bot-mantaut')
  var contVideos = document.getElementById('videos-training')

  botMantaut.style.display='block'
  botMantaut.style.marginLeft='57px' 
  contInicial.style.left='107px'
  /* botonMa.style.display='block' */
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
      contPortaPlancha.style.display='block'
      videoElements.forEach(video => {
      if (video.id !== 'video-placa') {
        video.style.display = 'none';   
        } else {
        video.style.display = 'block';
        /* video.pause(); */
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
/*     allContenedores.forEach(elemen => {
      var element = document.getElementById(elemen);
      if (element !== 'agrupaOblicuos-placa') {
        element.style.display = 'none';
      }else{
        element.style.display = 'block';
      }
    }); */
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
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
    }
    break;
    default:
  }
}
function muestraAngulos(anguloSel){
var contPadManta = document.getElementById('contPerfilesManta');
var contChildManta = document.getElementById('imagenes-manta');
var imgsManta = document.querySelectorAll('.imgMant')
    switch (anguloSel) {
    case 'frente':
    contPortaManta.style.display='block'
    videoElements.forEach(video => {
    if (video.id == 'videoManta') {
      video.style.display = 'none';   
      }}); 

      contPadManta.style.display='flex'
      contChildManta.style.display='flex'
  
      imgsManta.forEach(function (imagen) {
        if (imagen.id === 'manta' || imagen.id === 'manta1') {
          imagen.style.display = 'block';
        }else{
          imagen.style.display = 'none';
        }
      });
    break;
    case 'mandos':
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
      break;     
    case 'servicio':
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
    break;
    case 'atras':
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
    break;
    default:
  }
}
function muestraLados(anguloSel){
  var contPadImpresor = document.getElementById('contPerfilesImpresor');
  var contChildImpresor = document.getElementById('imagenes-impresor');
  var imgsImpresor = document.querySelectorAll('.imgImpresor')
      switch (anguloSel) {
      case 'frente':
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
      break;
      case 'mandos':
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
        break;     
      case 'servicio':
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
      break;
      case 'atras':
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
      break;
      default:
    }
} 
/* // Agregar evento de pantalla completa a cada imagen
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
}); */


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
function mantAutonomo (opcionSeleccionada) {
  var conteLinksI = document.getElementById('links-inicialesI')
  switch (opcionSeleccionada) {
    case 'troubleshooting':
       var contInput = document.getElementById('contInput'); 
      var inputs = document.querySelectorAll('.inpt-class');

      if (contInput.style.display === 'none') {
        contInput.style.display = 'block';
    
        // Mostrar cada input con un intervalo de 77 milisegundos
        for (var i = 0; i < inputs.length; i++) {
          (function(index) {
            setTimeout(function() {
              inputs[index].style.display = 'block';
            }, 77 * index);
          })(i);
        }
      } else {
        contInput.style.display = 'none';
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].style.display = 'none';
        }
      }
    break;
    case 'def-tipo1':
      const conteneCanvas = document.getElementById('canvasContainer2')
      if (conteneCanvas.style.display === 'block') {
        conteneCanvas.style.display = 'none'; 
      } else {
        conteneCanvas.style.display = 'block';
      }
    break;
    case 'def-tipo2':
    var cotCheck = document.getElementById('contChecks');
    var inpts = document.querySelectorAll('.input-class');

    if (cotCheck.style.display === 'block') {
      // Ocultar los elementos
      cotCheck.style.display = 'none';
    for (var i = 0; i < inpts.length; i++) {
    inpts[i].style.display = 'none';
    }
    } else {
      // Ejecutar la lógica si el contenedor está visible
      cotCheck.style.display = 'block';

      // Mostrar cada input con un intervalo de 77 milisegundos
    for (var i = 0; i < inpts.length; i++) {
    (function(index) {
      setTimeout(function() {
      inpts[index].style.display = 'block';
    }, 77 * index);
    })(i);
    }
    }

    break;
    case 'ayudastrabajo':
      const contGrafitos = document.getElementById('canvasContainer3')
      if (contGrafitos.style.display === 'block') {
        contGrafitos.style.display = 'none'; 
      } else {
        contGrafitos.style.display = 'block';
      }
      conteLinksI.style.left='47px'      
    break;
    case 'fua':
      var contGrafColor = document.getElementById('contImagGraf')
      if (contGrafColor.style.display === 'block') {
        contGrafColor.style.display = 'none'; 
      } else {
        contGrafColor.style.display = 'block';
      }
      break;
    case 'lup':
      var contGrafNeg = document.getElementById('contImagNeg')
      if (contGrafNeg.style.display === 'block') {
        contGrafNeg.style.display = 'none'; 
      } else {
        contGrafNeg.style.display = 'block';
      }
    break;
  default:
}}
function ensayoPruebas(){
  location.reload();
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
    if (video.id !== 'curado-uv') {             
      video.style.display = 'none';     
      } else {
      video.style.display = 'block';
      video.pause();
      video.currentTime = 0;
      video.play();           
    } 
  });
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  }  
}
function cerrarSecciones(){
  var linkList = document.getElementById("linkList");
  contVariable.style.display='none'
  contPlana.style.display='none'
  linkList.style.display = "none";

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
  var contBotPress = document.getElementById('contene-11');
  var contImgsPrepress = document.getElementById('imgs-prepress');
  var videoBackground = document.getElementById('videoBackground');
  var prePrensaElemento = document.getElementById('pre-prensa');  
  videoBackground.pause();
  videoBackground.style.display = 'none'; // Oculta el video
  // Ocultar todos los elementos
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = 'none';
    }
  }
  contBotPress.style.display = 'block';
  contImgsPrepress.style.display = 'block';

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
  videoElements.forEach(video => {
    if (video) {
      video.style.display = 'none';
      video.pause();      
    }
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
      linkList.style.display = "none";
      if (!idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray)
      }   
}
function muestraVidPrisma(elementId) {
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
    video.style.display = 'none';
  }
  });
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  }   
}
function muestraVidColor(elementId){
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
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  } 
}
function irContenedorAnterior() {
  var i = 0;
  var previousElementID = idsArray[idsArray.length - 2];
  var contenedorActual = document.getElementById(idsArray[idsArray.length - 1]); 
  contenedorActual.style.display = 'none';
  recorrerActual = contenedorActual.querySelectorAll('*');

  for (var i = 0; i < idsArray.length; i++) {
    if (previousElementID) {
      switch (previousElementID) { 
        case "pantalla-inicial":
          VolveraInicio(); 
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
            showRepuesto('contPortPlaca');
          break;
          case "contPortManta":
            var contBotManta = document.getElementById('container01')
            contBotManta.style.display='block'
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
            /* cambioContenedor('rotatek-1') */
            location.reload();
          break; 
          case "frente":
            muestraTorresI('frente')
          break;  
          case "pantalla-frente":
            muestraTorres('frente')
          break; 
          case "sitema-humedad":
            changeButtonStyles('sitema-humedad')  
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
        default:
        break;
      }  
    }
  }
  idsArray.pop();  
  console.log(idsArray)
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
    }, 7);
});
linkList.addEventListener("mouseover", () => {
    clearTimeout(hideTimeout);
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
    }, 7);
});
textToColorI.addEventListener("mouseover", () => {
  clearTimeout(hideTimeout);
  hoverTimeout = setTimeout(() => {
    linkListI.style.display = "block";
    lineI.style.width = textToColorI.offsetWidth + "px";
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
  }, 7);
});
/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions'); // Agrega el elemento datalist

// Definir una lista de sugerencias (puedes cargarla desde una fuente externa si es necesario)
const sugerencias = [
  'inicio',
  'tintero',
  'bateria',
  'autonomo',
  'mantenimiento autonomo',
  'variable',
  'planas',
  'secador uv',
  'secador',
  'rotatek-1',
  'torre',
  'smed',
  'plancha',
  'porta plancha',
  'mantilla',
  'manta',
  'porta mantilla',
  'contra',
  'contraPresion',
  'impresor',
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