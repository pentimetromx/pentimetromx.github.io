const sliderButtonAzul = document.getElementById('slider-button-azul');
const sliderButtonVerde = document.getElementById('slider-button-verde');
const sliderButtonRojo = document.getElementById('slider-button-rojo');
const sliderButtonAlpha = document.getElementById('slider-button-alpha');
const blueValueDisplay = document.getElementById('blueValueDisplay');
const greenValueDisplay = document.getElementById('greenValueDisplay');
const redValueDisplay = document.getElementById('redValueDisplay');
const alphaValueDisplay = document.getElementById('alphaValueDisplay');
const sliderContainer = document.querySelector('.slider-container');
const primerRectangulo = document.getElementById('primer-rectangulo');
let greenValue = 0;
let blueValue = 0;
let redValue = 0;
let alphaValue = 1; // Valor inicial 1 (completamente opaco)
// Variables para el botón azul
let isDraggingAzul = false;
let startXAzul;
let initialLeftAzul;
// Variables para el botón verde
let isDraggingVerde = false;
let startXVerde;
let initialLeftVerde;
// Variables para el botón ROJO
let isDraggingRojo = false;
let startXRojo;
let initialLeftRojo;
// Variables para el botón transparencia
let isDraggingAlpha = false;
let startXAlpha;
let initialLeftAlpha;

function iniciarSitio(){
  location.reload()
}

function desactivarClicsPorUnTiempo(tiempoDuracion) {
  function bloquearClic(e) {
    e.stopPropagation();
    e.preventDefault();  }
  document.addEventListener('click', bloquearClic, true);
  setTimeout(function() {
    document.removeEventListener('click', bloquearClic, true);
  }, tiempoDuracion);
}

let allContenedores = ['blur','pantalla','primer-rectangulo','almacen-displays','slider-container','reinicio','butt-inicio','recarga','texto']

function iniciaSitio(){
  var elementosExcluidos = ['texto']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  let blurCOntenedor = document.getElementById('blur')
  blurCOntenedor.style.display = 'grid'
  setTimeout(() => {
    document.getElementById('butt-inicio').style.display = 'flex'        
  }, 3500);
}  

// Función para iniciar el arrastre del botón azul
function startDraggingAzul(e) {
  isDraggingAzul = true;
  startXAzul = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  initialLeftAzul = sliderButtonAzul.offsetLeft;
  document.addEventListener('mousemove', onMouseMoveAzul);
  document.addEventListener('mouseup', onMouseUpAzul);
  document.addEventListener('touchmove', onMouseMoveAzul);
  document.addEventListener('touchend', onMouseUpAzul);
}
// Función para manejar el movimiento del ratón/touch del botón azul
function onMouseMoveAzul(e) {
  if (isDraggingAzul) {
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startXAzul;
    let newLeft = initialLeftAzul + deltaX;
    // Limitar el movimiento dentro del contenedor
    const minLeft = 0;
    const maxLeft = sliderContainer.offsetWidth - sliderButtonAzul.offsetWidth;
    if (newLeft < minLeft) newLeft = minLeft;
    if (newLeft > maxLeft) newLeft = maxLeft;
    sliderButtonAzul.style.left = `${newLeft}px`;
    // Calcular el porcentaje de desplazamiento del botón azul
    const percentageAzul = (newLeft / maxLeft) * 100;
    blueValue = Math.round((percentageAzul / 100) * 255);
    primerRectangulo.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue},${alphaValue})`;
    blueValueDisplay.textContent = `Azul: ${blueValue}`;
  }
}
// Función para manejar el final del movimiento del botón azul
function onMouseUpAzul() {
  isDraggingAzul = false;
  document.removeEventListener('mousemove', onMouseMoveAzul);
  document.removeEventListener('mouseup', onMouseUpAzul);
  document.removeEventListener('touchmove', onMouseMoveAzul);
  document.removeEventListener('touchend', onMouseUpAzul);
}


// Función para iniciar el arrastre del botón verde
function startDraggingVerde(e) {
  isDraggingVerde = true;
  startXVerde = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  initialLeftVerde = sliderButtonVerde.offsetLeft;
  document.addEventListener('mousemove', onMouseMoveVerde);
  document.addEventListener('mouseup', onMouseUpVerde);
  document.addEventListener('touchmove', onMouseMoveVerde);
  document.addEventListener('touchend', onMouseUpVerde);
}
// Función para manejar el movimiento del ratón/touch del botón verde
function onMouseMoveVerde(e) {
  if (isDraggingVerde) {
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startXVerde;
    let newLeft = initialLeftVerde + deltaX;
    const minLeft = 0;
    const maxLeft = sliderContainer.offsetWidth - sliderButtonVerde.offsetWidth;
    if (newLeft < minLeft) newLeft = minLeft;
    if (newLeft > maxLeft) newLeft = maxLeft;
    sliderButtonVerde.style.left = `${newLeft}px`;
    const percentageVerde = (newLeft / maxLeft) * 100;
    greenValue = Math.round((percentageVerde / 100) * 255);
    primerRectangulo.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue},${alphaValue})`;
    greenValueDisplay.textContent = `Verde: ${greenValue}`;
  }
}
function onMouseUpVerde() {
  isDraggingVerde = false;
  document.removeEventListener('mousemove', onMouseMoveVerde);
  document.removeEventListener('mouseup', onMouseUpVerde);
  document.removeEventListener('touchmove', onMouseMoveVerde);
  document.removeEventListener('touchend', onMouseUpVerde);
}

