import React, { Component, Fragment } from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText, } from "@trendmicro/react-sidenav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import ListAnswer from "./components/ListAnswer";
import ListSurvey from "./components/ListSurvey";
import SubmitSurvey from "./components/SubmitSurvey";

const navWidthCollapsed = 64;
const navWidthExpanded = 240;

export class App extends Component {

  componentDidMount() {
    this.getSurveys();
    this.getAnswers();
  }

  getSurveys = () => {
    fetch("http://localhost:8080/survey")
      .then((response) => response.json())
      .then((data) => this.setState({ surveys: data }));
  };
  getAnswers = () => {
    fetch("http://localhost:8080/answer")
      .then((response) => response.json())
      .then((data) => this.setState({ answers: data }));
  };

  state = {
    surveys: [],
    answers: [],
    selected: "",
    expanded: false,
    error: null,
    isLoading: true,
  };

  lastUpdateTime = new Date().toISOString();

  onToggle = (expanded) => {
    this.setState({ expanded: expanded });
  };

  render() {
    const { expanded, selected } = this.state;
    return (
      <Router expanded={expanded}>
        <Route
          render={({ location, history }) => (
            <Fragment>
              <SideNav
                style={{
                  minWidth: expanded ? navWidthExpanded : navWidthCollapsed,
                }}
                onToggle={this.onToggle}
                onSelect={(selected) => {
                  const to = "/" + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <Toggle />
                <Nav defaultSelected={selected}>
                  <NavItem eventKey="">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-list-alt"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Submit</NavText>
                  </NavItem>
                  <NavItem eventKey="survey">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-list-ol"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Surveys</NavText>
                  </NavItem>
                  <NavItem eventKey="answer">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-list-ul"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Answers</NavText>
                  </NavItem>
                </Nav>
              </SideNav>
              <main
                style={{
                  marginLeft: expanded ? navWidthExpanded : navWidthCollapsed,
                  position: "relative",
                  padding: "0 1rem",
                }}
              >
              <Switch>
                <Route exact path="/" component={SubmitSurvey}></Route>
                <Route exact path="/survey" component={ListSurvey}>
                  <ListSurvey surveys={this.state.surveys} />
                </Route>
                <Route exact path="/answer" component={ListAnswer}>
                  <ListAnswer answers={this.state.answers} />
                </Route>
              </Switch>
              </main>
            </Fragment>
          )}
        />
      </Router>
    );
  }
}

export default App;
