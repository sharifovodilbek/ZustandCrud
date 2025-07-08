import type{ User } from "../modules/userModel";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export const UserTable = ({ users, onEdit, onDelete }: Props) => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <table
      border={1}
      style={{
        width: "90%",
        maxWidth: "800px",
        textAlign: "center",
        borderCollapse: "collapse"
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f2f2f2" }}>
          <th style={{ padding: "10px" }}>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td style={{ padding: "10px" }}>{user.name}</td>
            <td>{user.age}</td>
            <td>
              <button
                style={{
                  background: "deepskyblue",
                  color: "#fff",
                  marginRight: "10px",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
                onClick={() => onEdit(user)}
              >
                Update
              </button>
              <button
                style={{
                  background: "crimson",
                  color: "#fff",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

