// <App/> Main Entry Component
// ===========================
//
// Import Modules
// --------------
//
// ### NPM Modules

import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// Define <App/>
// -------------

class App extends React.Component {
  render () {
    return (
      <div>Hello, world!</div>
    );
  }
}

// Render <App/>
// -------------

ReactDOM.render(<App/>, document.getElementById('app'));
