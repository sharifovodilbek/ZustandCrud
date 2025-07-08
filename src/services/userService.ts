import axios from "axios";
import type{ User } from "../modules/userModel";

const API = axios.create({
  baseURL: "http://localhost:3001"
});

export const getUsers = () => API.get<User[]>("/users");
export const createUser = (user: Omit<User, "id">) => API.post("/users", user);
export const deleteUser = (id: number) => API.delete(`/users/${id}`);
export const updateUser = (id: number, data: Omit<User, "id">) => API.put(`/users/${id}`, data);
