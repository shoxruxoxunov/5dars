import React from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/features/todoSlice";
import { useSelector } from "react-redux";

function Modal() {
    const {modalData}=useSelector((store)=>store.todos)
   
  return (
    <>
      <div className="h-screen bg-[rgba(0,0,0,.5)] fixed top-0 left-0 w-full bottom-0 flex justify-center items-center">
        <div className="w-[500px] bg-slate-100 p-10 rounded">
          <input
            type="text"
            placeholder="Malumot yoq"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <button className="btn btn-error mt-[10px]">edit</button>
        </div>
      </div>
    </>
  );
}

export default Modal;
