import React, { Component, useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

import Header from './components/Header/Header';
import Content from "./containers/Content";
import Footer from './components/Footer/Footer';
import { NavLink } from "react-bootstrap";

const App = (props) => {
  console.log(props.name);
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}


export default App;