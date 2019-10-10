import React, { Component } from 'react';

class SidebarContainer extends Component {
  render() {
    return (
      <aside className="sidebar sidebar--order">
        <section className="sidebar__user sidebar--display">
          <img className="sidebar__user-icon sidebar__user-icon--current" src="" alt=""/>
          <div className="sidebar__user-content">
            <h5 className="sidebar__username sidebar__username--current sidebar__username--weight"></h5>
            <p className="sidebar__user-desc sidebar__user-desc--current"></p>
          </div>
        </section>
        <section className="sidebar__stories">
          <header className="story-header story-header--display">
            <h6 className="story__h6">Stories</h6>
            <p className="story__text">Watch All</p>
          </header>
          <ul className="story-list">
            {/* List of Stories */}
            <li className="story__user">
              <img className="sidebar__user-icon sidebar__user-icon--size" src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt=""/>
              <div className="sidebar__user-content">
                <h5 className="sidebar__username sidebar__username--weight">br00ks</h5>
                <p className="sidebar__user-desc sidebar__user-desc--font-size sidebar__user-desc--display">1 Day Ago</p>
              </div>
            </li>
          </ul>
        {/* MIGHT ADD LATER */}
        </section>
        <section className="sidebar__suggestions sidebar--display">
  
        </section>
      </aside>
    )
  }
}

export default SidebarContainer;