// import axios from 'axios';
// import {QUESTION_API} from '../constants/apiConstants';

import TestQuestions from '../../TestQuestions';

export default class QuestionService {
    static getQuestions() {
        return TestQuestions.getQuestions();
        // return axios.get(QUESTION_API);
    };
}
