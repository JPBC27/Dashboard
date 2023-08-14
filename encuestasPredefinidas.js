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

verPrimeraCarta.addEventListener("click", function() {
    localStorage.setItem("fondoPredeterminado",("img/paisaje_oscuro.jpg"))
});