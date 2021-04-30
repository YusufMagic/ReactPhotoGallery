import React from 'react';
import img1 from "../img/img1.jpg"
import {NavLink }from 'react-router-dom'

const NavBar = () => {
    return (
      <div className="NavBar">
        {/* <div className="profile">
          <img src={img1} alt="" />
        </div> */}
        <nav className="nav">
          <ul className="nav-items">
            <li className="nav-item">
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" exact activeClassName="active">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" exact activeClassName="active">
                Contacts
              </NavLink>
            </li>
          </ul>
            </nav>
            <footer className="footer">
                <p>
                    Footer
                </p>
            </footer>
      </div>
    );
}

export default NavBar;

