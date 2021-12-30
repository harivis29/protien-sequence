const navigationReducer = (state = { page: 1 }, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return {
                ...state,
                page: action.pageCount
            }
        case 'PREVIOUS_PAGE':
            return {
                ...state,
                page: action.pageCount
            }
        default:
            return state
    }
}
export default navigationReducer; 