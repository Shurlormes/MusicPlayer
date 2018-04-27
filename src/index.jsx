import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, bindActionCreators, createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import MusicPlayer from './components/MusicPlayer';
import Reducers from './reducers/index';
import {MusicList} from './common/config';
import * as Actions from './actions/index';
import './common/css/global.css';
import './common/icon/iconfont.js';

const store = applyMiddleware(ReduxThunk)(createStore)(Reducers);

const App = connect(
	state => (state),
	dispatch => (
		{
			action: bindActionCreators(Actions, dispatch)
		}
	)
)(MusicPlayer);

const mountPoint = document.createElement('div');
mountPoint.setAttribute('id', 'root');
document.body.appendChild(mountPoint);

store.dispatch(Actions.doFetchAudioList(MusicList));
store.dispatch(Actions.doFetchAudio(1));
store.dispatch(Actions.doPlayAudio());

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	mountPoint
);