import React, { Component } from 'react';
import Link from '../components/Link.jsx';

const links = [
  {href: '#AboutUs', value: "ABOUT US"},
  {href: '#Support', value: "SUPPORT"},
  {href: '#Press', value: "PRESS"},
  {href: '#Api', value: "API"},
  {href: '#Jobs', value: "JOBS"},
  {href: '#Privacy', value: "PRIVACY"},
  {href: '#Terms', value: "TERMS"},
  {href: '#Directory', value: "DIRECTORY"},
  {href: '#Profiles', value: "PROFILES"},
  {href: '#Hashtags', value: "HASHTAGS"},
  {href: '#Language', value: "LANGUAGE"},
]

class FooterContainer extends Component {

  createLinks() {
    return links.map(link => <Link key={"Link-" + link.value} {...link}/>)
  }

  render() {
    return (
      <footer>
        <nav className="footer__nav">
          <ul className="nav__links">
            {this.createLinks()}
          </ul>
          <span className="footer__copyright">© 2019 INSTAGRAM FROM FACEBOOK</span>
        </nav>
      </footer>
    )
  }
}

export default FooterContainer;