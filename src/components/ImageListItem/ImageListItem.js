import React, { Component } from "react";
import "./ImageListItem.css";

class ImageListItem extends Component {
  render() {
    const buttonElement = (
      <button onClick={this.props.updateLikes(this.props.item.id)}>Like</button>
    );

    return (
      <div className="imageListItem-item">
        <div>
          <img src={this.props.item.path} />
        </div>
        <div>{buttonElement}</div>
        <div>{this.props.item.likes}</div>
      </div>
    );
  }
}

export default ImageListItem;
