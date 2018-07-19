import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from './Image'
import styles from '../styles/Image.css'

class FavoritesList extends React.Component {
  render() {
    const imgs = this.props.favorites.map(image => (
      <Col xs={6} md={4} className={styles.column}>
        <Image key={image.id} image={image} add={this.props.add} className={styles.image}/>
      </Col>
    ));
    return (
      <Row>
        {imgs}
      </Row>
    )
  }
}

export default FavoritesList;
