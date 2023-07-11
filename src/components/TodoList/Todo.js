import React, { Component } from "react";

export default class Todo extends Component {
   render() {
      const { id, title, completed, removeTodo, editTodo } = this.props;
      return (
         // 'completed' class for completed todos
         <div
            className={`todo ${completed ? "completed" : ""}`}
            style={{ display: "flex" }}
         >
            <li className="todo-item">{title}</li>

            <button className="check-btn" onClick={() => editTodo(id)}>
               <i className="fas fa-check" aria-hidden="true"></i>
            </button>

            <button className="trash-btn" onClick={() => removeTodo(id)}>
               <i className="fas fa-trash" aria-hidden="true"></i>
            </button>
         </div>
      );
   }
}
