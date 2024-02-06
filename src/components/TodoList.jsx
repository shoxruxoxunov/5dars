import React from "react";
import { modalDataEditor, removeDel } from "../redux/features/todoSlice";
import { useDispatch } from "react-redux";

function TodoList({ allTodos, setShowTodo, deleteTodo }) {
  const dispatch = useDispatch();

  return (
    <div className="mt-[20px]">
      <ul>
        {allTodos.map((todo) => {
          return (
            <li
              key={todo.id}
              className="bg-slate-100 p-2 rounded flex items-center justify-between"
            >
              <p>{todo.title}</p>
              <div>
                <button
                  onClick={() => {
                    dispatch(modalDataEditor(todo));
                    setShowTodo(true);
                  }}
                  className="border px-2 py-1 bg-orange-400 rounded hover:text-white"
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    if (todo.components === 1) {
                      dispatch(removeDel(todo.id));
                    } else {
                      dispatch(deleteTodo(todo.id));
                    }
                  }}
                  className="border px-2 py-1 bg-red-400 rounded hover:text-white"
                >
                  del
                </button>
                <button className="border px-2 py-1 bg-green-400 rounded hover:text-white">
                  done
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
