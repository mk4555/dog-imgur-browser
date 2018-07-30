import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Center from 'react-center'

class UpvoteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState({
      votes: this.state.votes + 1
    });
  }

  render() {
    return(
      <div>
        Score: {this.state.votes}
        <Button onClick={this.handleClick}>
          Upvote!
        </Button>
      </div>
    )
  }
}

export default UpvoteButton;
