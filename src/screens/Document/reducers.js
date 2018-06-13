import { SUBMIT_DOCUMENT, RESET_DOCUMENT_SAVED } from '../../store/actionTypes';

const documentReducer = (state = { documentWasSaved: false }, action) => {
    switch(action.type) {
        case SUBMIT_DOCUMENT:
            return { documentWasSaved: true }

        case RESET_DOCUMENT_SAVED:
            return { documentWasSaved: false }

        default:
            return state;
    }
}

export default documentReducer;