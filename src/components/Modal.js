import React, { Component } from "react";

class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner card bg-light text-dark">
          <button
            className="float-right close-button"
            onClick={this.props.closePopup}
          >
            X
          </button>
          <div className="card-header">
            <h3>{this.props.data.name}</h3>
          </div>
          <div className="card-body">
            <div>
              <span className="font-weight-bold">Status:</span>{" "}
              {this.props.data.status}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
