import React, { Component } from 'react';
import Center from 'react-center'
import { Button } from 'react-bootstrap';

class DeleteButton extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.delete(this.props.image)
    alert('Image Removed from Favorites!')
  }

  render() {
    return(
      <div>
        <Center>
          <Button bsStyle="info" onClick={this.handleClick}>Delete</Button>
        </Center>
      </div>
    )
  }
}

export default DeleteButton
