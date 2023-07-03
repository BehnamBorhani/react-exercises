import React, { Component } from "react";

export default class Product extends Component {
   render() {
      return (
         <div className="shop-item">
            <span className="shop-item-title">Shirt</span>
            <img className="shop-item-image" src="Images/Shirt.png" />
            <div className="shop-item-details">
               <span className="shop-item-price">$129</span>
               <button className="btn btn-primary shop-item-button" type="button">
                  ADD TO CART
               </button>
            </div>
         </div>
      );
   }
}
