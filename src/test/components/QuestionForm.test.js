import React from 'react';
import {shallow} from 'enzyme';
import {QuestionForm} from '../../app/components/QuestionForm';

const testQuestion = [{
    "id": "abc-123-ID",
    "name": "firstName",
    "text": "What is your first name?",
    "type": "text",
    "options": null
}];

describe('renders', () => {
    const props = {questions: testQuestion};
    it('the QuestionForm component without crashing', () => {
        expect((shallow(<QuestionForm {...props}/>)).find('form').length).toEqual(1);
    });
});
