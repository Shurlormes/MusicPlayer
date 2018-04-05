import React from 'react';
import {bindActionCreators, createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import Reducers from './src/reducers/index';
import PropTypes from 'prop-types';
import * as Actions from './src/actions/index';
import Root from './src/components/Root/index';

const store = createStore(Reducers);

const App = connect(
	state => (state),
	dispatch => (
		{
			action: bindActionCreators(Actions, dispatch)
		}
	)
)(Root);

export default class Audio extends React.Component {
	constructor(props) {
		super(props);
		const {autoPlay, audioList, currentAudioId} = props;
		if(autoPlay) {
			store.dispatch(Actions.doPlayAudio());
		}

		if(audioList) {
			store.dispatch(Actions.doFetchAudioList(audioList));
		}

		if(currentAudioId) {
			store.dispatch(Actions.doFetchAudio(currentAudioId));
		}
	}

	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}

Audio.propTypes = {
	autoPlay: PropTypes.bool,
	audioList: PropTypes.array,
	currentAudioId: PropTypes.any
};
