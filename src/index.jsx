import React from 'react';
import {render} from 'react-dom';
import './common/css/global.css';
import Audio from './components/Audio/index';
import {AudioList} from './config'

class Hello extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Audio
					key={1}
					autoPlay
					audioList={AudioList}
					currentAudioId={0}
				/>
			</div>
		)
	}
}


const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

render(
	<Hello/>,
	mountPoint
);


