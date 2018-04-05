import {combineReducers} from 'redux';
import audio from './audio';
import handle from './handle';
import list from './list';
import player from './player';

export default combineReducers({
	audio,
	handle,
	list,
	player
})
