import React from "react"
import { Route, BrowserRouter as Router, Switch, NavLink as Link } from "react-router-dom"

import Home from "./Home"
import Photos from "./Photos"
import About from "./About"

import "./App.scss"
import { ReactComponent as Seal } from "./ut_seal.svg"

const routes = [
	{ title: "Home", path: "/" },
	{ title: "About Texas", path: "/about" },
	{ title: "University in Pictures", path: "/photos" },
	{ title: "Admissions", path: "/admissions" }
]

function App () {
  	return (
		<Router>
			<nav className="nav">
				<div className="nav__logo">
					<Seal />
				</div>
				<div className="nav__items">
					{ routes.map((route, i) => <NavItem path={route.path} key={i}>{route.title}</NavItem>) }
				</div>
			</nav>
			<Switch>
				<Route exact path="/"><Home /></Route>
				<Route path="/photos"><Photos /></Route>
				<Route path="/about"><About /></Route>
			</Switch>
			<footer className="footer">
				This is a footer.<br />
				Hook'em 🤘
			</footer>
		</Router>
  	)
}

function NavItem (props) {
	return (
		<div className="nav__item">
			<Link to={props.path}>{props.children}</Link>
		</div>
	)
}

export default App;
