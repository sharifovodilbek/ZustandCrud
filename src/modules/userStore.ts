import { create } from "zustand";
import type{ User } from "./userModel";
import * as api from "../services/userService";

interface UserState {
  users: User[];
  fetch: () => void;
  create: (user: Omit<User, "id">) => void;
  remove: (id: number) => void;
  update: (id: number, user: Omit<User, "id">) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  fetch: async () => {
    const res = await api.getUsers();
    set({ users: res.data });
  },
  create: async (user) => {
    await api.createUser(user);
    const res = await api.getUsers();
    set({ users: res.data });
  },
  remove: async (id) => {
    await api.deleteUser(id);
    const res = await api.getUsers();
    set({ users: res.data });
  },
  update: async (id, user) => {
    await api.updateUser(id, user);
    const res = await api.getUsers();
    set({ users: res.data });
  }
}));
