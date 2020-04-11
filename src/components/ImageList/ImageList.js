import React, { Component } from "react";
import ImageListItem from "../ImageListItem/ImageListItem";

class ImageList extends Component {
  render() {
    const imageArray = this.props.imageList.map((item, index) => {
      return (
        <ImageListItem
          key={index}
          item={item}
          updateLikes={this.props.updateLikes}
        />
      );
    });

    return (
      <div>
        <p>Image Gallery</p>
        {imageArray}
      </div>
    );
  }
}

export default ImageList;
