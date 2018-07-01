import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => this.setState({images: data}));

  }
  render(){
    const imgs = this.state.images.map(image => (
      <Col key ={image.id} xs={6} md={4}>
        <h3>image.title</h3>
        <img src={image.url} />
      </Col>
    ));
    const mock = imgs.slice(0,9);
    return(
      <div>
        {mock}
      </div>
    )
  }
}

export default Image;
// <Col xs={6} md={4}>
//   <h2>Filler</h2>
// </Col>;
