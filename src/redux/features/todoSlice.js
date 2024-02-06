import { createSlice } from "@reduxjs/toolkit";

const initialState = function () {
  return (
    JSON.parse(localStorage.getItem("todos")) || {
      allTodos: [
        {
          title: "Reading books",
          completed: "false",
          id: 1,
        },
        {
          title: "Cleanig rooms",
          completed: "false",
          id: 2,
        },
        {
          title: "Cs 2",
          completed: "true",
          id: 3,
        },
      ],
      completed: 0,
      uncompleted: 0,
      modalData: null,
    }
  );
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState(),
  reducers: {
    addTodo: (state, { payload }) => {},
    deleteTodo: (state, { payload }) => {
      const del = state.allTodos.find((todo) => todo.id === payload);
      todo.completed -= 1;
    },
    removeDel: (state, { payload }) => {
      state.allTodos = state.allTodos.filter((todo) => todo.id !== payload);
    },

    completedTodo: (state, { payload }) => {},
    editTodo: (state, { payload }) => {
      const item = state.allTodos.find((todo) => todo.id == state.modalData.id);
      item.title = payload;
      localStorage.setItem(JSON.stringify(state));
    },
    modalDataEditor: (state, { payload }) => {},
  },
});
export const {
  addTodo,
  deleteTodo,
  completedTodo,
  editTodo,
  modalDataEditor,
  removeDel,
} = todoSlice.actions;
export default todoSlice.reducer;
