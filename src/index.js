import 'es6-shim'; // yeah, polyfill all the things !!!
import 'whatwg-fetch'; // yeah, polyfill all the things !!!
import Symbol from 'es-symbol';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { WineApp, WineListPage, WinePage,RegionsPage, NotFound } from './components'


if (!window.Symbol) {
  window.Symbol = Symbol; // yeah, polyfill all the things !!!
}

class RoutedApp extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route exact path="/" component={WineApp} />
              <Route exact path="/regions/" component={RegionsPage} />
              <Route exact path="/regions/:regionId" component={WineListPage} />
              <Route exact path="/regions/:regionId/wines/:wineId" component={WinePage} />
              <Route component={NotFound} />
          </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<RoutedApp />, document.getElementById('root'));
