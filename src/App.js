import React, { Component } from 'react';
import { Element } from 'react-scroll'
import logo from './logo.svg';
import './App.css';
import {MyNavBar} from './components/NavBar.js';
import {Home} from './components/Home.js';
import {Portfolio} from "./components/Portfolio";
import {Blog} from "./components/Blog";
import {Contact} from "./components/Contact";

class App extends Component {
  render() {
    return (
      
      <div className="App">

        {/*        <Home />*/}
        {/*<MyNavBar />*/}
        {/*<Portfolio />*/}
        {/*<Blog />*/}
        {/*<Contact />*/}


        <div style={{ paddingTop: "50px" }}>
          <Element name="home">
            <Home />
          </Element>

          <MyNavBar />

          <Element name="portfolio">
            <Portfolio />
          </Element>

          <Element name="blog">
            <Blog />
          </Element>

          <Element name="contact">
            <Contact />
          </Element>

        </div>
      </div>
    );
  }
}

export default App;
