import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {renderEmail} from 'react-html-email';
import KitchenSink from './../components/kitchenSink';
import BasicEmail from './../components/basicEmail'

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      renderEmail(<BasicEmail />)
    );
  }
}

export default App;


ReactDOM.render(<App/>, document.getElementById("root"));