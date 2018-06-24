import React from 'react';
import {Row, Col, Switch} from 'antd';
import PropTypes from 'prop-types';
import Lyric from '../Lyric';
import './css/index.css';

export default class Show extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {currentMusic, currentTime} = this.props;


		return (
			<div className='show-component'>
				<div>
					<Row justify='center' type='flex'>
						<Col className='music-cover music-cover-vertical'>
							<img src={currentMusic.cover}/>
						</Col>
					</Row>
					<Row justify='center' type='flex' className='text-center'>
						<Col className='music-info music-info-vertical'>
							<h1>{currentMusic.title}</h1>
							<h2>{currentMusic.singer}</h2>
						</Col>
					</Row>
					<Row justify='center' type='flex' className='text-center'>
						<Col className='music-lyric music-lyric-vertical'>
							<Lyric lyric={currentMusic.lyric} currentTime={currentTime} />
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

Show.propTypes = {
	currentMusic: PropTypes.object.isRequired,
	currentTime: PropTypes.number.isRequired
};