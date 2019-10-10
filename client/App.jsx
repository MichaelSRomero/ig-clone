import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import RootContainer from './pages/RootContainer.jsx';
import WelcomeContainer from './pages/WelcomeContainer.jsx';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route 
            path="/home"
            render={ (routerProps) => <WelcomeContainer {...routerProps}/> }/>
          <Route 
            path="/" 
            render={ (routerProps) => <RootContainer {...routerProps}/> }/>
        </Switch>

      </Fragment>
    )
  }
}

export default withRouter(App);