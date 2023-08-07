const btnCrear = document.getElementById("crear")
btnCrear.onclick = function () {
    document.getElementById("crear-encuesta").style.display = "block";
    document.getElementById("gestionar-encuesta").style.display = "none";

     
    btnCrear.classList.add("activate-a");
    btnGestionar.classList.remove("activate-a");

}

const btnGestionar = document.getElementById("gestionar")
btnGestionar.onclick = function () {
    document.getElementById("gestionar-encuesta").style.display = "block";
    document.getElementById("crear-encuesta").style.display = "none";
     
    btnGestionar.classList.add("activate-a");
    btnCrear.classList.remove("activate-a");
}

// FUNCIONES PARA EL MODAL

const openModal =document.querySelector('.llamar-modal');
const openModal1=document.querySelector('.segunda-carta')
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close')

openModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
})

openModal1.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
})


closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
})

// ALMACENAR DATOS DE LA ENCUESTA 
const inputTituloEncuesta= document.getElementById("tituloEncuesta")
const radioButtons = document.querySelectorAll('input[name="r"]');
    
    document.getElementById('crearEncuesta').addEventListener('click', () => {
        let seleccionado = null;

        radioButtons.forEach(input => {
            if (input.checked) {
                seleccionado = input.value;
            }
        });
       
       if(inputTituloEncuesta.value){
            localStorage.setItem('datosEncuesta', JSON.stringify({Titulo:inputTituloEncuesta.value, Formato: seleccionado }));
       }
       else{
        console.log("Falta titulo")
       }
    });