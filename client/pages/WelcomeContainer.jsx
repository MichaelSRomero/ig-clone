import React, { Component, Fragment } from 'react';
import NavigationBar from '../components/NavigationBar.jsx'
import FeedContainer from '../containers/FeedContainer.jsx'
import SidebarContainer from '../containers/SidebarContainer.jsx'
// Styles
import feedStyles from '../assets/styles/feed.css'
import feedStylesMed from '../assets/styles/feed-med.css'
import feedStylesLg from '../assets/styles/feed-lg.css'

/**
 * @fileoverview this is the container in which a user has access to after being authenticated and authorized
 * @path '/'
 * */
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