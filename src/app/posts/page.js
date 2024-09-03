"use client";
const postAPI = `https://jsonplaceholder.typicode.com/posts`;
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(postAPI);
  return await response.json();
};
const Posts = () => {
const { data: posts, error, isLoading } = useSWR("/posts", fetcher {
    revalidateIfStale: true;
});


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>đã xẩy ra lỗi</div>;

  return (
    <div>
      <h1>Danh sach sinh vien</h1>
      {posts.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};

export default Posts;
