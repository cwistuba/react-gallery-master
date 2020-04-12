import React, { Component } from "react";
import "./ImageListItem.css";

class ImageListItem extends Component {
  render() {
    const toggle = this.props.item.toggle;
    let content;
    if (toggle) {
      content = this.props.item.description;
    } else {
      content = <img src={this.props.item.path} alt="gallery" />;
    }
    const buttonElement = (
      <button onClick={this.props.updateLikes(this.props.item.id)}>Like</button>
    );

    return (
      <div className="container">
        <div onClick={this.props.toggleImage(this.props.item.id)}>
          <div className="description">{content}</div>
        </div>
        <br />

        <div>
          <div>{buttonElement}</div>
          <div>{this.props.item.likes}</div>
        </div>
      </div>
    );
  }
}

export default ImageListItem;
