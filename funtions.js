// Variables.
const form = document.querySelector("#form");
const precio = 200;
const total = document.querySelector("#total");
const cantidad = document.querySelector("#cantidad");
const categoria = document.querySelector("#categoria");
const btnResumen = document.querySelector("#btnResumen");
const btnBorrar = document.querySelector("#btnBorrar");
const descuentoCategoria = {
    1: 0.2,
    2: 0.5,
    3: 0.85
};

// Event Listeners.
eventListeners();

function eventListeners() {
    btnResumen.addEventListener("click", calcularTotal);
    btnBorrar.addEventListener("click", borrarFormulario);
}

// Functions.
function calcularTotal(e) {
    validarFormulario();
  //Calculo el total.
  let totalPagar = precio * cantidad.value;
  //Hago el descuento
    descuento = descuentoCategoria[categoria.value];
  //Aplico el descuento al total.
  totalPagar *= descuento;
  //Muestro el nuevo total con el descuento.
    total.textContent = totalPagar;
}

function validarFormulario() {
  //Valido datos del form.
    if (cantidad.value <= 0 || cantidad.value === "") {
    mostrarMensaje("Debe ingresar la cantidad");
    return;
    }
}


function mostrarMensaje(mensaje) {
  //si el mensaje ya existe no lo vuelvo a crear.
    if (document.querySelector(".msg")) {
        return;
    }

    const mensajeDiv = document.createElement("div");

    mensajeDiv.textContent = mensaje;
    mensajeDiv.classList.add("alert-danger", "alert", "text-center", "mt-4", "msg");
    form.appendChild(mensajeDiv);

    setTimeout(() => {
    mensajeDiv.remove();
    }, 3000);

}

// borrar form
function borrarFormulario() {
    form.reset();
    total.textContent = "";
}
