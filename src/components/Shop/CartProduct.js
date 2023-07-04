import React, { Component } from "react";

export default class CartProduct extends Component {
   render() {
      const { id, title, price, img, removeFromCart } = this.props;

      return (
         <div className="cart-row">
            <div className="cart-item cart-column">
               <img
                  className="cart-item-image"
                  src={img}
                  width="100"
                  height="100"
               />
               <span className="cart-item-title">{title}</span>
            </div>
            <span className="cart-price cart-column">${price}</span>
            <div className="cart-quantity cart-column">
               <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => removeFromCart(id)}
               >
                  REMOVE
               </button>
            </div>
         </div>
      );
   }
}
