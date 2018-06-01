export const submitDocument = (documentInfo) => {
    return (dispatch) => {
        console.log('documentinfo', documentInfo)
        dispatch({
            type: 'SUBMIT_DOCUMENT'
        });
    }
}