//Opciones
const opciones = {
      OPCION_RADIO: "Opción simple",
      OPCION_CHECKBOX: "Opción múltiple",
      OPCION_TEXTAREA: "Texto simple",
      OPCION_BARRA_CALOR: "NPS"
};
/**
 * *GREGAR PREGUNTA, AGREGAR TIPO DE RESPUESTA*/
// Elementos del DOM
const optionMenu = document.querySelector(".dropdown-agregar"); // Contenedor botón y del dropdown opciones
const selectBtn = optionMenu.querySelector(".select-btn-agregar"); // Botón que activa el dropdown opciones (Multiple,simple,texto,...)
const sBtnText = optionMenu.querySelector(".sBtn-text-agregar");// Texto del botón que activa el dropdown

const contenedorGeneralAgregar = document.getElementById("contenedor-opciones-agregar");// Donde se agrega o muestran la(s) respeusta(s)
const cntdorOpcionSimple = document.getElementById("cntdor-rptas-opcion-simple");//opcion-multiple-agregar // Contenedor en donde se agregarán las opcioen simple
const cntdorAgregarRespuestaSimple = document.getElementById("ctndor-agregar-rpta-opcion-simple");//boton-opcion-multiple-agregar// Contenedor que agrega una respuesta opcioen simple

const cntdorOpcionMultiple = document.getElementById("cntdor-rptas-opcion-multiple");//opcion-checkbox-agregar // Contenedor en donde se agregarán las opcioen multiple
const cntdorAgregarRespuestaMultiple = document.getElementById("ctndor-agregar-rpta-opcion-multiple");//boton-opcion-checkbox-agregar  // Botón que agrega una respuesta opcioen multiple

const cntdorOpcionTextArea = document.getElementById("cntdor-rpta-opcion-textArea");
const cntdorOpcionNpm = document.getElementById("cntdor-rpta-opcion-npm");

// Array para almacenar los objetos con el índice y el valor ingresado en los inputs
let valoresIngresados = [];

// Función para mostrar elementos según el tipo de pregunta
const mostrarElementos = (opcionSeleccionada) => {
      // Restablecer la visualización de todos los contenedores
      contenedorGeneralAgregar.style.display = "block";
      cntdorOpcionSimple.style.display = "none";
      cntdorOpcionSimple.innerHTML = ''
      cntdorOpcionMultiple.style.display = "none";
      cntdorOpcionMultiple.innerHTML = ''
      cntdorAgregarRespuestaSimple.style.display = "none";
      cntdorAgregarRespuestaMultiple.style.display = "none";
      cntdorOpcionTextArea.style.display = "none";
      cntdorOpcionNpm.style.display = "none";
      
      // Mostrar elementos específicos según la opción seleccionada
      switch (opcionSeleccionada) {
            case opciones.OPCION_RADIO:
                  cntdorOpcionSimple.style.display = "block";
                  cntdorAgregarRespuestaSimple.style.display = "flex";
                  break;
            case opciones.OPCION_CHECKBOX:
                  cntdorOpcionMultiple.style.display = "block";
                  cntdorAgregarRespuestaMultiple.style.display = "flex";
                  break;
            case opciones.OPCION_TEXTAREA:
                  cntdorOpcionTextArea.style.display = "flex";
                  break;
            case opciones.OPCION_BARRA_CALOR:
                  cntdorOpcionNpm.style.display = "flex";
                  break;
            default:
                  contenedorGeneralAgregar.style.display = "none"; // Ocultar si no se encuentra ninguna opción válida
      }
};

// Event listener para cada opción, si hace click en otro lado se cierra
document.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown-agregar')) {
            optionMenu.classList.remove("active");
      }
});

Object.values(opciones).forEach((opcion) => {
      const optionElement = optionMenu.querySelector(`.option-agregar[data-opciones="${opcion}"]`);
      optionElement.addEventListener("click", () => {
        sBtnText.innerText = opcion; // Cambiar nombre al botón de opciones
        optionMenu.classList.remove("active"); //Desactivar listado
        mostrarElementos(opcion);
      });
});

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active")); // Mostrar el listado de opciones


// * Multiple
const contenedorOpcionesSimple = document.getElementById("cntdor-rptas-opcion-simple");//opcion_multiple //Contenedor de casillas de tipo "multiple"
const botonAgregarOpcionSimple = document.getElementById("btn-agregar-rpta-opcion-simple");//mas-opcion-multiple-agregar //Botón de agregar opción "multiple"

