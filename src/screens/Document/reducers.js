import { SUBMIT_DOCUMENT, RESET_DOCUMENT_SAVED } from '../../store/actionTypes';

const initialState = {
  documentWasSaved: false,
  hasDocumentBeenEdited: false
}

const documentReducer = (state = initialState , action) => {
    switch(action.type) {
        case SUBMIT_DOCUMENT:
            if(action.docStatus === 'SAVE CHANGES') {
              return {
                ...state,
                documentWasSaved: true,
                hasDocumentBeenEdited: true
              }
            }
            return {
              ...state,
              documentWasSaved: true,
              hasDocumentBeenEdited: false
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
