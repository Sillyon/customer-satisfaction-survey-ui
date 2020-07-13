import React, { Component } from "react";

class RootComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
  }

  render() {
    let errors = "";
    if (this.state.errors) {
      errors = this.state.errors.map((item, index) => (
        <div key={index} className="alert alert-error">
          {item}
        </div>
      ));
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <h2 className="mt-3 title_head">Home</h2>
          {errors}
        </div>
      </div>
    );
  }
}

export default RootComponent;
