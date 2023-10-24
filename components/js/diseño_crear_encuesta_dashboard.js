// MENU
const sidebar = document.querySelector(".sidebar-2"); // Todo el manu (nav)
const iconoAbrirCerrarMenu = document.querySelector(".bi-chevron-right"); //toggle // Icono de abir o cerrar submenu

// * ABRIR SIDEBAR MENU
iconoAbrirCerrarMenu.addEventListener("click", () => {
  sidebar.classList.toggle("cerrar");
});

// * CERRAR SIDEBAR MENU
document.addEventListener('click', (event) => {
    if (!(sidebar.contains(event.target)) && !sidebar.classList.contains("cerrar")) {
        sidebar.classList.add("cerrar");
        limpiarMenu();
        subMenu_1.classList.remove("activate-sub-menu");
    }
});

// * ABRIR Y CERRAR SUBMENUS

const opciones_menu = document.querySelectorAll('.nav-link2'); //links //Opciones del menú

const subMenu_1 = document.querySelector(".sub-menu"); //submenu //Contenedor sub menú de la primera opción
const opcionesSubMenu_1 = { // Opciones del sub menú 1
  Opcion1 : document.getElementById("primero_1"), //primero1 // Fondo
  Opcion2 : document.getElementById("primero_2"), //primero2 // Fuente
  Opcion3 : document.getElementById("primero_3"), //primero3 // Color
}

const subSubMenus = {
  subSubMenu_1 : document.querySelector(".sub-menu-1"), //submenu1 // menu Fondo
  subSubMenu_2 : document.querySelector(".sub-menu-2"), //submenu2 // menu Fuente
  subSubMenu_3 : document.querySelector(".sub-menu-3") //submenu3 // menu Color
}

// Función para limpiar los submenus y opciones menú
function limpiarMenu(){
  sidebar.querySelector("#primero").classList.remove("nav-link2-activate");
  sidebar.querySelector("#segundo").classList.remove("nav-link2-activate");
  sidebar.querySelector("#tercero").classList.remove("nav-link2-activate");

  opcionesSubMenu_1.Opcion1.classList.remove("activate-li-sub-menu");
  opcionesSubMenu_1.Opcion2.classList.remove("activate-li-sub-menu");
  opcionesSubMenu_1.Opcion3.classList.remove("activate-li-sub-menu");

  subSubMenus.subSubMenu_1.classList.remove("activate-sub-menu-1");
  subSubMenus.subSubMenu_2.classList.remove("activate-sub-menu-2");
  subSubMenus.subSubMenu_3.classList.remove("activate-sub-menu-3");
}

// Función para manejar la lógica de clics en los elementos de la barra lateral
function handleNavClick(element) {
  if(!element.className.includes("nav-link2-activate")){
    limpiarMenu();
  }
  // alternar estilos
  element.classList.toggle("nav-link2-activate");
}

// Click en opciones del menú
opciones_menu.forEach(element => {
  element.addEventListener("click", function (e) {
      if (element.id === "primero") {
          handleNavClick(element);
          subMenu_1.classList.toggle("activate-sub-menu");

      } else if (element.id === "segundo") {
          handleNavClick(element);
          subMenu_1.classList.remove("activate-sub-menu");

      } else if (element.id === "tercero") {
          handleNavClick(element);
          subMenu_1.classList.remove("activate-sub-menu");
      }
  });
});


//* FUNCIÓN DEL PRIMER SUBMENU
function toggleSubMenu(opcion, subSubMenu, index) {
  for (let i = 1; i <= 3; i++) {
    if (i !== index) {
      opcionesSubMenu_1['Opcion' + i].classList.remove("activate-li-sub-menu");
      subSubMenus['subSubMenu_' + i].classList.remove("activate-sub-menu-" + i);
    }
  }
  opcion.classList.toggle("activate-li-sub-menu");
  subSubMenu.classList.toggle("activate-sub-menu-" + index);
}

