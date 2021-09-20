import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navibar, Footer } from './components';
import { Home, info, community_all, community_class, DM, NotFound, myinfo, login } from './pages';
import "./App.css"

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Navibar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/info" component={info}/>
            <Route exact path="/dm" component={DM}/>
            <Route exact path="/community/all" component={community_all}/>
            <Route exact path="/community/class" component={community_class}/>
            <Route exact path="/myinfo" component={myinfo}/>
            <Route exact path="/login" component={login}/>

            <Route component={NotFound}/>
          </Switch>
          <Footer />
        </BrowserRouter>
    );
  }
}
