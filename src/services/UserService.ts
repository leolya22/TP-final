import type { User } from "../models/User.js";

const STORAGE_KEY = "usuarios";

export class UserService {
  static getUsers(): User[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  static saveUsers(users: User[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }

  static addUser(user: User): void {
    const users = this.getUsers();
    users.push(user);
    this.saveUsers(users);
  }

  static deleteUser(id: string): void {
    const users = this.getUsers().filter(user => user.id !== id);
    this.saveUsers(users);
  }

  static updateUser(updated: User): void {
    const users = this.getUsers().map(user =>
      user.id === updated.id ? updated : user
    );
    this.saveUsers(users);
  }
}
