import { useState, useEffect } from "react";
import { type User } from "../modules/userModel";

interface Props {
  onSubmit: (user: Omit<User, "id">) => void;
  initial?: User | null;
}

export const UserForm = ({ onSubmit, initial }: Props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (initial) {
      setName(initial.name);
      setAge(String(initial.age));
    }
  }, [initial]);

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "200px",
        }}
      />
      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "100px",
        }}
      />
      <button
        style={{
          backgroundColor: initial ? "deepskyblue" : "darkgreen",
          color: "#fff",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = initial ? "#007acc" : "#006400")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = initial ? "deepskyblue" : "darkgreen")
        }
        onClick={() => {
          if (name.trim() && age.trim()) {
            onSubmit({ name, age: +age });
            setName("");
            setAge("");
          }
        }}
      >
        {initial ? "Update User" : "Add New User"}
      </button>
    </div>
  );
};
