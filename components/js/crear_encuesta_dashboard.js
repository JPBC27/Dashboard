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
                  <div class="overlay" id="editar-eliminar-${id}" nombre-elemento="${tipo}">
                        <i class="bi bi-pencil"></i>
                        <span>Editar pregunta</span>
                  </div>
            </div>
      `;
}

//const contenedor_listo=document.querySelector(".contenedor-listo"); //botón Listo //FALTA REALIZAR EL BOTON LISTO
const htmlres = document.getElementById("contenedor-preguntas-realizadas");

function renderQuestions() {
  htmlres.innerHTML = "";

  objeto.forEach((item) => {
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
const divPreguntas = document.querySelectorAll('.pregunta-individual');
const sidebarEditarPregunta = document.getElementById('sidebar-editar-pregunta');
const btn_cerrar_editar = document.getElementById('btn-cerrar-editar');

divPreguntas.forEach((divPregunta) => {
      divPregunta.addEventListener('click', (e) => {
      e.stopPropagation();
            if (sidebarEditarPregunta.style.right === '-330px' || !sidebarEditarPregunta.style.right) {
                  sidebarEditarPregunta.style.right = '0';
            }
      });
});

document.addEventListener('click', (event) => {
      if (!sidebarEditarPregunta.contains(event.target) && !event.target.classList.contains('pregunta-individual')) {
            sidebarEditarPregunta.style.right = '-330px';   
      }
});

btn_cerrar_editar.addEventListener('click', (event) => {
      sidebarEditarPregunta.style.right = '-330px';
});

//Acordeon
const acordeonTitulos = document.querySelectorAll('.acordeon-titulo');
acordeonTitulos.forEach((titulo) => {
  titulo.addEventListener('click', () => {
    const contenido = titulo.nextElementSibling;
    contenido.classList.toggle('mostrar');
  });
});


//CRUD
var overlays = document.querySelectorAll(".overlay");
overlays.forEach(function(overlay) {
      overlay.addEventListener("click", function() {
    // Obtener el ID del elemento cuando se hace clic en él
    var id = overlay.id;
    console.log("ID del elemento: " + id);
  });
});


const inpCheckbocs = document.querySelectorAll('.input-checkbox');
const preguntaSeleccionada = document.getElementById('pregunta');
var elemento;
//ELIMINAR

// ==================================
// FUNCION PARA ELIMINAR PREGUNTA
// ==================================
const eliminar=(id)=>{
      let idinput1=id
      // console.log(idinput1)
      idinput1.remove();
    
      // Actualizar el 'objeto' para reflejar los datos actualizados en el 'localStorage'
      objeto = objeto.filter(item => item.id !== id.id);
      // localStorage.removeItem("prueba1");
      borrarDatoPorId(idinput1.id);
      // console.log(objeto.length)
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

// Agrega un evento de clic al botón de eliminar en el sidebar
