import React, { Component } from "react";

class Page2 extends Component {

  constructor() {
    super();
    this.state = {
      
    }
  }

  navigate = (event) => {
    event.preventDefault()
    this.props.history.push('/')
}

  render() {
    return (
      <div>
        <a href='' onClick={this.navigate}>Page 1</a>
      </div>
    );
  }
}

export default Page2;
