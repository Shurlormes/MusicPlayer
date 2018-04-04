import React from 'react';
import {render} from 'react-dom';
import {Tabs} from 'antd';
import './common/css/global.css';

class Hello extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Tabs
				mode='horizontal'
				defaultActiveKey='a'
			>
				<Tabs.TabPane key='a' tab='A'>
					a
				</Tabs.TabPane>

				<Tabs.TabPane key='b' tab='B'>
					b
				</Tabs.TabPane>

				<Tabs.TabPane key='c' tab='C'>
					c
				</Tabs.TabPane>
			</Tabs>
		)
	}
}


const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

render(
	<Hello/>,
	mountPoint
);


