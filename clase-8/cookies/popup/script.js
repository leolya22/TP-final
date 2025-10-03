// --- Funciones cookies ---
function setCookie(nombre, valor, dias) {
  const fecha = new Date();
  fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
  document.cookie = `${nombre}=${valor};expires=${fecha.toUTCString()};path=/`;
}

function getCookie(nombre) {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === nombre) return value;
  }
  return null;
}

function deleteCookie(nombre) {
  document.cookie = `${nombre}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

// --- Lógica principal ---
const saludo = document.getElementById("saludo");
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const btnBorrar = document.getElementById("borrar");
const banner = document.getElementById("cookie-banner");

const permisoCookies = localStorage.getItem("permisoCookies");

// Mostrar cartel si nunca se eligió
if (!permisoCookies) {
  banner.style.display = "block";
}

// Botones del banner
document.getElementById("aceptar").addEventListener("click", () => {
  localStorage.setItem("permisoCookies", "aceptado");
  banner.style.display = "none";
  location.reload(); // recargar para aplicar lógica
});

document.getElementById("rechazar").addEventListener("click", () => {
  localStorage.setItem("permisoCookies", "rechazado");
  banner.style.display = "none";
  // Importante: acá no se crean cookies
});

// Solo ejecutar lógica de cookies si aceptó
if (permisoCookies === "aceptado") {
  const nombreGuardado = getCookie("usuario");

  if (nombreGuardado) {
    saludo.textContent = `¡Hola de nuevo, ${nombreGuardado}! 👋`;
    formulario.style.display = "none";
    btnBorrar.style.display = "inline-block";
  }

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = inputNombre.value;
    setCookie("usuario", nombre, 7);
    saludo.textContent = `¡Hola, ${nombre}! Tu nombre fue recordado.`;
    formulario.style.display = "none";
    btnBorrar.style.display = "inline-block";
  });

  btnBorrar.addEventListener("click", () => {
    deleteCookie("usuario");
    saludo.textContent = "Bienvenido";
    formulario.style.display = "block";
    btnBorrar.style.display = "none";
  });
}