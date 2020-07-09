import React, { Component } from "react";
import AgeGraph from "./graphs/AgeGraph";
import SurveyGraph from "./graphs/SurveyGraph";
import GenderGraph from "./graphs/GenderGraph";
import SearchCountGraph from "./graphs/SearchCountGraph";
import PincodeGraph from "./graphs/PincodeGraph";

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
        <div className="row">
          <div className={"chart-container chart_sizes"}>
            <AgeGraph />
            <SurveyGraph />
          </div>
          <div className={"chart-container chart_sizes"}>
            <GenderGraph />
            <SearchCountGraph />
          </div>
          <div className={"chart-container chart_sizes"}>
            <PincodeGraph />
          </div>
        </div>
      </div>
    );
  }
}

export default RootComponent;
