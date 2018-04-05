import React from 'react';
import {Row, Col, Button} from 'antd';
import PropTypes from 'prop-types';

class Player extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {isPlaying, doPlayAudio, doPauseAudio} = this.props;

		return (
			<Row gutter={1} >
				<Col span={8}>
					<Button shape='circle'>
						<i className='iconfont icon-previous' />
					</Button>
				</Col>

				<Col span={8}>
					<Button
						shape='circle'
						onClick={() => {
							isPlaying ? doPauseAudio() : doPlayAudio()
						}}
					>
						<i className={`iconfont ${isPlaying ? `icon-stop` : `icon-play` }`} />
					</Button>
				</Col>

				<Col span={8}>
					<Button shape='circle'>
						<i className='iconfont icon-next' />
					</Button>
				</Col>
			</Row>
		)
	}
}

export default Player;

Player.propTypes = {
	isPlaying: PropTypes.bool.isRequired,
	doPauseAudio: PropTypes.func.isRequired,
	doPlayAudio: PropTypes.func.isRequired
};