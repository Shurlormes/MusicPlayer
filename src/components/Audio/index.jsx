import React from 'react';
import ReactPlayer from 'react-player';
import {Slider, Row, Col} from 'antd';
import Player from '../Player/index'
import Handle from '../Handle/index'
import {RepeatOnce} from '../../enums/PlayTypeEnum'


class Audio extends React.Component {
	constructor(props) {
		super(props);
		if(this.props.autoPlay) {

		}
	}

	tipFormatter(value) {
		let min = Math.floor(value / 60);
		let sec = Math.floor(value % 60);

		min = min > 9 ? min : `0${min}`;
		sec = sec > 9 ? sec : `0${sec}`;

		return `${min}:${sec}`;
	}


	render() {
		const {audio, handle, player, action, currentMusic} = this.props;

		return (
			<div className='audio-component'>
				<ReactPlayer
					className='d-none'
					ref='audio'
					playing={player.isPlaying}
					loop={handle.playType === RepeatOnce}
					volume={handle.volume}
					muted={handle.isMuted}
					url={currentMusic.url}
					onReady={() => action.doReadyAudio(this.refs.audio)}
					onProgress={() => action.onPlayingAudio()}
					onEnded={() => action.doNextAudio(player.currentAudioId)}
				/>

				<Row justify='space-around' align='middle' type='flex'>
					<Col xxl={2} xl={3} lg={3} md={4} sm={6} xm={7}>
						<Player
							currentAudioId={player.currentAudioId}
							isPlaying={player.isPlaying}
							doPlayAudio={action.doPlayAudio}
							doPauseAudio={action.doPauseAudio}
							doNextAudio={action.doNextAudio}
							doPreviousAudio={action.doPreviousAudio}
						/>
					</Col>

					<Col xxl={20} xl={18} lg={18} md={16} sm={12} xm={10}>
						<Row justify='space-around' align='middle' type='flex'>
							<Col className='text-right' span={1}>
								<span>{this.tipFormatter(audio.currentTime)}</span>
							</Col>
							<Col span={22}>
								<Slider
									min={0}
									step={1}
									max={audio.duration}
									value={audio.currentTime}
									onChange={action.doSeekProgress}
									tipFormatter={this.tipFormatter}
								/>
							</Col>
							<Col className='text-left' span={1}>
								<span>{this.tipFormatter(audio.duration)}</span>
							</Col>
						</Row>
					</Col>

					<Col xxl={2} xl={3} lg={3} md={4} sm={6} xm={7}>
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

export default Audio;
