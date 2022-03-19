import React from "react";

export function Card(props) {
	return (
		<div className="mb-4 px-2">
			<div className="card h-100">
				<img src={props.image} alt="" />
				<div className="card-body text-center">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<div class="card-footer bg-transparent border-dark">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
