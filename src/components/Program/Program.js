import React from 'react';
import {Route} from 'react-router';
import './Program.css'
import Element from './Element/Element'
import { NavLink } from "react-router-dom";
import Event from "./program-content-components/Event/Event";
import Conference from "./program-content-components/Conference/Conference";
import Hackathon from "./program-content-components/Hackathon/Hackathon";
import Acceleration from "./program-content-components/Acceleration/Acceleration";


const Program = (props) => {
        let element = props.location.elementProps;
        if (element !== undefined) {
          console.log(element.name);
          console.log(element.event);
          return (
            <div className="Program">
              <div>
                <h1>Program Component</h1>
              </div>
              <div className="Program-sub">
                  <NavLink to="program/event">
                    <Route exact path="/program" component={Event} />
                  </NavLink>
                <NavLink to="/program/conference">
                  <Route exact path="/program" component={Conference} />
                </NavLink>
                <NavLink to="/program/hackathon">
                  <Route exact path="/program" component={Hackathon} />
                </NavLink>
                <NavLink to="/program/acceleration">
                  <Route exact path="/program" component={Acceleration} />
                </NavLink>
              </div>
            </div>
          );
        } else {
          return (
            <div className="Program">
            </div>
          );
        }
}

export default Program
