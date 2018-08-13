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
    this.props.image.votes += 1;
    fetch(`/api/dogs/${this.props.image.id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({dog: this.props.image})
        })
          .then(response => {
            this.setState({
              votes: this.props.image.votes
            })
            alert("updated")
          })
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
