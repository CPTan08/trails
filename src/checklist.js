import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID
import "./TodoList.css";

const Checklist = ({ id, title, deleteTodoList }) => {
  const [todoItems, setTodoItems] = useState([
    {
      id: uuidv4(), // 2. add uuid to the item
      name: "Pack Snacks and Drinks",
      isDone: false,
    },
    {
      id: uuidv4(), // 3.add uuid to the item
      name: "Pack Insect Repellent",
      isDone: true,
    },
    {
      id: uuidv4(), // 4.add uuid to the item
      name: "Pack Raincoat or Umbrella",
      isDone: true,
    },
  ]);

  const [newItemName, setNewItemName] = useState("");

  const handleChange = (e) => {
    setNewItemName(e.target.value);
  };

  function addNewTodo() {
    const newTodoItem = {
      id: uuidv4(),
      name: newItemName,
      isDone: false,
    };

    setTodoItems([...todoItems, newTodoItem]);
  }

  function setTodo(id) {
    const todoIndex = todoItems.findIndex((todo) => todo.id === id);
    const updatedTodos = [...todoItems];
    updatedTodos[todoIndex].isDone = !updatedTodos[todoIndex].isDone;

    setTodoItems(updatedTodos);
  }

  function deleteTodo(id) {
    const updatedToDoItems = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(updatedToDoItems);
  }

  return (
    <div>
      <button onClick={() => deleteTodoList(id)}>Delete To Do List</button>
      <div className="header">{title}</div>
      <input
        type="text"
        value={newItemName}
        onChange={handleChange}
        placeholder="Take a break"
      />
      <button onClick={() => addNewTodo()}>Add Task</button>
      <div className="items">
        {todoItems.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              name={todo.name}
              isDone={todo.isDone}
              setTodo={() => setTodo(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Checklist;
