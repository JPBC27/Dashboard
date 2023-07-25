

const body= document.querySelector("body"),
      sidebar=body.querySelector(".sidebar-2"),
      toggle=body.querySelector(".bi-chevron-right"),
      submenu=document.querySelector(".sub-menu"),
      submenu1=document.querySelector(".sub-menu-1");

      toggle.addEventListener("click",()=>{
        sidebar.classList.toggle("cerrar"); 
      });

const links=document.querySelectorAll('.nav-link2');



// ===============================================
// funciones para la barra lateral
// ===============================================
links.forEach(element => {
  // console.log(element)
  // toggle.classList.add("hidden-arrow");

  element.addEventListener("click",function (e) {
    // toggle.classList.add("hidden-arrow");
    

    if(element.id=="primero"){
      document.getElementById("primero").classList.toggle("nav-link2-activate")
      document.getElementById("segundo").classList.remove("nav-link2-activate")
      document.getElementById("tercero").classList.remove("nav-link2-activate")
      document.getElementById("pencil").classList.toggle("icon-active")
      document.getElementById("clipboard").classList.remove("icon-active")
      document.getElementById("trash").classList.remove("icon-active")
      submenu.classList.toggle("activate-sub-menu")
      primero1.classList.remove("activate-li-sub-menu")
      submenu1.classList.remove("activate-sub-menu-1")

      // console.log(document.getElementById("pencil"))
      // console.log(document.getElementById("primero"))

    }
    else if(element.id=="segundo"){
      document.getElementById("primero").classList.remove("nav-link2-activate")
      document.getElementById("segundo").classList.toggle("nav-link2-activate")
      document.getElementById("tercero").classList.remove("nav-link2-activate")
      document.getElementById("pencil").classList.remove("icon-active")
      document.getElementById("clipboard").classList.toggle("icon-active")
      document.getElementById("trash").classList.remove("icon-active")
      submenu.classList.remove("activate-sub-menu")
      primero1.classList.remove("activate-li-sub-menu")
      submenu1.classList.remove("activate-sub-menu-1")


    }
    else{
      document.getElementById("primero").classList.remove("nav-link2-activate")
      document.getElementById("segundo").classList.remove("nav-link2-activate")
      document.getElementById("tercero").classList.toggle("nav-link2-activate")
      document.getElementById("pencil").classList.remove("icon-active")
      document.getElementById("clipboard").classList.remove("icon-active")
      document.getElementById("trash").classList.toggle("icon-active")
      submenu.classList.remove("activate-sub-menu")
      primero1.classList.remove("activate-li-sub-menu")
      submenu1.classList.remove("activate-sub-menu-1")

    }

    if(element.className.includes("nav-link2-activate")){
      toggle.classList.add("hidden-arrow")
    }
    else{
      toggle.classList.remove("hidden-arrow");
    }

    // console.log(element.className)    
  })

 
});

// ==================================
// FUNCIONES DEL PRIMER SUBMENU
// ============================
const primero1=document.getElementById("primero_1");
const primero2=document.getElementsByName("primero_2")

primero1.addEventListener("click",function (e){
  primero1.classList.toggle("activate-li-sub-menu")
  submenu1.classList.toggle("activate-sub-menu-1")
})


// ==================================
// FUNCIONES PARA REMPLAZAR EL FONDO 
// ============================

const fondo=document.querySelectorAll(".nav-link4");
const contenedorEncuesta=document.getElementById("contenedor-encuesta")
const dato3=window.localStorage.prueba


