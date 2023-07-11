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

      this.setState((prevState) => ({
         todos: [...prevState.todos, newTodo],
         todoTitle: "",
      }));
   };

   removeTodo = (id) => {
      let newTodos = this.state.todos.filter((todo) => todo.id !== id);
      this.setState({ todos: newTodos });
   };

   editTodo = (id) => {
      let newTodos = [...this.state.todos];
      newTodos.forEach((todo) => {
         if (todo.id === id) {
            todo.completed = !todo.completed;
         }
      });
      this.setState({ todos: newTodos });
   };

   todoTitleHandler = (event) => {
      this.setState({ todoTitle: event.target.value });
   };

   statusHandler = () => {};

   render() {
      const { todos, todoTitle, status } = this.state;
      return (
         <>
            <Header />
            <form onSubmit={this.addTodo}>
               <input
                  type="text"
                  className="todo-input"
                  maxLength="40"
                  value={todoTitle}
                  onChange={this.todoTitleHandler}
               />
               <button className="todo-button" type="submit">
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
                     <Todo
                        {...todo}
                        removeTodo={this.removeTodo}
                        editTodo={this.editTodo}
                        key={todo.id}
                     />
                  ))}
               </ul>
            </div>
         </>
      );
   }
}
