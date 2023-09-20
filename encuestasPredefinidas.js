const volverEncuestasPredefinidas= document.getElementById("volver_encuestas_predefinidas")

volverEncuestasPredefinidas.addEventListener("click", function() {
  localStorage.removeItem("prueba1");
  localStorage.removeItem("datosEncuesta");
  localStorage.removeItem("color");
  localStorage.removeItem("fuente");
  localStorage.removeItem("fondo");
  localStorage.removeItem("idEncuestaEditar");
  localStorage.removeItem("botonFinal");
});

//USAR CARTAS
const verPrimeraCarta=document.getElementById("ver-primera-carta")

verPrimeraCarta.addEventListener("click", function(event) {
  // console.log(event)
  if (this.classList.contains("disabled")) {
      event.preventDefault();
  } else {
    localStorage.setItem('datosEncuestaPredefinido', JSON.stringify({Titulo:"Clima", Formato: "Clasico" }));
    localStorage.setItem("fondoPredeterminado", "img/paisaje_oscuro.jpg");
    localStorage.setItem("preguntasEncuestaPredefinido",JSON.stringify({id:"d9423187832", pregunta: "Como te llamas?", respuesta:[], tipo:"Texto simple" }))
    window.location.href = 'visualizacion_encuesta.html';
    
  }
});