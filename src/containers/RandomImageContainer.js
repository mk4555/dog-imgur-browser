import React, { Component } from 'react';
import { fetchRandomImage } from '../actions/imagesActions'
import { connect } from 'react-redux';
import Image from '../components/Image';
import { Button } from 'react-bootstrap'
import styles from '../styles/Random.css'
import { Row, Col } from 'react-bootstrap';

class RandomImageContainer extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.fetchRandomImage();
  }

  componentWillMount() {
    this.props.fetchRandomImage()
  }

  render() {
    if (this.props.loading === true) {
      return (
        <div>
          LOADING!
        </div>
      )
    }
    return(
      <div className={styles.main}>
        <Row>
          <Col xs={18} md={12}>
            <Image image={this.props.image} />
          </Col>
        </Row>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleClick}>
          Random Image!
        </Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    ...state,
    image: state.images.image
  }
}

export default connect(mapStateToProps, {fetchRandomImage})(RandomImageContainer)
