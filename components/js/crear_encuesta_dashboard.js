//Opciones
      const OPCION_RADIO = "Opción simple";
      const OPCION_CHECKBOX = "Opción múltiple";
      const OPCION_TEXTAREA = "Texto simple";
      const OPCION_BARRA_CALOR = "NPS";

//Abrir lista de tipos de preguntas
const optionMenu=document.querySelector(".dropdown-agregar"), //div en donde se encuentran las opciones (checkbox, texto corto,...)
      selectBtn= optionMenu.querySelector(".select-btn-agregar"); //Botón en donde se abrirá el menú de opciones para agregar

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active")); // Mostrar el listado de opciones

// ==AGREGAR PREGUNTA, AGREGAR TIPO DE RESPUESTA
//Mostrar
const sBtn_text= optionMenu.querySelector(".sBtn-text-agregar"), //texto del menu opciones
      options= optionMenu.querySelectorAll(".option-agregar"); //opciones (checkbox, texto corto,...)
      
const contenedor_general_agregar=document.getElementById("contenedor-opciones-agregar"); //Donde se agrega o muestran los elementos a agregar

const menu_multiple= document.getElementById("opcion-multiple-agregar"),
      casilla_verificacion=document.getElementById("opcion-checkbox-agregar"),
      contenedor_opcion_multiple=document.getElementById("boton-opcion-multiple-agregar"),
      contenedor_opcion_checkbox=document.getElementById("boton-opcion-checkbox-agregar");
      contenedor_opcion_textArea=document.getElementById("opcion-textArea-agregar"),
      contenedor_opcion_npm=document.getElementById("opcion-npm-agregar");

// Declara un array para almacenar los objetos con el índice y el valor ingresado en los inputs
let valoresIngresados = [];
// Renderizar
options.forEach(option =>{
      option.addEventListener("click", ()=>{
            let selectedOption = option.querySelector(".option-text-agregar").innerText;
            sBtn_text.innerText= selectedOption; // Cambiar nombre al botón de opciones
            optionMenu.classList.remove("active"); //Desactivar listado

            //Limpiar
            contenedor_general_agregar.style.display = "block";
            menu_multiple.style.display = "none";
            casilla_verificacion.style.display = "none";
            opcion_checkbox.innerHTML = '';
            opcion_multiple.innerHTML = '';
            contenedor_opcion_multiple.style.display = "none";
            contenedor_opcion_checkbox.style.display = "none";
            contenedor_opcion_textArea.style.display = "none";
            contenedor_opcion_npm.style.display="none";

            // Mostrar según el tipo de pregunta
            if(selectedOption == OPCION_RADIO){
                  menu_multiple.style.display ="block";
                  contenedor_opcion_multiple.style.display="flex";
            }
            else if(selectedOption==OPCION_CHECKBOX){
                  casilla_verificacion.style.display ="block";
                  contenedor_opcion_checkbox.style.display="flex";
            }
            else if(selectedOption==OPCION_TEXTAREA){
                  contenedor_opcion_textArea.style.display="flex";
            }
            else if(selectedOption==OPCION_BARRA_CALOR){
                  contenedor_opcion_npm.style.display="flex";
            }
            else{
                  contenedor_general_agregar.style.display = "none";
            }
      })
})

//multiple
const opcion_multiple=document.getElementById("opcion-multiple-agregar") //Contenedor de casillas de tipo "multiple"
const mas_opcion_multiple=document.getElementById("mas-opcion-multiple-agregar") //Botón de agregar opción "multiple"

//checkbox
const opcion_checkbox=document.getElementById("opcion-checkbox-agregar") 
const mas_opcion_checkbox=document.getElementById("mas-opcion-checkbox-agregar")


// Función para agregar una nueva opción de cualquier tipo
function agregarNuevaOpcion(tipo) {
      let template = '';

      if (tipo === 'multiple') {
            template = `
                  <div class="pregunta-opciones">
                        <label class="radio1">
                              <input type="radio" name="r" value="clasica" disabled>
                              <span></span>
                        </label>
                        <input class="input-opciones1 input-opciones1-agregar" type="text">
                        <div class="quitar-pregunta mas-pregunta">
                              <a type="button"><i class="bi bi-dash multiple-quitar-agregar"></i></a>
                        </div>
                  </div>
            `;
      } else if (tipo === 'checkbox') {
            template = `
                  <div class="pregunta-opciones">
                        <div class="checkbox referencia-checkbox-agregar">
                              <input class="checkbox-spin" type="checkbox" id="check4" disabled style="display: none;"/>
                              <label for="check4"><span></span></label>
                        </div>
                        <input class="input-opciones1 input-opciones1-agregar" type="text">
                        <div class="quitar-pregunta mas-pregunta">
                              <a type="button"><i class="bi bi-dash checkbox-quitar-agregar"></i></a>
                        </div>
                  </div>
            `;
      }

      const opcion = tipo === 'multiple' ? opcion_multiple : opcion_checkbox;
      opcion.insertAdjacentHTML("beforeend", template);

      actualizarValoresIngresados(tipo);
      agregarEventosEliminar(tipo);
}


