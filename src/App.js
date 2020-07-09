import React, { Component, Fragment } from "react";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import RootComponent from "./components/RootComponent";
import Surveys from "./components/Surveys";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

const navWidthCollapsed = 64;
const navWidthExpanded = 240;

export class App extends Component {
  state = {
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
                        className="fa fa-fw fa-home"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Home</NavText>
                  </NavItem>
                  <NavItem eventKey="surveys">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-user"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Surveys</NavText>
                  </NavItem>
                  <NavItem eventKey="settings"> 
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-cogs"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Settings</NavText>
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
                <Route
                  path="/"
                  exact
                  component={(props) => (
                    <RootComponent />
                  )}
                />
                <Route path="/surveys">
                  <Surveys />
                </Route>
                <Route path="/settings">
                  <Settings />
                </Route>
              </main>
            </Fragment>
          )}
        />
      </Router>
    );
  }
}

function Settings() {
  return <h2 className="mt-3 title_head">Settings</h2>;
}

export default App;
