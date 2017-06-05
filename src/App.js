import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render(){
    return(
      <div>
          <h1>Run: webpack -w on terminal to start server and ^c to exit.</h1>
          <h2>Edit, Save, Refresh browser.</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