// Función para actualizar los valores ingresados de la respuesta
function actualizarValoresIngresados(tipo) {
  const opcion = tipo === 'multiple' ? opcion_multiple : opcion_checkbox;
  const nuevosInputs = opcion.querySelectorAll(".input-opciones1-agregar");

  nuevosInputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
      const valor = event.target.value;
      valoresIngresados[index] = { index, valor };
    });

    input.value = valoresIngresados[index] ? valoresIngresados[index].valor : "";
  });
}

// Función para agregar eventos de eliminación de la respuesta
function agregarEventosEliminar(tipo) {
  const opcion = tipo === 'multiple' ? opcion_multiple : opcion_checkbox;
  const nuevosDivs = opcion.querySelectorAll(".pregunta-opciones");
  nuevosDivs.forEach((div) => {
    const iconoEliminar = div.querySelector(`.${tipo}-quitar-agregar`);
    iconoEliminar.addEventListener("click", () => {
      div.remove();
    });
  });
}

// Evento de clic para agregar una nueva opción "multiple"
mas_opcion_multiple.addEventListener("click", () => {
  agregarNuevaOpcion('multiple');
});

// Evento de clic para agregar una nueva opción "checkbox"
mas_opcion_checkbox.addEventListener("click", () => {
  agregarNuevaOpcion('checkbox');
  
});

// ==CANCELAR PREGUNTA
const contenedor_agregar_pregunta=document.getElementById("contenedor-agregar-pregunta"); //Contenedor para agregar +
const contenedor_diseño_pregunta=document.getElementById("pregunta-agregar"); // Todo el contenedor (pregunta y opciones)
const contenedor_opciones=document.querySelectorAll(".contenedor-opciones-agregar"); //Solo las opciones (radio,text,check,..)
const pregunta= document.querySelector(".texto-pregunta-agregar"); //La pregunta a realizar
const cancelar=document.querySelectorAll(".opcion-cancelar-agregar"); //Botón cancelar

function resetearFormulario() {
  pregunta.value = "";
  pregunta_obligatoria.checked = false;
  valoresIngresados = [];
  contenedor_opciones.forEach(opcion => {
    opcion.style.display = "none";
    sBtn_text.innerText = "Diseño de opciones";
    opcion_checkbox.innerHTML = '';
    opcion_multiple.innerHTML = '';
  });
}

cancelar.forEach(botonCancelar => {
  botonCancelar.addEventListener("click", () => {
    const valorLocalStorage = localStorage.getItem("prueba1");

    if (valorLocalStorage && JSON.parse(valorLocalStorage).length > 0) {
      // Si existe el valor en el localStorage, ocultamos los contenedores de opciones
      resetearFormulario();
      contenedor_agregar_pregunta.style.display = "flex";
      contenedor_diseño_pregunta.style.display = "none";
      
    } else {
      // Si NO existe el valor en el localStorage, ocultamos el contenedor actual y mostramos el de agregar pregunta
      resetearFormulario();
      contenedor_diseño_pregunta.style.display = "block";
      contenedor_agregar_pregunta.style.display = "none";

    }
  });
});

// ==GUARDAR PREGUNTA (en el local)
const multiples=document.querySelector(".opciones-multiples-agregar")
const guardar=document.getElementById("guardar")
const pregunta_obligatoria = document.getElementById("pregunta_obligatoria");
var objeto = JSON.parse(localStorage.getItem("prueba1")) || [];

guardar.addEventListener("click", () => {
  const respuestas= document.querySelectorAll(".input-opciones1-agregar");
  const values = [];
  const preguntaValue = pregunta.value; 
  respuestas.forEach(input => {
    values.push(input.value);
  });

  // verifica si la pregunta ya existe en el array
  if (objeto.some((item) => item.pregunta === preguntaValue)) {
    return; // si existe, no la agregues de nuevo
  }
  
  const id = CryptoJS.SHA3(`${values+pregunta.value+sBtn_text.innerText}`, {outputLength:32}).toString();
  objeto.push({ id: "f" + id, pregunta: pregunta.value, respuestas: values, obligatorio: pregunta_obligatoria.checked, tipo: sBtn_text.innerText })
 
  localStorage.setItem("prueba1",JSON.stringify(objeto))
  renderQuestions();

  contenedor_diseño_pregunta.style.display="none"
  contenedor_agregar_pregunta.style.display="flex"
  resetearFormulario();
}) 

// ==RENDERIZAR PREGUNTAS

