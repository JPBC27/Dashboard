// ==================================
// FUNCIONES DEL DROPDOWN
// ============================

const optionMenu=document.querySelector(".dropdown-agregar"),
      selectBtn= optionMenu.querySelector(".select-btn-agregar"),
      options= optionMenu.querySelectorAll(".option-agregar"),
      sBtn_text= optionMenu.querySelector(".sBtn-text-agregar");

const menu_multiple= document.getElementById("opcion-multiple-agregar"),
      casilla_verificacion=document.getElementById("opcion-checkbox-agregar"),
      texto_simple=document.querySelector(".contendor-texto-simple"),
      control_deslizante=document.querySelector(".contendor-control-deslizante"),
      contenedor_opcion_multiple=document.getElementById("boton-opcion-multiple-agregar"),
      contenedor_opcion_checkbox=document.getElementById("boton-opcion-checkbox-agregar");
      contenedor_opcion_textArea=document.getElementById("opcion-textArea-agregar");
const contenedor_general=document.getElementById("contenedor-opciones-agregar")
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

      options.forEach(option =>{
        option.addEventListener("click", ()=>{
          let selectedOption=option.querySelector(".option-text-agregar").innerText;
          sBtn_text.innerText= selectedOption;
          
          optionMenu.classList.remove("active");
          // console.log(selectedOption)

          // ==================================
          // FUNCIONES PARA OPCIONES DE PREGUNTA
          // =====================================

          if(selectedOption=="Opción múltiples"){
            contenedor_general.style.display="block"
            menu_multiple.style.display ="block";
            casilla_verificacion.style.display ="none";
            // texto_simple.sty le.display="none";
            // control_deslizante.style.display="none";
            opcion_checkbox.innerHTML=''
            contenedor_opcion_multiple.style.display="flex"
            contenedor_opcion_checkbox.style.display="none"
            contenedor_opcion_textArea.style.display="none"
          }

          else if(selectedOption=="Casillas de verificación"){
            contenedor_general.style.display="block"

            menu_multiple.style.display ="none";
            casilla_verificacion.style.display ="block";
            // texto_simple.style.display="none";
            // control_deslizante.style.display="none";
            opcion_multiple.innerHTML=''
            contenedor_opcion_multiple.style.display="none"
            contenedor_opcion_checkbox.style.display="flex"
            contenedor_opcion_textArea.style.display="none"
          }
          else if(selectedOption=="Texto simple"){
            contenedor_general.style.display="block"

            menu_multiple.style.display ="none";
            casilla_verificacion.style.display ="none";
            // texto_simple.style.display="block";
            // control_deslizante.style.display="none";
            opcion_checkbox.innerHTML=''
            opcion_multiple.innerHTML=''
            contenedor_opcion_multiple.style.display="none"
            contenedor_opcion_checkbox.style.display="none"
            contenedor_opcion_textArea.style.display="block"
          }
          else {
            menu_multiple.style.display ="none";
            casilla_verificacion.style.display ="none";
            // texto_simple.style.display="none";
            // control_deslizante.style.display="block";
            opcion_checkbox.innerHTML=''
            opcion_multiple.innerHTML=''
            contenedor_opcion_multiple.style.display="none"
            contenedor_opcion_checkbox.style.display="none"
          }

        })
      })





// ==================================
// FUNCIONES PARA  BOTON MAS MULTIPLES
// ============================

const opcion_multiple=document.getElementById("opcion-multiple-agregar")
const mas_opcion_multiple=document.getElementById("mas-opcion-multiple-agregar")

// Declara un array para almacenar los objetos con el índice y el valor ingresado en los inputs
let valoresIngresados = [];

mas_opcion_multiple.addEventListener("click", () => {
  const temp = `
    <div class="pregunta-opciones">
      <label class="radio1">
        <input type="radio" name="r" value="clasica" disabled>
        <span></span>
      </label>
      <input class="input-opciones1 input-opciones1-agregar" type="text">
      <i class="bi bi-dash-circle multiple-quitar-agregar"></i>
    </div>
  `;

  opcion_multiple.innerHTML += temp;

  // Obtiene todos los inputs recién agregados
  const nuevosInputs = opcion_multiple.querySelectorAll(".input-opciones1-agregar");

  // Almacena los valores ingresados en el array de objetos
  nuevosInputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
      const valor = event.target.value;
      valoresIngresados[index] = { index, valor };
    });
  });

  // Muestra los valores almacenados en los inputs cuando se hace clic en "Agregar más input"
  nuevosInputs.forEach((input, index) => {
    input.value = valoresIngresados[index] ? valoresIngresados[index].valor : "";
  });

  // Obtiene todos los divs recién agregados
  const nuevosDivs = opcion_multiple.querySelectorAll(".pregunta-opciones");

  // Agrega el evento de clic para eliminar el div cuando se hace clic en el icono
  nuevosDivs.forEach((div) => {
    const iconoEliminar = div.querySelector(".multiple-quitar-agregar");
    iconoEliminar.addEventListener("click", () => {
      div.remove();
    });
  });
  
});

