import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Image from "react-bootstrap/Image";
import { Container, Col, Row } from 'react-bootstrap';


// const classes = useStyles();

class App extends Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=badlynwl0NVQ6og2yffuO1lghbwqS9vxFO13UF9l").then((res) => {
      console.log(res);
      this.setState({
        photos: res.data.photos.slice(0,10), 
      });
    });
  }

  render() {
    const { photos } = this.state;
    const photolength = photos.length ? (
      photos.map((photos) => {
        return (
          <div>
            <p key={photos.id}></p>
            <p>Rover name:{photos.rover.name}</p>
            <p>Landing date:{photos.rover.landing_date}</p>
            <p>Launch date:{photos.rover.launch_date}</p>
            {/* <img src={photos.url} width="128" height="128"></img> */}
            {/* <img class="ui medium rounded image" src={photos.url}></img> */}
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src={photos.img_src}rounded width="720" height="640" />
                </Col>
              </Row>
            </Container>
          </div>
        );
      })
    ) : (
      <p>No photos yet</p>
    );

    return (
      <div className="container">
        {photolength}
        {/* <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={photos.id}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
        </div> */}
      </div>
    );
  }
}

export default App;
