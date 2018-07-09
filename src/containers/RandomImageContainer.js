import React, { Component } from 'react';

class RandomImageConatiner extends Component {


  render() {
    return(

    )
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    images: state.images.images
  }
}
