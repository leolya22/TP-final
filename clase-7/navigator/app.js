// Idioma del navegador
document.getElementById("lang").textContent =
  `Idioma del navegador: ${navigator.language}`;

// Estado de conexión
function updateStatus() {
  document.getElementById("online").textContent =
    navigator.onLine ? "✅ Conectado a Internet" : "❌ Sin conexión";
}

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
updateStatus();

// Geolocalización (requiere permiso del usuario)
document.getElementById("geoBtn").addEventListener("click", () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      document.getElementById("geo").textContent =
        `Latitud: ${latitude}, Longitud: ${longitude}`;
    }, err => {
      document.getElementById("geo").textContent =
        `Error al obtener ubicación: ${err.message}`;
    });
  } else {
    document.getElementById("geo").textContent =
      "Geolocalización no soportada en este navegador.";
  }
});
