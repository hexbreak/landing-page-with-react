import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
