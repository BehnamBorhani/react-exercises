import React, { useState } from "react";

const Menu = ({ menu, mainCategory, setMainCategory }) => {
   const [categoryItems, setCategoryItems] = useState(menu);

   return (
      <div className="section-center">
         {categoryItems.map((item) => (
            <article className="menu-item" key={item.id}>
               <img src={item.img} className="photo" />
               <div className="item-info">
                  <header>
                     <h4>{item.title}</h4>
                     <h4 className="price">${item.price}</h4>
                  </header>
                  <p className="item-text">{item.desc}</p>
               </div>
            </article>
         ))}
      </div>
   );
};

export default Menu;