function generatePreguntaHTML(id, pregunta, respuestas, obligatorio, tipo) {
      let opcionesHTML = ""
      if (tipo === OPCION_RADIO || tipo === OPCION_CHECKBOX){
            opcionesHTML = respuestas.map((b, index) => {
                  if (tipo === OPCION_RADIO) {
                        return `
                              <div class="diseño-opciones" id="${id}-respuesta-${index + 1}">
                                    <label class="radio1">
                                          <input type="radio" name="${pregunta}" value="${b}">
                                          <span>${b}</span>
                                    </label>
                              </div>
                        `;
                  } else if (tipo === OPCION_CHECKBOX) {
                        return `
                              <div class="diseño-opciones" id="${id}-respuesta-${index + 1}">
                                    <div class="checkbox-container">
                                          <input class="checkbox-spin-1" type="checkbox" id="check-${id}-${pregunta}-${b}" name="check-${id}-${pregunta}" value="${b}">
                                          <label for="check-${id}-${pregunta}-${b}">
                                                <div class="check-container-icon"><i>&#10004;</i></div>
                                                <span>${b}</span>
                                          </label>
                                    </div>
                              </div>
                        `;
                  }
            }).join("");
      } else if (tipo === OPCION_TEXTAREA) {
            opcionesHTML = `
                  <div class="diseño-opciones">
                        <textarea name="${id}" cols="30" rows="5"></textarea>
                  </div>
            `;
      } else if (tipo === OPCION_BARRA_CALOR) {
            opcionesHTML = `
                  <div class="diseño-opciones">
                        <div class="rating">
                              <input type="radio" name="${pregunta}" value="10" id="rata10"><label for="rata10">10</label>
                              <input type="radio" name="${pregunta}" value="9" id="rata9" ><label for="rata9">9</label>
                              <input type="radio" name="${pregunta}" value="8" id="rata8" ><label for="rata8">8</label>
                              <input type="radio" name="${pregunta}" value="7" id="rata7" ><label for="rata7">7</label>
                              <input type="radio" name="${pregunta}" value="6" id="rata6" ><label for="rata6">6</label>
                              <input type="radio" name="${pregunta}" value="5" id="rata5" ><label for="rata5">5</label>
                              <input type="radio" name="${pregunta}" value="4" id="rata4" ><label for="rata4">4</label>
                              <input type="radio" name="${pregunta}" value="3" id="rata3" ><label for="rata3">3</label>
                              <input type="radio" name="${pregunta}" value="2" id="rata2" ><label for="rata2">2</label>
                              <input type="radio" name="${pregunta}" value="1" id="rata1" ><label for="rata1">1</label>
                        </div>
                  </div>
            `;
      }
      return `
            <div id="${id}" class="pregunta-individual input-checkbox">     
                  <div class="diseño-pregunta">
                        <div class="contenedor-pregunta-realizar">
                              <span class="diseño-pregunta-span" id="pregunta-realizar">${pregunta}</span><span class="color-obligatorio">${obligatorio ? "*":" "}</span>
                        </div>
                        <div id="contenedor-respuestas-pregunta" class="contenedor-respuestas">     
                              ${opcionesHTML}
                        </div>  
                  </div>
                  <div class="overlay" onclick="obtenerElemento(${id})">
                        <i class="bi bi-pencil"></i>
                        <span>Editar pregunta</span>
                  </div>
            </div>
      `;
}

//const contenedor_listo=document.querySelector(".contenedor-listo"); //FALTA REALIZAR EL BOTON LISTO
const guardar_ecuesta = document.getElementById("guardar-encuesta");
const htmlres = document.getElementById("contenedor-preguntas-realizadas");

function renderQuestions() {
  htmlres.innerHTML = "";
  objeto.forEach((item) => {
    const { id, pregunta, respuestas, obligatorio, tipo } = item;
    const htmlPregunta = generatePreguntaHTML(id, pregunta, respuestas, obligatorio, tipo);
    htmlres.innerHTML += htmlPregunta;
  });

  if (objeto.length == 0) {
    
    contenedor_diseño_pregunta.style.display="block";
    contenedor_agregar_pregunta.style.display="none";
    guardar_ecuesta.style.display="none";
 //   contenedor_listo.style.display="none"
    
  }else{
    contenedor_diseño_pregunta.style.display="none";
    contenedor_agregar_pregunta.style.display="flex";
    guardar_ecuesta.style.display="flex";
//    contenedor_listo.style.display="block"
  }

    // Asignar estilos a los elementos DOM
    const colorTituloEncuesta = document.getElementById("titulo-encuesta");
    const colorPregunta = document.querySelectorAll(".diseño-pregunta-span");
    const colorRespuestas = document.querySelectorAll(".diseño-opciones span");
    const datoC5 = window.localStorage.color;

    colorTituloEncuesta.style.color = datoC5;
    colorPregunta.forEach((pregunta) => {
      pregunta.style.color = datoC5;
    });
    colorRespuestas.forEach((respuestas) => {
      respuestas.style.color = datoC5;
    });  
}

