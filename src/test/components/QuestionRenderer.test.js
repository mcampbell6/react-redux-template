import React from 'react';
import {shallow} from 'enzyme';
import QuestionRenderer from '../../app/components/QuestionRenderer';

const testRadioQuestion = {
    "id": "b1e3cd65-598e-4fdb-9f76-c3c49424ea22",
    "order": 5,
    "text": "Do you use tobacco or nicotine products?",
    "type": "radio",
    "options": {"smoke": "Smoker", "nonsmoke": "Non-Smoker", "other": "Other Tobacco or Nicotine"},
    "knockout": false
};

const testDateQuestion = {
    "id": "b1e3cd65-598e-4fdb-9f76-c3c49424ea22",
    "order": 5,
    "text": "What is your date of birth?",
    "type": "date",
    "options": null,
    "knockout": false
};

describe('renders', () => {
    it('without crashing', () => {
        shallow(<QuestionRenderer question={testRadioQuestion} onChange={null}/>);
    });

    it('a RadioQuestion sub component if the questions type is radio', () => {
        const shallowQuestionRenderer = shallow(<QuestionRenderer question={testRadioQuestion} onChange={null}/>);
        expect(shallowQuestionRenderer.find('RadioQuestion').length).toEqual(1);
    });

    it('a TextQuestion sub component if the questions type is date', () => {
        const shallowQuestionRenderer = shallow(<QuestionRenderer question={testDateQuestion} onChange={null}/>);
        expect(shallowQuestionRenderer.find('TextQuestion').length).toEqual(1);
    });
});