// ==================================
// FUNCIONES PARA  BOTON MAS CHECKBOX
// ============================

const opcion_checkbox=document.getElementById("opcion-checkbox-agregar")
const mas_opcion_checkbox=document.getElementById("mas-opcion-checkbox-agregar")

mas_opcion_checkbox.addEventListener("click",()=>{
  // console.log("hola")
  const temp1=`
  <div class="pregunta-opciones">
    <div class="checkbox">
      <input class="checkbox-spin" type="checkbox" id="check4" disabled/>
      <label for="check4"><span></span></label>
    </div>
      <input class="input-opciones1 input-opciones1-agregar" type="text">
      <i class="bi bi-dash-circle verificacion-quitar-agregar"></i>
    </div>
`
  // opcion_multiple.insertAdjacentHTML("beforeend",temp) =temp
  opcion_checkbox.innerHTML+=temp1;

  // Obtiene todos los inputs recién agregados
  const nuevosInputsC = opcion_checkbox.querySelectorAll(".input-opciones1-agregar");

  // Almacena los valores ingresados en el array de objetos
  nuevosInputsC.forEach((input, index) => {
    input.addEventListener("input", (event) => {
      const valor = event.target.value;
      valoresIngresados[index] = { index, valor };
    });
  });

  // Muestra los valores almacenados en los inputs cuando se hace clic en "Agregar más input"
  nuevosInputsC.forEach((input, index) => {
    input.value = valoresIngresados[index] ? valoresIngresados[index].valor : "";
  });

   // Obtiene todos los divs recién agregados
  const nuevosDivsC = opcion_checkbox.querySelectorAll(".pregunta-opciones");

  // Agrega el evento de clic para eliminar el div cuando se hace clic en el icono
  nuevosDivsC.forEach((div) => {
    const iconoEliminar = div.querySelector(".verificacion-quitar-agregar");
    iconoEliminar.addEventListener("click", () => {
      div.remove();
    });
  });
  
})

// ==================================
// FUNCIONES BOTON CANCELAR
// ============================
const cancelar=document.querySelectorAll(".opcion-cancelar-agregar")
const contenedor_opciones=document.querySelectorAll(".contenedor-opciones-agregar")
const contenedor_agregar_pregunta=document.getElementById("contenedor-agregar-pregunta");
const contenedor_listo=document.querySelector(".contenedor-listo");
const contenedor_diseño_pregunta=document.getElementById("pregunta-agregar")
const pregunta= document.querySelector(".texto-pregunta-agregar")

cancelar.forEach(element => {
  element.addEventListener("click", () => {
    const valorLocalStorage = localStorage.getItem("prueba1");
    console.log(valorLocalStorage)

    if (valorLocalStorage && JSON.parse(valorLocalStorage).length > 0) {
      // Si existe el valor en el localStorage, ocultamos los contenedores de opciones
      contenedor_opciones.forEach(element1 => {
        element1.style.display = "none";
        sBtn_text.innerText = "Diseño de opciones";
        opcion_checkbox.innerHTML = '';
        opcion_multiple.innerHTML = '';
      });
    pregunta.value = "";
     valoresIngresados = [];
      contenedor_agregar_pregunta.style.display = "flex";
      contenedor_diseño_pregunta.style.display = "none";
      
    } else {
      // Si NO existe el valor en el localStorage, ocultamos el contenedor actual y mostramos el de agregar pregunta
      contenedor_diseño_pregunta.style.display = "block";
      contenedor_agregar_pregunta.style.display = "none";
      valoresIngresados = [];
      pregunta.value = "";
      contenedor_opciones.forEach(element1 => {
        element1.style.display = "none";
        sBtn_text.innerText = "Diseño de opciones";
        opcion_checkbox.innerHTML = '';
        opcion_multiple.innerHTML = '';
      });
      
      
    }
  });
});

// ==================================
// OBTENER DATOS DE PREGUNTA
// ============================

const multiples=document.querySelector(".opciones-multiples-agregar")
const guardar=document.getElementById("guardar")
// const contenedor_agregar_pregunta=document.getElementById("contenedor-agregar-pregunta");
// const objeto=[];

