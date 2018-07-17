import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import { Image as Imgur } from 'react-bootstrap'
import Center from 'react-center'
import styles from '../styles/Image.css'

class Image extends Component {
  imgCover() {
    if (this.props.image.cover) {
      return '//imgur.com/' + this.props.image.cover + '.jpg'
    }
    return this.props.image.link
  }

  // handleClick = (event) => {
  //   event.preventDefault();
  // }

  render(){
    return(
        <Col xs={6} md={4} className={styles.column}>
          <h3>{this.props.image.title}</h3>
          <a href={this.props.image.link}>
            <Imgur className={styles.image} src={this.imgCover()} alt='Imgur' thumbnail/>
          </a>
          <Center>
            <Button bsStyle="info" onClick={this.handleClick}>Add</Button>
          </Center>
        </Col>
    )
  }
}

export default Image;
