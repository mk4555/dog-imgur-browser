import React, { Component } from 'react';
import Center from 'react-center'
import { Button } from 'react-bootstrap';

class AddButton extends Component {

  handleClick = (event) => {
    event.preventDefault();
    let image = {
      title: this.props.image.title,
      cover: this.props.image.cover,
      link: this.props.image.link
    }
    this.props.add(image)
    alert('Added to Favorites!')
  }

  render() {
    return (
      <div>
        <Center>
          <Button bsStyle="info" onClick={this.handleClick}>Add</Button>
        </Center>
      </div>
    )
  }
}

export default AddButton
