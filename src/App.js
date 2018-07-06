import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomNavBar from './components/CustomNavBar'
import Home from './components/Home'
import { Provider } from 'react-redux';
import store from './store';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchImages, loadImages }from './actions/imagesActions.js';

class App extends Component {
  componentDidMount() {
    if (this.props.images.length == 0) {
      this.props.fetchImages()
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <CustomNavBar />
            <Route exact path='/' component={Home}/>
            <Route path='/random' render={() => <div>Random</div>} />
            <Route path='/favorites' render={() => <div>Favorites</div>} />
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
