import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';

class Image extends Component {
  render(){
    return(
      <div>
        <Col key={this.props.image.id} xs={6} md={4}>
          <h3>{this.props.image.title}</h3>
          <img src={this.props.image.link} alt='Imgur' />
        </Col>
      </div>
    )
  }
}

export default Image;
