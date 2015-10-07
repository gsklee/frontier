// < App/> Entry Container
// =======================
//
// This file defines the React entry container `< App/>`.
//
// Import Modules
// --------------
//
// ### NPM Modules

import React from 'react';
import {connect} from 'react-redux';

// ### Local Modules

import * as actions from 'scripts/actions';

// Define & Export Module
// ----------------------
//
// This module contains the ***Redux-connected < App/>***.

export default @connect(state => state, actions) class App extends React.Component {
  static propTypes = {
    example: React.PropTypes.object.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  render () {
    const {example, increment} = this.props;

    return (
      <main>
        <h1>Hello, world!</h1>
        <section>
          <header>Counter Example</header>
          <p>{example.count}</p>
          <button onClick = {increment}>Increment</button>
        </section>
      </main>
    );
  }
}
