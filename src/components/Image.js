import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Image as Imgur } from 'react-bootstrap'

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
          <a href={this.props.image.link}>
            <Imgur src={this.imgCover()} alt='Imgur' thumbnail/>
          </a>
        </Col>
    )
  }
}

export default Image;
