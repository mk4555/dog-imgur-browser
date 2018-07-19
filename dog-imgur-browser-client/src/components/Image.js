import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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

  render(){
    return(
        <div>
          <h3>{this.props.image.title}</h3>
          <a href={this.props.image.link}>
            <Imgur className={styles.image} src={this.imgCover()} alt='Imgur' thumbnail/>
          </a>
        </div>
    )
  }
}

export default Image;
