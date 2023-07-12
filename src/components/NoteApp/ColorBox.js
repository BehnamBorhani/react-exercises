import React, { Component } from "react";

export default class ColorBox extends Component {
   render() {
      const { color, inputColorHandler } = this.props;
      return (
         <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => inputColorHandler(color)}
         ></div>
      );
   }
}
