export const addTranscripts = transcripts => ({
  type: 'ADD_TRANSCRIPT_LIST',
  transcripts
});

export const addFilteredTranscriptIds = filteredIds => ({
  type: 'ADD_FILTERED_TRANSCRIPT_IDS',
  filteredIds
});

export const nextPage = (pageCount) => ({
  type: 'NEXT_PAGE',
  pageCount
});

export const previousPage = (pageCount) => ({
  type: 'PREVIOUS_PAGE',
  pageCount
});