import React, { Component } from "react";
import "./ImageListItem.css";
class ImageListItem extends Component {
  render() {
    return (
      <div className="imageListItem-item">
        <img src={this.props.item.path} />
        <p>
          {" "}
          <button onClick={this.props.updateLikes(this.props.item.id)}>
            Like
          </button>
        </p>
      </div>
    );
  }
}

export default ImageListItem;
