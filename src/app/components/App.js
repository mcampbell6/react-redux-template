import React, { Component } from 'react';
import logo from '../../logo.svg';
import QuestionForm from './QuestionForm';
import '../../App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="app-header">Welcome to Mike's React/Redux App </div>
        <QuestionForm className="question-form" />
      </div>
    );
  }
}
