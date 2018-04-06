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
			<Row justify='space-around' type='flex'>
				<Col span={8}>
					<Button shape='circle'>
						<svg className='icon' aria-hidden='true'>
							<use xlinkHref='#icon-previous' />
						</svg>
					</Button>
				</Col>

				<Col span={8}>
					<Button
						shape='circle'
						onClick={() => {
							isPlaying ? doPauseAudio() : doPlayAudio()
						}}
					>
						<svg className='icon' aria-hidden='true'>
							<use xlinkHref={isPlaying ? `#icon-stop` : `#icon-play` } />
						</svg>
					</Button>
				</Col>

				<Col span={8}>
					<Button shape='circle'>
						<svg className='icon' aria-hidden='true'>
							<use xlinkHref='#icon-next' />
						</svg>
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