// renderQuestions() para inicializar las vistas
renderQuestions();

// ==FUNCIONES PARA PODER AGREGAR OTRA PREGUNTA
const boton_agregar_pregunta = document.getElementById("contenedor-agregar-pregunta")

boton_agregar_pregunta.addEventListener("click",()=>{
  contenedor_diseño_pregunta.style.display="block"
  contenedor_agregar_pregunta.style.display="none"
})

const texto_simple=document.querySelector(".contendor-texto-simple");//No USO

//=* SIDEBAR PREGUNTA
const sidebarEditarPregunta = document.getElementById('sidebar-editar-pregunta');
const btn_cerrar_editar = document.getElementById('btn-cerrar-editar');

function cerrarSideBarEditar(cerrar) {
      cerrar ? sidebarEditarPregunta.style.right = '-330px' : sidebarEditarPregunta.style.right = '0';
}

document.addEventListener('click', (event) => {
      if (!event.target.closest('.overlay') && !event.target.closest('.contenedor-editar-pregunta') 
      && !event.target.closest('.btn-agregar-respuesta') && !event.target.closest('.elimar-opcion-respuesta')) {
            cerrarSideBarEditar(true);   
      }
});

btn_cerrar_editar.addEventListener('click', () => {
      cerrarSideBarEditar(true);
});

//Acordeon
const acordeonTitulos = document.querySelectorAll('.acordeon-titulo');
acordeonTitulos.forEach((titulo) => {
  titulo.addEventListener('click', () => {
    const contenido = titulo.nextElementSibling;
    contenido.classList.toggle('mostrar');
  });
});


//=*CONTROLADOR
var elementoAModificar;
var preguntaIndex;

// Función para obtener el elemento seleccionado y abrir el menú de edición
const obtenerElemento=(elemento)=>{
      elementoAModificar = elemento;
      const indexPregunta= objeto.findIndex(item => item.id === elementoAModificar.id);
      preguntaIndex = indexPregunta;
      mostrarSidebarEditar(elementoAModificar);
      cerrarSideBarEditar(false);
      editarRespuestas();
      opcionPreguntaObligatoria();
}

//=*ELIMINAR
const btn_eliminar_pregunta = document.getElementById('btn-eliminar-pregunta');
btn_eliminar_pregunta.addEventListener('click', () => {
      eliminar(elementoAModificar);
      cerrarSideBarEditar(true);
});

// Función para eliminar la pregunta
const eliminar = () => {
      // Eliminar el elemento HTML con el ID correspondiente
      const eliminarHTML = document.getElementById(elementoAModificar.id);
      eliminarHTML.remove();
      
      // Filtrar el objeto para eliminar la pregunta por su ID
      objeto = objeto.filter(item => item.id !== elementoAModificar.id);

      // Llamar a la función para borrar datos por ID en el almacenamiento local
      borrarDatoPorId(elementoAModificar.id);

      // Comprobar si no hay más elementos en el objeto
      if (objeto.length === 0) {
            // Ocultar elementos relacionados con la pregunta
            guardar_ecuesta.style.display="none";
           // contenedor_listo.style.display = "none";
            contenedor_opciones.forEach(element1 => {
            element1.style.display = "none";
            sBtn_text.innerText = "Diseño de opciones";
            opcion_checkbox.innerHTML = '';
            opcion_multiple.innerHTML = '';
            });
      }
      cerrarSideBarEditar(true);
}
    
// Función para borrar datos por ID en el almacenamiento local
function borrarDatoPorId(id) {
      // Obtener los datos del localStorage
      let datos = JSON.parse(localStorage.getItem("prueba1"));
  
      // Filtrar y eliminar el objeto con el ID específico
      datos = datos.filter(function (dato) {
          return dato.id !== id;
      });
  
      // Guardar los datos actualizados en el localStorage
      localStorage.setItem("prueba1", JSON.stringify(datos));
  
      // Comprobar si no quedan más elementos en los datos
      const newItemCount = datos.length;
      if (newItemCount < 1) {
          contenedor_diseño_pregunta.style.display = "block";
          contenedor_agregar_pregunta.style.display = "none";
      }
}  

