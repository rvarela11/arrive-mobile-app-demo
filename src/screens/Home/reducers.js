import { SUBMIT_DOCUMENT } from '../../store/actionTypes';

const homeDocumentsReducer = (state = [], action) => {
    switch (action.type) {
        case SUBMIT_DOCUMENT:
            return state.concat([action.payload]);

        default:
            return state;
    }
}

export default homeDocumentsReducer;