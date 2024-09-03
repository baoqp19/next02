"use client";

import RefreshButton from "./RefreshButton";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoForm2 from "./TodoForm2";

export const todoApi = `http://localhost:3005/todos`;

const getTodos = async () => {
  const response = await fetch(todoApi, {
    cache: "no-cache",
    next: {
      revalidate: 5, // 5s sẽ tái xác thực một lần (chỉ nếu bạn đang dùng framework hỗ trợ)
    },
  });
  const data = await response.json();
  return data;
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <ul>
        {todos.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <TodoForm2 onRefresh={fetchTodos} />

      <RefreshButton onRefresh={fetchTodos} />
    </div>
  );
};

export default TodoList;







