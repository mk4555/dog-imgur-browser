import React from 'react';
import { Row } from 'react-bootstrap';
import Image from './Image'

class ImagesList extends React.Component {
  render() {
    const imgs = this.props.images.data.items.map(image => (
      <Image key={image.id} image={image} add={this.props.add}/>
    ));
    return (
      <Row>
        {imgs}
      </Row>
    )
  }
}

export default ImagesList;
