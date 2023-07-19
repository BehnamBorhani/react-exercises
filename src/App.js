import React, { useState } from "react";
import Menu from "./Components/Menu";
import data from "./data";
import "./App.css";
import Categories from "./Components/Categories";

function App() {
   const [menu, setMenu] = useState(data);
   const [mainCategory, setMainCategory] = useState("All");

   return (
      <main>
         <section className="menu section">
            <div className="title">
               <h2>our menu</h2>
               <div className="underline"></div>
               <Categories
                  menu={menu}
                  mainCategory={mainCategory}
                  setMainCategory={setMainCategory}
               />
               <Menu />
            </div>
         </section>
      </main>
   );
}

export default App;