var objeto = JSON.parse(localStorage.getItem("prueba1")) || [];
guardar.addEventListener("click",()=>{
  const respuestas= document.querySelectorAll(".input-opciones1-agregar");
  const values = [];
   
    var question=pregunta.value;
    // console.log(question)

    

    respuestas.forEach(input => {
      values.push(input.value);

    });

    // const questions={pregunta:pregunta.value,respuestas: values, tipo:sBtn_text.innerText}
 

  // verifica si la pregunta ya existe en el array
  if (objeto.some((item) => item.pregunta === question)) {
    return; // si existe, no la agregues de nuevo
  }
    
  const id=CryptoJS.SHA3(`${values+pregunta.value+sBtn_text.innerText}`,{outputLength:32}).toString();

  objeto.push({id:"f"+id,pregunta:pregunta.value,respuestas: values, tipo:sBtn_text.innerText})
 
  
    localStorage.setItem("prueba1",JSON.stringify(objeto))
    // console.log(objeto)
    renderQuestions();
    contenedor_diseño_pregunta.style.display="none"
    contenedor_agregar_pregunta.style.display="flex"
     // Restablece valoresIngresados a un array vacío
     valoresIngresados = [];
    respuestas.forEach(input => {
      input.value = "";
      pregunta.value = "";
    });
    contenedor_opciones.forEach(element1 => {
      element1.style.display = "none";
      sBtn_text.innerText = "Diseño de opciones";
      opcion_checkbox.innerHTML = '';
      opcion_multiple.innerHTML = '';
    });
    

}) 

// ==================================
// RENDERIZAR PREGUNTAS
// ============================



const renderQuestions =()=>{
  const htmlres=document.getElementById("contenedor-preguntas-realizadas")
  htmlres.innerHTML="";
  
  console.log(objeto)
 objeto.forEach((a)=>{
    let {id,pregunta,respuestas,tipo}=a
    const htmlrespuesta=document.getElementById("diseño-opciones")
     

    if (tipo === "Opción múltiples") {
      // Diseño para preguntas de tipo opciones múltiples
      const html = `
      <div id="${id}"> 
      <div class="barra-pregunta " >
                            <div class="contenedor-barra-tuerca f${id}">
                                <ul class="barra-tuerca ">
                                    <li><a onclick="editar(${id})"><i class="bi bi-pencil-square"></i></a></li>
                                    <li><a onclick="eliminar(${id})"><i class="bi bi-trash3"></i></a></li>
                                </ul>
                            </div>
                            <div class="tuerca ${id}">
                               <a onclick="mostrar(${id})"><i class="bi bi-gear-fill"></i></a>
                            </div>
                            
                        </div> 
                        
                        <div class="diseño-pregunta">
                        <span class="diseño-pregunta-span">${pregunta}</span>
                    <div id="diseño-opciones">     
                      ${respuestas.map(b=>{
                        return `
                        <div class="diseño-opciones" >
                          <label class="radio1">
                          <input type="radio" name="${pregunta}" value="${b}" >
                          <span>${b.toString()}</span>
                          </label>
                          
                  
                        </div>
                        `
                       }).join("")}
                    </div>  
                    </div>
       </div>             
      `;
      htmlres.innerHTML += html;
    }else if(tipo === "Casillas de verificación"){
        const html = `
        <div id="${id}"> 
        <div class="barra-pregunta " >
                              <div class="contenedor-barra-tuerca f${id}">
                                  <ul class="barra-tuerca ">
                                      <li><a onclick="editar(${id})"><i class="bi bi-pencil-square"></i></a></li>
                                      <li><a onclick="eliminar(${id})"><i class="bi bi-trash3"></i></a></li>
                                  </ul>
                              </div>
                              <div class="tuerca ${id}">
                                 <a onclick="mostrar(${id})"><i class="bi bi-gear-fill"></i></a>
                              </div>
                              
                          </div> 
                          
                          <div class="diseño-pregunta">
                          <span class="diseño-pregunta-span">${pregunta}</span>
                      <div id="diseño-opciones">     
                        ${respuestas.map(b=>{
                          return `
                          <div class="diseño-opciones">
                            <div class="checkbox-container">
                                <input class="checkbox-spin-1" type="radio" id="check-${id}-${pregunta}-${b}" name="check-${id}-${pregunta}" value="${b}">
                                <label for="check-${id}-${pregunta}-${b}"><span>&#10004;</span></label>
                                <span>${b.toString()}</span>

                            </div>
                            </div>


                          `
                         }).join("")}
                      </div>  
                      </div>
         </div>             
        `;
        htmlres.innerHTML += html;
      }else if(tipo === "Texto simple"){
        const html = `
        <div id="${id}"> 
        <div class="barra-pregunta " >
                              <div class="contenedor-barra-tuerca f${id}">
                                  <ul class="barra-tuerca ">
                                      <li><a onclick="editar(${id})"><i class="bi bi-pencil-square"></i></a></li>
                                      <li><a onclick="eliminar(${id})"><i class="bi bi-trash3"></i></a></li>
                                  </ul>
                              </div>
                              <div class="tuerca ${id}">
                                 <a onclick="mostrar(${id})"><i class="bi bi-gear-fill"></i></a>
                              </div>
                              
                          </div> 
                          
                          <div class="diseño-pregunta">
                          <span class="diseño-pregunta-span">${pregunta}</span>
                      <div id="diseño-opciones">     
                        <div class="diseño-opciones">
                         <textarea name="${id}" id="" cols="30" rows="10" style="width: 100%;"></textarea>     
                        </div>  
                      </div>  
                      </div>
         </div>             
        `;
        htmlres.innerHTML += html;
      }
    
    }
  
  )

  if (objeto.length == 0) {
    
    contenedor_diseño_pregunta.style.display="block"
    contenedor_agregar_pregunta.style.display="none"
    contenedor_listo.style.display="none"
    
  }else{
    contenedor_diseño_pregunta.style.display="none"
    contenedor_agregar_pregunta.style.display="flex"
    contenedor_listo.style.display="block"
  }

   // Asignar estilos a los elementos DOM
   const colorTituloEncuesta = document.getElementById("titulo-encuesta");
   const colorPregunta = document.querySelectorAll(".diseño-pregunta-span");
   const colorRespuestas = document.querySelectorAll(".diseño-opciones span");
   const dato5 = window.localStorage.color;

   colorTituloEncuesta.style.color = dato5;
   colorPregunta.forEach((pregunta) => {
     pregunta.style.color = dato5;
   });
   colorRespuestas.forEach((respuestas) => {
     respuestas.style.color = dato5;
   });  

}

