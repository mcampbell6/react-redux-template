import {
    FETCH_QUESTIONS,
    FETCH_QUESTIONS_FULFILLED,
    FETCH_QUESTIONS_REJECTED,
    UPDATE_QUESTION,
    SUBMIT_FORM
} from '../constants/ActionTypes';
import {QUESTION_API} from '../constants/apiConstants';
import TestQuestions from '../../TestQuestions';
import nock from 'nock';

function dispatchAction(type, payload) {
    return {
        type: type,
        payload: payload
    };
}

export function fetchQuestions() {
    return (dispatch) => {

        dispatch({type: FETCH_QUESTIONS});
        //simulate bad requests from server every once in a while (picks random number between 1 & 10)
        const tmp = Math.round(Math.random()*10);

        //temporarily return a new promise just like how an axios request would
        if(tmp > 1 ){
        return nock('testApi')
            .get(QUESTION_API)
            .reply(200,
              dispatch(dispatchAction(FETCH_QUESTIONS_FULFILLED, TestQuestions.getQuestions()))
            );
        }
          const error = {
            error: 'could not succesfully reach the api',
            message:'400 Bad Request'
          }

          return nock('testApi')
            .get(QUESTION_API)
            .reply(500,
              dispatch(dispatchAction(FETCH_QUESTIONS_REJECTED, error))
            );
      
/********** HOW THIS WOULD NORMALLY BE DONE IF THE API WASN'T BEING MOCKED *************/
        // dispatch({type: FETCH_QUESTIONS});
        //
        // return QuestionService.getQuestions()
        //     .then((questions) => {
        //         dispatch(dispatchAction(FETCH_QUESTIONS_FULFILLED, questions.data));
        //     })
        //     .catch((error) => {
        //         dispatch(dispatchAction(FETCH_QUESTIONS_REJECTED, error));
        //     })
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
