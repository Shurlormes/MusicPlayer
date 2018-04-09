import React from 'react';
import {Row, Col, Switch} from 'antd';
import PropTypes from 'prop-types';
import './css/index.css';

export default class Show extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVertical: true
		}
	}

	formatLyric(lyric) {

	}

	render() {
		const {currentMusic} = this.props;
		const {isVertical} = this.state;

		let showHtml = isVertical ? (
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
				{/*<Row justify='center' type='flex' className='text-center'>
					<Col className='music-lyric music-lyric-vertical'>
						<p>{currentMusic.lyric}</p>
					</Col>
				</Row>*/}
			</div>
		) : (
			<div>
				<Row justify='space-around' type='flex' align='middle'>
					<Col span={12}>
						<Row justify='center' type='flex' className='text-center'>
							<Col className='music-info music-info-horizontal'>
								<h1>{currentMusic.title}</h1>
								<h2>{currentMusic.singer}</h2>
							</Col>
						</Row>
						{/*<Row justify='center' type='flex' className='text-center'>
							<Col className='music-lyric music-lyric-horizontal'>
								<p>{currentMusic.lyric}</p>
							</Col>
						</Row>*/}
					</Col>
					<Col className='music-cover music-cover-horizontal' span={12}>
						<img src={currentMusic.cover}/>
					</Col>
				</Row>
			</div>
		);

		return (
			<div className='show-component'>
				<Switch
					className='switch-screen-model'
					checkedChildren='竖'
					unCheckedChildren='横'
					defaultChecked
					onChange={() => this.setState({isVertical: !isVertical})}
				/>

				{showHtml}
			</div>
		)
	};
}

Show.propTypes = {
	currentMusic: PropTypes.object.isRequired
};