// ==================================
    // FUNCIONES DE LA BARRA FLOTANTE DE PREGUNTA
    // ============================
const mostrar=(id)=>{
  let idinput=id
  // console.log(idinput)

  var tuerca_c=document.getElementsByClassName(idinput.id);
  var barra_c=document.getElementsByClassName("f"+idinput.id);
  // console.log(tuerca_c)
  // console.log(barra_c)
  for(var i=0; i<tuerca_c.length;i++){
    tuerca_c[i].classList.toggle("tuerca-active")
    barra_c[i].classList.toggle("activar-barra-tuerca")
  }
}


// ================================================================================================
// FUNCION PARA EDITAR PREGUNTA
// ================================================================================================

// ==================================
// FUNCIONES DEL DROPDOWN EDITAR
// ==================================

const btnEditar=document.getElementById("editar")
const pregunta_editar= document.querySelector(".texto-pregunta-editar")

const opcion_multiple_editar=document.getElementById("opcion-multiple-editar")
const mas_opcion_multiple_editar=document.getElementById("mas-opcion-multiple-editar")

const opcion_checkbox_editar=document.getElementById("opcion-checkbox-editar")
const mas_opcion_checkbox_editar=document.getElementById("mas-opcion-checkbox-editar")

const optionMenuEditar=document.querySelector(".dropdown-editar"),
      selectBtnEditar= optionMenuEditar.querySelector(".select-btn-editar"),
      optionsEditor= optionMenuEditar.querySelectorAll(".option-editar"),
      sBtn_text_editar= optionMenuEditar.querySelector(".sBtn-text-editar");

const menu_multiple_editar= document.getElementById("opcion-multiple-editar"),
      casilla_verificacion_editar=document.getElementById("opcion-checkbox-editar"),
      texto_simple_editar=document.querySelector(".contendor-texto-simple"),
      control_deslizante_editar=document.querySelector(".contendor-control-deslizante"),
      contenedor_opcion_multiple_editar=document.getElementById("boton-opcion-multiple-editar"),
      contenedor_opcion_checkbox_editar=document.getElementById("boton-opcion-checkbox-editar"),
      contenedor_opcion_textArea_editar=document.getElementById("opcion-textArea-editar");
const contenedor_general_editar=document.getElementById("contenedor-opciones-editar")
selectBtnEditar.addEventListener("click", () => optionMenuEditar.classList.toggle("active"));