// Función para eliminar las respuestas
function eliminarRespuesta(indice){
      // Obtener el botón para eliminar la respuesta
      const btn_eliminar_respuesta = document.getElementById(`${elementoAModificar.id}-eliminarRespuesta-${indice + 1}`);

      // Ocultar el contenedor del botón (respuesta a eliminar)
      const padre_btn_eliminar_respuesta = btn_eliminar_respuesta.parentElement;
      padre_btn_eliminar_respuesta.style.display = 'none';
      
      // Eliminar la respuesta en la vista
      const eliminarHTML = document.getElementById(elementoAModificar.id);
      eliminarHTML.querySelector(`#${elementoAModificar.id}-respuesta-${indice + 1}`).remove();

      // Encontrar la pregunta correspondiente en el objeto
      //const preguntaIndex = objeto.findIndex(item => item.id === elementoAModificar.id);

      if (preguntaIndex !== -1) {
            // Eliminar la respuesta del objeto de datos
            objeto[preguntaIndex].respuestas.splice(indice, 1);
    
            // Actualizar el objeto en el almacenamiento local
            localStorage.setItem("prueba1", JSON.stringify(objeto));
      }

      // Mostrar el sidebar actualizado
      mostrarSidebarEditar(elementoAModificar);

      // Llamar a la función para actualizar el ID de las respuestas (si es necesario)
      //actualizarIdRespuestas();
}

//=*AGREGAR
// Función para agregar respuestas tanto en la vista preguntas como en las vista sideBar
function agregarRespuesta(){   
      //const preguntaIndex = objeto.findIndex(item => item.id === elementoAModificar.id);

      if (preguntaIndex !== -1) {
            const elemento_local = objeto[preguntaIndex];

            // Crear una nueva respuesta
            const nuevaRespuesta = `Opción ${elemento_local.respuestas.length + 1}`;

            // Crear el HTML de la respuesta según el tipo de pregunta
            let respuestaHTML = '';

            if (elemento_local.tipo === "Opción simple") {
                  respuestaHTML = `
                      <div class="diseño-opciones" id="${elemento_local.id}-respuesta-${elemento_local.respuestas.length + 1}">
                          <label class="radio1">
                              <input type="radio" name="${elemento_local.pregunta}" value="${nuevaRespuesta}">
                              <span>${nuevaRespuesta}</span>
                          </label>
                      </div>
                  `;
            } else if (elemento_local.tipo === "Opción múltiple") {
                  respuestaHTML = `
                      <div class="diseño-opciones" id="${elemento_local.id}-respuesta-${elemento_local.respuestas.length + 1}">
                          <div class="checkbox-container">
                              <input class="checkbox-spin-1" type="checkbox" id="check-${elemento_local.id}-${elemento_local.pregunta}-${nuevaRespuesta}" name="check-${elemento_local.id}-${elemento_local.pregunta}" value="${nuevaRespuesta}">
                              <label for="check-${elemento_local.id}-${elemento_local.pregunta}-${nuevaRespuesta}">
                                  <div class="check-container-icon"><i>&#10004;</i></div>
                                  <span>${nuevaRespuesta}</span>
                              </label>
                          </div>
                      </div>
                  `;
            }

            // Obtener el contenedor de respuestas de la pregunta
            const divContenedor = document.getElementById(elementoAModificar.id);
            const contenedor_respuestas = divContenedor.querySelector('#contenedor-respuestas-pregunta');

            // Insertar el HTML de la nueva respuesta al final del contenedor
            contenedor_respuestas.insertAdjacentHTML('beforeend', respuestaHTML);

            // Actualizar los datos del objeto
            objeto[preguntaIndex].respuestas.push(nuevaRespuesta);

            // Actualizar los datos en el almacenamiento local
            localStorage.setItem("prueba1", JSON.stringify(objeto));

            // Mostrar el sidebar actualizado
            mostrarSidebarEditar(elementoAModificar);
      }
}

