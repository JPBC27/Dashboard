// VARIABLES GLOBALES DEL PRIMER SUB MENU
const primero1=document.getElementById("primero_1");
const primero2=document.getElementById("primero_2")


const body= document.querySelector("body"),
      sidebar=body.querySelector(".sidebar-2"),
      toggle=body.querySelector(".bi-chevron-right"),
      submenu=document.querySelector(".sub-menu"),
      submenu1=document.querySelector(".sub-menu-1");
      submenu2=document.querySelector(".sub-menu-2");

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
      primero2.classList.remove("activate-li-sub-menu")
      submenu2.classList.remove("activate-sub-menu-2")

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
      primero2.classList.remove("activate-li-sub-menu")
      submenu2.classList.remove("activate-sub-menu-2")

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
      primero2.classList.remove("activate-li-sub-menu")
      submenu2.classList.remove("activate-sub-menu-2")
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


// FONDO
primero1.addEventListener("click",function (e){
  primero1.classList.toggle("activate-li-sub-menu")
  submenu1.classList.toggle("activate-sub-menu-1")
  primero2.classList.remove("activate-li-sub-menu")
  submenu2.classList.remove("activate-sub-menu-2")


})

// FUENTE
primero2.addEventListener("click",function (e){
  primero2.classList.toggle("activate-li-sub-menu")
  submenu2.classList.toggle("activate-sub-menu-2")
  primero1.classList.remove("activate-li-sub-menu")
  submenu1.classList.remove("activate-sub-menu-1")
})


// ==================================
// FUNCIONES PARA REMPLAZAR EL FONDO 
// ============================

const fondo=document.querySelectorAll(".nav-link4");
const contenedorEncuesta=document.getElementById("contenedor-encuesta")
const dato3=window.localStorage.fondo


fondo.forEach(e => {
  contenedorEncuesta.style.background=`url(${dato3}) no-repeat center center`;
  contenedorEncuesta.style.backgroundSize=`100% 100%`;

  e.onclick=()=>{
    const filename=new URL(e.lastChild.lastChild.src).pathname
    localStorage.setItem("fondo",JSON.stringify(filename))
    contenedorEncuesta.style.background=`url(${filename }) no-repeat center center`;
    contenedorEncuesta.style.backgroundSize=`100% 100%`;
    // console.log(filename)
  }

});

// ==================================
// FUNCIONES PARA REMPLAZAR FUENTE
// ============================

const fuente = document.querySelectorAll(".nav-link5");
const tituloEncuesta = document.getElementById("titulo-encuesta");

fuente.forEach(f => {
  f.onclick = () => {
    const fuenteSeleccionada = f.querySelector(".descripcion-fuente").textContent;
    localStorage.setItem("fuente", fuenteSeleccionada);
    tituloEncuesta.style.fontFamily = fuenteSeleccionada;
    // console.log(localStorage.getItem("fuente")); // Muestra el valor actualizado del Local Storage
  };
});