optionsEditor.forEach(option =>{
        option.addEventListener("click", ()=>{
          let selectedOptionEditar=option.querySelector(".option-text-editar").innerText;
          sBtn_text_editar.innerText= selectedOptionEditar;
          
          optionMenuEditar.classList.remove("active");
          // console.log(selectedOption)

          // ==================================
          // FUNCIONES PARA OPCIONES DE PREGUNTA
          // =====================================

          if(selectedOptionEditar=="Opción múltiples"){
            contenedor_general_editar.style.display="block"
            menu_multiple_editar.style.display ="block";
            casilla_verificacion_editar.style.display ="none";
            // texto_simple.sty le.display="none";
            // control_deslizante.style.display="none";
            opcion_checkbox_editar.innerHTML=''
            contenedor_opcion_multiple_editar.style.display="flex"
            contenedor_opcion_checkbox_editar.style.display="none"
            contenedor_opcion_textArea_editar.style.display="none"

          }

          else if(selectedOptionEditar=="Casillas de verificación"){
            contenedor_general_editar.style.display="block"

            menu_multiple_editar.style.display ="none";
            casilla_verificacion_editar.style.display ="block";
            // texto_simple.style.display="none";
            // control_deslizante.style.display="none";
            opcion_multiple_editar.innerHTML=''
            contenedor_opcion_multiple_editar.style.display="none"
            contenedor_opcion_checkbox_editar.style.display="flex"
            contenedor_opcion_textArea_editar.style.display="none"

          }
          else if(selectedOptionEditar=="Texto simple"){
            contenedor_general_editar.style.display="block"
            menu_multiple_editar.style.display ="none";
            casilla_verificacion_editar.style.display ="none";
            // texto_simple.style.display="block";
            // control_deslizante.style.display="none";
            opcion_checkbox_editar.innerHTML=''
            opcion_multiple_editar.innerHTML=''
            contenedor_opcion_multiple_editar.style.display="none"
            contenedor_opcion_checkbox_editar.style.display="none"
            contenedor_opcion_textArea_editar.style.display="block"
          }
          else {
            menu_multiple_editar.style.display ="none";
            casilla_verificacion_editar.style.display ="none";
            // texto_simple.style.display="none";
            // control_deslizante.style.display="block";
            opcion_checkbox_editar.innerHTML=''
            opcion_multiple_editar.innerHTML=''
            contenedor_opcion_multiple_editar.style.display="none"
            contenedor_opcion_checkbox_editar.style.display="none"
          }

        })
      })

// ================================================================================================
// FUNCIONES PARA EL MODAL Y LOCAL STORAGE
// ================================================================================================
      

// Cerrar el modalEditar al hacer clic en la "X" o en el fondo oscuro difuminado
document.getElementById("closeModalEditarButton").addEventListener("click", function() {
  document.getElementById("modalEditar").style.display = "none";
});

document.getElementById("modalEditar").addEventListener("click", function(event) {
  if (event.target === document.getElementById("modalEditar")) {
    document.getElementById("modalEditar").style.display = "none";
  }
});

