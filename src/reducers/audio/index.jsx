import {ReadyAudio, PlayingAudio, SeekProgress} from '../../enums/ActionEmun';

const initialState = {
	audio: null,
	duration: 0,
	currentTime: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ReadyAudio:
			const audio = action.audio;
			return {
				...state,
				audio,
				duration: Math.floor(audio.getDuration())
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
		default:
			return state;
	}
}