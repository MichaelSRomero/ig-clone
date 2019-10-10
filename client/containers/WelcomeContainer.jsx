import React, { Component, Fragment } from 'react';
import NavigationBar from '../components/NavigationBar.jsx'
import FeedContainer from './FeedContainer.jsx'
import SidebarContainer from './SidebarContainer.jsx'
// Styles
import feedStyles from '../assets/styles/feed.css'
import feedStylesMed from '../assets/styles/feed-med.css'
import feedStylesLg from '../assets/styles/feed-lg.css'

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