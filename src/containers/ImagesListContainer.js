import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/imagesActions';
import ImagesList from '../components/ImagesList';

class ImagesListContainer extends Component {

  componentWillMount() {
    if (this.props.images.length === 0) {
      this.props.fetchImages()
    }
  }

  render(){
    if (this.props.images.data === undefined) {
      return (
        <div>
          LOADING!...
        </div>
      )
    } else {
      return(
        <ImagesList images={this.props.images} />
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    images: state.images.images
  }
}


export default connect(mapStateToProps, { fetchImages })(ImagesListContainer);
