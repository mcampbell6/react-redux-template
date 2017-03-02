import React, { Component } from 'react';
import logo from '../../logo.svg';
import QuestionForm from './QuestionForm';
import '../../App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Mike's React/Redux App </h2>
            <p>Generated with create-react-app</p>
        </div>
        <QuestionForm />
      </div>
    );
  }
}
