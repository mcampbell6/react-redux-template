import configureMockStore from 'redux-mock-store';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {
    fetchQuestions,
    updateFormQuestion,
    submitForm
} from '../../app/actions/FormActions';

import {
    FETCH_QUESTIONS,
    FETCH_QUESTIONS_FULFILLED,
    FETCH_QUESTIONS_REJECTED,
    SUBMIT_FORM,
    SUBMIT_FORM_FULFILLED,
    SUBMIT_FORM_REJECTED
} from '../../app/constants/ActionTypes';

import {
    QUESTION_API, 
    SUBMIT_API
} from '../../app/constants/apiConstants';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockRequest = new MockAdapter(axios);

describe('Form actions', () => {
    afterEach(() => {
        mockRequest.reset();
    });

    it('dispatches FETCH_QUESTIONS and FETCH_QUESTIONS_FULFILLED when a fetchQuestions action is successful', () => {
        mockRequest.onGet(QUESTION_API).reply(200);

        const store = mockStore([applyMiddleware(middlewares)]);
        return store.dispatch(fetchQuestions())
            .then(() => {
                expect(store.getActions()[0].type).toEqual(FETCH_QUESTIONS);
                expect(store.getActions()[1].type).toEqual(FETCH_QUESTIONS_FULFILLED);
            });
    });

    it('dispatches FETCH_QUESTIONS and FETCH_QUESTIONS_REJECTED when a fetchQuestions action is rejected', () => {
        mockRequest.onGet(QUESTION_API).reply(500);

        const store = mockStore([applyMiddleware(middlewares)]);
        return store.dispatch(fetchQuestions())
            .then(() => {
                expect(store.getActions()[0].type).toEqual(FETCH_QUESTIONS);
                expect(store.getActions()[1].type).toEqual(FETCH_QUESTIONS_REJECTED);
            });

    });

    it('dispatches UPDATE_QUESTION when a updateQuestion action is called', () => {

        const testPayload = {
            question: 'test'
        };

        const expectedAction = {
            payload: {
                question: 'test'
            },
            type: 'UPDATE_QUESTION'
        };

        const store = mockStore([applyMiddleware(middlewares)]);
        store.dispatch(updateFormQuestion(testPayload));

        expect(store.getActions()[0]).toEqual(expectedAction);
    });

    it('dispatches SUBMIT_FORM and SUBMIT_FORM_FULFILLED when a submitForm action is successfully handled', () => {

        mockRequest.onPost(SUBMIT_API).reply(200);

        const store = mockStore([applyMiddleware(middlewares)]);
        return store.dispatch(submitForm())
            .then(() => {
                expect(store.getActions()[0].type).toEqual(SUBMIT_FORM);
                expect(store.getActions()[1].type).toEqual(SUBMIT_FORM_FULFILLED);
            });
    });

    it('dispatches SUBMIT_FORM and SUBMIT_FORM_REJECTED when a submitForm action is rejected', () => {

        mockRequest.onPost(SUBMIT_API).reply(500);

        const store = mockStore([applyMiddleware(middlewares)]);
        return store.dispatch(submitForm())
            .then(() => {
                expect(store.getActions()[0].type).toEqual(SUBMIT_FORM);
                expect(store.getActions()[1].type).toEqual(SUBMIT_FORM_REJECTED);
            });
    });
});
