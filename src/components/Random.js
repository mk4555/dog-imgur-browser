import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import styles from '../styles/Random.css'

class Random extends Component {
  render() {
    return(
    <div className={styles.main}>
      <Button bsStyle="primary" bsSize="large">
        Random Image!
      </Button>
    </div>
    )
  }
}

export default Random
