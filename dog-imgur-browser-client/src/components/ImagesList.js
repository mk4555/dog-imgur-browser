import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from './Image'
import AddButton from './AddButton'
import UpvoteButton from './UpvoteButton'
import styles from '../styles/Image.css'

class ImagesList extends React.Component {
  render() {
    let imgs = this.props.images.data.items.map(image => (
      <Col xs={6} md={4} className={styles.column} key={image.id}>
        <Image image={image} className={styles.image}/>
        <AddButton image={image} add={this.props.add}/>
        <UpvoteButton />
      </Col>
    ));
    return (
      <Row>
        {imgs}
      </Row>
    )
  }
}

export default ImagesList;
