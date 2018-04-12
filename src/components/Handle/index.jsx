import React from 'react';
import {Row, Col, Button, Slider, Popover} from 'antd';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as PlayTypeEnum from '../../common/enums/PlayTypeEnum';

export default class Handle extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {isMuted, volume, playType, doAdjustVolume, doToggleMute, doChangePlayType} = this.props;

		return (
			<Row>
				<Col span={8}>
					<Popover
						content={
							<div className='h100'>
								<Slider
									vertical
									min={0}
									max={1}
									step={0.1}
									value={volume}
									defaultValue={volume}
									tipFormatter={null}
									onChange={doAdjustVolume}
								/>
							</div>
						}
					>
						<Button
							shape='circle'
							onClick={doToggleMute}
						>
							<svg className="icon" aria-hidden="true">
								<use
									xlinkHref={
										isMuted ? `#icon-volume-none` :
											(
												volume > 0.7 ?
													`#icon-volume-max` :
													(
														volume > 0.4 ?
															`#icon-volume-mid` : `#icon-volume-min`
													)
											)
									}/>
							</svg>
						</Button>

					</Popover>
				</Col>

				<Col span={8}>
					<Button
						shape='circle'
						onClick={() => doChangePlayType(playType + 1)}
					>
						<svg className="icon" aria-hidden="true">
							<use
								xlinkHref={
									playType === PlayTypeEnum.AllRepeat ?
										`#icon-all-repeat` :
										(
											playType === PlayTypeEnum.RepeatOnce ?
												`#icon-repeat-once` : `#icon-shuffle`
										)
								}
							/>
						</svg>
					</Button>
				</Col>

				<Col span={8}>
					<Link to='/list'>
						<Button
							shape='circle'
						>
							<svg className='icon' aria-hidden='true'>
								<use xlinkHref='#icon-music-list' />
							</svg>
						</Button>
					</Link>
				</Col>
			</Row>
		)
	}
}

Handle.propTypes = {
	isMuted: PropTypes.bool.isRequired,
	volume: PropTypes.number.isRequired,
	playType: PropTypes.number.isRequired,
	doAdjustVolume: PropTypes.func.isRequired,
	doToggleMute: PropTypes.func.isRequired,
	doChangePlayType: PropTypes.func.isRequired
};