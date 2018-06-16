import { SUBMIT_DOCUMENT } from '../../store/actionTypes';

const homeDocumentsReducer = (state = [], action) => {
    switch (action.type) {
        case SUBMIT_DOCUMENT:
            if (!action.payload.id) {
                return [ {...action.payload, id: ID()} ].concat(state);
            } else {
                return state.map((document, index) => {
                    return document.id === action.payload.id ? action.payload : state[index]
                });
            }


        default:
            return state;
    }
}

var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

export default homeDocumentsReducer;
