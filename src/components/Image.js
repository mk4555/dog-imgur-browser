import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Image as Imgur } from 'react-bootstrap'
import fetch from 'isomorphic-fetch';

class Image extends Component {
  render(){
    return(
      <div>
        <Col xs={6} md={4}>
          <h3>{this.props.image.title}</h3>
          <Imgur src={this.props.image.link} alt='Imgur' responsive/>
        </Col>
      </div>
    )
  }
}

export default Image;
