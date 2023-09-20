//OBTENER EL TITULO DE ENCUESTA PREDEFINIDA

const tituloEncuestaPredefinida = document.getElementById('titulo-predefinido');

    // Intenta recuperar el título almacenado en el localStorage
    const storedTituloEncuestaPredefinido = localStorage.getItem('datosEncuestaPredefinido');

    // Si existe un título almacenado en el localStorage, reemplaza el contenido del <p> con él
    if (storedTituloEncuestaPredefinido) {
        const tituloEncuestaObj = JSON.parse(storedTituloEncuestaPredefinido);
        if (tituloEncuestaObj.Titulo) {
            tituloEncuestaPredefinida.textContent = tituloEncuestaObj.Titulo;
        }
    }