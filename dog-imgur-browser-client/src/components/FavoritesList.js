import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from './Image'
import styles from '../styles/Image.css'
import DeleteButton from './DeleteButton'
import UpvoteButton from './UpvoteButton'

class FavoritesList extends React.Component {
  render() {
    const imgs = this.props.favorites.map(image => (
      <Col xs={6} md={4} className={styles.column} key={image.id}>
        <Image image={image} add={this.props.add} className={styles.image}/>
        <DeleteButton image={image} delete={this.props.delete}/>
        <UpvoteButton image={image} upvote={this.props.upvote}/>
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
