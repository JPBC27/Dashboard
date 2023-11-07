var preguntasGuardadas = JSON.parse(localStorage.getItem("prueba1")) || [];
var encabezadoEncuesta = JSON.parse(localStorage.getItem("encuesta1")) || [];
var estilosGuardados = JSON.parse(localStorage.getItem("estilos")) || {};

//Opciones
const opciones = {
    OPCION_RADIO: "Opción simple",
    OPCION_CHECKBOX: "Opción múltiple",
    OPCION_TEXTAREA: "Texto simple",
    OPCION_BARRA_CALOR: "NPS"
};

// * Mostrar Titulo, instrucción, botón
// Titulo de la encuesta
function mostrarTituloEncuesta (){
    let encabezadoEncuesta = JSON.parse(localStorage.getItem("encuesta1")) || [];
    const titulo = document.querySelector(".texto-titulo-encuesta");

    if (encabezadoEncuesta[0].titulo === ""){
        //titulo.textContent = "NO TITULO";
        titulo.style.display = "none";
    }else{
        titulo.textContent = encabezadoEncuesta[0].titulo.toUpperCase();
    }

    mostrarInstruccionEncuesta(encabezadoEncuesta);
}

// Instrucción de la encuesta
function mostrarInstruccionEncuesta(encabezadoEncuesta){
    const instruccion = document.querySelector(".texto-instruccion-encuesta");

    if (encabezadoEncuesta[0].instruccion === ""){
        //instruccion.textContent = "No instrucción";
        instruccion.style.display = "none";
    }else{
        instruccion.textContent = encabezadoEncuesta[0].instruccion;
    }

    botonEnviarEncuesta(encabezadoEncuesta);
}

function botonEnviarEncuesta(encabezadoEncuesta){
    const btnEnviarEncuesta = document.querySelector(".texto-btnEnviar"); 

    if (!encabezadoEncuesta[0].txtBtnEnviar || encabezadoEncuesta[0].txtBtnEnviar === ""){
        btnEnviarEncuesta.textContent = "ENVIAR ENCUESTA";
    }else{
        btnEnviarEncuesta.textContent = encabezadoEncuesta[0].txtBtnEnviar;
    }
    mostrarLogoEncuesta(encabezadoEncuesta);
}

function mostrarLogoEncuesta(encabezadoEncuesta){
      const imageLogoBoton = document.getElementById('imgEmpresa');
      console.log(imageLogoBoton);
      imageLogoBoton.src =encabezadoEncuesta[0].imagenEncuesta;
      imageLogoBoton.style.width = "120px";
      imageLogoBoton.style.height = "120px";
      imageLogoBoton.style.backgroundColor = "unset";
      imageLogoBoton.style.display = "flex";
      imageLogoBoton.style.alignItems= "center";
      imageLogoBoton.style.justifyContent= "center";
      imageLogoBoton.style.borderRadius = "8px"; // Eliminar borde
}

mostrarTituloEncuesta();

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
                              <input type="radio" name="${pregunta}" value="10" id="${id}_option10"><label for="${id}_option10">10</label>
                              <input type="radio" name="${pregunta}" value="9" id="${id}_option9" ><label for="${id}_option9">9</label>
                              <input type="radio" name="${pregunta}" value="8" id="${id}_option8" ><label for="${id}_option8">8</label>
                              <input type="radio" name="${pregunta}" value="7" id="${id}_option7" ><label for="${id}_option7">7</label>
                              <input type="radio" name="${pregunta}" value="6" id="${id}_option6" ><label for="${id}_option6">6</label>
                              <input type="radio" name="${pregunta}" value="5" id="${id}_option5" ><label for="${id}_option5">5</label>
                              <input type="radio" name="${pregunta}" value="4" id="${id}_option4" ><label for="${id}_option4">4</label>
                              <input type="radio" name="${pregunta}" value="3" id="${id}_option3" ><label for="${id}_option3">3</label>
                              <input type="radio" name="${pregunta}" value="2" id="${id}_option2" ><label for="${id}_option2">2</label>
                              <input type="radio" name="${pregunta}" value="1" id="${id}_option1" ><label for="${id}_option1">1</label>
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
          </div>
    `;
}

const htmlResultado= document.getElementById("contenedor-preguntas-realizadas");

// Función para renderizar preguntas
function renderizarPreguntas() {
    htmlResultado.innerHTML = "";
    preguntasGuardadas.forEach((item) => {
          const { id, pregunta, respuestas, obligatorio, tipo } = item;
          const htmlPregunta = generatePreguntaHTML(id, pregunta, respuestas, obligatorio, tipo);
          htmlResultado.innerHTML += htmlPregunta;
    });
}

renderizarPreguntas();

function renderizarEstilos() {
    let estilosGuardados = JSON.parse(localStorage.getItem("estilos")) || {};
    const contenedorEncuesta = document.getElementById("contenedor-encuesta");

    if('fondo' in estilosGuardados){ //Si hay un fondo, lo pone en el background
        contenedorEncuesta.style.backgroundImage = `url(${estilosGuardados.fondo})`;
    }
}

renderizarEstilos()

console.log(preguntasGuardadas);
console.log(encabezadoEncuesta[0]);
console.log(estilosGuardados);