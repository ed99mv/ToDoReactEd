import TodoForm from "./componentes/TodoForm/TodoForm";
import "./App.css";
import { useState } from "react";
import TodoItems from "./componentes/TodoItems/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    let nuevosTodos = [todo, ...todos];

    setTodos(nuevosTodos);
  };

  const removeTodo = (id) => {
    console.log(id);
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    console.log(id);

    setTodos(
      todos.map((task) => {
        console.log(task);
        return task.id === Number(id)
          ? { ...task, completed: !task.completed }
          : { ...task };
      })
    );
  };

  const calcularCompletados = () => {
    let contador = 0;
    todos.forEach((task) => {
      if (task.completed) {
        contador += 1;
      }
    });
    return contador;
  };

  const completed = calcularCompletados();

  return (
    <div className="todo-app">
      <h1>ToDo App</h1>
      <p>{completed}</p>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <TodoItems
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}

export default App;
