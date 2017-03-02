import React, {Component} from 'react';

export default class TextQuestion extends Component {
    render() {
        return (
            <div className="text-question">
                <div className="text-question-text">{this.props.question.text}</div>
                <div className="text-question-input">
                    <input type="text" id={this.props.question.name} name={this.props.question.name}
                           onChange={this.props.onChange} required={this.props.question.required}/>
                </div>
            </div>
        )
    }
}
