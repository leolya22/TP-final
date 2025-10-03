// --- Lógica principal ---
const saludo = document.getElementById("saludo");
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const btnBorrar = document.getElementById("borrar");

const setCookie = (nombre, valor, dias) => {
  const fecha = new Date();
  fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
  const expiracion = "expires=" + fecha.toUTCString();
  document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

const getCookie = (nombre) => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === nombre) {
      return value
    }
  }
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = inputNombre.value.trim();
  if (nombre) {
    setCookie("nombreUsuario", nombre, 7); // La cookie dura 7 días
    saludo.textContent = `¡Hola, ${nombre}!`;
    inputNombre.value = "";
  }
});

const nombreGuardado = getCookie("nombreUsuario");

if (nombreGuardado) {
  saludo.textContent = `¡Hola, ${nombreGuardado}!`;
  btnBorrar.style.display = "inline";
} else {
  saludo.textContent = "¡Hola, visitante!";
  formulario.style.display = "block";
}

btnBorrar.addEventListener("click", function () {
  setCookie("nombreUsuario", "", -1); // Borrar la cookie
  saludo.textContent = "¡Hola, visitante!";
  formulario.style.display = "block";
});