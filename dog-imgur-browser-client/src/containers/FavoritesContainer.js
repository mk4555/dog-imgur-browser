import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../actions/favoritesActions';
import FavoritesList from '../components/FavoritesList';
class FavoritesContainer extends Component {
  componentWillMount() {
    if (this.props.favorites.length === 0) {
      this.props.fetchFavorites();
    }
  }

  render() {
    if (this.props.favorites === undefined) {
      return (
        <div>
          <h1>Favorite Images</h1>
          LOADING!...
        </div>
      )
    } else {
      return (
        <div>
          <h1>Favorites Images</h1>
          <FavoritesList favorites={this.props.favorites} />
        </div>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    ...state,
    favorites: state.favorites.favorites
  }
}


export default connect(mapStateToProps, { fetchFavorites })(FavoritesContainer);
