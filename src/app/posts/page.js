"use client";
// export const postAPI = `http://localhost:3005/posts`;
export const postAPI = `https://jsonplaceholder.typicode.com/posts`;
import useSWR from "swr";
import PostForm from "./PostForm";

const fetcher = async (url) => {
  const response = await fetch(url);
  return await response.json();
};
const Posts = () => {
  const { data: posts, error, isLoading, mutate } = useSWR(postAPI, fetcher, {
    revalidateOnFocus: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>đã xẩy ra lỗi</div>;

  return (
    <div>
      <h1>Danh sach sinh vien</h1>
      {posts.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
      <PostForm mutate={mutate} />
    </div>
  );
};

export default Posts;