//=*MOSTRAR
const titulo_sidebar = document.querySelector('.titulo-editar-pregunta h2'); // Título del sidebar
const texto_pregunta = document.getElementById('pregunta-txt'); // Texto Pregunta
const contenedor_respuestas = document.getElementById('respuestas'); // Contenedor de respuestas
const acordeon_respuestas = document.getElementById('acordeon-respuestas');
const acordeon_pregunta = document.getElementById('acordeon-contenido mostrar');
const contenido_pregunta = document.getElementById('contenedor-pregunta');
// Función para actualizar la vista sideBar de las respuestas y preguntas
function mostrarSidebarEditar(elemento) {
      // Limpiar el contenedor de respuestas
      contenedor_respuestas.innerHTML = '';
 
      //const preguntaIndex = objeto.findIndex(item => item.id === elemento.id);
      const elemento_local = objeto[preguntaIndex];

      // Editar el encabezado del sidebar con el tipo de pregunta
      titulo_sidebar.textContent = elemento_local.tipo;

      // Mostrar la pregunta
      texto_pregunta.value = elemento_local.pregunta;

      // Mostrar las respuestas si es una pregunta de opción simple o múltiple
      if (elemento_local.tipo === "Opción simple" || elemento_local.tipo === "Opción múltiple") {
            acordeon_respuestas.style.display = "block";

            elemento_local.respuestas.forEach((respuesta, index) => {
                  // Contenedor de respuesta
                  const divElement = document.createElement('div');
                  divElement.classList.add('opciones-respuestas');
                  
                  // Textarea para la respuesta
                  const inputElement = document.createElement('textarea');
                  inputElement.textContent = respuesta;
                  inputElement.classList.add('respuesta-de-pregunta');
                  inputElement.id = `${elemento_local.id}-respuestaSide-${index + 1}`;
                  
                  // Icono para eliminar respuesta
                  const iconElement = document.createElement('i');
                  iconElement.classList.add('bi', 'bi-trash', 'elimar-opcion-respuesta');
                  iconElement.id = `${elemento_local.id}-eliminarRespuesta-${index + 1}`;
                  iconElement.addEventListener('click', () => {
                        eliminarRespuesta(index);
                  });

                  // Agregar el textarea y el icono al contenedor
                  divElement.appendChild(inputElement);
                  divElement.appendChild(iconElement);

                  // Agregar el contenedor al contenedor de respuestas
                  contenedor_respuestas.appendChild(divElement);
            });

            // Botón para agregar respuesta
            const buttonElement = document.createElement('button');
            buttonElement.classList.add('btn-agregar-respuesta');
            buttonElement.addEventListener('click', () => {
                  agregarRespuesta();
            });
            buttonElement.innerHTML = '<i class="bi bi-plus-lg icono-agregar-respuesta"></i>Agregar Respuesta';
            contenedor_respuestas.appendChild(buttonElement);

      } else {
            acordeon_respuestas.style.display = "none";
      }
      
      // Actualizar el ID de las respuestas
      actualizarIdRespuestas();
      editarRespuestas();
}

// Función para actualizar los IDs de las respuestas en la vista preguntas
function actualizarIdRespuestas() {
      // Obtener el elemento HTML a reemplazar
      const divARemplazar = document.getElementById(elementoAModificar.id);
  
      // Encontrar el índice de la pregunta en el objeto
      //const preguntaIndex = objeto.findIndex(item => item.id === elementoAModificar.id);
  
      // Obtener el elemento de pregunta correspondiente en el objeto
      const elemento_local = objeto[preguntaIndex];
  
      // Generar el HTML actualizado para la pregunta
      const divActualizado = generatePreguntaHTML(elemento_local.id, elemento_local.pregunta, elemento_local.respuestas, elemento_local.obligatorio, elemento_local.tipo);
  
      // Insertar el HTML actualizado después del elemento a reemplazar
      divARemplazar.insertAdjacentHTML('afterend', divActualizado);
  
      // Eliminar el elemento original
      divARemplazar.remove();
}
  
//=*EDITAR
// Cambios en la pregunta
texto_pregunta.addEventListener('input', () => {
      // Obtener el elemento HTML que se va a modificar
      const modificarHTML = document.getElementById(`${elementoAModificar.id}`);
    
      // Obtener el elemento de la pregunta en el HTML
      const preguntaAModificar = modificarHTML.querySelector('#pregunta-realizar');

      // Obtener el nuevo valor de la pregunta desde el textarea
      const nuevoValor = texto_pregunta.value;

      if (preguntaIndex !== -1) {
            // Actualizar la pregunta en el objeto de datos
            objeto[preguntaIndex].pregunta = nuevoValor;
    
            // Actualizar el objeto en el almacenamiento local
            localStorage.setItem("prueba1", JSON.stringify(objeto));
      }
      
      // Actualizar el valor en el HTML con el nuevo contenido
      preguntaAModificar.innerText = nuevoValor;

      // Llamar a la función para actualizar el ID de las respuestas (si es necesario)
      // actualizarIdRespuestas();
});


// Función para los cambios en las respuestas
function editarRespuestas(){
      // Obtener todas las respuestas de la pregunta
      const respuestas_de_pregunta = document.querySelectorAll('.respuesta-de-pregunta');

      respuestas_de_pregunta.forEach((opcion_respuesta, index) => {
            opcion_respuesta.addEventListener('input', () => {
                  // Obtener el nuevo valor de la respuesta desde el textarea
                  const nuevoValor = opcion_respuesta.value;

                  // Encontrar la pregunta correspondiente en el objeto
                  //const preguntaIndex = objeto.findIndex(item => item.id === elementoAModificar.id);

                  if (preguntaIndex !== -1) {
                        // Actualizar la respuesta en el objeto de datos
                        objeto[preguntaIndex].respuestas[index] = nuevoValor;
        
                        // Actualizar el objeto en el almacenamiento local
                        localStorage.setItem("prueba1", JSON.stringify(objeto));
                  }
                  
                  // Obtener el elemento HTML que se va a modificar
                  const modificarHTML = document.getElementById(`${elementoAModificar.id}`);
                  
                  // Encontrar el contenedor de la respuesta en el HTML
                  const contenedor_respuesta = modificarHTML.querySelector(`#${elementoAModificar.id}-respuesta-${index + 1}`);

                  // Obtener los elementos <span> del contenedor
                  const respuesta = contenedor_respuesta.querySelectorAll('span');

                  // Obtener el último <span> del contenedor
                  const ultimoSpan = respuesta[respuesta.length - 1];

                  // Actualizar el contenido del último <span> con el nuevo valor
                  ultimoSpan.textContent = nuevoValor;

                  // Llamar a la función para actualizar el ID de las respuestas (si es necesario)
                  //actualizarIdRespuestas();
            });
      });
}