// * Checkbox
const contenedorOpcionesMultiple = document.getElementById("cntdor-rptas-opcion-multiple") ;
const botonAgregarOpcionMultiple = document.getElementById("btn-agregar-rpta-opcion-multiple");

// Función para agregar una nueva opción de cualquier tipo
function agregarNuevaOpcion(tipo) {
      let template = '';
      if (tipo === 'simple') {
            template = `<div class="pregunta-opciones">
                              <label class="radio1">
                                    <input type="radio" name="r" value="clasica" disabled>
                                    <span></span>
                              </label>
                              <input class="input-opciones1 input-opciones1-agregar" type="text">
                              <div class="quitar-pregunta mas-pregunta">
                                    <a type="button"><i class="bi bi-dash simple-quitar-agregar"></i></a>
                              </div>
                        </div>`;
      } else if (tipo === 'multiple') {
            template = `<div class="pregunta-opciones">
                              <div class="checkbox referencia-checkbox-agregar">
                                    <input class="checkbox-spin" type="checkbox" id="check4" disabled style="display: none;"/>
                                    <label for="check4"><span></span></label>
                              </div>
                              <input class="input-opciones1 input-opciones1-agregar" type="text">
                              <div class="quitar-pregunta mas-pregunta">
                                    <a type="button"><i class="bi bi-dash multiple-quitar-agregar"></i></a>
                              </div>
                        </div>`;
      }

      const contenedor = tipo === 'multiple' ? contenedorOpcionesMultiple : contenedorOpcionesSimple;
      contenedor.insertAdjacentHTML("beforeend", template);

      actualizarValoresIngresados(tipo);
      agregarEventosEliminar(tipo);
}

// Función para actualizar los valores ingresados de la respuesta
function actualizarValoresIngresados(tipo) {
  const contenedor = tipo === 'multiple' ? contenedorOpcionesMultiple : contenedorOpcionesSimple;
  const nuevosInputs = contenedor.querySelectorAll(".input-opciones1-agregar");

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
  const contenedor  = tipo === 'multiple' ? contenedorOpcionesMultiple : contenedorOpcionesSimple;
  const nuevosDivs = contenedor.querySelectorAll(".pregunta-opciones");
  nuevosDivs.forEach((div) => {
    const iconoEliminar = div.querySelector(`.${tipo}-quitar-agregar`);
    iconoEliminar.addEventListener("click", () => {
      div.remove();
    });
  });
}

// Evento de clic para agregar una nueva opción "Simple"
botonAgregarOpcionSimple.addEventListener("click", () => {
  agregarNuevaOpcion('simple');
});

// Evento de clic para agregar una nueva opción "Multiple"
botonAgregarOpcionMultiple.addEventListener("click", () => {
  agregarNuevaOpcion('multiple');
});

// * CANCELAR PREGUNTA
const contenedorAgregarPregunta = document.getElementById("contenedor-agregar-pregunta"); //Contenedor para agregar +
const contenedorDiseñoPregunta = document.getElementById("pregunta-agregar"); // Todo el contenedor (pregunta y opciones)
const contenedorOpciones = document.getElementById("contenedor-opciones-agregar"); //Solo las opciones (radio,text,check,..)
const pregunta = document.querySelector(".texto-pregunta-agregar"); //La pregunta a realizar
const cancelar = document.querySelectorAll(".opcion-cancelar-agregar"); //Botón cancelar
const preguntaObligatoria = document.getElementById("pregunta_obligatoria");

function resetearFormulario() {
      pregunta.value = "";
      preguntaObligatoria.checked = false;
      valoresIngresados = [];
      sBtnText.innerText = "Diseño de opciones";
      cntdorOpcionSimple.innerHTML = '';
      cntdorOpcionMultiple.innerHTML = '';
      contenedorOpciones.style.display = "none";
}

cancelar.forEach(botonCancelar => {
      botonCancelar.addEventListener("click", () => {
            const valorLocalStorage = localStorage.getItem("prueba1");
            if (valorLocalStorage && JSON.parse(valorLocalStorage).length > 0) {
                  contenedorAgregarPregunta.style.display = "flex";
                  contenedorDiseñoPregunta.style.display = "none";
            } else {
                  contenedorDiseñoPregunta.style.display = "block";
                  contenedorAgregarPregunta.style.display = "none";
            }
            resetearFormulario();
      });
});

