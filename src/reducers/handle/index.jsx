import {ToggleMute, AdjustVolume, ChangePlayType} from '../../enums/ActionEmun';
import {AllRepeat} from '../../enums/PlayTypeEnum';

const initialState = {
	isMuted: false,
	volume: 1,
	volumeBeforeMuted: 1,
	playType: AllRepeat
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ToggleMute:
			return {
				...state,
				isMuted: !state.isMuted,
				volumeBeforeMuted: !state.isMuted ? state.volume : state.volumeBeforeMuted,
				volume: !state.isMuted ? 0 : state.volumeBeforeMuted
			};
		case AdjustVolume:
			return {
				...state,
				isMuted: action.volume === 0,
				volume: action.volume,
				volumeBeforeMuted: action.volume === 0 ? 1 : action.volume
			};
		case ChangePlayType:
			return {
				...state,
				playType: action.playType > AllRepeat ? 1 : action.playType
			};
		default:
			return state;
	}
}