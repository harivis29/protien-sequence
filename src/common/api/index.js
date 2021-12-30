import { Get } from '../utilities/api-wrapper';
const getTranscripts = (url) => Get(url);

const getTranscriptDetail = (url) => Get(url);

export { getTranscripts, getTranscriptDetail };