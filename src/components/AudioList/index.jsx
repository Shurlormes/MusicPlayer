import React from 'react';
import PropsType from 'prop-types';
import {Link} from 'react-router-dom';
import {List, Row} from 'antd';
import './css/index.css';

export default class AudioList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {audioList, currentAudioId, doAssignAudio} = this.props;
		const audioListHtml = audioList.map(
			audio =>
				<List.Item
					className={`audio-list-item ${audio.id === currentAudioId ? `active` : ``}`}
					key={`audio-list-item-${audio.id}`}
					onClick={() => doAssignAudio(audio.id)}
				>
					{audio.title}
				</List.Item>
		);
		return (
			<div className='audio-list-component'>
				<Link className='return-to-home' to='/'>返回首页</Link>
				<Row justify='center' type='flex'>
					<List>
						{audioListHtml}
					</List>
				</Row>
			</div>
		)
	}
}

AudioList.propsType = {
	audioList: PropsType.array.isRequired,
	currentAudioId: PropsType.number.isRequired
};