import React from "react";

export function Jumbotron(props) {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Praesent elementum eget sem tristique venenatis. Donec vel
				aliquam nunc. Nunc nec ipsum molestie, consectetur odio eget,
				elementum nibh.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
}
