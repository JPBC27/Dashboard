const body= document.querySelector("body"),
      sidebar=body.querySelector(".sidebar"),
      toggle=body.querySelector(".toggle");


      toggle.addEventListener("click",()=>{
        sidebar.classList.toggle("close"); 
      });

const barraLinks=document.querySelectorAll('.nav-link');
const textox=document.querySelectorAll('.text');


barraLinks.forEach(element => {
  element.onclick=()=>{

    // console.log(element.parentElement.lastElementChild)
    
    document.getElementById(element.lastChild.lastChild.id).classList.toggle("mostrar-texto")
  }

});