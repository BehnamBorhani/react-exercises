import React from "react";

const Categories = ({ categories, mainCategory, setMainCategory }) => {
   return (
      <div className="btn-container">
         {categories.map((category) => (
            <button
               type="button"
               // highlight class  for highlight main category
               className={
                  category === mainCategory
                     ? "filter-btn highlight"
                     : "filter-btn"
               }
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
