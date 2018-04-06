import React from 'react';
import {Row, Col} from 'antd';
import PropTypes from 'prop-types';
import './css/index.css';

export default function Show({currentMusic}) {
	return (
		<div className='show-component'>
			<Row justify='space-around' type='flex' align='middle'>
				<Col className='music-info'>
					<h1>{currentMusic.title}</h1>
					<h2>{currentMusic.singer}</h2>
				</Col>
				<Col className='music-cover'>
					<img src={currentMusic.cover} />
				</Col>
			</Row>
		</div>
	)
};

Show.propTypes = {
	currentMusic: PropTypes.object.isRequired
};