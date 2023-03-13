const body= document.querySelector("body"),
      sidebar=body.querySelector(".sidebar-2"),
      toggle=body.querySelector(".bi-caret-right");


      toggle.addEventListener("click",()=>{
        sidebar.classList.toggle("cerrar"); 
      });