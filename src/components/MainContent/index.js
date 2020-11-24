import React from 'react';
import { Link } from 'react-router-dom';

function MainContent() {
	return (
		<div className="main-screen__content main-content">
			<h1 className="main-content__title">Веб - разработки</h1>
			<div className="main-content__buttons content-buttons">
				<a className="btn yellow-btn content-buttons__item">Связаться</a>
				<Link to={`/folio`} className="btn gray-btn content-buttons__item trigger-folio">Портфолио</Link>
			</div>
		</div>
	)
}

export default MainContent;