// Función para iniciar el arrastre del botón rojo
function startDraggingRojo(e) {
  isDraggingRojo = true;
  startXRojo = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  initialLeftRojo = sliderButtonRojo.offsetLeft;
  document.addEventListener('mousemove', onMouseMoveRojo);
  document.addEventListener('mouseup', onMouseUpRojo);
  document.addEventListener('touchmove', onMouseMoveRojo);
  document.addEventListener('touchend', onMouseUpRojo);
}
// Función para manejar el movimiento del ratón/touch del botón verde
function onMouseMoveRojo(e) {
  if (isDraggingRojo) {
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startXRojo;
    let newLeft = initialLeftRojo + deltaX;
    const minLeft = 0;
    const maxLeft = sliderContainer.offsetWidth - sliderButtonRojo.offsetWidth;
    if (newLeft < minLeft) newLeft = minLeft;
    if (newLeft > maxLeft) newLeft = maxLeft;
    sliderButtonRojo.style.left = `${newLeft}px`;
    const percentageRojo = (newLeft / maxLeft) * 100;
    redValue = Math.round((percentageRojo / 100) * 255);
    primerRectangulo.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue},${alphaValue})`;
    redValueDisplay.textContent = `Rojo: ${redValue}`;
  }
}
function onMouseUpRojo() {
  isDraggingRojo = false;
  document.removeEventListener('mousemove', onMouseMoveRojo);
  document.removeEventListener('mouseup', onMouseUpRojo);
  document.removeEventListener('touchmove', onMouseMoveRojo);
  document.removeEventListener('touchend', onMouseUpRojo);
}


// Función para iniciar el arrastre del botón transparencia
function startDraggingAlpha(e) {
  isDraggingAlpha = true;
  startXAlpha = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  initialLeftAlpha = sliderButtonAlpha.offsetLeft;
  
  document.addEventListener('mousemove', onMouseMoveAlpha);
  document.addEventListener('mouseup', onMouseUpAlpha);
  document.addEventListener('touchmove', onMouseMoveAlpha);
  document.addEventListener('touchend', onMouseUpAlpha);
}

// Función para manejar el movimiento del ratón/touch del botón de transparencia (Alpha)
function onMouseMoveAlpha(e) {
  if (isDraggingAlpha) {
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startXAlpha;
    let newLeft = initialLeftAlpha + deltaX;

    // Limitar el movimiento dentro del contenedor
    const minLeft = 0;
    const maxLeft = sliderContainer.offsetWidth - sliderButtonAlpha.offsetWidth;
    if (newLeft < minLeft) newLeft = minLeft;
    if (newLeft > maxLeft) newLeft = maxLeft;

    sliderButtonAlpha.style.left = `${newLeft}px`;

    // Calcular el porcentaje de transparencia
    const percentageAlpha = (newLeft / maxLeft);
    alphaValue = percentageAlpha.toFixed(2); // Valor entre 0 y 1 para alpha

    // Asignar el color con transparencia utilizando rgba
    primerRectangulo.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
    
    // Actualizar el valor visual de Alpha
    alphaValueDisplay.textContent = `Alpha: ${(alphaValue * 100).toFixed(0)}%`;
  }
}
// Función para manejar el final del movimiento del botón de transparencia (Alpha)
function onMouseUpAlpha() {
  isDraggingAlpha = false;
  document.removeEventListener('mousemove', onMouseMoveAlpha);
  document.removeEventListener('mouseup', onMouseUpAlpha);
  document.removeEventListener('touchmove', onMouseMoveAlpha);
  document.removeEventListener('touchend', onMouseUpAlpha);
}

function setAlphaButtonToMax() {
  const maxLeftAlpha = sliderContainer.offsetWidth - sliderButtonAlpha.offsetWidth;
  sliderButtonAlpha.style.left = `${maxLeftAlpha}px`;
  alphaValue = 255; // Transparencia máxima
  primerRectangulo.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue}, 1)`; // Alpha a 1 (100% opaco)
  alphaValueDisplay.textContent = `Alpha: ${alphaValue}`;
}

