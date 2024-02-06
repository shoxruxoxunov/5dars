import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
// import { store } from "./redux/app/store";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
function App() {
  const [showTodo, setShowTodo] = useState(false);
  const { allTodos } = useSelector((store) => store.todos);
  useEffect(() => {}, [allTodos]);

  return (
    <>
      {showTodo && <Modal />}
      <div className="prose w-[500px] mx-auto py-10">
        <h2 className="text-center">Redux Todos</h2>
        <hr />
        <div className="prose flex justify-between items-center">
          <h4>Complted: 3</h4>
          <h4>Uncomplted: 2</h4>
          <h4>All: 5</h4>
        </div>
      </div>
      <div className=" w-[500px] mx-auto">
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="hello"
            className="w-full border p-2 focus:outline-cyan-400 rounded"
          />
          <button className="btn btn-outline btn-success">Add</button>
        </div>
        <TodoList allTodos={allTodos} setShowTodo={setShowTodo} />
      </div>
    </>
  );
}

export default App;
