export const createReference = (reference) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'CREATE_REFERENCE', reference});
    }
};