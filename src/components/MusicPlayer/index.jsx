import React from 'react';
import {Layout} from 'antd';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import Audio from '../Audio';
import AudioList from '../AudioList';
import TopBar from '../TopBar';
import Show from '../Show';
import Error from '../Error';
import './css/index.css';

const {Header, Footer, Content} = Layout;

class MusicPlayer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {list, player, action} = this.props;
		const currentMusic = list.filter(i => i.id === player.currentAudioId)[0];

		return (
			<Router>
				<div className='music-player-component'>
					<Layout>
						<Header className='h100'>
							<TopBar/>
						</Header>
						<Content>
							<Switch>
								<Route exact path='/' render={() => <Show currentMusic={currentMusic} />} />
								<Route path='/list' render={() => <AudioList audioList={list} currentAudioId={player.currentAudioId} doFetchAudio={action.doFetchAudio} />} />
								<Route render={() => <Error />}/>
							</Switch>
						</Content>
						<Footer>
							<Audio currentMusic={currentMusic} {...this.props} />
						</Footer>
					</Layout>
				</div>
			</Router>
		)
	}
}

export default hot(module)(MusicPlayer);