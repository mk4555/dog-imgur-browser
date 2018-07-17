import React, { Component } from 'react';
import fetchival from 'fetchival';
import FavoritesList from '../containers/ImagesListContainer';



class Favorites extends Component {
  componentDidMount() {
    fetch(`/api/dogs`)
      .then(response => response.json())
      .then(dogs => console.log(dogs))
  }

  render() {
    return(
      <div>
        <h1>Your Favorite Dog Images!</h1>

      </div>
    )
  }
}

export default Favorites
