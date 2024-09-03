import { handleSubmit } from "./ServerAction";
const TodoForm2 = () => {
  return (
    <form action={handleSubmit}>
        <input type="text" placeholder="Tên..." name="name" />
        <button>Thêm</button>
    </form>
  )
};

export default TodoForm2