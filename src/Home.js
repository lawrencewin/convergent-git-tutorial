import React from "react"
import { Link } from "react-router-dom"

function Home () {
	return (
		<div className="app">
			<div className="hero">
				<div className="hero__text">
					<div className="hero__title">Welcome to <br />
						<span className="orange">The University of Texas at Austin</span>
					</div>
					<div className="hero__subtitle">What starts here changes the world.</div>
				</div>
			</div>
			<div className="banner">
				<div className="banner__content">
					<Link to="/photos" className="banner__link">View the forty acres in your own eyes.</Link>
				</div>
			</div>
			<div className="body">
				<p className="body__paragraph">
					Sit duis do consectetur anim ea Lorem aliqua non id. Laboris aute mollit est aliquip est fugiat excepteur voluptate in nostrud tempor incididunt ad. Duis commodo cillum qui dolore consequat veniam proident nulla. Ullamco nostrud aliqua reprehenderit mollit mollit dolor incididunt mollit ad. Duis sit pariatur adipisicing reprehenderit dolore nulla.
				</p>
				<p className="body__paragraph">
					Ea reprehenderit sit mollit officia. Consectetur pariatur quis eu ex tempor voluptate sint sint occaecat. In ut occaecat aute commodo. Do veniam mollit ipsum enim veniam minim non aute laborum ullamco laboris minim eiusmod. Aute aliquip est commodo ipsum consequat non labore adipisicing minim laboris. Exercitation irure exercitation velit dolore eu laborum ex officia enim.
				</p>
				<p className="body__paragraph">
					Incididunt id ullamco ut excepteur ipsum magna deserunt irure. Laboris officia sint nulla commodo sint occaecat voluptate pariatur eiusmod cupidatat Lorem reprehenderit ipsum Lorem. Labore aliquip et consequat aliqua ea ad aliquip incididunt reprehenderit. Id dolor nulla consectetur Lorem in ad exercitation enim exercitation commodo culpa amet est. Esse incididunt in aliqua anim esse reprehenderit id anim nostrud exercitation magna esse deserunt.
				</p>
			</div>
		</div>
	)
}

export default Home