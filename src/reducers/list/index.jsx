import {FetchAudioList} from '../../common/enums/ActionEmun';

const initialState = [];

export default (state= initialState, action) => {
	switch (action.type) {
		case FetchAudioList:
			return action.audioList;
		default:
			return state;
	}
}