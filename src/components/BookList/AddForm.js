import React, { Component } from "react";
import Book from "./Book";

export default class AddForm extends Component {
   constructor() {
      super();

      this.state = {
         books: [],

         title: "",
         author: "",
         year: "",
      };
   }

   inputChangeHandler = (event) => {
      const input = event.target;
      this.setState({ [input.id]: input.value });
   };

   addBook = (event) => {
      event.preventDefault();
      const { books, title, author, year } = this.state;
      const newBook = {
         id: books.length + 1,
         title,
         author,
         year,
      };

      this.setState({
         books: [...books, newBook],
         title: "",
         author: "",
         year: "",
      });
   };

   render() {
      return (
         <>
            <form id="book-form" autoComplete="off">
               <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                     type="text"
                     id="title"
                     className="form-control"
                     value={this.state.title}
                     onChange={this.inputChangeHandler}
                  />
               </div>

               <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <input
                     type="text"
                     id="author"
                     className="form-control"
                     value={this.state.author}
                     onChange={this.inputChangeHandler}
                  />
               </div>

               <div className="form-group">
                  <label htmlFor="year">Year</label>
                  <input
                     type="text"
                     id="year"
                     className="form-control"
                     value={this.state.year}
                     onChange={this.inputChangeHandler}
                  />
               </div>
               <input
                  type="submit"
                  value="Add Book"
                  className="btn btn-warning btn-block add-btn"
                  onClick={this.addBook}
               />
            </form>
            <table className="table table-striped mt-5 text-center">
               <thead>
                  <tr>
                     <th>Title</th>
                     <th>Author</th>
                     <th>Year</th>
                  </tr>
               </thead>
               <tbody id="book-list">
                  {this.state.books.map((book) => (
                     <Book {...book} key={book.id} />
                  ))}
               </tbody>
            </table>
         </>
      );
   }
}
