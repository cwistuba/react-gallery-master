import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ImageList from "../ImageList/ImageList";

class App extends Component {
  state = {
    imageList: [],
  };
  componentDidMount() {
    this.getImages();
  }

  getImages() {
    axios
      .get("/gallery")
      .then((response) => {
        this.setState({
          imageList: response.data,
        });
      })
      .catch((err) => console.warn(err));
  }

  updateLikes = (id) => (event) => {
    console.log(id);

    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        this.getImages();
      })
      .catch((err) => console.warn(err));
  };

  toggleImage = (id) => (event) => {
    axios
      .put(`/gallery/clicked/${id}`)
      .then((response) => {
        this.getImages();
      })
      .catch((err) => console.warn(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <ImageList
          imageList={this.state.imageList}
          updateLikes={this.updateLikes}
          toggleImage={this.toggleImage}
        />
      </div>
    );
  }
}

export default App;
