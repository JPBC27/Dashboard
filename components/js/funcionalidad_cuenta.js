
// Datos Básicos
const iconBasicosCuenta = document.getElementById("ic-basicos-cuenta");
const contBasicosCuenta = document.getElementById("cont-basicos-cuenta");
const btnBasicosCuenta = document.getElementById("btn-basicos-cuenta");
const datosBasicosArrayCuenta = [];

// Función para habilitar la edición de datos profesionales
iconBasicosCuenta.addEventListener("click", () => {
    if (btnBasicosCuenta.style.display === "none" || btnBasicosCuenta.style.display === "") {
        const inputs = contBasicosCuenta.querySelectorAll("input, select");
        inputs.forEach(input => {
            input.disabled = false;
            datosBasicosArrayCuenta.push(input.value);
        });
        btnBasicosCuenta.style.display = "block";
        iconBasicosCuenta.style.color = '#F2A530';
        iconBasicosCuenta.style.borderColor = '#F2A530';
        iconBasicosCuenta.style.cursor = 'default';
    }
});

// Función para deshabilitar la edición de datos profesionales
btnBasicosCuenta.children[1].addEventListener("click", (event) => {
    if (btnBasicosCuenta.style.display === "block") {
        const inputs = contBasicosCuenta.querySelectorAll("input, select");
        inputs.forEach((input, index) => {
            input.disabled = true;
            input.value = datosBasicosArrayCuenta[index];
        });
        btnBasicosCuenta.style.display = "none";
        iconBasicosCuenta.style.color = '#535353';
        iconBasicosCuenta.style.borderColor = '#9D9D9D';
        iconBasicosCuenta.style.cursor = 'pointer';
    }
    event.preventDefault(); //Previene a que se actualice la pagina
});