// Elemento HTML que representa la opción de pregunta obligatoria
const opcion_pregunta_obligatoria = document.getElementById('opcion_rapida_pregunta_obligatoria');

function opcionPreguntaObligatoria(){
      //const preguntaIndex = objeto.findIndex(item => item.id === elementoAModificar.id);

      // Establecer el estado de la casilla de verificación según los datos del objeto
      opcion_pregunta_obligatoria.checked = objeto[preguntaIndex].obligatorio;

      opcion_pregunta_obligatoria.addEventListener("change", function() {
            // Obtener el elemento HTML que se va a modificar
            const modificarHTML = document.getElementById(`${elementoAModificar.id}`);
            // Encontrar el icono que indica si es obligatorio o no
            const icono_obligatorio = modificarHTML.querySelector(".color-obligatorio");

            // Actualizar el icono de obligatorio en el HTML
            icono_obligatorio.textContent = opcion_pregunta_obligatoria.checked ? "*" : " ";

            //const preguntaIndex = objeto.findIndex(item => item.id === elementoAModificar.id);
            if (preguntaIndex !== -1) {
                  // Actualizar el estado de obligatoriedad en el objeto de datos
                  objeto[preguntaIndex].obligatorio = opcion_pregunta_obligatoria.checked;

                  // Actualizar el objeto en el almacenamiento local
                  localStorage.setItem("prueba1", JSON.stringify(objeto));
            }
            // Llamar a la función para actualizar el ID de las respuestas (si es necesario)
            //actualizarIdRespuestas();
      });
}
/* */
var objeto_encuesta = JSON.parse(localStorage.getItem("encuesta1")) || [];

function inicializarVariablesEncuesta() {
    if (objeto_encuesta.length === 0) {
        objeto_encuesta.push({ id: "1", titulo: "", instruccion: "" });
        localStorage.setItem("encuesta1", JSON.stringify(objeto_encuesta));
    } else {
        if (objeto_encuesta[0].id === "1") {
            return;
        }
    }
}

inicializarVariablesEncuesta();

const tituloEncuesta = document.getElementById("titulo-encuesta");
const titulo = document.querySelector(".texto-titulo-encuesta");
const textarea = document.getElementById("textarea-titulo-encuesta");
const modificarTitulos = document.querySelector(".modificar-titulos");

if(objeto_encuesta[0].titulo !== ""){
      titulo.textContent = objeto_encuesta[0].titulo;
      textarea.value = objeto_encuesta[0].titulo;
      titulo.style.display = "block";
      textarea.style.display = "none";
      modificarTitulos.style.display = "flex";
      titulo.style.border = "solid 1px #099EBD";
}

tituloEncuesta.addEventListener("click", () => {
    titulo.style.display = "none";
    textarea.style.display = "block";
    modificarTitulos.style.display = "none";
    titulo.style.border = "solid 1px #099EBD";
    textarea.focus();
});

textarea.addEventListener("blur", () => {
    titulo.style.display = "block";
    textarea.style.display = "none";
    if(textarea.value.length === 0){
      modificarTitulos.style.display = "none";
      titulo.textContent = "AÑADIR INTRODUCCIÓN";
      titulo.style.border = "dashed 2px #099EBD";
    }else{
      modificarTitulos.style.display = "flex";
    }
});

modificarTitulos.addEventListener("click", () => {
    titulo.style.display = "none";
    textarea.style.display = "block";
    modificarTitulos.style.display = "none";
    textarea.focus();
});

textarea.addEventListener("input", () => {
    titulo.textContent = textarea.value;

    objeto_encuesta[0].titulo = textarea.value;
    localStorage.setItem("encuesta1", JSON.stringify(objeto_encuesta));
});
/*** */
const instruccionEncuesta = document.getElementById("instruccion-encuesta");
const instruccion = document.querySelector(".texto-instruccion-encuesta");
const textareaInstruccion = document.getElementById("textarea-instruccion-encuesta");
const modificarInstruccion = document.getElementById("overlay-instruccion");

