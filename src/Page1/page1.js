import React, { Component } from "react";

class Page1 extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  navigate = (event) => {
    event.preventDefault()
    this.props.history.push('/page2')
  }

  render() {
    return (
      <div>
        <a href='' onClick={this.navigate}>Page 2</a>
      </div>
    );
  }
}



export default Page1;
