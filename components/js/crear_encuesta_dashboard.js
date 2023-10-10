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
console.log(pregunta_obligatoria.checked);
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
            opcionesHTML = respuestas.map((b) => {
                  if (tipo === OPCION_RADIO) {
                        return `
                              <div class="diseño-opciones">
                                    <label class="radio1">
                                          <input type="radio" name="${pregunta}" value="${b}">
                                          <span>${b}</span>
                                    </label>
                              </div>
                        `;
                  } else if (tipo === OPCION_CHECKBOX) {
                        return `
                              <div class="diseño-opciones">
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
                  <span class="diseño-pregunta-span">${pregunta} <span class="color-obligatorio">${obligatorio ? "*":""}</span></span>
                        <div id="contenedor-respuestas-pregunta diseño-opciones">     
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

const contenedor_listo=document.querySelector(".contenedor-listo"); //FALTA REALIZAR EL BOTON LISTO
const htmlres = document.getElementById("contenedor-preguntas-realizadas");

function renderQuestions() {
  htmlres.innerHTML = "";
console.log("objeto ", objeto);
  objeto.forEach((item) => {
      console.log("item ", item);
      console.log("itemOf ",typeof item);
    const { id, pregunta, respuestas, obligatorio, tipo } = item;
    const htmlPregunta = generatePreguntaHTML(id, pregunta, respuestas, obligatorio, tipo);
    htmlres.innerHTML += htmlPregunta;
  });

  if (objeto.length == 0) {
    
    contenedor_diseño_pregunta.style.display="block"
    contenedor_agregar_pregunta.style.display="none"
 //   contenedor_listo.style.display="none"
    
  }else{
    contenedor_diseño_pregunta.style.display="none"
    contenedor_agregar_pregunta.style.display="flex"
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

renderQuestions();

const texto_simple=document.querySelector(".contendor-texto-simple");//No USO

//==EDITAR PREGUNTA
const sidebarEditarPregunta = document.getElementById('sidebar-editar-pregunta');
const btn_cerrar_editar = document.getElementById('btn-cerrar-editar');

function cerrarSideBarEditar(cerrar) {
      cerrar ? sidebarEditarPregunta.style.right = '-330px' : sidebarEditarPregunta.style.right = '0';
}

document.addEventListener('click', (event) => {
      if (!event.target.closest('.overlay') && !event.target.closest('.contenedor-editar-pregunta') && !event.target.closest('.btn-agregar-respuesta')) {
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


//==Controlador
var elementoAModificar;
//Obtener el id del elemento seleccionado y abrir el menu editar
const obtenerElemento=(elemento)=>{
      elementoAModificar = elemento;
      mostrarSidebarEditar(elementoAModificar);
      cerrarSideBarEditar(false);
      editarRespuestas();
      opcionPreguntaObligatoria();
      eliminarRespuesta(); //inicializar
}

//==ELIMINAR
const btn_eliminar_pregunta = document.getElementById('btn-eliminar-pregunta');
btn_eliminar_pregunta.addEventListener('click', () => {
      eliminar(elementoAModificar);
      cerrarSideBarEditar(true);
});

const eliminar=(elemento)=>{
      let htmlElemento=elemento
      htmlElemento.remove();
      // Actualizar el 'objeto' para reflejar los datos actualizados en el 'localStorage'
      objeto = objeto.filter(item => item.id !== elemento.id);

      borrarDatoPorId(htmlElemento.id);

      if (objeto.length == 0) {
        contenedor_listo.style.display="none"
        contenedor_opciones.forEach(element1 => {
          element1.style.display = "none";
          sBtn_text.innerText = "Diseño de opciones";
          opcion_checkbox.innerHTML = '';
          opcion_multiple.innerHTML = '';
        });
      }
}
    
function borrarDatoPorId(id) {
      // Obtener los datos del localStorage
      let datos = JSON.parse(localStorage.getItem("prueba1"));

      // Buscar y eliminar el objeto con el ID específico
      datos = datos.filter(function (dato) {
            return dato.id !== id;
      });

      // Guardar los datos actualizados en el localStorage
      localStorage.setItem("prueba1", JSON.stringify(datos));

      const newItemCount = datos.length;
      if (newItemCount < 1) {
            contenedor_diseño_pregunta.style.display="block"
            contenedor_agregar_pregunta.style.display="none"
      }
}

function eliminarRespuesta(respuesta){
      const btns_eliminar_respuesta = document.querySelectorAll('.elimar-opcion-respuesta');
      const preguntaIndex = objeto.findIndex(item => item.id === elementoAModificar.id);
      var indice;

      btns_eliminar_respuesta.forEach((btn_eliminar_respuesta) => {
            btn_eliminar_respuesta.addEventListener('click', () => {
                  const padreDelBoton = btn_eliminar_respuesta.parentElement;
                  padreDelBoton.style.display = 'none';
            });
      });

      if (preguntaIndex !== -1) {
            objeto[preguntaIndex].respuestas = objeto[preguntaIndex].respuestas.filter((str, index) => {
                  if (str === respuesta) {
                    indice = index; 
                    return false; 
                  }
                  return true; 
            });
            localStorage.setItem("prueba1", JSON.stringify(objeto));
      }

      if(respuesta){
            const elementosDiseñoOpciones = elementoAModificar.querySelectorAll('.diseño-opciones');
            const opcion_respuesta = elementosDiseñoOpciones[indice].querySelectorAll('span');
            const ultimoSpan = opcion_respuesta[opcion_respuesta.length - 1];
            const abuelo = ultimoSpan.parentElement.parentElement
            abuelo.parentNode.removeChild(abuelo);
      }

}
//==AGREGAR
function agregarRespuesta(){
      const preguntaIndex = objeto.findIndex(item => item.id === elementoAModificar.id);

      if (preguntaIndex !== -1) {
            objeto[preguntaIndex].respuestas.push(`Opción ${elemento_local.respuestas.length + 1}`);
            localStorage.setItem("prueba1", JSON.stringify(objeto));
      }

      mostrarSidebarEditar(elementoAModificar);
      cerrarSideBarEditar(false);
}

//==MOSTRAR
const titulo_sidebar = document.querySelector('.titulo-editar-pregunta h2');
const texto_pregunta = document.getElementById('pregunta');
const contenedor_respuestas = document.getElementById('respuestas');
const acordeon_respuestas = document.getElementById('acordeon-respuestas');
function mostrarSidebarEditar(elemento) {
      //Limpiar el contenedor respuestas
      contenedor_respuestas.innerHTML = ''; 

      const preguntaIndex = objeto.findIndex(item => item.id === elemento.id);
      elemento_local = objeto[preguntaIndex];
      console.log(objeto[preguntaIndex]);

      //Editar el encabezado de el sidebar
      titulo_sidebar.textContent = elemento_local.tipo;
      //Mostrar la pregunta
      texto_pregunta.textContent = elemento_local.pregunta;
      if(elemento_local.respuestas.length < 1){ //cambiar POR TIPO NO POR CANTIDAD
            acordeon_respuestas.style.display="none"
      }else{
            acordeon_respuestas.style.display="block"
            //Mostrar respuestas
            elemento_local.respuestas.forEach((respuesta, index) => {
                  //Contenedror
                  const divElement = document.createElement('div');
                  divElement.classList.add('opciones-respuestas');
                  //"Input"
                  const inputElement = document.createElement('textarea');
                  inputElement.textContent = respuesta;
                  inputElement.classList.add('respuesta-de-pregunta');
                  inputElement.classList.add(`numero-${index + 1}`);
                  //Icono eliminar
                  const iconElement = document.createElement('i');
                  iconElement.classList.add('bi');
                  iconElement.classList.add('bi-trash');
                  iconElement.classList.add('elimar-opcion-respuesta');
                  iconElement.addEventListener('click', () => {
                        eliminarRespuesta(respuesta);
                  });
                  iconElement.classList.add(`numero-${index + 1}`);
                  //Juntarlos
                  divElement.appendChild(inputElement);
                  divElement.appendChild(iconElement);
                  //Agregarlos
                  contenedor_respuestas.appendChild(divElement);
            });
            //Boton agregar
            const buttonElement = document.createElement('button');
            buttonElement.classList.add('btn-agregar-respuesta');
            buttonElement.addEventListener('click', () => {
                  agregarRespuesta();
            });
            buttonElement.innerHTML = '<i class="bi bi-plus-lg icono-agregar-respuesta"></i>Agregar Respuesta';
            contenedor_respuestas.appendChild(buttonElement);
      }
}

//==EDITAR
//pregunta
const preguntaSeleccionada = document.getElementById('pregunta');

preguntaSeleccionada.addEventListener('input', () => {
      const preguntaAModificar = elementoAModificar.querySelector('span');
      const nuevoValor = preguntaSeleccionada.value;
      
      // Actualiza el valor en el objeto del Local Storage
      const preguntaIndex = objeto.findIndex(item => item.id === elementoAModificar.id);
      
      if (preguntaIndex !== -1) {
            objeto[preguntaIndex].pregunta = nuevoValor;
            localStorage.setItem("prueba1", JSON.stringify(objeto));
      }

      // Actualiza el valor en el HTML
      preguntaAModificar.textContent = nuevoValor;
});

function editarRespuestas(){
      const respuestas_de_pregunta = document.querySelectorAll('.respuesta-de-pregunta');
      
      respuestas_de_pregunta.forEach((respuesta, index) => {
            respuesta.addEventListener('input', () => {
                  console.log(elementoAModificar);
                  const nuevoValor = respuesta.value;

                  const preguntaIndex = objeto.findIndex(item => item.id === elementoAModificar.id);

                  if (preguntaIndex !== -1) {
                        objeto[preguntaIndex].respuestas[index] = nuevoValor;
                        localStorage.setItem("prueba1", JSON.stringify(objeto));
                  }

                  const elementosDiseñoOpciones = elementoAModificar.querySelectorAll('.diseño-opciones');

                  const opcion_respuesta = elementosDiseñoOpciones[index].querySelectorAll('span');
                  const ultimoSpan = opcion_respuesta[opcion_respuesta.length - 1];
                  ultimoSpan.textContent = nuevoValor;
            });
      });
}

//Pregunta obligatoria Toggle
const opcion_pregunta_obligatoria = document.getElementById('opcion_rapida_pregunta_obligatoria');

function opcionPreguntaObligatoria(){
      const preguntaIndex = objeto.findIndex(item => item.id === elementoAModificar.id);
      opcion_pregunta_obligatoria.checked = objeto[preguntaIndex].obligatorio;

      opcion_pregunta_obligatoria.addEventListener("change", function() {
            const icono_obligatorio = elementoAModificar.querySelector(".color-obligatorio");
            icono_obligatorio.textContent = opcion_pregunta_obligatoria.checked ? "*" : "";

            const preguntaIndex = objeto.findIndex(item => item.id === elementoAModificar.id);

            if (preguntaIndex !== -1) {
                  objeto[preguntaIndex].obligatorio = opcion_pregunta_obligatoria.checked;
                  localStorage.setItem("prueba1", JSON.stringify(objeto));
            }
      });
}