const editar=(id)=>{
  document.getElementById("modalEditar").style.display = "block";
  const preguntaId = id.id; // El id de la pregunta que se está editando
  const objetoGuardado = JSON.parse(localStorage.getItem("prueba1"));

  // Busca el objeto correspondiente al id de la pregunta en el array objetoGuardado
  const preguntaEditada = objetoGuardado.find((objeto) => objeto.id === preguntaId);

  const contenedorInputs = document.getElementById("contenedor-opciones-editar");
  const inputTemporal = document.querySelector(".id-temporal-editar");
  
  if (inputTemporal) {
    // Si el input ya existe, actualiza su valor
    inputTemporal.value = preguntaId;
  } else {
    // Si el input no existe, créalo y configúralo
    const nuevoInput = document.createElement("input");
    nuevoInput.type = "text";
    nuevoInput.className = "id-temporal-editar"; // Puedes agregar una clase para aplicar estilos CSS
    nuevoInput.id = "id-temporal";
    nuevoInput.value = preguntaId;
    // Agregar el input al contenedor
    contenedorInputs.appendChild(nuevoInput);
  }
  

     

  console.log(preguntaEditada)

  if (preguntaEditada) {
    // Si se encontró el objeto, asigna los valores almacenados a los campos del formulario
    let preguntaInput = document.querySelector(".texto-pregunta-editar");
    let botonTipo = document.querySelector(".sBtn-text-editar");
    let opcionesMultiplesContainer = document.querySelector(".opciones-multiples-editar");
    let opcionesVerificacionContainer = document.querySelector(".opciones-checkbox-editar");
    
    // Verifica que los elementos se han encontrado correctamente antes de asignar valores
    if (preguntaInput && preguntaEditada.pregunta) {
      preguntaInput.value = preguntaEditada.pregunta;
    }

    if (botonTipo && preguntaEditada.tipo) {
      botonTipo.innerText = preguntaEditada.tipo;
    }

    if (preguntaEditada.tipo === "Opción múltiples") {
      // Mostrar campos adicionales y cargar las opciones múltiples desde el objetoGuardado
      contenedor_general_editar.style.display="block"
      contenedor_opcion_multiple_editar.style.display="flex"
      contenedor_opcion_checkbox_editar.style.display="none"
      contenedor_opcion_textArea_editar.style.display="none"

      opcion_checkbox_editar.innerHTML=''

      // Borra los campos previamente creados (si los hay) para evitar duplicados
      opcionesMultiplesContainer.innerHTML = "";

      // Recorre las respuestas del objetoGuardado y crea los campos de opciones múltiples
      preguntaEditada.respuestas.forEach((respuesta) => {
        const nuevaOpcion = document.createElement("div");
        nuevaOpcion.classList.add("pregunta-opciones");
        nuevaOpcion.innerHTML = `
          <label class="radio1">
            <input type="radio" name="r" value="clasica" disabled>
            <span></span>
          </label>
          <input class="input-opciones1" type="text" value="${respuesta}">
          <i class="bi bi-dash-circle multiple-quitar-editar"></i>
        `;
        opcionesMultiplesContainer.appendChild(nuevaOpcion);
      });

      // Mostrar el contenedor de opciones múltiples
      opcionesMultiplesContainer.style.display = "block";

    } else if (preguntaEditada.tipo === "Casillas de verificación") {
      // Mostrar campos adicionales y cargar las casillas de verificación desde el objetoGuardado
      contenedor_general_editar.style.display="block"
      opcion_multiple_editar.innerHTML=''
      contenedor_opcion_multiple_editar.style.display="none"
      contenedor_opcion_checkbox_editar.style.display="flex"
      contenedor_opcion_textArea_editar.style.display="none"

      // Borra
      opcionesVerificacionContainer.innerHTML=""

      preguntaEditada.respuestas.forEach((respuesta) => {
        const nuevaOpcion = document.createElement("div");
        nuevaOpcion.classList.add("pregunta-opciones");
        nuevaOpcion.innerHTML = `
          <div class="checkbox">
            <input class="checkbox-spin" type="checkbox" id="check4" disabled/>
            <label class="check4" for="check4"><span></span></label>
          </div>
            <input class="input-opciones1 " type="text" value="${respuesta}">
            <i class="bi bi-dash-circle verificacion-quitar-editar"></i>
      `;
        opcionesVerificacionContainer.appendChild(nuevaOpcion);
      });

      // Mostrar el contenedor de opciones múltiples
      opcionesVerificacionContainer.style.display = "block";

    } else if (preguntaEditada.tipo === "Texto simple") {
      // Mostrar campos adicionales y cargar el texto simple desde el objetoGuardado
      contenedor_general_editar.style.display="block"
      opcion_multiple_editar.innerHTML=''
      contenedor_opcion_multiple_editar.style.display="none"
      contenedor_opcion_checkbox_editar.style.display="none"
      contenedor_opcion_textArea_editar.style.display="block"


    } else if (preguntaEditada.tipo === "Control deslizante") {
      // Mostrar campos adicionales y cargar los valores del control deslizante desde el objetoGuardado
      // ...
    }
  }

  // OPCIONES MULTIPLES
  const nuevosDivsEO = opcion_multiple_editar.querySelectorAll(".pregunta-opciones");

   // Agrega el evento de clic para eliminar el div cuando se hace clic en el icono
   nuevosDivsEO.forEach((div) => {
    const iconoEliminar = div.querySelector(".multiple-quitar-editar");
    iconoEliminar.addEventListener("click", () => {
      div.remove();
    });
  });

  // OPCION CHECKBOX
  const nuevosDivsEC = opcion_checkbox_editar.querySelectorAll(".pregunta-opciones");

   // Agrega el evento de clic para eliminar el div cuando se hace clic en el icono
   nuevosDivsEC.forEach((div) => {
    const iconoEliminar = div.querySelector(".verificacion-quitar-editar");
    iconoEliminar.addEventListener("click", () => {
      div.remove();
    });
  });
}