if(objeto_encuesta[0].instruccion !== ""){
      instruccion.textContent = objeto_encuesta[0].instruccion;
      textareaInstruccion.value = objeto_encuesta[0].instruccion;
      instruccion.style.display = "block";
      textareaInstruccion.style.display = "none";
      modificarInstruccion.style.display = "flex";
      instruccion.style.border = "solid 1px #099EBD";
}

instruccionEncuesta.addEventListener("click", () => {
    instruccion.style.display = "none";
    textareaInstruccion.style.display = "block";
    modificarInstruccion.style.display = "none";
    instruccion.style.border = "solid 1px #099EBD";
    textareaInstruccion.focus();
});

textareaInstruccion.addEventListener("blur", () => {
    instruccion.style.display = "block";
    textareaInstruccion.style.display = "none";
    if(textareaInstruccion.value.length === 0){
      modificarInstruccion.style.display = "none";
      instruccion.textContent = "AÑADIR INSTRUCCION";
      instruccion.style.border = "dashed 2px #099EBD";
      instruccion.style.textAlign = "center";

    }else{
      modificarInstruccion.style.display = "flex";
      instruccion.style.textAlign = "start";
    }
});

modificarInstruccion.addEventListener("click", () => {
    instruccion.style.display = "none";
    textareaInstruccion.style.display = "block";
    modificarInstruccion.style.display = "none";
    textareaInstruccion.focus();
});

textareaInstruccion.addEventListener("input", () => {
    instruccion.textContent = textareaInstruccion.value;

    objeto_encuesta[0].instruccion = textareaInstruccion.value;
    localStorage.setItem("encuesta1", JSON.stringify(objeto_encuesta));
});


/* GUARDAR ENCUESTA */

const botonGuardarEncuesta = document.getElementById("guardar-encuesta");

botonGuardarEncuesta.addEventListener('click', () => {
  var objetoEstiloEncuesta = [];
  var preguntasEncuesta = JSON.parse(localStorage.getItem("prueba1"));
  var cantidadPreguntas = preguntasEncuesta.length; // Usar preguntasEncuesta directamente
  //var datosEncuesta = JSON.parse(localStorage.getItem("datosEncuesta"));
  var datosEncuesta = JSON.parse(localStorage.getItem("encuesta1"));
  var idEncuesta = localStorage.getItem("idEncuestaEditar"); // Obtener id de edición si existe

  var fecha = new Date();
  var opcionesFecha = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'America/Lima' };
  var fechaFormateada = fecha.toLocaleString('es-PE', opcionesFecha);

  var colorEncuesta = localStorage.getItem("color");
  var fuenteEncuesta = localStorage.getItem("fuente");
  var fondoEncuesta = localStorage.getItem("fondo");
  
  //var botonFinal = document.getElementById("valor-boton").value

  //console.log(botonFinal)

  objetoEstiloEncuesta.push({
    color: colorEncuesta,
    fuente: fuenteEncuesta,
    fondo: fondoEncuesta
  });

  var objetoEncuesta = {
    //id: idEncuesta || "e" + CryptoJS.SHA3(`${datosEncuesta.Titulo + datosEncuesta.Formato}`, { outputLength: 32 }).toString(),
    id: idEncuesta || "e" + CryptoJS.SHA3(`${datosEncuesta[0].titulo + datosEncuesta[0].instruccion}`, { outputLength: 32 }).toString(),
    Titulo: datosEncuesta[0].titulo,
    Instruccion: datosEncuesta[0].instruccion,
    cantidadPreguntas: cantidadPreguntas,
    Fecha: fechaFormateada,
    preguntasEncuesta: preguntasEncuesta,
    estiloEncuesta: objetoEstiloEncuesta,
   // botonFinal: botonFinal || "Listo"
  };

  var encuestas = JSON.parse(localStorage.getItem("Encuesta")) || [];

  // Buscar si la encuesta ya existe por su ID
  var index = encuestas.findIndex(e => e.id === objetoEncuesta.id);
  console.log(index)
  if (index !== -1) {
    console.log("actualizar")
    encuestas[index] = objetoEncuesta; // Actualizar si existe
  } else {
    encuestas.push(objetoEncuesta); // Agregar como nuevo si no existe
  }

  // Almacenar objetoEncuesta en el localStorage y borrar otros valores
  localStorage.setItem("Encuesta", JSON.stringify(encuestas));
  localStorage.removeItem("prueba1");
  localStorage.removeItem("encuesta1");
  localStorage.removeItem("datosEncuesta");
  localStorage.removeItem("color");
  localStorage.removeItem("fuente");
  localStorage.removeItem("fondo");
  localStorage.removeItem("idEncuestaEditar");

  window.location.href = 'encuesta.html';
});