import React from "react";
import "./Form.css";

export default class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         firstNameData: "",
         lastNameData: "",
         emailData: "",
         submitted: false,
         allValid: false,
      };
   }

   submitHandler = (event) => {
      event.preventDefault();
      this.setState({ submitted: true });

      const { firstNameData, lastNameData, emailData } = this.state;
      if (firstNameData && lastNameData && emailData) {
         this.setState({ allValid: true });

         setTimeout(() => {
            this.setState({
               allValid: false,
            });
         }, 3000);
      }
   };

   firstNameHandler = (event) => {
      this.setState({ firstNameData: event.target.value });
   };

   lastNameHandler = (event) => {
      this.setState({ lastNameData: event.target.value });
   };

   emailNameHandler = (event) => {
      this.setState({ emailData: event.target.value });
   };

   render() {
      const { firstNameData, lastNameData, emailData, submitted, allValid } =
         this.state;
      return (
         <div className="form-container">
            <form
               className="register-form"
               autoComplete="off"
               onSubmit={this.submitHandler}
            >
               {/* Uncomment the next line to show the success message */}
               {submitted && allValid && (
                  <div className="success-message">
                     Success! Thank you for registering
                  </div>
               )}
               <input
                  id="first-name"
                  className="form-field"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={this.firstNameHandler}
               />
               {/* Uncomment the next line to show the error message */}
               {submitted && !firstNameData && (
                  <span id="first-name-error">Please enter a first name</span>
               )}
               <input
                  id="last-name"
                  className="form-field"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={this.lastNameHandler}
               />
               {/* Uncomment the next line to show the error message */}
               {submitted && !lastNameData && (
                  <span id="last-name-error">Please enter a last name</span>
               )}
               <input
                  id="email"
                  className="form-field"
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={this.emailNameHandler}
               />
               {/* Uncomment the next line to show the error message */}
               {submitted && !emailData && (
                  <span id="email-error">Please enter an email address</span>
               )}
               <button className="form-field" type="submit">
                  Register
               </button>
            </form>
         </div>
      );
   }
}
