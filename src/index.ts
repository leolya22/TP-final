import type { User } from "./models/User.js";
import { UserService } from "./services/UserService.js";

const form = document.getElementById("userForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const roleSelect = document.getElementById("role") as HTMLSelectElement;
console.log(form, nameInput, emailInput, roleSelect);


const containers = {
  Administrador: document.getElementById("Administrador")!,
  Editor: document.getElementById("Editor")!,
  Lector: document.getElementById("Lector")!,
} as const;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const newUser: User = {
    id: crypto.randomUUID(),
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    role: roleSelect.value as User["role"],
  };
  console.log(newUser);

  UserService.addUser(newUser);
  renderUsers();
  form.reset();
});

function renderUsers() {
  const users = UserService.getUsers();

  Object.values(containers).forEach(container => (container.innerHTML = ""));

  users.forEach(user => {
    const div = document.createElement("div");
    div.className = "user-card";
    div.draggable = true;
    div.dataset.id = user.id;
    div.textContent = `${user.name} (${user.email})`;

    // Evento para arrastrar
    div.addEventListener("dragstart", (e) => {
      e.dataTransfer?.setData("text/plain", user.id);
    });

    // Botón eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => {
      UserService.deleteUser(user.id);
      renderUsers();
    };
    div.appendChild(deleteBtn);

    containers[user.role as keyof typeof containers].appendChild(div);
  });
}

Object.keys(containers).forEach(role => {
  const container = containers[role as keyof typeof containers];
  container.addEventListener("dragover", (e) => e.preventDefault());

  container.addEventListener("drop", (e) => {
    e.preventDefault();
    const userId = e.dataTransfer?.getData("text/plain");
    if (userId) {
      const users = UserService.getUsers();
      const user = users.find(u => u.id === userId);
      if (user && user.role !== role) {
        user.role = role as User["role"];
        UserService.updateUser(user);
        renderUsers();
      }
    }
  });
});

renderUsers();
