const optionMenu=document.querySelector(".dropdown-agregar"), //div en donde se encuentran las opciones (checkbox, texto corto,...)
      selectBtn= optionMenu.querySelector(".select-btn-agregar"), //Botón en donde se abrirá el menú de opciones para agregar
      sBtn_text= optionMenu.querySelector(".sBtn-text-agregar"), //texto del menu opciones
      options= optionMenu.querySelectorAll(".option-agregar"); //opciones (checkbox, texto corto,...)

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active")); // Mostrar el listado de opciones