import { combineReducers } from "redux";
import transcriptsReducer from './transcriptsReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
    transcripts: transcriptsReducer,
    navigation: navigationReducer
});
