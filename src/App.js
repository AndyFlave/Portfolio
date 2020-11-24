import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Folio from './components/Folio';
import MainContent from './components/MainContent';

function App() {
	return (
		<BrowserRouter>

			<canvas id="space"></canvas>

			<section className="main-screen">

				<Header />

				<Route exact path="/" component={MainContent} />

				<Route path="/folio" component={Folio} />

				<Footer />
			</section>


		</BrowserRouter>
	);
}

export default App;
