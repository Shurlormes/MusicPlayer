import React from 'react';
import PropTypes from 'prop-types';
import './css/index.css';

export default class Lyric extends React.Component {
	constructor(props) {
		super(props);
	}

	formatTime(value) {
		const minArray = value.toString().split(':');
		const min = minArray[0];
		const secArray = minArray[1].split('.');
		const sec = secArray[0];
		const mill = secArray[1];
		return Number(min*60) + Number(sec) + Number(mill/100);
	}

	getCurrentLyric() {
		const {currentTime, lyric} = this.props;
		const lyricsArray = lyric.split('\n').map(i => i.replace('[', '').split(']'));
		const lyricsMap = new Map(lyricsArray);
		const lyricsTimeArray = Array.from(lyricsMap.keys());
		let matchedTimeIndexArray = [];

		for(let time of lyricsMap.keys()) {
			let formatTime = this.formatTime(time);
			if(formatTime <= currentTime) {
				let index = lyricsTimeArray.findIndex((value) => (value === time));
				matchedTimeIndexArray.push(index);
			}
		}

		if(matchedTimeIndexArray.length < 3) {
			matchedTimeIndexArray = [0, 1, 2];
		}

		let nextLyric = '';
		if(matchedTimeIndexArray.length < lyricsTimeArray.length) {
			nextLyric = lyricsMap.get(lyricsTimeArray[matchedTimeIndexArray[matchedTimeIndexArray.length-1]+1]);
		}

		if(matchedTimeIndexArray.length > 3) {
			matchedTimeIndexArray = matchedTimeIndexArray.slice(matchedTimeIndexArray.length-3);
		}

		const currentLyrics = [];
		for(let index of matchedTimeIndexArray) {
			currentLyrics.push(lyricsMap.get(lyricsTimeArray[index]));
		}
		if(nextLyric) {
			currentLyrics.push(nextLyric);
		}

		return currentLyrics.map(
			(value, index) =>
				<p key={index}
				   className={index === 2 && matchedTimeIndexArray[0] !== 0 ? 'lyric-item active' : 'lyric-item inactive'}>{value}</p>
		);
	}

	render() {

		return (
			<div className='lyric-component'>
				{this.getCurrentLyric()}
			</div>
		)
	}
}

Lyric.propTypes = {
	lyric: PropTypes.string.isRequired,
	currentTime: PropTypes.number.isRequired
};