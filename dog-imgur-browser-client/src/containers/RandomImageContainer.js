import React, { Component } from 'react';
import { fetchRandomImage } from '../actions/imagesActions';
import { addToFavorites } from '../actions/favoritesActions';
import { connect } from 'react-redux';
import Image from '../components/Image';
import { Button } from 'react-bootstrap'
import styles from '../styles/Random.css'
import { Grid, Row, Col } from 'react-bootstrap';
import Center from 'react-center';
import AddButton from '../components/AddButton';

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
      <Grid className={styles.main}>
        <Center>
          <Image image={this.props.image} />
          <AddButton image={this.props.image} add={this.props.addToFavorites}/>
        </Center>
        <Row>
          <Col xs={18} md={12}>
            <Button bsStyle="primary" bsSize="large" onClick={this.handleClick}>
              Random Image!
            </Button>
          </Col>
        </Row>
      </Grid>
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

export default connect(mapStateToProps, { fetchRandomImage, addToFavorites })(RandomImageContainer)
