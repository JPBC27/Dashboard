const body= document.querySelector("body"),
      sidebar=body.querySelector(".sidebar-2"),
      toggle=body.querySelector(".bi-caret-right"),
      submenu=document.querySelector(".sub-menu"),
      submenu1=document.querySelector(".sub-menu-1");

      toggle.addEventListener("click",()=>{
        sidebar.classList.toggle("cerrar"); 
      });

const links=document.querySelectorAll('.nav-link2');


// const links=document.querySelectorAll('.nav-link2');
// const menu=body.querySelectorAll(".menu2");


// menu.forEach(element => {
//   element.addEventListener("mouseover",function(e) {
 
//       toggle.classList.toggle("hidden-arrow");
      
    
//   })

  
//   element.addEventListener("mouseout",function(e) {
//       toggle.classList.remove("hidden-arrow")
      
//   })
// });

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








