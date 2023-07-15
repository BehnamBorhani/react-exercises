import React, { useState } from "react";
import "./Form.css";

export default function Form() {
   const [userData, setUserData] = useState({
      firstName: "",
      lastName: "",
      email: "",
   });
   const [validation, setValidation] = useState({
      submitted: false,
      allValid: false,
   });
   
   const { firstName, lastName, email } = userData;
   const { submitted, allValid } = validation;

   const submitHandler = (event) => {
      event.preventDefault();
      setValidation((prevState) => ({ ...prevState, submitted: true }));

      if (firstName && lastName && email) {
         let newUser = { firstName, lastName, email };
         fetch(
            "https://firstproject-8da0b-default-rtdb.firebaseio.com/users.json",
            {
               method: "POST",
               body: JSON.stringify(newUser),
            }
         ).then((response) => {
            setValidation((prevState) => ({ ...prevState, allValid: true }));
            setUserData({ firstName: "", lastName: "", email: "" });

            setTimeout(() => {
               setValidation((prevState) => ({
                  ...prevState,
                  allValid: false,
               }));
            }, 3000);
         });
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
               value={firstName}
               onChange={(event) =>
                  setUserData((prevState) => ({
                     ...prevState,
                     firstName: event.target.value,
                  }))
               }
            />
            {/* Uncomment the next line to show the error message */}
            {submitted && !firstName && (
               <span id="first-name-error">Please enter a first name</span>
            )}
            <input
               id="last-name"
               className="form-field"
               type="text"
               placeholder="Last Name"
               name="lastName"
               value={lastName}
               onChange={(event) =>
                  setUserData((prevState) => ({
                     ...prevState,
                     lastName: event.target.value,
                  }))
               }
            />
            {/* Uncomment the next line to show the error message */}
            {submitted && !lastName && (
               <span id="last-name-error">Please enter a last name</span>
            )}
            <input
               id="email"
               className="form-field"
               type="text"
               placeholder="Email"
               name="email"
               value={email}
               onChange={(event) =>
                  setUserData((prevState) => ({
                     ...prevState,
                     email: event.target.value,
                  }))
               }
            />
            {/* Uncomment the next line to show the error message */}
            {submitted && !email && (
               <span id="email-error">Please enter an email address</span>
            )}
            <button className="form-field" type="submit">
               Register
            </button>
         </form>
      </div>
   );
}
