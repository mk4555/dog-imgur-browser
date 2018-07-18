import React from 'react';
import { Row } from 'react-bootstrap';
import Image from './Image'

class FavoritesList extends React.Component {
  render() {
    const imgs = this.props.favorites.map(image => (
      <Image key={image.id} image={image} />
    ));
    return (
      <Row>
        {imgs}
      </Row>
    )
  }
}

export default FavoritesList;
