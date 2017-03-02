import React from 'react';
import TextQuestion from '../../app/components/TextQuestion';
import {shallow} from 'enzyme';

const testTextQuestion = {
    id: 1,
    text: "What is your date of birth?",
    type: "text",
    options: null,
    knockout: false
};

it('renders without crashing', () => {
    shallow(<TextQuestion question={testTextQuestion} onChange={null}/>);
});

it('renders with text', () => {
    const questionElement = shallow(<TextQuestion question={testTextQuestion} onChange={null}/>);
    expect(questionElement.find('.text-question-text').text()).toEqual(testTextQuestion.text);
});

it('renders correct input type', () => {
    const questionElement = shallow(<TextQuestion question={testTextQuestion} onChange={null}/>);
    expect(questionElement.find('.text-question-input > input').html()).toContain('type="date"');
});

it('renders correct id and name', () => {
    const questionElement = shallow(<TextQuestion question={testTextQuestion} onChange={null}/>);
    expect(questionElement.find('.text-question-input > input').html()).toContain('id="1"');
    expect(questionElement.find('.text-question-input > input').html()).toContain('name="1"');
});