sliderButtonAzul.addEventListener('mousedown', startDraggingAzul);
sliderButtonAzul.addEventListener('touchstart', startDraggingAzul);
sliderButtonVerde.addEventListener('mousedown', startDraggingVerde);
sliderButtonVerde.addEventListener('touchstart', startDraggingVerde);
sliderButtonRojo.addEventListener('mousedown', startDraggingRojo);
sliderButtonRojo.addEventListener('touchstart', startDraggingRojo);
sliderButtonAlpha.addEventListener('mousedown', startDraggingAlpha);
sliderButtonAlpha.addEventListener('touchstart', startDraggingAlpha);

const initialPositionAzul = 0; // Posición inicial del botón azul
const initialPositionVerde = 0; // Posición inicial del botón verde
const initialPositionRojo = 0; // Posición inicial del botón rojo
const initialPositionAlpha = 285; // Posición inicial del botón alpha

function resetButtons() {
  // Resetear la posición de los botones
  sliderButtonAzul.style.left = `${initialPositionAzul}px`;
  sliderButtonVerde.style.left = `${initialPositionVerde}px`;
  sliderButtonRojo.style.left = `${initialPositionRojo}px`;
  sliderButtonAlpha.style.left = `${initialPositionAlpha}px`;

  // Resetear los valores de los componentes de color
  blueValue = 0;
  greenValue = 0;
  redValue = 0;
  alphaValue = 1;

  // Actualizar el color de fondo y los displays
  primerRectangulo.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
  blueValueDisplay.textContent = `Azul: ${blueValue}`;
  greenValueDisplay.textContent = `Verde: ${greenValue}`;
  redValueDisplay.textContent = `Rojo: ${redValue}`;
  alphaValueDisplay.textContent = `Opaco: ${alphaValue}`;
}

function requestFullScreen() {
  desactivarClicsPorUnTiempo(1000)
  var elementosExcluidos = ['pantalla','']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari y Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE/Edge
    elem.msRequestFullscreen();
  }
}

document.querySelectorAll('.caballos').forEach(img => {
  // Añadir eventos 'click' y 'touchstart' para compatibilidad con dispositivos móviles
  img.addEventListener('click', hideElements);
  img.addEventListener('touchstart', hideElements);
  
  setAlphaButtonToMax();
});

function hideElements() {
  document.querySelectorAll('.caballos').forEach(caballo => caballo.style.display = 'none'); 
  document.getElementById('pantalla').style.display = 'none';
  document.getElementById('imagen').style.display = 'none';
  document.getElementById('primer-rectangulo').style.display = 'flex';  
  document.getElementById('reinicio').style.display = 'flex';
  document.getElementById('almacen-displays').style.display = 'flex';
  document.getElementById('recarga').style.display = 'flex';
}

// Función para generar colores únicos en formato HSL
function generateUniqueColors() {
  const elements = document.querySelectorAll('.difuminados');
  
  elements.forEach(element => {
    // Generar un color HSL con saturación y luminosidad altos
    const hue = Math.floor(Math.random() * 360); // Matiz (0 a 360)
    const saturation = Math.floor(Math.random() * 50) + 50; // Saturación alta (50% - 100%)
    const lightness = Math.floor(Math.random() * 40) + 30; // Luminosidad media/alta (30% - 70%)

    const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    element.style.backgroundColor = hslColor;
  });
}

// Llamar a la función para asignar colores al cargar la página
generateUniqueColors();




