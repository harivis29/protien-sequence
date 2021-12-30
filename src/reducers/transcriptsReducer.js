const transcriptReducer = (state = {list: [], filteredIds: []}, action) => {
    switch (action.type) {
        case 'ADD_TRANSCRIPT_LIST':
            return {
                ...state,
                list: action.transcripts
            }
        case 'ADD_FILTERED_TRANSCRIPT_IDS':
            return {
                ...state,
                filteredIds: action.filteredIds
            }
        default:
            return state
    }
}
export default transcriptReducer; 