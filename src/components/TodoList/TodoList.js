import React, { Component } from "react";
import Header from "./Header";
import Todo from "./Todo";

export default class TodoList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         todos: [],
         todoTitle: "",
         status: "all",
      };
   }

   addTodo = (event) => {
      event.preventDefault();
      const { todos, todoTitle } = this.state;

      let newTodo = {
         id: todos.length + 1,
         title: todoTitle,
         completed: false,
      };

      this.setState((prevState) => ({ todos: [...prevState.todos, newTodo] }));
   };

   removeTodo = () => {};

   editTodo = () => {};

   todoTitleHandler = (event) => {
      this.setState({ todoTitle: event.target.value });
   };

   statusHandler = () => {};

   render() {
      const { todos, todoTitle, status } = this.state;
      return (
         <>
            <Header />
            <form>
               <input
                  type="text"
                  className="todo-input"
                  maxLength="40"
                  value={todoTitle}
                  onChange={this.todoTitleHandler}
                  onKeyUp={(event) =>
                     event.target.keyCode === 13 ? this.addTodo : null
                  }
               />
               <button
                  className="todo-button"
                  type="submit"
                  onClick={this.addTodo}
               >
                  <i className="fas fa-plus-square"></i>
               </button>
               <div className="select">
                  <select name="todos" className="filter-todo">
                     <option value="all">All</option>
                     <option value="completed">Completed</option>
                     <option value="uncompleted">Uncompleted</option>
                  </select>
               </div>
            </form>

            <div className="todo-container">
               <ul className="todo-list">
                  {todos.map((todo) => (
                     <Todo {...todo} key={todo.id} />
                  ))}
               </ul>
            </div>
         </>
      );
   }
}
