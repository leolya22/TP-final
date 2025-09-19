# Usos de `matchMedia`

En el mundo real, **`matchMedia` con JavaScript** se usa mucho cuando necesitamos que la aplicación no solo se vea distinta en pantallas diferentes (eso lo cubre CSS), sino que también **se comporte distinto**.  

---

## 🛒 Ecommerce
- Mostrar un **carrito lateral deslizable** en pantallas grandes, pero abrirlo como **pantalla completa** en celulares.
- Cargar imágenes más pesadas (HD) en desktop y versiones comprimidas en mobile.

---

## 🎵 Apps multimedia
- Reproducir un **video automáticamente** en pantallas grandes, pero deshabilitar el autoplay en celulares para ahorrar datos.
- Cambiar la interfaz del reproductor (controles completos en desktop vs. controles simplificados en móvil).

---

## 📊 Dashboards y aplicaciones de datos
- Ocultar columnas de una tabla si el usuario está en un celular y reemplazarlas por un **menú desplegable**.
- Renderizar gráficos distintos según el tamaño (por ejemplo: gráfico de barras en desktop, gráfico simplificado en mobile).

---

## 🗺️ Mapas e interfaces interactivas
- En una app de mapas, mostrar la lista de resultados **a la izquierda** en escritorio y **debajo** en móvil.
- Activar/desactivar interacciones pesadas (como animaciones) solo si la pantalla es grande.

---

## 🔐 Seguridad y experiencia de usuario
- Cambiar el flujo de login: en escritorio se muestra un modal, en mobile se redirige a una pantalla dedicada.
- Pedir permisos (ej. cámara o GPS) solo si la pantalla sugiere que es un dispositivo móvil.

---

## ✅ Conclusión
En proyectos reales se usa `matchMedia` cuando el **tamaño de pantalla afecta la lógica de negocio o la experiencia del usuario**, no solo la apariencia.  
CSS hace el trabajo visual, pero JS entra en juego cuando hay que **cambiar el comportamiento de la aplicación**.
