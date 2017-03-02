import React, {Component} from 'react';
import TextQuestion from './TextQuestion';
import mount from '../containers/FormContainer';

export class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        if (this.props.loading) {
            return null
        }
        if (this.props.questionLoadError) {
            return "there was an error loading "
        }

        return (
            <form name="questionForm" onSubmit={this.handleSubmit}>
                <h1>form, yo</h1>
                <TextQuestion />
                {this.checkError()}
            </form>
        )
    }

    checkError() {
        if (this.props.error) {
            return "This is an error message";
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
