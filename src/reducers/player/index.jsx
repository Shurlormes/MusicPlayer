import {FetchAudio, PlayAudio, PauseAudio} from '../../enums/ActionEmun';

const initialState = {
	currentAudioId: 1,
	isPlaying: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FetchAudio:
			return {
				...state,
				currentAudioId: action.currentAudioId
			};
		case PlayAudio:
			return {
				...state,
				isPlaying: true
			};
		case PauseAudio:
			return {
				...state,
				isPlaying: false
			};
		default:
			return state;
	}
}