import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomNavBar from './components/CustomNavBar'
import Home from './components/Home'
import Random from './components/Random'
import Favorites from './components/Favorites'
import {connect} from 'react-redux';
import { fetchImages, loadImages }from './actions/imagesActions.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <CustomNavBar />
            <Route exact path='/' component={Home}/>
            <Route path='/random' component={Random} />
            <Route path='/favorites' component={Favorites} />
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
