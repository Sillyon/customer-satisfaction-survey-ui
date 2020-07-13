import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import axios from 'axios';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { GreenRadio, YellowRadio, RedRadio } from './RadioButtonColors';

export default class MainView extends Component {
  
  state = {
    score: null,
    feedback: null,
    survey: {
      topicId: 3
    }
  }
  onClick = event => {
    const value = event.target.value;
    this.setState({
      score: value,
    });
  }
  onChangeFeedback = event => {
    const value = event.target.value;
    this.setState({
      feedback: value
    });
  }
  onClickSubmit = event => {
    event.preventDefault();
    const body = {
      score: this.state.score,
      feedback: this.state.feedback,
      survey: {
        topicId: this.state.survey.topicId
      }
    }
    axios.post('/answer', body)
  }
  render() {
    return (
      <div align="center">
        <h3>How likely are you to recommend Groove to a friend or colleague?</h3>
        <form>
          <FormGroup>
            <Label for="selectBox">Choose Topic:</Label>
            <Input type="select" name="select" id="selectBox" onSelect={this.onSelect}>
            </Input>
          </FormGroup>
          <FormGroup>
            <RadioGroup row onClick={this.onClick} >
              <FormControlLabel value="0" control={<RedRadio />} label="0" />
              <FormControlLabel value="1" control={<RedRadio />} label="1" />
              <FormControlLabel value="2" control={<RedRadio />} label="2" />
              <FormControlLabel value="3" control={<RedRadio />} label="3" />
              <FormControlLabel value="4" control={<RedRadio />} label="4" />
              <FormControlLabel value="5" control={<RedRadio />} label="5" />
              <FormControlLabel value="6" control={<RedRadio />} label="6" />
              <FormControlLabel value="7" control={<YellowRadio />} label="7" />
              <FormControlLabel value="8" control={<YellowRadio />} label="8" />
              <FormControlLabel value="9" control={<GreenRadio />} label="9" />
              <FormControlLabel value="10" control={<GreenRadio />} label="10" />
            </RadioGroup>
            <div align="left">Not at all likely</div>
            <div align="right">Extremely likely</div>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText"><h3>What is the most important reason for your score?</h3></Label>
            <Input type="textarea" name="text" onChange={this.onChangeFeedback} id="exampleText" />
          </FormGroup>
          <div>
            <button className="btn btn-primary" onClick={this.onClickSubmit}>Submit Survey</button>
          </div>
        </form>
      </div>
    );
  }
}