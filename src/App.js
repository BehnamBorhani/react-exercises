import React, { useEffect, useState } from "react";
import "./App.css";
import data from "./data";
import Menu from "./Components/Menu";
import Categories from "./Components/Categories";

const allCategories = ["All", ...new Set(data.map((item) => item.category))];

function App() {
   const [menu, setMenu] = useState(data);
   const [categories, setCategories] = useState(allCategories);
   const [mainCategory, setMainCategory] = useState("All");

   useEffect(() => {
      if (mainCategory === "All") {
         setMenu(data);
      } else {
         setMenu(data.filter((item) => item.category === mainCategory));
      }
   }, [mainCategory]);

   return (
      <main>
         <section className="menu section">
            <div className="title">
               <h2>our menu</h2>
               <div className="underline"></div>
               <Categories
                  categories={categories}
                  mainCategory={mainCategory}
                  setMainCategory={setMainCategory}
               />
               <Menu menu={menu} />
            </div>
         </section>
      </main>
   );
}

export default App;
