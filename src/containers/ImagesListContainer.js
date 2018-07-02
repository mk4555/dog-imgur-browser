import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/imagesActions';
import ImagesList from '../components/ImagesList';

class ImagesListContainer extends Component {
  // componentWillMount() {
  //   if (this.props.images.length === 0) {
  //     this.props.fetchImages();
  //   }
  //   fetch('https://jsonplaceholder.typicode.com/photos')
  //     .then(res => res.json())
  //     .then(data => this.setState({images: data}));
  // }

  componentWillMount() {
    this.props.fetchImages();
  }

  render(){
    return(
      <ImagesList images={this.props.images} />
    )
  }
}

function mapStateToProps(state) {
  return {images: state.images.images}
}


export default connect(mapStateToProps, { fetchImages })(ImagesListContainer);
