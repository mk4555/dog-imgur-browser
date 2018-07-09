import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Image as Imgur } from 'react-bootstrap'
import fetch from 'isomorphic-fetch';

class Image extends Component {
  imgCover() {
    if (this.props.image.cover) {
      return '//imgur.com/' + this.props.image.cover + '.jpg'
    }
    return this.props.image.link
  }

  render(){
    return(
        <Col xs={6} md={4}>
          <h3>{this.props.image.title}</h3>
          <Imgur src={this.imgCover()} alt='Imgur' thumbnail/>
        </Col>
    )
  }
}

export default Image;
