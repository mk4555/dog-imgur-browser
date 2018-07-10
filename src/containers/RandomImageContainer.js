import React, { Component } from 'react';
import { fetchRandomImage } from '../actions/imagesActions'
import { connect } from 'react-redux';
import Image from '../components/Image';
import { Button } from 'react-bootstrap'
import styles from '../styles/Random.css'

class RandomImageContainer extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.fetchRandomImage();
  }

  render() {
    return(
      <div className={styles.main}>
        <Image image={this.props.image} />
        <Button bsStyle="primary" bsSize="large" onClick={this.handleClick}>
          Random Image!
        </Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    image: state.images.images
  }
}

export default connect(mapStateToProps, {fetchRandomImage})(RandomImageContainer)
