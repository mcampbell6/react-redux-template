import {connect} from 'react-redux';
import {updateFormQuestion, submitForm} from '../actions/FormActions';

const mapStateToProps = (state) => {
    return {
        questions: state.questions.questions,
        questionLoadError: state.questions.error,
        loading: state.questions.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (payload) => {
            dispatch(updateFormQuestion(payload))
        },
        handleSubmit: (payload) => {
            dispatch(submitForm(payload))
        }
    }
};

export default function mount(QuestionForm) {
    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(QuestionForm);
}