// FONDO
opcionesSubMenu_1.Opcion1.addEventListener("click", () => {
  toggleSubMenu(opcionesSubMenu_1.Opcion1, subSubMenus.subSubMenu_1, 1);
});


// FUENTE
opcionesSubMenu_1.Opcion2.addEventListener("click", () => {
  toggleSubMenu(opcionesSubMenu_1.Opcion2, subSubMenus.subSubMenu_2, 2);
});

// COLOR 
opcionesSubMenu_1.Opcion3.addEventListener("click", () => {
  toggleSubMenu(opcionesSubMenu_1.Opcion3, subSubMenus.subSubMenu_3, 3);
});

//* REEMPLAZAR FONDO
var estilosGuardados = JSON.parse(localStorage.getItem("estilos")) || {};

const fondos = document.querySelectorAll(".nav-link4"); // Fondos pre-definidos
const contenedorEncuesta = document.getElementById("contenedor-encuesta")
const dato3 = window.localStorage.fondo;


fondos.forEach(e => {
  e.onclick=()=>{
    const url = new URL(e.lastChild.lastChild.src).pathname
    let urlModificado = url.replace(/_mini/, "");

    contenedorEncuesta.style.backgroundImage = `url(${urlModificado })`;

//! FALTA
    if('fondo' in estilosGuardados){
      estilosGuardados.fondo = urlModificado
      //estilosGuardados.push({fondo: urlModificado});
      //localStorage.setItem("estilos", JSON.stringify(estilosGuardados));
    }


  }
});

// ========================================================
// FUNCIONES PARA REMPLAZAR FUENTE
// ========================================================
/*
const fuente = document.querySelectorAll(".nav-link5");
//const tituloEncuesta = document.getElementById("titulo-encuesta");
const dato4=window.localStorage.fuente || null;

// console.log(dato4)

fuente.forEach(f => {
  //tituloEncuesta.style.fontFamily = dato4;
  f.onclick = () => {
    const fuenteSeleccionada = f.querySelector(".descripcion-fuente").textContent;
    localStorage.setItem("fuente", fuenteSeleccionada);
    //tituloEncuesta.style.fontFamily = fuenteSeleccionada;
    // console.log(localStorage.getItem("fuente")); // Muestra el valor actualizado del Local Storage
  };
});
*/

// ========================================================
// FUNCIONES PARA REMPLAZAR COLOR
// ========================================================
/*
const color = document.querySelectorAll(".nav-link6");
  const colorTituloEncuesta = document.getElementById("titulo-encuesta");
  const dato5 = window.localStorage.color || null;
  var colorPregunta = document.querySelectorAll(".diseño-pregunta-span");
  var colorRespuestas = document.querySelectorAll(".diseño-opciones span");
  colorTituloEncuesta.style.color = dato5;

  // Verificar si colorPregunta existe antes de recorrerlo
  if (colorPregunta) {
    colorPregunta.forEach(pregunta => {
      pregunta.style.color = dato5;
    });
  }

  // Verificar si colorRespuestas existe antes de recorrerlo
  if (colorRespuestas) {
    colorRespuestas.forEach(respuestas => {
      respuestas.style.color = dato5;
    });
  }

  color.forEach(f => {
    f.onclick = () => {
      var colorPregunta = document.querySelectorAll(".diseño-pregunta-span");
      var colorRespuestas = document.querySelectorAll(".diseño-opciones span");
      const imgElement = f.querySelector("img");
      if (imgElement) {
        const filenameColor = imgElement.getAttribute('alt');
        localStorage.setItem("color", filenameColor);
        //tituloEncuesta.style.color = filenameColor;
        console.log(colorPregunta)
        // Verificar si colorPregunta existe antes de recorrerlo
        if (colorPregunta) {
          colorPregunta.forEach(pregunta => {
            pregunta.style.color = filenameColor;
            console.log("cambio")
          });
        }

        // Verificar si colorRespuestas existe antes de recorrerlo
        if (colorRespuestas) {
          colorRespuestas.forEach(respuestas => {
            respuestas.style.color = filenameColor;
          });
        }
      }
    };
  });
*/