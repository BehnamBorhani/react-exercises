import React, { useState } from "react";
import "./Form.css";

export default function Form() {
   const [firstNameData, setFirstNameData] = useState("");
   const [lastNameData, setLastNameData] = useState("");
   const [emailData, setEmailData] = useState("");
   const [submitted, setSubmitted] = useState(false);
   const [allValid, setAllValid] = useState(false);

   const submitHandler = (event) => {
      event.preventDefault();
      setSubmitted(true);

      if (firstNameData && lastNameData && emailData) {
         setAllValid(true);
         setTimeout(() => {
            setAllValid(false);
         }, 3000);
      }
   };

   return (
      <div className="form-container">
         <form
            className="register-form"
            autoComplete="off"
            onSubmit={submitHandler}
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
               onChange={(event) => setFirstNameData(event.target.value)}
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
               onChange={(event) => setLastNameData(event.target.value)}
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
               onChange={(event) => setEmailData(event.target.value)}
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
