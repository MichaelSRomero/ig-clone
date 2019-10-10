import React, { Component, Fragment } from 'react';
import NavigationBar from '../components/NavigationBar.jsx'
import FeedContainer from './FeedContainer.jsx'
import SidebarContainer from './SidebarContainer.jsx'

class WelcomeContainer extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <div className="container">
          <FeedContainer />
          <SidebarContainer />
        </div>
      </Fragment>
    )
  }
}

export default WelcomeContainer;