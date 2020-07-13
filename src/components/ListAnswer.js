import React, { Component } from "react";
import { Table, Form, FormGroup, Label, Input } from "reactstrap";
export default class ListAnswer extends Component {

  createSelectItems() {
    let items = [];
    for (let i = 0; i <= this.props.maxValue; i++) {
      items.push(<option key={i} value={i}>{i}</option>);
      /*     this.props.answers.map((answer) => (
             <tr key={answer.submitId}>
               <th scope="row">{answer.submitId}</th>
               <td>{answer.score}</td>
               <td>{answer.feedback}</td>
               <td>{answer.survey.topicId}</td>
             </tr>
           ));
           
           options.map(option => 
             <option key={option.id} value={option.value}>                                   
             {option.value}
             </option>)
            );*/
      //here I will be creating my options dynamically based on
      //what props are currently passed to the parent component
    }
    return items;
  }

  onDropdownSelected(e) {
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
  }

  render() {
    return (
      <div>
        <h3>List Survey Answers</h3>
        <Form>
          <FormGroup>
            <div class="row">
              <div class=".col-sm-">
                <Label for="selectBox">Choose Topic:</Label>
              </div>
              <div class="col">
                <Input type="select" name="select" id="selectBox" onChange={this.onDropdownSelected}>
                  {this.createSelectItems()}
                </Input>
              </div>
            </div>
          </FormGroup>
          <Table>
            <thead>
              <tr>
                <th>Submit Id</th>
                <th>Score</th>
                <th>Feedback</th>
                <th>Topic Id</th>
              </tr>
            </thead>
            <tbody>
              {this.props.answers.map((answer) => (
                <tr key={answer.submitId}>
                  <th scope="row">{answer.submitId}</th>
                  <td>{answer.score}</td>
                  <td>{answer.feedback}</td>
                  <td>{answer.survey.topicId}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Form>
      </div>
    );
  }
}
