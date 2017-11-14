import React, { Component } from 'react';
import classnames from 'classnames';

class App extends Component {
  render() {
    const classes = classnames('banner');
    return (
      <div className={classes}>
        <header>
          <h1>Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;