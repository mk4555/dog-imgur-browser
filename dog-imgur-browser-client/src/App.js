import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomNavBar from './components/CustomNavBar'
import Home from './components/Home'
import RandomImageContainer from './containers/RandomImageContainer'
import FavoritesContainer from './containers/FavoritesContainer'
import {connect} from 'react-redux';
import { fetchImages, loadImages }from './actions/imagesActions.js';
import styles from './styles/App.css'

class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <Router>
          <div>
            <CustomNavBar />
            <Route exact path='/' component={Home}/>
            <Route path='/random' component={RandomImageContainer} />
            <Route path='/favorites' component={FavoritesContainer} />
          </div>
        </Router>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {images: state.images.images}
}


export const WrapperApp = connect(mapStateToProps, { fetchImages, loadImages })(App)
