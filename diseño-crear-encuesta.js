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
// FUNCIONES DEL DROPDOWN
// ============================

const optionMenu=document.querySelector(".dropdown"),
      selectBtn= optionMenu.querySelector(".select-btn"),
      options= optionMenu.querySelectorAll(".option"),
      sBtn_text= optionMenu.querySelector(".sBtn-text");

const menu_multiple= document.getElementById("opcion-multiple"),
      casilla_verificacion=document.getElementById("opcion-checkbox"),
      texto_simple=document.querySelector(".contendor-texto-simple"),
      control_deslizante=document.querySelector(".contendor-control-deslizante"),
      contenedor_opcion_multiple=document.getElementById("boton-opcion-multiple"),
      contenedor_opcion_checkbox=document.getElementById("boton-opcion-checkbox");
const contenedor_general=document.getElementById("contenedor-opciones")
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
            // texto_simple.style.display="none";
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
// FUNCIONES PARA  BOTON MAS
// ============================

const opcion_multiple=document.getElementById("opcion-multiple")
const mas_opcion_multiple=document.getElementById("mas-opcion-multiple")

mas_opcion_multiple.addEventListener("click",()=>{
  // console.log("hola")
  const temp=`
  <div class="pregunta-opciones" >
  <label class="radio1">
      <input type="radio" name="r" value="clasica" disabled>
      <span></span>
  </label>
  <input class="input-opciones1" type="text">
  <i class="bi bi-dash-circle"></i>
</div>
`
  // opcion_multiple.insertAdjacentHTML("beforeend",temp) =temp
  opcion_multiple.innerHTML+=temp;
})


const opcion_checkbox=document.getElementById("opcion-checkbox")
const mas_opcion_checkbox=document.getElementById("mas-opcion-checkbox")

mas_opcion_checkbox.addEventListener("click",()=>{
  // console.log("hola")
  const temp1=`
  <div class="pregunta-opciones">
    <div class="checkbox">
      <input class="checkbox-spin" type="checkbox" id="check4" disabled/>
      <label for="check4"><span></span></label>
    </div>
      <input class="input-opciones1" type="text">
      <i class="bi bi-dash-circle"></i>
    </div>
`
  // opcion_multiple.insertAdjacentHTML("beforeend",temp) =temp
  opcion_checkbox.innerHTML+=temp1;
})

// ==================================
// FUNCIONES BOTON CANCELAR
// ============================
const cancelar=document.querySelectorAll(".opcion-cancelar")
const contenedor_opciones=document.querySelectorAll(".contenedor-opciones")
cancelar.forEach(element => {
  element.addEventListener("click",()=>{
    contenedor_opciones.forEach(element1 => {
      // console.log(element1)
      element1.style.display="none"
      sBtn_text.innerText= "Diseño de opciones";
      opcion_checkbox.innerHTML=''
      opcion_multiple.innerHTML=''
    });
  })
});

// ==================================
// OBTENER DATOS DE PREGUNTA
// ============================

const pregunta= document.querySelector(".texto-pregunta")
const multiples=document.querySelector(".opciones-multiples")
const guardar=document.getElementById("guardar")
const contenedor_diseño_pregunta=document.getElementById("pregunta")
const contenedor_agregar_pregunta=document.getElementById("contenedor-agregar-pregunta");
// const objeto=[];
var objeto = JSON.parse(localStorage.getItem("prueba1")) || [];
guardar.addEventListener("click",()=>{
  const respuestas= document.querySelectorAll(".input-opciones1");
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
  objeto.push({pregunta:pregunta.value,respuestas: values, tipo:sBtn_text.innerText})
 
  renderQuestions();
    localStorage.setItem("prueba1",JSON.stringify(objeto))
    console.log(objeto)
    contenedor_diseño_pregunta.style.display="none"
    contenedor_agregar_pregunta.style.display="flex"
    

}) 

// ==================================
// RENDERIZAR PREGUNTAS
// ============================



const renderQuestions =()=>{
  const htmlres=document.getElementById("contenedor-preguntas-realizadas")
  htmlres.innerHTML="";
  if (objeto.length == 0) {
    contenedor_diseño_pregunta.style.display="block"
    contenedor_agregar_pregunta.style.display="none"
  }else{
    contenedor_diseño_pregunta.style.display="none"
    contenedor_agregar_pregunta.style.display="flex"
  }
  
 objeto.forEach((a)=>{
    let {pregunta,respuestas,tipo}=a
    const htmlrespuesta=document.getElementById("diseño-opciones")
     
      const html=` 
      <div class="barra-pregunta">
                            <div class="contenedor-barra-tuerca">
                                <ul class="barra-tuerca">
                                    <li><a href=""><i class="bi bi-pencil-square"></i></a></li>
                                    <li><a href=""><i class="bi bi-trash3"></i></a></li>
                                </ul>
                            </div>
                            <div class="tuerca">
                                <i class="bi bi-gear-fill"></i>
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
      `;
      htmlres.innerHTML += html;
    
    }
  
  )


}




// ==================================
// FUNCIONES DE LA BARRA FLOTANTE DE PREGUNTA
// ============================
const tuerca=document.querySelector(".tuerca");
const barraTuerca=document.querySelector(".contenedor-barra-tuerca");

// tuerca.addEventListener("click", () =>{
//   tuerca.classList.toggle("tuerca-active")
//   barraTuerca.classList.toggle("activar-barra-tuerca")
// })

// ==================================
// FUNCIONES DE BOTON AGREGAR PREGUNTA
// ============================
const boton_agregar_pregunta = document.getElementById("agregar-pregunta")

boton_agregar_pregunta.addEventListener("click",()=>{
  contenedor_diseño_pregunta.style.display="block"
  contenedor_agregar_pregunta.style.display="none"

})



renderQuestions();