/*
//Opciones
      const OPCION_RADIO = "Opción simple";
      const OPCION_CHECKBOX = "Opción múltiple";
      const OPCION_TEXTAREA = "Texto simple";
      const OPCION_BARRA_CALOR = "NPS";

//Abrir lista de tipos de preguntas
const optionMenu=document.querySelector(".dropdown-agregar"), //div en donde se encuentran las opciones (checkbox, texto corto,...)
      selectBtn= optionMenu.querySelector(".select-btn-agregar"); //Botón en donde se abrirá el menú de opciones para agregar

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active")); // Mostrar el listado de opciones
document.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown-agregar')) {
            optionMenu.classList.remove("active");
      }
});

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
*/
// *GUARDAR PREGUNTA (en el local)
const botonGuardar=document.getElementById("guardar");
var preguntasGuardadas = JSON.parse(localStorage.getItem("prueba1")) || [];

// Función para guardar la pregunta localmente
function guardarPreguntaLocalmente() {
      const respuestas= document.querySelectorAll(".input-opciones1-agregar");
      const values = [];
      const preguntaValue = pregunta.value; 

      respuestas.forEach(input => {
        values.push(input.value);
      });
      
      if (preguntasGuardadas.some((item) => item.pregunta === preguntaValue)) {
        return; // Si la pregunta ya existe, no la agregues de nuevo
      }

      const id = CryptoJS.SHA3(`${values + pregunta.value + sBtnText.innerText}`, {outputLength:32}).toString();
      
      preguntasGuardadas.push({
            id: "f" + id,
            pregunta: pregunta.value,
            respuestas: values,
            obligatorio: preguntaObligatoria.checked,
            tipo: sBtnText.innerText
      });
      
      localStorage.setItem("prueba1", JSON.stringify(preguntasGuardadas));
      renderizarPreguntas();
      
      contenedorDiseñoPregunta.style.display="none";
      contenedorAgregarPregunta.style.display="flex";
      resetearFormulario();
}

botonGuardar.addEventListener("click", guardarPreguntaLocalmente);

