/**************/
/* MODAL */
/**************/
const miModal = document.getElementById("miModal");
const btnCerrarModal = document.getElementById("btnCerrarModal");
const btnGuardarImagen = document.getElementById("btn-gfoto");
const btnCancelarImagen = document.getElementById("btn-cfoto");

// Función para abrir el modal
function abrirModal() {
    miModal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    const input = document.getElementById("cargarImagen");
    input.value = '';
    miModal.style.display = "none";
}

// Verificar si se seleccionó un archivo
function validarSeleccionImagen(input) {
    if (input.files.length > 0) {
        abrirModal();
        cargarImagen(input);
    } else {
        input.value = '';
    }
}

// Cerrar el modal al hacer clic en el botón de cerrar (x)
btnCerrarModal.addEventListener("click", cerrarModal);

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener("click", (event) => {
    if (event.target === miModal) {
        cerrarModal();
    }
});

// Abrir el modal al hacer clic en el botón Guardar
btnGuardarImagen.addEventListener("click", (event) => {
    cerrarModal();
});

// Abrir el modal al hacer clic en el botón Cancelar
btnCancelarImagen.addEventListener("click", (event) => {
    cerrarModal();
});

/**************/
/* DATOS */
/**************/

// Datos Básicos
const iconBasicos = document.getElementById("ic-basicos");
const contBasicos = document.getElementById("cont-basicos");
const btnBasicos = document.getElementById("btn-basicos");
const datosBasicosArray = []
// Datos Profesionales
const iconProfes = document.getElementById("ic-profesionales");
const contProfes = document.getElementById("cont-profesionales");
const btnProfes = document.getElementById("btn-profesionales");
const datosProfesArray = []
// Función para habilitar la edición de datos básicos
iconProfes.addEventListener("click", () => {
    if (btnProfes.style.display === "none" || btnProfes.style.display === "") {
        const inputs = contProfes.querySelectorAll("input");
        inputs.forEach(input => {
            input.disabled = false;
            datosProfesArray.push(input.value);
        });
        btnProfes.style.display = "block";
        iconProfes.style.color = '#F2A530';
        iconProfes.style.borderColor = '#F2A530';
        iconProfes.style.cursor = 'default';
    }
});

// Función para deshabilitar la edición de datos profesionales
btnProfes.children[1].addEventListener("click", (event) => {
    if (btnProfes.style.display === "block") {
        const inputs = contProfes.querySelectorAll("input, select");
        inputs.forEach((input, index) => {
            input.disabled = true;
            input.value = datosProfesArray[index];
        });
        btnProfes.style.display = "none";
        iconProfes.style.color = '#535353';
        iconProfes.style.borderColor = '#9D9D9D';
        iconProfes.style.cursor = 'pointer';
    }
    event.preventDefault(); //Previene a que se actualice la pagina
});

// Función para habilitar la edición de datos profesionales
iconBasicos.addEventListener("click", () => {
    if (btnBasicos.style.display === "none" || btnBasicos.style.display === "") {
        const inputs = contBasicos.querySelectorAll("input, select");
        inputs.forEach(input => {
            input.disabled = false;
            datosBasicosArray.push(input.value);
        });
        btnBasicos.style.display = "block";
        iconBasicos.style.color = '#F2A530';
        iconBasicos.style.borderColor = '#F2A530';
        iconBasicos.style.cursor = 'default';
    }
});

// Función para deshabilitar la edición de datos profesionales
btnBasicos.children[1].addEventListener("click", (event) => {
    if (btnBasicos.style.display === "block") {
        const inputs = contBasicos.querySelectorAll("input, select");
        inputs.forEach((input, index) => {
            input.disabled = true;
            input.value = datosBasicosArray[index];
        });
        btnBasicos.style.display = "none";
        iconBasicos.style.color = '#535353';
        iconBasicos.style.borderColor = '#9D9D9D';
        iconBasicos.style.cursor = 'pointer';
    }
    event.preventDefault(); //Previene a que se actualice la pagina
});

/**************/
/* IMAGEN */
/**************/
const imagen = document.getElementById('imagen');
const recortarButton = document.getElementById('recortar');
const imagenRecortadaImage = document.getElementById('foto-perfil');
const imagenRecortadaIcon = document.getElementById('icon-profile');
const cargando = document.getElementById('loader');
let cropper;

// Función para cargar una imagen
function cargarImagen(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagen.src = e.target.result;
            if (cropper) {
                cropper.replace(e.target.result);
            } else {
                iniciarCropper();
                cargando.style.display = "none";
            }
        };
        reader.readAsDataURL(file);
    }
}

// Función para inicializar el cropper
function iniciarCropper() {
    cropper = new Cropper(imagen, {
        movable: true,
        zoomable: true,
        aspectRatio: 1,
        viewMode: 1,
        autoCropArea: 1,
        cropBoxResizable: false,
        dragMode: 'move',
        maxCropBoxWidth: 250,
        maxCropBoxHeight: 250,
        minContainerHeight: 270,
    });
}

// Función para guardar la imagen recortada
btnGuardarImagen.addEventListener('click', () => {
    // Tamaño de la imagen
    const croppedCanvas = cropper.getCroppedCanvas({
        width: 250,
        height: 250
    });

    if (croppedCanvas) {
        const croppedImageUrl = croppedCanvas.toDataURL('image/png');
        imagenRecortadaImage.src = croppedImageUrl;
        imagenRecortadaIcon.src = croppedImageUrl;
    }

    cropper.destroy();
    cropper = null;
    cargando.style.display = "block";
});

