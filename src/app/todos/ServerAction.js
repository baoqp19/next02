"use server";

export const handleSubmit = async (formData) => {
  console.log(formData);
  const name = formData.get("name");
  console.log(name);
  // Thêm logic xử lý server-side tại đây
};
f