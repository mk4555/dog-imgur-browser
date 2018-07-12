import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';


class PageButtons extends Component {
  handlePrevious = (event) => {
    event.preventDefault();
    alert("HI")
  }

  handleNext = (event) => {
    event.preventDefault()
  }


  render() {
    return(
      <Pager>
        <Pager.Item onClick={this.handlePrevious}>Previous</Pager.Item>
        <Pager.Item onClick={this.handleNext}>Next</Pager.Item>
      </Pager>
    )
  }
}

export default PageButtons;
