import React, { useEffect, useState } from "react";

const Categories = ({ menu, mainCategory, setMainCategory }) => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      let categoriesSet = new Set();
      menu.forEach((item) => {
         categoriesSet.add(item.category);
      });
      setCategories(["All", ...categoriesSet]);
   }, []);

   return (
      <div className="btn-container">
         {categories.map((category) => (
            <button
               type="button"
               // highlight class  for highlight main category
               className={`filter-btn ${
                  category === mainCategory && "highlight"
               }`}
               key={category}
               onClick={() => setMainCategory(category)}
            >
               {category}
            </button>
         ))}
      </div>
   );
};

export default Categories;
