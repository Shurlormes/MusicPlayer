import React from 'react';
import ReactPlayer from 'react-player';
import {Slider, Row, Col} from 'antd';
import Player from '../Player/index'
import Handle from '../Handle/index'
import {RepeatOnce} from '../../enums/PlayTypeEnum'


class Root extends React.Component {
	constructor(props) {
		super(props);
		this.tipFormatter = ::this.tipFormatter;
	}

	tipFormatter(value) {
		let min = Math.floor(value / 60);
		let sec = Math.floor(value % 60);

		min = min > 9 ? min : `0${min}`;
		sec = sec > 9 ? sec : `0${sec}`;

		return `${min}:${sec}`;
	}

	filterCurrentAudio() {
		return this.props.list.filter(i => i.id === this.props.player.currentAudioId)[0];
	}


	render() {
		const {audio, handle, list, player, action} = this.props;
		const currentAudio = this.filterCurrentAudio();

		return (
			<div className='audio-component'>
				<ReactPlayer
					className='d-none'
					ref='audio'
					playing={player.isPlaying}
					loop={handle.playType === RepeatOnce}
					volume={handle.volume}
					muted={handle.isMuted}
					url={currentAudio.url}
					onReady={() => action.doReadyAudio(this.refs.audio)}
					onProgress={() => action.onPlayingAudio()}
				/>

				<Row gutter={1}>
					<Col xxl={2} xl={3} lg={4} md={5} sm={6} xm={7}>
						<Player
							isPlaying={player.isPlaying}
							doPlayAudio={action.doPlayAudio}
							doPauseAudio={action.doPauseAudio}
						/>
					</Col>

					<Col xxl={20} xl={17} lg={16} md={14} sm={12} xm={10}>
						<Slider
							min={0}
							step={1}
							max={audio.duration}
							value={audio.currentTime}
							onChange={action.doSeekProgress}
							tipFormatter={this.tipFormatter}
						/>
					</Col>

					<Col xxl={2} xl={3} lg={4} md={5} sm={6} xm={7}>
						<Handle
							{...handle}
							doAdjustVolume={action.doAdjustVolume}
							doToggleMute={action.doToggleMute}
							doChangePlayType={action.doChangePlayType}
						/>
					</Col>
				</Row>

			</div>
		)
	}
}

export default Root;
