import React, { Component } from "react";
import "./ImageListItem.css";

class ImageListItem extends Component {
  render() {
    let buttonElement = <div>0</div>;
    if (!this.props.item.likes) {
      buttonElement = (
        <button onClick={this.props.updateLikes(this.props.item.id)}>
          Like
        </button>
      );
    }

    return (
      <div className="imageListItem-item">
        <img src={this.props.item.path} />
        <p> {buttonElement}</p>
      </div>
    );
  }
}

export default ImageListItem;
