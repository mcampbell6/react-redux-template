/**
 * Created by mcampbell6 on 2/8/17.
 */

import FormReducer from '../../app/reducers/FormReducer';
import {
    FETCH_QUESTIONS,
    FETCH_QUESTIONS_FULFILLED,
    FETCH_QUESTIONS_REJECTED,
    UPDATE_QUESTION,
    SUBMIT_FORM,
    SUBMIT_FORM_FULFILLED,
    SUBMIT_FORM_REJECTED
} from '../../app/constants/ActionTypes'

const testQuestion = {
    id: 1,
    text: "What is your first name?",
    name: "firstName",
    required: true
};

const initState = {
    answers: null,
    questions: null,
    loading: false,
    loaded: false,
    error: null
};

it('should return the initial state', () => {
    expect(FormReducer(undefined, {})).toEqual(initState);
});

it('should handle FETCH_QUESTIONS', () => {
    expect(FormReducer(undefined, {
            type: FETCH_QUESTIONS,
            payload: testQuestion
        })
    ).toEqual({
        answers: null,
        questions: null,
        loading: true,
        loaded: false,
        error: null
    });
});

it('should handle FETCH_QUESTIONS_FULFILLED', () => {
    expect(FormReducer(undefined, {
            type: FETCH_QUESTIONS_FULFILLED,
            payload: testQuestion
        })
    ).toEqual({
        answers: null,
        questions: testQuestion,
        loading: false,
        loaded: true,
        error: null
    });
});

it('should handle FETCH_QUESTIONS_REJECTED', () => {
    expect(FormReducer(undefined, {
            type: FETCH_QUESTIONS_REJECTED,
            payload: 'test 500 error'
        })
    ).toEqual({
        answers: null,
        questions: null,
        loading: false,
        loaded: false,
        error: 'test 500 error'
    });
});

it('should handle UPDATE_QUESTION', () => {
    expect(FormReducer(undefined, {
            type: UPDATE_QUESTION,
            payload: {
                questionId: '1',
                value: 'T'
            }
        })
    ).toEqual({
        answers: {
            '1':'T'
        },
        questions: null,
        loading: false,
        loaded: false,
        error: null
    });
});

it('should handle SUBMIT_FORM', () => {
    expect(FormReducer(undefined, {
            type: SUBMIT_FORM,
            payload: {}
        })
    ).toEqual({
        loading: true,
        loaded: false,
        error: null
    });
});

it('should handle SUBMIT_FORM_FULFILLED', () => {
    expect(FormReducer(undefined, {
            type: SUBMIT_FORM_FULFILLED,
            payload: 'test premium is $17.38'
        })
    ).toEqual({
        loading: false,
        loaded: true,
        error: null
    });
});

it('should handle SUBMIT_FORM_REJECTED', () => {
    expect(priceReducer(undefined, {
            type: SUBMIT_FORM_REJECTED,
            payload: 'test 500 error'
        })
    ).toEqual({
        loading: false,
        loaded: false,
        error: 'test 500 error'
    });
});
