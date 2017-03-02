import React, {Component} from 'react';
import TextQuestion from './TextQuestion';
import mount from '../containers/FormContainer';
import './QuestionForm.css';

export class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        if (this.props.questionLoadError) {
            return (
              <div className="question-form">
              {this.showLoadingText()}
                <h1>There seems to have been an error. Here is the response from the server </h1>
                <br/>
                {this.props.questionLoadError.message}
              </div>
            )
        }

        return (
          <div className="question-form">
            {this.showLoadingText()}
            <form name="questionForm" onSubmit={this.handleSubmit}>
                <TextQuestion question={this.props.questions[0]} onChange={this.handleChange}/>
                <br/>
                <TextQuestion question={this.props.questions[1]} onChange={this.handleChange}/>
            </form>
          </div>
        )
    }

    showLoadingText() {
      if (this.props.loading) {
          return (<h1>The app is loading!!</h1>)
      }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const payload = {
            name,
            value
        };
        this.props.handleChange(payload);
    }

    handleSubmit(event) {
        console.log('handlesSubmit called');
        this.props.handleSubmit(event);
    }
}

export default mount(QuestionForm)