fondo.forEach(e => {
  contenedorEncuesta.style.background=`url(${dato3}) no-repeat center center`;
  contenedorEncuesta.style.backgroundSize=`100% 100%`;

  e.onclick=()=>{
    const filename=new URL(e.lastChild.lastChild.src).pathname
    localStorage.setItem("prueba",JSON.stringify(filename))
    contenedorEncuesta.style.background=`url(${filename }) no-repeat center center`;
    contenedorEncuesta.style.backgroundSize=`100% 100%`;

  }

});

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
const contenedor_general=document.getElementById("contenedor-opciones-agregar")
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

      options.forEach(option =>{
        option.addEventListener("click", ()=>{
          let selectedOption=option.querySelector(".option-text").innerText;
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
          }
          else if(selectedOption=="Texto simple"){
            menu_multiple.style.display ="none";
            casilla_verificacion.style.display ="none";
            // texto_simple.style.display="block";
            // control_deslizante.style.display="none";
            opcion_checkbox.innerHTML=''
            opcion_multiple.innerHTML=''
            contenedor_opcion_multiple.style.display="none"
            contenedor_opcion_checkbox.style.display="none"
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
// FUNCIONES PARA  BOTON MAS
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
      <i class="bi bi-dash-circle"></i>
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
      <i class="bi bi-dash-circle"></i>
    </div>
`
  // opcion_multiple.insertAdjacentHTML("beforeend",temp) =temp
  opcion_checkbox.innerHTML+=temp1;
})

// ==================================
// FUNCIONES BOTON CANCELAR
// ============================
const cancelar=document.querySelectorAll(".opcion-cancelar-agregar")
const contenedor_opciones=document.querySelectorAll(".contenedor-opciones-agregar")
const contenedor_agregar_pregunta=document.getElementById("contenedor-agregar-pregunta");
const contenedor_diseño_pregunta=document.getElementById("pregunta-agregar")
const pregunta= document.querySelector(".texto-pregunta-agregar")

cancelar.forEach(element => {
  element.addEventListener("click", () => {
    const valorLocalStorage = localStorage.getItem("prueba1");
    if (valorLocalStorage) {
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
    console.log(objeto)
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
     
      const html=`
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
                        <span>${pregunta}</span>
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
    
    }
  
  )

  if (objeto.length == 0) {
    
    contenedor_diseño_pregunta.style.display="block"
    contenedor_agregar_pregunta.style.display="none"
    
  }else{
    contenedor_diseño_pregunta.style.display="none"
    contenedor_agregar_pregunta.style.display="flex"

    // ==================================
    // FUNCIONES DE LA BARRA FLOTANTE DE PREGUNTA
    // ============================
    // const tuerca=document.querySelector(".tuerca");
    // const barraTuerca=document.querySelector(".contenedor-barra-tuerca");
  
    // tuerca.addEventListener("click", () =>{
    //   tuerca.classList.toggle("tuerca-active")
    //   barraTuerca.classList.toggle("activar-barra-tuerca")
    // })
  }
    

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
}


// ==================================
// FUNCIONES DEL DROPDOWN EDITAR
// ==================================

const opcion_multiple_editar=document.getElementById("opcion-multiple")
const mas_opcion_multiple_editar=document.getElementById("mas-opcion-multiple")

const opcion_checkbox_editar=document.getElementById("opcion-checkbox")
const mas_opcion_checkbox_editar=document.getElementById("mas-opcion-checkbox")

const optionMenuEditar=document.querySelector(".dropdown-editar"),
      selectBtnEditar= optionMenuEditar.querySelector(".select-btn-editar"),
      optionsEditor= optionMenuEditar.querySelectorAll(".option-editar"),
      sBtn_text_editar= optionMenuEditar.querySelector(".sBtn-text-editar");

const menu_multiple_editar= document.getElementById("opcion-multiple-editar"),
      casilla_verificacion_editar=document.getElementById("opcion-checkbox-editar"),
      texto_simple_editar=document.querySelector(".contendor-texto-simple"),
      control_deslizante_editar=document.querySelector(".contendor-control-deslizante"),
      contenedor_opcion_multiple_editar=document.getElementById("boton-opcion-multiple-editar"),
      contenedor_opcion_checkbox_editar=document.getElementById("boton-opcion-checkbox-editar");
const contenedor_general_editar=document.getElementById("contenedor-opciones-editar")
selectBtnEditar.addEventListener("click", () => optionMenuEditar.classList.toggle("active"));

      options.forEach(option =>{
        option.addEventListener("click", ()=>{
          let selectedOption=option.querySelector(".option-text-editar").innerText;
          sBtn_text_editar.innerText= selectedOption;
          
          optionMenuEditar.classList.remove("active");
          // console.log(selectedOption)

          // ==================================
          // FUNCIONES PARA OPCIONES DE PREGUNTA
          // =====================================

          if(selectedOption=="Opción múltiples"){
            contenedor_general_editar.style.display="block"
            menu_multiple_editar.style.display ="block";
            casilla_verificacion_editar.style.display ="none";
            // texto_simple.sty le.display="none";
            // control_deslizante.style.display="none";
            opcion_checkbox_editar.innerHTML=''
            contenedor_opcion_multiple_editar.style.display="flex"
            contenedor_opcion_checkbox_editar.style.display="none"
          }

          else if(selectedOption=="Casillas de verificación"){
            contenedor_general_editar.style.display="block"

            menu_multiple.style_editar.display ="none";
            casilla_verificacion_editar.style.display ="block";
            // texto_simple.style.display="none";
            // control_deslizante.style.display="none";
            opcion_multiple_editar.innerHTML=''
            contenedor_opcion_multiple_editar.style.display="none"
            contenedor_opcion_checkbox_editar.style.display="flex"
          }
          else if(selectedOption=="Texto simple"){
            menu_multiple_editar.style.display ="none";
            casilla_verificacion_editar.style.display ="none";
            // texto_simple.style.display="block";
            // control_deslizante.style.display="none";
            opcion_checkbox_editar.innerHTML=''
            opcion_multiple_editar.innerHTML=''
            contenedor_opcion_multiple_editar.style.display="none"
            contenedor_opcion_checkbox_editar.style.display="none"
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


// ==================================
// FUNCIONES DE BOTON AGREGAR PREGUNTA
// ============================
const boton_agregar_pregunta = document.getElementById("agregar-pregunta")

boton_agregar_pregunta.addEventListener("click",()=>{
  contenedor_diseño_pregunta.style.display="block"
  contenedor_agregar_pregunta.style.display="none"

})



renderQuestions();

