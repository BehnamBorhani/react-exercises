import React, { useState } from "react";
import "./Ticket.css";

export default function Ticket() {
   const [countriesData, setCountriesData] = useState({
      Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
      Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
      US: ["Los Angles", "San Diego", "Chicago"],
   });
   const [mainCountryCities, setMainCountryCities] = useState([]);

   const countryHandler = (event) => {
      const country = event.target.value;
      setMainCountryCities(countriesData[country]);
   };

   return (
      <div className="container">
         <div className="col-md-6 box">
            <input className="fnameInput" placeholder="First Name" />
         </div>

         <div className="col-md-6 box">
            <input className="lnameInput" placeholder="Last Name" />
         </div>
         <div className="col-md-6 box">
            <input className="phoneInput" placeholder="Phone Number" />
         </div>
         <div className="col-md-6 box">
            <input className="emailInput" placeholder="Email" />
         </div>
         <div className="col-md-6 box">
            <select className="countrySelect" onChange={countryHandler}>
               <option value="-1">Please Select ...</option>
               <option className="option" value="Iran">
                  Iran
               </option>
               <option className="option" value="Turkey">
                  Turkey
               </option>
               <option className="option" value="US">
                  United State
               </option>
            </select>
         </div>
         <div className="col-md-6 box">
            <select className="citySelect">
               <option value="-1">Please Select City</option>
               {mainCountryCities.map((city) => {
                  return (
                     <option value={city} key={city}>
                        {city}
                     </option>
                  );
               })}
            </select>
         </div>
         <div className="col-md-12 box">
            <button className="btn">Book a ticket</button>
         </div>
      </div>
   );
}
