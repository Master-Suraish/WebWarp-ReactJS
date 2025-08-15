//! Problem : index is not unique when item delete his index gives to another todo

import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [allTodoList, setAllTodoList] = useState([]); //* store all Todo lists.
  const [inputText, setInputText] = useState(""); //* store input characters
  const [inputAddBtn, setInputAddBtn] = useState("Add"); //* For input "add" or "edit" button.
  const [getTodoIndex, setGetTodoIndex] = useState(null); //* store todo index to edit them.

  const [checkDoneTodo, setCheckDoneTodo] = useState([]);

  function listenInputText(e) {
    setInputText(e.target.value);
  }

  function listenKeyboard(e) {
    if (e.key === "Enter") addTodo();
  }

  function addTodo() {
    if (!inputText) return alert("Please enter a Todo"); //* this validation called "early return".

    if (inputAddBtn === "Add") {
      const copyOf_allTodoList = [...allTodoList];
      copyOf_allTodoList.push(inputText);
      setAllTodoList(copyOf_allTodoList);
      // setAllTodoList([...allTodoList, inputText]); //* Short way of above three line code.
      setInputText("");
    } else if (inputAddBtn === "Edit") {
      const copyOf_allTodoList = [...allTodoList];
      copyOf_allTodoList[getTodoIndex] = inputText;
      setAllTodoList(copyOf_allTodoList);
      setInputText("");
      setInputAddBtn("Add"); //* back to "Add" button
      setGetTodoIndex(null);
    }
  }
  function deleteTodo(index) {
    const copyOf_allTodoList = [...allTodoList];
    copyOf_allTodoList.splice(index, 1);
    setAllTodoList(copyOf_allTodoList);
  }

  function editTodo(index, todo) {
    setInputAddBtn("Edit");
    setInputText(todo);
    setGetTodoIndex(index); //* send todo index to "getTodoIndex" useState.
  }

  function checkedTodo(index) {
    const copy_allTodoList = [...checkDoneTodo];
    copy_allTodoList[index] = !copy_allTodoList[index];
    setCheckDoneTodo(copy_allTodoList);
  }

  return (
    <>
      <div className="bg-blue-50 flex items-center min-h-screen flex-col">
        <div className="h-20 w-150 mt-5 mb-5 flex justify-between items-center">
          <input
            className="bg-white border-1 w-140 h-10 rounded-lg ps-3"
            type="text"
            value={inputText}
            onChange={(event) => {
              listenInputText(event);
            }}
            onKeyDown={(e) => listenKeyboard(e)}
          />

          <button
            className="p-2 rounded-lg border-1 bg-blue-800 text-white font-bold hover:bg-blue-950"
            onClick={addTodo}
          >
            {inputAddBtn === "Add" ? (
              <i className="fa-solid fa-floppy-disk"></i>
            ) : (
              <i className="fa-solid fa-pen-to-square"></i>
            )}
          </button>
        </div>
        <div className="w-150">
          {allTodoList.map((todo, index) => {
            return (
              <div
                key={index}
                className={` 
                 border-1 rounded-lg flex justify-between items-center mt-2 pt-1 pb-1`}
              >
                <div className="flex">
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="accent-blue-800 w-4 ms-2 me-2"
                      value={checkDoneTodo}
                      onClick={() => checkedTodo(index)}
                    />
                  </div>
                  <div
                    className={checkDoneTodo[index] ? "line-through" : "none"}
                  >
                    {todo}
                  </div>
                </div>
                <div>
                  <button
                    className="bg-blue-800 text-white font-bold p-1 m-2 rounded-lg"
                    onClick={() => editTodo(index, todo)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="bg-blue-800 text-white p-1 m-2 rounded-lg"
                    onClick={() => deleteTodo(index)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TodoList;
