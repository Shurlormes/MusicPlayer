import React from 'react';
import Audio from '../Audio';
import TopBar from '../TopBar';
import Show from '../Show';
import {Layout} from 'antd';
import './css/index.css';

const {Header, Footer, Content} = Layout;

export default class MusicPlayer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const currentMusic = this.props.list.filter(i => i.id === this.props.player.currentAudioId)[0];

		return (
			<div className='music-player-component'>
				<Layout>
					<Header className='h100'>
						<TopBar/>
					</Header>
					<Content>
						<Show currentMusic={currentMusic}/>
					</Content>
					<Footer>
						<Audio currentMusic={currentMusic} {...this.props} />
					</Footer>
				</Layout>
			</div>
		)
	}
}
