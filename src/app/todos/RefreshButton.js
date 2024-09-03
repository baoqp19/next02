"use client";

import { useRouter } from "next/navigation";

const RefreshButton = ({ onRefresh }) => {
  const handleClick = () => {
    onRefresh(); // Gọi hàm onRefresh để fetch dữ liệu mới
  };

  return <button onClick={handleClick}>Refresh</button>;
};

export default RefreshButton;
