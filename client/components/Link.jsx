import React from 'react';

const Link = ({href, value}) => {
  return (
    <li className="nav__link nav__link--opacity">
      <a href={href} alt="">
        {value}
      </a>
    </li>
  )
}

export default Link;