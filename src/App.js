import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Homepage } from "./views/Homepage";
import About from "./views/About";
import { More } from "./components/More";
import Contact from "./views/Contact";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import logoImg from "./images/rp1.png";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Container">
          <Navigation />
          <div className="logo"><img src={logoImg} alt="logo"/></div>
          <React.Fragment>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/https://github.com/randyprempeh" />
            <Route path="/contact" component={Contact} />
            <Route path="/more" component={More} />
          </React.Fragment>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
