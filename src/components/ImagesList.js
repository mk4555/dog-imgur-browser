import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Image from './Image'

const imgs = this.props.images.map(image => (
  <Col key ={image.id} xs={6} md={4}>
    <h3>image.title</h3>
    <img src={image.url} />
  </Col>
));
const mock = imgs.slice(0,9);


const ImagesList = () =>
    <Row>
      {mock}
    </Row>;


export default ImagesList;
