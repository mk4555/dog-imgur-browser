import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';
import { fetchFavorites, deleteFromFavorites } from '../actions/favoritesActions';
import FavoritesList from '../components/FavoritesList';
import Center from 'react-center'
import styles from '../styles/Image.css'

class FavoritesContainer extends Component {
  componentWillMount() {
    this.props.fetchFavorites();
  }

  render() {
    if (this.props.favorites === undefined) {
      return (
        <div>
          <h1>Favorite Images</h1>
          <Center>
            <ProgressBar active now={100} className={styles.progress}/>
          </Center>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Favorites Images</h1>
          <FavoritesList favorites={this.props.favorites} delete={this.props.deleteFromFavorites} />
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


export default connect(mapStateToProps, { fetchFavorites, deleteFromFavorites })(FavoritesContainer);
