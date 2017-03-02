import QuestionService from '../services/QuestionService';
import {
    FETCH_QUESTIONS,
    FETCH_QUESTIONS_FULFILLED,
    FETCH_QUESTIONS_REJECTED,
    UPDATE_QUESTION,
    SUBMIT_FORM
} from '../constants/ActionTypes';

function dispatchAction(type, payload) {
    return {
        type: type,
        payload: payload
    };
}

export function fetchQuestions() {
    return (dispatch) => {

        dispatch({type: FETCH_QUESTIONS});

        return QuestionService.getQuestions()
            .then((questions) => {
                dispatch(dispatchAction(FETCH_QUESTIONS_FULFILLED, questions.data));
            })
            .catch((error) => {
                dispatch(dispatchAction(FETCH_QUESTIONS_REJECTED, error));
            })
    }
}

export function updateFormQuestion(payload) {
    return (dispatch) => {
        dispatch({
            type: UPDATE_QUESTION,
            payload: payload
        })
    }
}

export function submitForm(payload) {
    return (dispatch) => {
        dispatch({
            type: SUBMIT_FORM,
            payload: payload
        })
    }
}
