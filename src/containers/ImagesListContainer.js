import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/imagesActions';
import ImagesList from '../components/ImagesList';
import { searchGallery } from '../services/imgur';

class ImagesListContainer extends Component {
  render(){
    return(
      <ImagesList images={this.props.images} />
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    images: state.images.images
  }
}


export default connect(mapStateToProps, { fetchImages })(ImagesListContainer);