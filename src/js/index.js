//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Navbar } from "./component/navbar.js";
import { Jumbotron } from "./component/jumbotron.js";
import { Card } from "./component/card.js";
import { Footer } from "./component/footer.js";

//render your react application
ReactDOM.render(
	<div>
		<Navbar />
		<div className="container">
			<Jumbotron />
			<Card
				title="Card Tteateateaitle"
				text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
						culpa natus architecto."
				footer="Find out more!"
			/>
		</div>
		<Footer />
	</div>,
	document.querySelector("#app")
);
