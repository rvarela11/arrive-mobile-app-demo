export const submitDocument = (documentInfo, docStatus) => {
    return (dispatch) => {
        dispatch({
            type: 'SUBMIT_DOCUMENT',
            payload: documentInfo,
            docStatus
        });
    }
}
