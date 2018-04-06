import {FetchAudioList, FetchAudio, PlayAudio, PauseAudio, NextAudio, PreviousAudio, ChangePlayType} from '../../enums/ActionEmun';
import * as PlayTypeEnum from '../../enums/PlayTypeEnum';

const initialState = {
	currentAudioId: 1,
	isPlaying: false,
	playOrder: []
};

const pickAudio = (currentAudioId, playOrder, operate) => {
	let resultIndex = playOrder.findIndex((value) => {
		return value === currentAudioId;
	});

	resultIndex = resultIndex + operate;

	if(resultIndex < 0) {
		resultIndex = playOrder.length - 1
	}

	if(resultIndex > playOrder.length - 1) {
		resultIndex = 0
	}

	return playOrder[resultIndex];
};

// Fisher-Yates Shuffle 算法，随机打乱数组
const shuffle = (array) => {
	let copy = [], n = array.length, i;

	// While there remain elements to shuffle…
	while (n) {

		// Pick a remaining element…
		i = Math.floor(Math.random() * n--);

		// And move it to the new array.
		copy.push(array.splice(i, 1)[0]);
	}

	return copy;
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FetchAudioList:
			return {
				...state,
				playOrder: action.audioList.map(i => i.id)
			};
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
		case NextAudio:
			return {
				...state,
				currentAudioId: pickAudio(action.currentAudioId, state.playOrder, 1)
			};
		case PreviousAudio:
			return {
				...state,
				currentAudioId: pickAudio(action.currentAudioId, state.playOrder, -1)
			};
		case ChangePlayType:
			switch (action.playType) {
				case PlayTypeEnum.Shuffle:
					return {
						...state,
						playOrder: shuffle(state.playOrder)
					};
				case PlayTypeEnum.AllRepeat:
					return {
						...state,
						playOrder: [...state.playOrder].sort()
					};
				default:
					return state;
			}
		default:
			return state;
	}
}