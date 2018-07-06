import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Image from './Image'

class ImagesList extends React.Component {

  render() {
    console.log(this.props.images.data)
    console.log("Loaded")
    if (this.props.images.data === undefined) {
      return (
        <div>
          LOADING!
        </div>
      )
    } else {
      const imgs = this.props.images.data.map(image => (
        <Col key ={image.id} xs={6} md={4}>
          <h3>{image.title}</h3>
          <img src={image.url} />
        </Col>
      ));
      const mock = imgs.slice(0,9);
      return (
        <Row>
          {mock}
        </Row>
      )
    }


  }
}

export default ImagesList;