// ==============================================================
// FUNCIONES PARA  BOTON MAS MULTIPLES EDITAR
// ==============================================================


// Declara un array para almacenar los objetos con el índice y el valor ingresado en los inputs
let valoresIngresadosEditar = [];

mas_opcion_multiple_editar.addEventListener("click", () => {
  const temp = `
    <div class="pregunta-opciones">
      <label class="radio1">
        <input type="radio" name="r" value="clasica" disabled>
        <span></span>
      </label>
      <input class="input-opciones1 input-opciones1-editar" type="text">
      <i class="bi bi-dash-circle multiple-quitar-editar"></i>
    </div>
  `;

  opcion_multiple_editar.innerHTML += temp;

  // Obtiene todos los inputs recién agregados
  const nuevosInputs = opcion_multiple_editar.querySelectorAll(".input-opciones1-editar");

  // Almacena los valores ingresados en el array de objetos
  nuevosInputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
      const valor = event.target.value;
      valoresIngresadosEditar[index] = { index, valor };
    });
  });

  // Muestra los valores almacenados en los inputs cuando se hace clic en "Agregar más input"
  nuevosInputs.forEach((input, index) => {
    input.value = valoresIngresadosEditar[index] ? valoresIngresadosEditar[index].valor : "";
  });

  // Obtiene todos los divs recién agregados
  const nuevosDivs = opcion_multiple_editar.querySelectorAll(".pregunta-opciones");

  // Agrega el evento de clic para eliminar el div cuando se hace clic en el icono
  nuevosDivs.forEach((div) => {
    const iconoEliminar = div.querySelector(".multiple-quitar-editar");
    iconoEliminar.addEventListener("click", () => {
      div.remove();
    });
  });
  
});


// ========================================================
// FUNCIONES PARA  BOTON MAS CHECKBOX EDITAR
// ========================================================

mas_opcion_checkbox_editar.addEventListener("click",()=>{
  // console.log("hola")
  const temp1=`
  <div class="pregunta-opciones">
    <div class="checkbox">
      <input class="checkbox-spin" type="checkbox" id="check4" disabled/>
      <label class="check4" for="check4"><span></span></label>
    </div>
      <input class="input-opciones1 input-opciones1-editar" type="text">
      <i class="bi bi-dash-circle verificacion-quitar-editar"></i>
    </div>
`
  // opcion_multiple.insertAdjacentHTML("beforeend",temp) =temp
  opcion_checkbox_editar.innerHTML+=temp1;

  // Obtiene todos los inputs recién agregados
  const nuevosInputsC = opcion_checkbox_editar.querySelectorAll(".input-opciones1-editar");

  // Almacena los valores ingresados en el array de objetos
  nuevosInputsC.forEach((input, index) => {
    input.addEventListener("input", (event) => {
      const valor = event.target.value;
      valoresIngresados[index] = { index, valor };
    });
  });

  // Muestra los valores almacenados en los inputs cuando se hace clic en "Agregar más input"
  nuevosInputsC.forEach((input, index) => {
    input.value = valoresIngresados[index] ? valoresIngresados[index].valor : "";
  });

   // Obtiene todos los divs recién agregados
  const nuevosDivsC = opcion_checkbox_editar.querySelectorAll(".pregunta-opciones");

  // Agrega el evento de clic para eliminar el div cuando se hace clic en el icono
  nuevosDivsC.forEach((div) => {
    const iconoEliminar = div.querySelector(".verificacion-quitar-editar");
    iconoEliminar.addEventListener("click", () => {
      div.remove();
    });
  });
  
})

// ====================================================================
// FUNCIONES BOTON  EDITAR
// ====================================================================

