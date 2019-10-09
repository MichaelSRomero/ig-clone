import React, { Component } from 'react';
import Login from '../components/Login.jsx'

class MainContainer extends Component {
  render() {
    return (
      <div className="content__container content__container-primary">
        <div className="content__logo"></div>
        <Login />
      </div>
    )
  }
}

export default MainContainer;