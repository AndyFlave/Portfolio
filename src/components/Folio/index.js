import React from 'react';
import { Link } from 'react-router-dom';

function Folio() {
	return (
		<div className="folio-section">

			<div className="folio-block">
				<div className="folio-content">

					<div className="folio-content__item">
						<div className="folio-content__front"></div>
						<div className="folio-content__back">
							<header className="folio-content__caption">Бизнес школа Поколение Z</header>
							<ul className="folio-content__list">
								<li className="folio-content__list-row">
									<span className="folio-content__list-row folio-content__list-row--key">Тип проекта:</span>
									<span className="folio-content__list-row">Landing Page</span>
								</li>

								<li className="folio-content__list-row">
									<span className="folio-content__list-row folio-content__list-row--key">Вид работ:</span>
									<span className="folio-content__list-row">Вёрстка + WordPress</span>
								</li>
							</ul>

							<a href="https://schoolpokolenie.ru/" className="folio-content__link btn yellow-btn">Перейти на сайт</a>
						</div>
					</div>

					<div className="folio-content__item empty"></div>
					<div className="folio-content__item empty"></div>
					<div className="folio-content__item empty"></div>
					<div className="folio-content__item empty"></div>
					<div className="folio-content__item empty"></div>
				</div>

				{/* <div className="folio-content">
					<div className="folio-content__item"></div>
					<div className="folio-content__item"></div>
					<div className="folio-content__item"></div>
					<div className="folio-content__item"></div>
					<div className="folio-content__item"></div>
				</div> */}
			</div>

			<Link to={`/`} className="button-recovery">
				<span className="button-recovery__text">Вернуться</span>
			</Link>
		</div>
	)
}

export default Folio;