import React, { useState } from "react";
import { postAPI } from "./page";
import { mutate } from "swr";

const addPost = async (data) => {
  const response = await fetch(postAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};
const PostForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addPost({ title });

    if (response.ok) {
      mutate(postAPI);   // khi thêm 1 cái vào DOM Thì refresh lại API
      setTitle("");
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Tiêu đề..."
        onChange={handleChange}
        value={title}   // để khi setTitle rỗng thì có thể eat
      />
      <button>Thêm</button>
    </form>
  );
};

export default PostForm;
