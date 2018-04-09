import {ReadyAudio, PlayingAudio, SeekProgress, NextAudio, PreviousAudio} from '../../common/enums/ActionEmun';

const initialState = {
	audio: null,
	duration: 0,
	currentTime: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ReadyAudio:
			return {
				...state,
				audio: action.audio,
				duration: Math.floor(action.audio.getDuration())
			};
		case PlayingAudio:
			return {
				...state,
				currentTime: Math.floor(state.audio.getCurrentTime())
			};
		case SeekProgress:
			state.audio.seekTo(action.seekTo);
			return {
				...state,
				currentTime: state.audio.getCurrentTime()
			};
		case NextAudio:
			return {
				...state,
				duration: 0,
				currentTime: 0
			};
		case PreviousAudio:
			return {
				...state,
				duration: 0,
				currentTime: 0
			};
		default:
			return state;
	}
}