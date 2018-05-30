export const submitDocument = (documentInfo) => {
    return (dispatch) => {
        console.log('document info', documentInfo)
        dispatch({
            type: 'SUBMIT_DOCUMENT'
        });
    }
}