import { useEffect, useState } from "react";
import { useUserStore } from "../modules/userStore";
import type{ User } from "../modules/userModel";
import { UserTable } from "../components/Usertable";
import { UserForm } from "../components/UserForm";

export const Home = () => {
  const { users, fetch, create, remove, update } = useUserStore();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch();
  }, []);

  const handleSubmit = (user: Omit<User, "id">) => {
    if (selectedUser) {
      update(selectedUser.id, user);
      setSelectedUser(null);
    } else {
      create(user);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Users CRUD</h1>
      <UserTable users={users} onEdit={setSelectedUser} onDelete={remove} />
      <UserForm onSubmit={handleSubmit} initial={selectedUser} />
    </div>
  );
};
