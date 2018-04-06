import React from 'react';
import {Row, Col, Divider} from 'antd';

export default function Header() {
	return (
		<div>
			<Row justify='space-around' type='flex' align='bottom'>
				<Col span={1.5}>
					<svg className="icon wh75" aria-hidden="true">
						<use xlinkHref="#icon-blueness-logo"/>
					</svg>
				</Col>

				<Col span={22}>
					<h1>Music Player</h1>
				</Col>
			</Row>

			<Divider/>
		</div>
	)
};
