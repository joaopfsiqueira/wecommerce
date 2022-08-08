export const getError = (error) => {
    return error.response && error.response.data.message
    ? error.response.data.message 
    //basically, return error message from server, if there is one
    : error.message;
}