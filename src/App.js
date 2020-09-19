import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Image from "react-bootstrap/Image";
import "./App.css";

// const classes = useStyles();

class App extends Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=badlynwl0NVQ6og2yffuO1lghbwqS9vxFO13UF9l"
      )
      .then((res) => {
        console.log(res);
        this.setState({
          photos: res.data,
        });
      });
  }

  render() {
    const { photos } = this.state;

    return (
      <div className="app">
        <div className="nasa-photo">
          
          {/* <img src={photos.url} className="photo"/> */}
          {photos.media_type === "image" ? (
        <img
          src={photos.url}
          alt={photos.title}
          className="photo"
        />
      ) : (
        <iframe
          title="space-video"
          src={photos.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      )}
        </div>
        <h1 className="date">{photos.date}</h1>
        <h1>{photos.title}</h1>
        <p className="title">{photos.explanation}</p>

        <footer>Created by<a href="https://www.jayhalpati.me" target="_blank"> Jaykumar Halpati</a></footer>

      </div>

    );
  }
}

export default App;
