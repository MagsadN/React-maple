import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../image/maple.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="navbar">
        <NavLink to="/">
          <img
            className="maple"
            src={Logo}
            alt="maple.png"
            width="80px"
            height="80px"
            className="Img"
          />
        </NavLink>
        <div className="navbar-wrap">
          <NavLink to="/">Home</NavLink>
          <div className="subnav">
            <NavLink
              to={{
                pathname: "/program",
                elementProps: {
                  name: "Program",
                  event: "Event",
                  conference: "Confefence",
                  hackathon: "Hackathon",
                  acceleration: "Acceleration",
                },
              }}
            >
              <button className="subnavbtn">Program</button>
            </NavLink>
            <div className="subnav-content">
              <NavLink
                to={{
                  pathname: "/program/event",
                  elementProps: { name: "Event" },
                }}
              >
                Event
              </NavLink>
              <NavLink
                to={{
                  pathname: "/program/conference",
                  elementProps: { name: "Conference" },
                }}
              >
                Conference
              </NavLink>
              <NavLink
                to={{
                  pathname: "/program/hackathon",
                  elementProps: { name: "Hackathon" },
                }}
              >
                Hackathon
              </NavLink>
              <NavLink
                to={{
                  pathname: "/program/acceleration",
                  elementProps: { name: "Acceleration" },
                }}
              >
                Acceleration
              </NavLink>
            </div>
          </div>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
