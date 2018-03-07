import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {renderEmail} from 'react-html-email';
// import BasicEmail from './../components/basicEmail'
// import Header from './../components/header'
import EmailTemplate from './../components/emailTemplate'

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      renderEmail(<EmailTemplate />)
    );
  }
}

export default App;

ReactDOM.render(<App/>, document.getElementById("root"));