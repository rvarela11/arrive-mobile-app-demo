import { SUBMIT_DOCUMENT } from '../../store/actionTypes';

export const submitDocument = (documentInfo, docStatus) => ({
    type: SUBMIT_DOCUMENT,
    payload: documentInfo,
    docStatus
});
