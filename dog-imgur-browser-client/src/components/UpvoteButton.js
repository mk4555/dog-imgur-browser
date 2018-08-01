import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Center from 'react-center'

class UpvoteButton extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      votes: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.props.image.votes += 1;
    this.props.upvote(this.props.image)
  }

  render() {
    return(
      <div>
      <Center>
        Score: {this.props.image.votes}
        </Center>
        <Center>
          <Button onClick={this.handleClick}>
            Upvote!
          </Button>
        </Center>
      </div>
    )
  }
}

export default UpvoteButton;
