import React from 'react';
import Audio from '../Audio';
import Header from '../Header';
import Show from '../Show';

export default class MusicPlayer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const currentMusic = this.props.list.filter(i => i.id === this.props.player.currentAudioId)[0];

		return (
			<div>
				<Header />

				<Show currentMusic={currentMusic} />

				<Audio currentMusic={currentMusic} {...this.props} />
			</div>
		)
	}
}
