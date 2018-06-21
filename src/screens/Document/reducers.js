import { SUBMIT_DOCUMENT, RESET_DOCUMENT_SAVED } from '../../store/actionTypes';

const initialState = {
  documentWasSaved: false
}

const documentReducer = (state = initialState , action) => {
    switch(action.type) {
        case SUBMIT_DOCUMENT:
            if(action.docStatus === 'SAVE CHANGES') {
              return {
                ...state,
                documentWasSaved: true
              }
            }
            return {
              ...state,
              documentWasSaved: true
            }
        case RESET_DOCUMENT_SAVED:
            return {
              ...state,
              documentWasSaved: false
            }
        default:
            return state;
    }
}

export default documentReducer;
