import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";


import Navigate from './components/Navbar';
import './App.css'
import Add from './components/Add';
import Films from './components/Films';
import Home from './components/Home';
import Footer from './components/Footer';

import Action from './components/Action';
import Drama from './components/Drama';
import Comedy from './components/Comedy';
import Anime from './components/Anime';
import Animation from './components/Animation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigate />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/films" component={Films} />
        <Route path="/movie/type/action" component={Action} />
        <Route path="/movie/type/comedy" component={Comedy} />
        <Route path="/movie/type/drama" component={Drama} />
        <Route path="/movie/type/anime" component={Anime} />
        <Route path="/movie/type/animation" component={Animation} />

      </Switch>

      <Footer />

      </div>
    );
  }
}

export default App;
