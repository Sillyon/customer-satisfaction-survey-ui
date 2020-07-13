import React, { Component } from "react";
import { Table } from "reactstrap";
export default class ListSurvey extends Component {
  render() {
    return (
      <div>
        <h3>List Survey Topics</h3>
        <Table>
          <thead>
            <tr>
              <th>Topic Id</th>
              <th>Topic Name</th>
              <th>Npm Score</th>
            </tr>
          </thead>
          <tbody>
            {this.props.surveys.map((survey) => (
              <tr key={survey.topicId}>
                <th scope="row">{survey.topicId}</th>
                <td>{survey.topic}</td>
                <td>{survey.npmScore}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
