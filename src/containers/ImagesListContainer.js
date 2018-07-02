import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadImages, fetchImages } from '../actions/images';
import ImagesList from '../components/ImagesList';

class ImagesListContainer extends Component {
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => this.setState({images: data}));
  }

  render(){
    return(
      <ImagesList images={this.props.images} />
    )
  }
}

function mapStateToProps(state) {
  return {images: state.images}
}

export default connect(mapStateToProps, {loadImages, fetchImages})(ImagesListContainer);
