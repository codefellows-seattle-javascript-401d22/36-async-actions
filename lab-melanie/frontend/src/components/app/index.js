'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './../dashboard/index';
import appCreateStore from './../../lib/create-store';

const store = appCreateStore();

export default class App extends Component {
  render() {
    return(
      <main className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path='/' component={Dashboard} />
            </section>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}