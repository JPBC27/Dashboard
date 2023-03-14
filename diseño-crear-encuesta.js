const body= document.querySelector("body"),
      sidebar=body.querySelector(".sidebar-2"),
      toggle=body.querySelector(".bi-caret-right"),
      submenu=document.querySelector(".sub-menu");

      toggle.addEventListener("click",()=>{
        sidebar.classList.toggle("cerrar"); 
      });

const links=document.querySelectorAll('.nav-link2');

links.forEach(element => {
  element.addEventListener("click",function(e) {
 
      toggle.classList.toggle("hidden-arrow")
      // console.log(e)
    
  })


  // element.addEventListener("mouseout",function(e) {
  //     toggle.classList.remove("hidden-arrow")
  //     // console.log(e)
  // })
});

const primero=document.querySelector('.primer');

primero.addEventListener("click",()=>{
  submenu.classList.toggle("activate-sub-menu")


})






