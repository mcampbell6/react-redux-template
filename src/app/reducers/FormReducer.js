import {
    FETCH_QUESTIONS,
    FETCH_QUESTIONS_FULFILLED,
    FETCH_QUESTIONS_REJECTED,
    UPDATE_QUESTION,
    SUBMIT_FORM,
    SUBMIT_FORM_FULFILLED,
    SUBMIT_FORM_REJECTED
} from '../constants/ActionTypes';

const initState = {
    answers: null,
    questions: null,
    loading: false,
    loaded: false,
    error: null
};

export default function questionReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_QUESTIONS :
        {
            return state = {
                ...state,
                loading: true
            };
        }
        case FETCH_QUESTIONS_REJECTED :
        {
            return state = {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
        }
        case FETCH_QUESTIONS_FULFILLED :
        {
            return state = {
                ...state,
                loading: false,
                loaded: true,
                questions: action.payload
            };
        }
        case UPDATE_QUESTION :
        {
            return state = {
                ...state,
                answers: {
                    ...state.answers,
                    [action.payload.name]: action.payload.value
                }
            };
        }
        case SUBMIT_FORM :
        {
            return state = {
                ...state,
                loading: true
            };
        }
        case SUBMIT_FORM_FULFILLED :
        {
            return state = {
                ...state,
                loading: false,
                loaded: true,
                response: action.payload
            };
        }
        case SUBMIT_FORM_REJECTED :
        {
            return state = {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
        }
        default :
        {
            return state;
        }
    }
};
