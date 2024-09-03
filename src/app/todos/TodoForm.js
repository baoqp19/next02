// TodoForm.js
"use client";

import React, { useState } from "react";
import { todoApi } from "./TodoList";
import { useRouter } from "next/navigation";

const postTodo = async (name) => {
  const response = await fetch(todoApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  return response;
};

const TodoForm = ({ onRefresh }) => {
  // Nhận onRefresh như một prop
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postTodo(name);
    if (response.ok) {
      onRefresh(); // Gọi hàm onRefresh sau khi thêm mới thành công
      setName("")
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button>Thêm</button>
    </form>
  );
};

export default TodoForm;
