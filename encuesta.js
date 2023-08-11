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
// const openModal1=document.querySelector('.segunda-carta')
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close')

openModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
})

// openModal1.addEventListener('click',(e)=>{
//     e.preventDefault();
//     modal.classList.add('modal--show');
// })


closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
})

// ALMACENAR DATOS DE LA ENCUESTA 
const inputTituloEncuesta= document.getElementById("tituloEncuesta")
const radioButtons = document.querySelectorAll('input[name="r"]');
const toastContainer = document.getElementById('toast-container');

    document.getElementById('crearEncuesta').addEventListener('click', () => {
        let seleccionado = null;

        radioButtons.forEach(input => {
            if (input.checked) {
                seleccionado = input.value;
            }
        });
       
       if(inputTituloEncuesta.value){
            localStorage.setItem('datosEncuesta', JSON.stringify({Titulo:inputTituloEncuesta.value, Formato: seleccionado }));
            window.location.href = 'crear_encuesta.html';
        }
        else {
          const toast = document.createElement('div');
          toast.classList.add('toast');
          toast.textContent = 'Falta el título de la encuesta. Por favor, ingresa un título.';
          toastContainer.appendChild(toast);
          
          // Agregar clase para mostrar el toast
          toast.classList.add('show');
          setTimeout(() => {
              toastContainer.removeChild(toast);
          }, 3000); // Eliminar el toast después de 3 segundos (ajusta el valor según tus preferencias)
      }
    });

//FUNCIONES PARA GESTIONAR LAS ENCUESTAS    

const tbody = document.getElementById('tabla-encuestas');
const objetoEncuesta = JSON.parse(localStorage.getItem('Encuesta'));

// Función para construir una fila de la tabla con los datos
function construirFila(encuesta) {
  const fila = document.createElement('tr');

  fila.innerHTML = `
    <td class="estilo_celda_body">${encuesta.id}</td>
    <td class="estilo_celda_body">${encuesta.Titulo}</td>
    <td class="estilo_celda_body">${encuesta.Formato}</td>
    <td class="estilo_celda_body">${encuesta.cantidadPreguntas}</td>
    <td class="estilo_celda_body">${encuesta.Fecha}</td>
    <td class="estilo_celda_body"><i class="deleteItem basura bi bi-trash3"></i></td>
  `;

  return fila;
}

// Renderizar los datos en el tbody
// if (objetoEncuesta) {
//   objetoEncuesta.forEach(encuesta => {
//     const fila = construirFila(encuesta);
//     tbody.appendChild(fila);
//   });
// }


  //FUNCIONES PARA RENDERIZAR CARTAS DE ENCUESTAS CREADAS
  const contenedorCartas = document.querySelector('.cartas');

  // Función para construir una carta con los datos
  function construirCarta(encuesta, fondoEncuesta, colorEncuesta) {
      const carta = document.createElement('div');
      carta.className = 'card';
    
      // Establecer el estilo de fondo de la carta
      // carta.style.setProperty('--i', `url(${fondoEncuesta})`);
      const fondoURLPredeterminado = '/img/24783.jpg'; // Cambia esto a la URL deseada

        const fondoEstilo = fondoEncuesta ? `url(${fondoEncuesta})` : `url(${fondoURLPredeterminado})`;
        carta.style.setProperty('--i', fondoEstilo);

    
      const contenidoCarta = `
        <h2 style="color: ${colorEncuesta};">${encuesta.Titulo}</h2>
        <div class="content">
          <p style="color: ${colorEncuesta};">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          <a style="color: ${colorEncuesta}; border:2px solid ${colorEncuesta};"
          type="button" class="llamar-modal" href="crear_encuesta.html" 
          onclick="editarEncuesta('${encuesta.id}')">Editar</a>
        </div>
      `;
    
      carta.innerHTML = contenidoCarta;
      return carta;
    }
    

  const datosEncuesta = JSON.parse(localStorage.getItem("Encuesta"));
    
    
    datosEncuesta.forEach(encuesta => {
      const fondoEncuesta = encuesta.estiloEncuesta[0].fondo;
    const colorEncuesta = encuesta.estiloEncuesta[0].color;

    const nuevaCarta = construirCarta(encuesta, fondoEncuesta, colorEncuesta);
    contenedorCartas.appendChild(nuevaCarta);
    });
    
  //FUNCIONES PARA EDITAR ENCUESTA
  function editarEncuesta(id) {
    const encuesta = objetoEncuesta.find(e => e.id === id);
    if (encuesta) {
      localStorage.setItem("datosEncuesta", JSON.stringify({ Titulo: encuesta.Titulo }));
      localStorage.setItem("color", (encuesta.estiloEncuesta[0].color));
      localStorage.setItem("fondo", (encuesta.estiloEncuesta[0].fondo));
      localStorage.setItem("fuente", (encuesta.estiloEncuesta[0].fuente));
      localStorage.setItem("botonFinal", (encuesta.botonFinal));
      localStorage.setItem("prueba1",JSON.stringify (encuesta.preguntasEncuesta));
      localStorage.setItem("idEncuestaEditar",(encuesta.id));

      // console.log(JSON.stringify(encuesta.estiloEncuesta[0].color))
    }
  }


  //FUNCION PARA ELIMINAR ENCUESTA
function eliminarEncuesta(id) {
  const indiceAEliminar = objetoEncuesta.findIndex(encuesta => encuesta.id === id);

  if (indiceAEliminar !== -1) {
    objetoEncuesta.splice(indiceAEliminar, 1);
    localStorage.setItem('Encuesta', JSON.stringify(objetoEncuesta));
    // Remover la fila de la tabla
    const filaEliminar = tbody.querySelector(`[data-id="${id}"]`);
    if (filaEliminar) {
      tbody.removeChild(filaEliminar);
    }
  }
}

// Función para eliminar una encuesta y renderizar las cartas nuevamente
function eliminarEncuestaYRenderizar(id) {
  eliminarEncuesta(id);
  
  // Vaciar el contenedor de cartas
  contenedorCartas.innerHTML = '';
  const datosEncuestaR = JSON.parse(localStorage.getItem("Encuesta"));

  // Renderizar las cartas nuevamente con los datos actualizados
  datosEncuestaR.forEach(encuesta => {
    const fondoEncuesta = encuesta.estiloEncuesta[0].fondo;
    const colorEncuesta = encuesta.estiloEncuesta[0].color;

    const nuevaCarta = construirCarta(encuesta, fondoEncuesta, colorEncuesta);
    contenedorCartas.appendChild(nuevaCarta);
  });
}



if (objetoEncuesta) {
  objetoEncuesta.forEach(encuesta => {
    const fila = construirFila(encuesta);

    // Añadir el atributo data-id con el valor del id de la encuesta
    fila.setAttribute('data-id', encuesta.id);

    // Obtener el ícono de basura dentro de la fila
    const iconoBasura = fila.querySelector('.deleteItem');

    // Agregar evento onclick al ícono de basura para eliminar la encuesta
    iconoBasura.addEventListener('click', () => {
      eliminarEncuestaYRenderizar(encuesta.id);
    });

    tbody.appendChild(fila);
  });
}

