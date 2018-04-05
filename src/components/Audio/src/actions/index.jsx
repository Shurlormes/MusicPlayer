import * as ActionEnum from '../enums/ActionEmun';

export const doFetchAudio = (currentAudioId) => ({type: ActionEnum.FetchAudio, currentAudioId});
export const doFetchAudioList = (audioList) => ({type: ActionEnum.FetchAudioList, audioList});
export const doReadyAudio = (audio) => ({type: ActionEnum.ReadyAudio, audio});
export const doPlayAudio = () => ({type: ActionEnum.PlayAudio});
export const doPauseAudio = () => ({type: ActionEnum.PauseAudio});
export const onPlayingAudio = () => ({type: ActionEnum.PlayingAudio});
export const doSeekProgress = (seekTo) => ({type: ActionEnum.SeekProgress, seekTo});
export const doAdjustVolume = (volume) => ({type: ActionEnum.AdjustVolume, volume});
export const doToggleMute = () => ({type: ActionEnum.ToggleMute});
export const doChangePlayType = (playType) => ({type: ActionEnum.ChangePlayType, playType});