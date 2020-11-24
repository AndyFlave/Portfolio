import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<>
			
			<canvas id="space"></canvas>

			<section className="main-screen">

			<Header />

				<div className="main-screen__content main-content">
					<h1 className="main-content__title">Веб - разработки</h1>
					<div className="main-content__buttons content-buttons">
						<a href="#" className="btn yellow-btn content-buttons__item">Связаться</a>
						<a href="javascript:void(0);" className="btn gray-btn content-buttons__item trigger-folio">Портфолио</a>
					</div>
				</div>

				<div className="folio-section disabled">

					<div className="folio-block">
						<div className="folio-filter">


							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Бизнес школа Поколение Z</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Landing Page</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="https://schoolpokolenie.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">АУТСОРСИНГ БИЗНЕС-ПРОЦЕССОВ</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Landing Page</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="https://outsource-consult.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Центр развития способностей IMEGA</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Корпоративный сайт</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка главной + WordPress</span>
										</li>
									</ul>

									<a href="https://imega-iq.com/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Первая буква</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Landing Page</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="https://1bukva.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Учет сервис</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Landing Page</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="http://xn--b1afan2beech4b.xn--p1ai/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Циклон</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Landing Page</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="https://ciklon-vent.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Франшиза малотажного домостроения</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Landing Page</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="https://topdom-franchise.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Двери</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Landing Page</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="http://dverirussia.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Ролекс</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Landing Page</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="http://xn--68-mlcudrnm.xn--p1ai/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Недвижимость - Лореал</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Корпоративный сайт</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Сайт под ключ</span>
										</li>
									</ul>

									<a href="https://xn--80ajrcmm.xn--p1ai/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Стеклоцентр</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Корпоративный сайт</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="https://steklo35.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">ПромИнжиниринг</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Корпоративный сайт</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="https://engineer-prom.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">APMBI</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Корпоративный сайт</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="http://apmbi.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">ТранзитИнерт</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Корпоративный сайт</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="https://transitinert.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Торговый дом - Крона</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Корпоративный сайт</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="https://td-krona.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Кубань Моторс</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Корпоративный сайт</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="https://xn-----7kcbaihgfcf7a4amhqlfnxofslg45a.xn--p1ai/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Энергия</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Корпоративный сайт</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Вёрстка + WordPress</span>
										</li>
									</ul>

									<a href="http://energy.udnet-test.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item">
								<div className="folio-filter__front"></div>
								<div className="folio-filter__back">
									<header className="folio-filter__caption">Салон красоты Матис</header>
									<ul className="folio-filter__list">
										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Тип проекта:</span>
											<span className="folio-filter__list-row">Корпоративный сайт</span>
										</li>

										<li className="folio-filter__list-row">
											<span className="folio-filter__list-row folio-filter__list-row--key">Вид работ:</span>
											<span className="folio-filter__list-row">Сайт под ключ</span>
										</li>
									</ul>

									<a href="https://www.salon-matiss.ru/" className="folio-filter__link btn yellow-btn">Перейти на сайт</a>
								</div>
							</div>

							<div className="folio-filter__item empty"></div>
							<div className="folio-filter__item empty"></div>
							<div className="folio-filter__item empty"></div>
							<div className="folio-filter__item empty"></div>
							<div className="folio-filter__item empty"></div>
						</div>

						<div className="folio-content">
							<div className="folio-content__item"></div>
							<div className="folio-content__item"></div>
							<div className="folio-content__item"></div>
							<div className="folio-content__item"></div>
							<div className="folio-content__item"></div>
						</div>
					</div>

					<div className="button-recovery">
						<span className="button-recovery__text">Вернуться</span>
					</div>
				</div>


				<ul className="main-screen__list main-social">
					<ul className="main-social__item"><a href="https://www.linkedin.cn/in/andrey-shushunov-8393b317b/" className="main-social__link under-line">linkedin</a></ul>
					<ul className="main-social__item"><a href="https://vk.com/andy_oker" className="main-social__link under-line">vkontakte</a></ul>
					<ul className="main-social__item"><a href="https://twitter.com/vWXrRtElyz4j51N" className="main-social__link under-line">twitter</a></ul>
					<ul className="main-social__item"><a href="https://www.facebook.com/andy.devin.50364/" className="main-social__link under-line">facebook</a></ul>
				</ul>
			</section>

			<Footer />
		</>
	);
}

export default App;