// * RENDERIZAR PREGUNTAS
function generatePreguntaHTML(id, pregunta, respuestas, obligatorio, tipo) {
      let opcionesHTML = "";

      if (tipo === opciones.OPCION_RADIO || tipo === opciones.OPCION_CHECKBOX){
            opcionesHTML = respuestas.map((respuesta, index) => {
                  if (tipo === opciones.OPCION_RADIO) {
                        return `
                              <div class="diseño-opciones" id="${id}-respuesta-${index + 1}">
                                    <label class="radio1">
                                          <input type="radio" name="${pregunta}" value="${respuesta}">
                                          <span>${respuesta}</span>
                                    </label>
                              </div>
                        `;
                  } else if (tipo === opciones.OPCION_CHECKBOX) {
                        return `
                              <div class="diseño-opciones" id="${id}-respuesta-${index + 1}">
                                    <div class="checkbox-container">
                                          <input class="checkbox-spin-1" type="checkbox" id="check-${id}-${pregunta}-${respuesta}" name="check-${id}-${pregunta}" value="${respuesta}">
                                          <label for="check-${id}-${pregunta}-${respuesta}">
                                                <div class="check-container-icon"><i>&#10004;</i></div>
                                                <span>${respuesta}</span>
                                          </label>
                                    </div>
                              </div>
                        `;
                  }
            }).join("");
      } else if (tipo === opciones.OPCION_TEXTAREA) {
            opcionesHTML = `
                  <div class="diseño-opciones">
                        <textarea name="${id}" cols="30" rows="5"></textarea>
                  </div>
            `;
      } else if (tipo === opciones.OPCION_BARRA_CALOR) {
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

// const contenedor_listo=document.querySelector(".contenedor-listo"); // ?FALTA REALIZAR EL BOTON LISTO
const guardarEncuesta = document.getElementById("guardar-encuesta");
const htmlResultado= document.getElementById("contenedor-preguntas-realizadas");

// Función para renderizar preguntas
function renderizarPreguntas() {
      htmlResultado.innerHTML = "";
      preguntasGuardadas.forEach((item) => {
            const { id, pregunta, respuestas, obligatorio, tipo } = item;
            const htmlPregunta = generatePreguntaHTML(id, pregunta, respuestas, obligatorio, tipo);
            htmlResultado.innerHTML += htmlPregunta;
      });

      if (preguntasGuardadas.length == 0) {
            contenedorDiseñoPregunta.style.display="block";
            contenedorAgregarPregunta.style.display="none";
            guardarEncuesta.style.display="none";
            //contenedor_listo.style.display="none"
      }else{
            contenedorDiseñoPregunta.style.display="none";
            contenedorAgregarPregunta.style.display="flex";
            guardarEncuesta.style.display="flex";
            //contenedor_listo.style.display="block"
      }

      // Asignar estilos a los elementos DOM
      asignarEstilos();
}

// Función para asignar estilos a los elementos del DOM
function asignarEstilos() {
      const colorTituloEncuesta = document.getElementById("titulo-encuesta");
      const colorPregunta = document.querySelectorAll(".diseño-pregunta-span");
      const colorRespuestas = document.querySelectorAll(".diseño-opciones span");
      const datoC5 = window.localStorage.color; // ? QUÉ ES?
      
      colorTituloEncuesta.style.color = datoC5;
      colorPregunta.forEach((pregunta) => {
            pregunta.style.color = datoC5;
      });
      colorRespuestas.forEach((respuestas) => {
            respuestas.style.color = datoC5;
      });  
}

// Inicializar la vista
renderizarPreguntas();

// *FUNCIONES PARA PODER AGREGAR OTRA PREGUNTA
//const contenedorAgregarPregunta = document.getElementById("contenedor-agregar-pregunta"); //Contenedor para agregar +
contenedorAgregarPregunta.addEventListener("click", () => {
      contenedorDiseñoPregunta.style.display="block"
      contenedorAgregarPregunta.style.display="none"
});

// * SIDEBAR PREGUNTA
const sidebarEditarPregunta = document.getElementById('sidebar-editar-pregunta');
const btnCerrarEditar = document.getElementById('btn-cerrar-editar');

function cerrarSidebarEditar(cerrar) {
      sidebarEditarPregunta.style.right = cerrar ? '-330px' : '0';
}

document.addEventListener('click', (event) => {
      const isOverlay = event.target.closest('.overlay');
      const isContenedorEditar = event.target.closest('.contenedor-editar-pregunta');
      const isBtnAgregar = event.target.closest('.btn-agregar-respuesta');
      const isBtnEliminar = event.target.closest('.elimar-opcion-respuesta');

      if (!isOverlay && !isContenedorEditar && !isBtnAgregar && !isBtnEliminar) {
            cerrarSidebarEditar(true);
      }
});

btnCerrarEditar.addEventListener('click', () => {
      cerrarSidebarEditar(true);
});

// Función para el acordeón
const acordeonTitulos = document.querySelectorAll('.acordeon-titulo');

acordeonTitulos.forEach((titulo) => {
      titulo.addEventListener('click', () => {
            const contenido = titulo.nextElementSibling;
            contenido.classList.toggle('mostrar');
      });
});


// *CONTROLADOR
//var elementoSeleccionado;
//var preguntaIndex;
var elementoSeleccionado;
var indicePreguntaSeleccionada;

// Función para obtener el elemento seleccionado y abrir el menú de edición
const obtenerElementoSeleccionado = (elemento) => {
      elementoSeleccionado = elemento;
      const indicePregunta = preguntasGuardadas.findIndex(item => item.id === elementoSeleccionado.id);
      indicePreguntaSeleccionada = indicePregunta;
      mostrarSidebarEditar(elementoSeleccionado);
      cerrarSidebarEditar(false);
      editarRespuestas();
      opcionPreguntaObligatoria();
      txtTipoPregunta.innerHTML = preguntasGuardadas[indicePreguntaSeleccionada].tipo;
}
/*const obtenerElemento=(elemento)=>{
      elementoSeleccionado = elemento;
      const indexPregunta= preguntasGuardadas.findIndex(item => item.id === elementoSeleccionado.id);
      preguntaIndex = indexPregunta;
      mostrarSidebarEditar(elementoSeleccionado);
      cerrarSidebarEditar(false);
      editarRespuestas();
      opcionPreguntaObligatoria();
      txt_tipo_pregunta.innerHTML = preguntasGuardadas[preguntaIndex].tipo;
}*/

// *ELIMINAR
const btnEliminarPregunta = document.getElementById('btn-eliminar-pregunta');

btnEliminarPregunta.addEventListener('click', () => {
      eliminarPregunta();
      cerrarSidebarEditar(true);
});

// Función para eliminar la pregunta
const eliminarPregunta = () => {
      const eliminarHTML = document.getElementById(elementoSeleccionado.id);
      eliminarHTML.remove();
      preguntasGuardadas = preguntasGuardadas.filter(item => item.id !== elementoSeleccionado.id);
      borrarDatoPorId(elementoSeleccionado.id);

      if (preguntasGuardadas.length === 0) {
            guardarEncuesta.style.display="none";
            // contenedor_listo.style.display = "none";
            contenedorOpciones.forEach(element => {
                  element.style.display = "none";
                  sBtnText.innerText = "Diseño de opciones";
                  contenedorOpcionesSimple.innerHTML = '';
                  contenedorOpcionesMultiple.innerHTML = '';
            });
      }
      cerrarSidebarEditar(true);
}
    
// Función para borrar datos por ID en el almacenamiento local
function borrarDatoPorId(id) {
      let datos = JSON.parse(localStorage.getItem("prueba1"));
      datos = datos.filter(dato => dato.id !== id);
      localStorage.setItem("prueba1", JSON.stringify(datos));
  
      const newItemCount = datos.length;
      if (newItemCount < 1) {
            contenedorDiseñoPregunta.style.display = "block";
            contenedorAgregarPregunta.style.display = "none";
      }
} 

// Función para eliminar las respuestas
function eliminarRespuesta(indice){
      const btnEliminarRespuesta = document.getElementById(`${elementoSeleccionado.id}-eliminarRespuesta-${indice + 1}`);
      const padreBtnEliminarRespuesta  = btnEliminarRespuesta.parentElement;
      padreBtnEliminarRespuesta.style.display = 'none';
      
      // Eliminar la respuesta en la vista
      const eliminarHTML = document.getElementById(elementoSeleccionado.id);
      eliminarHTML.querySelector(`#${elementoSeleccionado.id}-respuesta-${indice + 1}`).remove();

      if (preguntaIndex !== -1) {
            preguntasGuardadas[preguntaIndex].respuestas.splice(indice, 1);
            localStorage.setItem("prueba1", JSON.stringify(preguntasGuardadas));
      }

      // Mostrar el sidebar actualizado
      mostrarSidebarEditar(elementoSeleccionado);
}

// *AGREGAR
// Función para agregar respuestas tanto en la vista preguntas como en las vista sideBar
function agregarRespuesta(){
      if (preguntaIndex !== -1) {
            const preguntaActual  = preguntasGuardadas[preguntaIndex];
            const nuevaRespuesta = `Opción ${preguntaActual.respuestas.length + 1}`;
            let respuestaHTML = '';

            if (preguntaActual.tipo === opciones.OPCION_RADIO) {
                  respuestaHTML = `
                      <div class="diseño-opciones" id="${preguntaActual.id}-respuesta-${preguntaActual.respuestas.length + 1}">
                          <label class="radio1">
                              <input type="radio" name="${preguntaActual.pregunta}" value="${nuevaRespuesta}">
                              <span>${nuevaRespuesta}</span>
                          </label>
                      </div>
                  `;
            } else if (preguntaActual.tipo === opciones.OPCION_CHECKBOX) {
                  respuestaHTML = `
                      <div class="diseño-opciones" id="${preguntaActual.id}-respuesta-${preguntaActual.respuestas.length + 1}">
                          <div class="checkbox-container">
                              <input class="checkbox-spin-1" type="checkbox" id="check-${preguntaActual.id}-${preguntaActual.pregunta}-${nuevaRespuesta}" name="check-${preguntaActual.id}-${preguntaActual.pregunta}" value="${nuevaRespuesta}">
                              <label for="check-${preguntaActual.id}-${preguntaActual.pregunta}-${nuevaRespuesta}">
                                  <div class="check-container-icon"><i>&#10004;</i></div>
                                  <span>${nuevaRespuesta}</span>
                              </label>
                          </div>
                      </div>
                  `;
            }

            const divContenedor = document.getElementById(elementoSeleccionado.id);
            const contenedorRespuestas  = divContenedor.querySelector('#contenedor-respuestas-pregunta');
            contenedorRespuestas .insertAdjacentHTML('beforeend', respuestaHTML);

            // Actualizar los datos del preguntasGuardadas y del almacenamiento local
            preguntasGuardadas[preguntaIndex].respuestas.push(nuevaRespuesta);
            localStorage.setItem("prueba1", JSON.stringify(preguntasGuardadas));

            // Mostrar el sidebar actualizado
            mostrarSidebarEditar();
      }
}

// *MOSTRAR
const tituloSidebar_SB = document.querySelector('.titulo-editar-pregunta h2'); // Título del sidebar
const textoPregunta_SB = document.getElementById('pregunta-txt'); // Texto Pregunta
const contenedorRespuestas_SB = document.getElementById('respuestas'); // Contenedor de respuestas
const acordeonRespuestas_SB = document.getElementById('acordeon-respuestas');
const acordeonPregunta_SB = document.getElementById('acordeon-contenido mostrar');
const contenidoPregunta_SB = document.getElementById('contenedor-pregunta');
const txtTipoPregunta_SB = document.getElementById("txt-tipo-pregunta");

// Función para actualizar la vista sideBar de las respuestas y preguntas
function mostrarSidebarEditar() {
      const preguntaActual = preguntasGuardadas[preguntaIndex];

      contenedorRespuestas_SB.innerHTML = '';
      tituloSidebar_SB.textContent = preguntaActual.tipo;

      // Mostrar la pregunta
      textoPregunta_SB.value = preguntaActual.pregunta;

      // Mostrar el tipo actual en Opciones
      txtTipoPregunta_SB.innerHTML = preguntasGuardadas[preguntaIndex].tipo;

      // Mostrar las respuestas si es una pregunta de opción simple o múltiple
      if (preguntaActual.tipo === opciones.OPCION_RADIO || preguntaActual.tipo === opciones.OPCION_CHECKBOX) {
            acordeonRespuestas_SB.style.display = "block";

            preguntaActual.respuestas.forEach((respuesta, index) => {
                  // Contenedor de respuesta
                  const divElement = document.createElement('div');
                  divElement.classList.add('opciones-respuestas');
                  
                  // Textarea para la respuesta
                  const inputElement = document.createElement('textarea');
                  inputElement.textContent = respuesta;
                  inputElement.classList.add('respuesta-de-pregunta');
                  inputElement.id = `${preguntaActual.id}-respuestaSide-${index + 1}`;
                  
                  // Icono para eliminar respuesta
                  const iconElement = document.createElement('i');
                  iconElement.classList.add('bi', 'bi-trash', 'elimar-opcion-respuesta');
                  iconElement.id = `${preguntaActual.id}-eliminarRespuesta-${index + 1}`;
                  iconElement.addEventListener('click', () => {
                        eliminarRespuesta(index);
                  });

                  // Agregar el textarea y el icono al contenedor
                  divElement.appendChild(inputElement);
                  divElement.appendChild(iconElement);

                  // Agregar el contenedor al contenedor de respuestas
                  contenedorRespuestas_SB.appendChild(divElement);
            });

            // Botón para agregar respuesta
            const buttonElement = document.createElement('button');
            buttonElement.classList.add('btn-agregar-respuesta');
            buttonElement.addEventListener('click', () => {
                  agregarRespuesta();
            });
            buttonElement.innerHTML = '<i class="bi bi-plus-lg icono-agregar-respuesta"></i>Agregar Respuesta';
            contenedorRespuestas_SB.appendChild(buttonElement);

      } else {
            acordeonRespuestas_SB.style.display = "none";
      }
      
      // Actualizar el ID de las respuestas
      actualizarIdRespuestas();
      editarRespuestas();
}

// Función para actualizar los IDs de las respuestas en la vista preguntas
function actualizarIdRespuestas() {
      const divARemplazar = document.getElementById(elementoSeleccionado.id);
      const preguntaActual = preguntasGuardadas[preguntaIndex];
  
      // Generar el HTML actualizado para la pregunta
      const divActualizado = generatePreguntaHTML(
            preguntaActual.id, 
            preguntaActual.pregunta, 
            preguntaActual.respuestas, 
            preguntaActual.obligatorio, 
            preguntaActual.tipo
      );
  
      divARemplazar.insertAdjacentHTML('afterend', divActualizado);
      divARemplazar.remove();
}
  
// *EDITAR
// Cambiar la pregunta
textoPregunta_SB.addEventListener('input', () => {
      const modificarHTML = document.getElementById(`${elementoSeleccionado.id}`);
      const preguntaAModificar = modificarHTML.querySelector('#pregunta-realizar');
      const nuevoValor = textoPregunta_SB.value;

      if (preguntaIndex !== -1) {
            preguntasGuardadas[preguntaIndex].pregunta = nuevoValor;
            localStorage.setItem("prueba1", JSON.stringify(preguntasGuardadas));
      }
      
      // Actualizar el valor en el HTML con el nuevo contenido
      actualizarContenidoHTML(preguntaAModificar, nuevoValor);
  });
  
function actualizarContenidoHTML(elemento, nuevoContenido) {
      if (elemento) {
            elemento.innerText = nuevoContenido;
      }
}

// Función para los cambios en las respuestas
function editarRespuestas(){
      const respuestasDePregunta = document.querySelectorAll('.respuesta-de-pregunta');

      respuestasDePregunta.forEach((opcionRespuesta, index) => {
            opcionRespuesta.addEventListener('input', () => {
                  const nuevoValor = opcionRespuesta.value;

                  if (preguntaIndex !== -1) {
                        preguntasGuardadas[preguntaIndex].respuestas[index] = nuevoValor;
                        localStorage.setItem("prueba1", JSON.stringify(preguntasGuardadas));
                  }
                  
                  const modificarHTML = document.getElementById(`${elementoSeleccionado.id}`);
                  const contenedorRespuesta = modificarHTML.querySelector(`#${elementoSeleccionado.id}-respuesta-${index + 1}`);

                  // Obtener los elementos <span> del contenedor
                  const respuesta = contenedorRespuesta.querySelectorAll('span');
                  const ultimoSpan = respuesta[respuesta.length - 1];
                  ultimoSpan.textContent = nuevoValor;
            });
      });
}

// Elemento HTML que representa la opción de pregunta obligatoria
const preguntaObligatoria_SB = document.getElementById('opcion_rapida_pregunta_obligatoria');

function opcionPreguntaObligatoria() {
      preguntaObligatoria_SB.checked = preguntasGuardadas[preguntaIndex].obligatorio;

      preguntaObligatoria_SB.addEventListener("change", () => {
            const modificarHTML = document.getElementById(`${elementoSeleccionado.id}`);
            const iconoObligatorio = modificarHTML.querySelector(".color-obligatorio");

            // Actualizar el icono de obligatorio en el HTML
            iconoObligatorio.textContent = preguntaObligatoria_SB.checked ? "*" : " ";

            if (preguntaIndex !== -1) {
                  preguntasGuardadas[preguntaIndex].obligatorio = preguntaObligatoria_SB.checked;
                  localStorage.setItem("prueba1", JSON.stringify(preguntasGuardadas));
            }
      });
}

var encabezadoEncuesta = JSON.parse(localStorage.getItem("encuesta1")) || [];
//objeto_encuesta
function inicializarVariablesEncuesta() {
      if (encabezadoEncuesta.length === 0) {
            encabezadoEncuesta.push({ id: "1", titulo: "", instruccion: "" });
            localStorage.setItem("encuesta1", JSON.stringify(encabezadoEncuesta));
      } else {
            if (encabezadoEncuesta[0].id === "1") {
                  return;
            }
      }
}

inicializarVariablesEncuesta();

// * Editar Título de la encuesta
const tituloEncuesta = document.getElementById("titulo-encuesta");
const titulo = document.querySelector(".texto-titulo-encuesta");
const textAreaTitulo = document.getElementById("textarea-titulo-encuesta");
const modificarTitulos = document.querySelector(".modificar-titulos");

if(encabezadoEncuesta[0].titulo !== ""){
      titulo.textContent = encabezadoEncuesta[0].titulo;
      textAreaTitulo.value = encabezadoEncuesta[0].titulo;
      titulo.style.display = "block";
      textAreaTitulo.style.display = "none";
      modificarTitulos.style.display = "flex";
      titulo.style.border = "solid 1px #099EBD";
}

tituloEncuesta.addEventListener("click", () => {
      titulo.style.display = "none";
      textAreaTitulo.style.display = "block";
      modificarTitulos.style.display = "none";
      titulo.style.border = "solid 1px #099EBD";
      textAreaTitulo.focus();
});

textAreaTitulo.addEventListener("blur", () => {
      titulo.style.display = "block";
      textAreaTitulo.style.display = "none";
      if(textAreaTitulo.value.length === 0){
            modificarTitulos.style.display = "none";
            titulo.textContent = "AÑADIR INTRODUCCIÓN";
            titulo.style.border = "dashed 2px #099EBD";
      }else{
            modificarTitulos.style.display = "flex";
      }
});

modificarTitulos.addEventListener("click", () => {
    titulo.style.display = "none";
    textAreaTitulo.style.display = "block";
    modificarTitulos.style.display = "none";
    textAreaTitulo.focus();
});

textAreaTitulo.addEventListener("input", () => {
    titulo.textContent = textAreaTitulo.value;
    encabezadoEncuesta[0].titulo = textAreaTitulo.value;
    localStorage.setItem("encuesta1", JSON.stringify(encabezadoEncuesta));
});

// * Editar Instrucción de la encuesta
const instruccionEncuesta = document.getElementById("instruccion-encuesta");
const instruccion = document.querySelector(".texto-instruccion-encuesta");
const textareaInstruccion = document.getElementById("textarea-instruccion-encuesta");
const modificarInstruccion = document.getElementById("overlay-instruccion");

if(encabezadoEncuesta[0].instruccion !== ""){
      instruccion.textContent = encabezadoEncuesta[0].instruccion;
      textareaInstruccion.value = encabezadoEncuesta[0].instruccion;
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
      encabezadoEncuesta[0].instruccion = textareaInstruccion.value;
      localStorage.setItem("encuesta1", JSON.stringify(encabezadoEncuesta));
});

// * Dropdown tipo pregunta 
const dropdownContent = document.getElementById("content-dropdown-tipo-preguntas");
const dropdownTipoPregunta =document.querySelector(".dropdown-tipo-pregunta"); 
const selectBtnTipoPregunta = dropdownTipoPregunta.querySelector(".select-btn-agregar"); 

selectBtnTipoPregunta.addEventListener("click", () => dropdownTipoPregunta.classList.toggle("active"));
dropdownContent.style.display="none";

function mostrarDropDownTipoPregunta() {
      if (dropdownContent.style.display === "none") {
            dropdownContent.style.display = "block";
      } else {
            dropdownContent.style.display = "none";
      }
}

/* Cambiar el tipo en DROP DOWN de EDICION*/
const tiposPregunta  = dropdownContent.querySelectorAll(".opc-tipo-pregunta");

tiposPregunta.forEach((tipoPregunta, index) => {
      tipoPregunta.addEventListener("click", () => {
            switch (index){
                  case 0:
                        if(preguntasGuardadas[preguntaIndex].tipo === opciones.OPCION_TEXTAREA || preguntasGuardadas[preguntaIndex].tipo === opciones.OPCION_BARRA_CALOR){
                              preguntasGuardadas[preguntaIndex].respuestas = ["Opción 1"]; 
                        }
                        preguntasGuardadas[preguntaIndex].tipo = opciones.OPCION_RADIO;
                        break;
                  case 1:
                        if(preguntasGuardadas[preguntaIndex].tipo === opciones.OPCION_TEXTAREA || preguntasGuardadas[preguntaIndex].tipo === opciones.OPCION_BARRA_CALOR){
                              preguntasGuardadas[preguntaIndex].respuestas = ["Opción 1"]; 
                        }
                        preguntasGuardadas[preguntaIndex].tipo = opciones.OPCION_CHECKBOX;
                        break;
                  case 2:
                        preguntasGuardadas[preguntaIndex].tipo = opciones.OPCION_TEXTAREA;
                        preguntasGuardadas[preguntaIndex].respuestas = [];
                        break;
                  case 3:
                        preguntasGuardadas[preguntaIndex].tipo = opciones.OPCION_BARRA_CALOR;
                        preguntasGuardadas[preguntaIndex].respuestas = [];
                        break;
            }
            localStorage.setItem("prueba1", JSON.stringify(preguntasGuardadas));
            actualizarIdRespuestas();
            mostrarSidebarEditar();
    });
});

// * Duplicar Pregunta
const btnDuplicarPregunta = document.getElementById("btn-duplicar-pregunta");

btnDuplicarPregunta.addEventListener('click', () => {
      preguntasGuardadas.splice(preguntaIndex + 1, 0, preguntasGuardadas[preguntaIndex]); //! Falta Implementar, primero es agregar el ID unico a todas las preguntas
});

// * GUARDAR ENCUESTA 
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
      if (index !== -1) {
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

/* 
      * Creacion del UUID
      * Genera un nuevo UUID
      var newUUID = uuidv4();
  
      * Obtén el elemento donde deseas mostrar el UUID
      var uuidElement = document.getElementById("uuid");
      * Establece el valor del elemento
      uuidElement.textContent = newUUID;
*/