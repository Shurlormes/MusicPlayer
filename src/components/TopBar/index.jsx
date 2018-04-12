import React from 'react';
import {Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import './css/index.css';

export default function TopBar() {
	return (
		<div className='top-bar-component h100'>
			<Row justify='start' type='flex' align='bottom'>
				<Col className='logo' xxl={2} xl={3} lg={4} md={5} sm={6}>
					<Link to='/'>
						<svg className="icon wh75" aria-hidden="true">
							<use xlinkHref="#icon-blueness-logo"/>
						</svg>
					</Link>
				</Col>

				<Col xxl={22} xl={21} lg={20} md={19} sm={18}>
					<h1>Music Player</h1>
				</Col>
			</Row>
		</div>
	)
}
