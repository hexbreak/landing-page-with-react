import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="row justify-content-between m-1">
			<div className="card">
				<img
					className="card-img-top"
					src="http://placehold.it/500x325.jpg"
					alt="text image holder"
				/>
				<div className="card-body text-center">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.onetext}</p>
				</div>
				<div className="card-footer d-flex justify-content-center">
					<a href="#" className="btn btn-primary">
						{props.footer}
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="http://placehold.it/500x325.jpg"
					alt="text image holder"
				/>
				<div className="card-body text-center">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.twotext}</p>
				</div>
				<div className="card-footer d-flex justify-content-center">
					<a href="#" className="btn btn-primary">
						{props.footer}
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="http://placehold.it/500x325.jpg"
					alt="text image holder"
				/>
				<div className="card-body text-center">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.onetext}</p>
				</div>
				<div className="card-footer d-flex justify-content-center">
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="http://placehold.it/500x325.jpg"
					alt="text image holder"
				/>
				<div className="card-body text-center">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.twotext}</p>
				</div>
				<div className="card-footer d-flex justify-content-center">
					<a href="#" className="btn btn-primary">
						{props.footer}
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	onetext: PropTypes.string,
	twotext: PropTypes.string,
	footer: PropTypes.string
};
