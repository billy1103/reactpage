import React from "react";

export function Jumbotron(props) {
	return (
		<div className="jumbotron mx-5 my-4 px-5 bg-light text-dark">
			<h1 className="display-4 pt-5">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Praesent elementum eget sem tristique venenatis. Donec vel
				aliquam nunc. Nunc nec ipsum molestie, consectetur odio eget,
				elementum nibh.
			</p>
			<p className="lead pb-5">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
}