btnEditar.addEventListener("click", () => {
  const respuestas = document.querySelectorAll(".input-opciones1");
  const values = [];

  // Obtiene el id existente de la pregunta a editar
  const idTemporal = document.getElementById("id-temporal").value;

  var question = pregunta_editar.value;

  respuestas.forEach(input => {
    values.push(input.value);
  });


  // Verifica si la pregunta ya existe en el array
  if (objeto.some((item) => item.pregunta_editar === question)) {
    return; // Si existe, no la agregues de nuevo
  }

  const id = CryptoJS.SHA3(`${values + pregunta_editar.value + sBtn_text_editar.innerText}`, { outputLength: 32 }).toString();

  // Obtén el índice del elemento que se quiere editar en el array "objeto"
  const index = objeto.findIndex(item => item.id === idTemporal);

  if (index !== -1) {
    // Actualiza el elemento existente con los nuevos valores
    objeto[index].id = "f" + id;
    objeto[index].pregunta = pregunta_editar.value;
    objeto[index].respuestas = values;
    objeto[index].tipo = sBtn_text_editar.innerText;

    // Guarda el objeto actualizado en el localStorage
    localStorage.setItem("prueba1", JSON.stringify(objeto));

    console.log(objeto);
    renderQuestions();
    contenedor_diseño_pregunta_editar.style.display = "none";
    document.getElementById("modalEditar").style.display = "none";
    // contenedor_agregar_pregunta_ed.style.display = "flex";

    // Restablece valoresIngresados a un array vacío
    valoresIngresados = [];
    respuestas.forEach(input => {
      input.value = "";
      pregunta_editar.value = "";
    });
    contenedor_opciones_editar.forEach(element1 => {
      element1.style.display = "none";
      sBtn_text_editar.innerText = "Diseño de opciones";
      opcion_checkbox_editar.innerHTML = '';
      opcion_multiple_editar.innerHTML = '';
    });
  }
});



// ================================================================================================================================
// ================================================================================================================================


// ====================================================================
// FUNCIONES BOTON CANCELAR EDITAR
// ====================================================================
const cancelar_editar=document.querySelectorAll(".opcion-cancelar-editar")
const contenedor_opciones_editar=document.querySelectorAll(".contenedor-opciones-editar")
// const contenedor_agregar_pregunta_editar=document.getElementById("contenedor-agregar-pregunta");
const contenedor_diseño_pregunta_editar=document.getElementById("pregunta-agregar")

cancelar_editar.forEach(element => {
  element.addEventListener("click", () => {
    document.getElementById("modalEditar").style.display = "none";
    const valorLocalStorage = localStorage.getItem("prueba1");
    if (valorLocalStorage) {
      // Si existe el valor en el localStorage, ocultamos los contenedores de opciones
      contenedor_opciones_editar.forEach(element1 => {
        element1.style.display = "none";
        sBtn_text_editar.innerText = "Diseño de opciones";
        opcion_checkbox_editar.innerHTML = '';
        opcion_multiple_editar.innerHTML = '';
      });
    pregunta_editar.value = "";
     valoresIngresados = [];
    //  contenedor_agregar_pregunta_editar.style.display = "flex";
      contenedor_diseño_pregunta_editar.style.display = "none";
      
    } else {
      // Si NO existe el valor en el localStorage, ocultamos el contenedor actual y mostramos el de agregar pregunta
      valoresIngresados = [];
      pregunta.value = "";
      contenedor_opciones_editar.forEach(element1 => {
        element1.style.display = "none";
        sBtn_text_editar.innerText = "Diseño de opciones";
        opcion_checkbox_editar.innerHTML = '';
        opcion_multiple_editar.innerHTML = '';
      });
      
      
    }
  });
});


// ================================================================================================
// ================================================================================================

// ==================================
// FUNCION PARA ELIMINAR PREGUNTA
// ==================================
const eliminar=(id)=>{
  let idinput1=id
  // console.log(idinput1)
  idinput1.remove();

  // Actualizar el 'objeto' para reflejar los datos actualizados en el 'localStorage'
  objeto = objeto.filter(item => item.id !== id.id);
  console.log(objeto)
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


// ====================================================================
// FUNCIONES DE BOTON AGREGAR PREGUNTA
// ==============================================================
const boton_agregar_pregunta = document.getElementById("agregar-pregunta")

boton_agregar_pregunta.addEventListener("click",()=>{
  contenedor_diseño_pregunta.style.display="block"
  contenedor_agregar_pregunta.style.display="none"

})



renderQuestions();

// ====================================================================
// FUNCIONES DE EDITAR BOTON DE FINALIZACIÓN
// ====================================================================
const btnEditarListo= document.querySelector(".btn-editar-listo");
const editarContenedorBoton=document.querySelector(".editar-contenedor-boton");
const botonListo = document.getElementById('btn-listo');
const inputValor = document.getElementById('valor-boton');
const cancelarEditarBoton=document.querySelector(".cancelar-editar-boton")
const guardarEditarBoton= document.getElementById("guardar-editar-boton")

btnEditarListo.addEventListener("click",()=>{
  editarContenedorBoton.style.display="block"
  inputValor.value = botonListo.textContent;

})

cancelarEditarBoton.addEventListener("click",()=>{
  editarContenedorBoton.style.display="none"
})

guardarEditarBoton.addEventListener("click",()=>{
  botonListo.textContent=inputValor.value;
  editarContenedorBoton.style.display="none"
})







