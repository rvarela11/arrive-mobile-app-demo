export const submitDocument = (documentInfo) => {
    return (dispatch) => {
        dispatch({
            type: 'SUBMIT_DOCUMENT',
            payload: documentInfo
        });
    }
}