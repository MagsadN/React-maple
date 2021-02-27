import React, { Component, useState, useEffect } from 'react';
// import "./Home.css";
import { Switch, Route, Link } from 'react-router-dom';
import './Content.css'

import Program from '../components/Program/Program';
import Element from '../components/Program/Element/Element'
import Event from "../components/Program/program-content-components/Event/Event";
import Conference from "../components/Program/program-content-components/Conference/Conference";
import Hackathon from "../components/Program/program-content-components/Hackathon/Hackathon";
import Acceleration from "../components/Program/program-content-components/Acceleration/Acceleration";
import About from '../components/About/About'
import Video from '../video/video.mp4'
import { propTypes } from 'react-bootstrap/esm/Image';

import axios from "axios";




const Content = (props) =>{
  // const initialApi = {days:0}
  // const [api,setApi] = useState(initialApi)

// const options = {
//   method: "GET",
//   url:
//     "https://ticketmasterstefan-skliarovv1.p.rapidapi.com",
//   headers: {
//     "content-type": "application/x-www-form-urlencoded",
//     "x-rapidapi-key": "7d7da750a8msh017ab98a65ed01dp1cb4b9jsn1a992c85f81c",
//     "x-rapidapi-host": "Ticketmasterstefan-skliarovV1.p.rapidapi.com",
//   },
//   data: {
//     pollingCallbackUrl: "m",
//     apiKey: "m",
//     cartId: "m",
//     deliveries: "m",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
// /////////////////////////////////////////////////////

  // const initialState = 10;
  // const [count, setCount] = useState(initialState);
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });
  return (
    <div>
      <div>
        <Route exact path="/">
          <video className="video" autoPlay loop muted width="100%">
            <source src={Video} type="video/mp4" />
          </video>
        </Route>
      </div>
      <div className="Content">
        <Route exact path="/program" component={Program} />
        <Route exact path="/program/event" component={Event} />
        <Route exact path="/program/conference" component={Conference} />
        <Route exact path="/program/hackathon" component={Hackathon} />
        <Route exact path="/program/acceleration" component={Acceleration} />
        <Route exact path="/about" component={About} />
      </div>
    </div>
  );
}

export default Content