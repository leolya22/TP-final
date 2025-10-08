# Gestión de Usuarios

Este proyecto es una aplicación web para gestionar usuarios y asignarlos a diferentes roles (Administrador, Editor, Lector) mediante una interfaz drag & drop.

## Características

- Agregar usuarios con nombre y email.
- Visualización de usuarios en tarjetas.
- Arrastrar y soltar usuarios entre roles.
- Interfaz moderna y responsiva.

## Estructura del proyecto

```
TP-final/
│
├── index.html
├── styles.css
├── dist/
│   └── index.js
├── src/
│   ├── index.ts
│   ├── models/
│   │   └── User.ts
│   └── services/
│       └── UserService.ts
```

## Instalación y ejecución

1. Clona el repositorio:
   ```
   git clone https://github.com/leolya22/TP-final.git
   ```

2. Instala las dependencias (si usas TypeScript y bundler):
   ```
   npm install
   ```

3. Compila el proyecto:
   ```
   npm run build
   ```

4. Abre `index.html` en tu navegador.

## Uso

- Completa el formulario para agregar un usuario.
- Arrastra la tarjeta del usuario al rol deseado.

## Tecnologías

- HTML5
- CSS3
- TypeScript

## Autor

- Leo