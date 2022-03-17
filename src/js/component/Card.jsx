import React from "react";

export function Card(props) {
	return (
		<div className="row row-cols-1 row-cols-md-4 g-4">
			<div className="col">
				<div className="card h-100">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Pellentesque a leo lacinia, dictum urna
							sollicitudin, vestibulum odio. Pellentesque ac est
							hendrerit, consequat diam luctus, lobortis risus.
						</p>
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec dapibus enim at convallis dignissim.
							Quisque molestie tellus et tellus facilisis tempus.
							Proin hendrerit augue id scelerisque lobortis.
						</p>
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur metus elit, tristique sit amet ante
							sit amet, cursus lacinia nisl. Nunc a dolor varius,
							finibus enim in, tincidunt turpis.
						</p>
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a longer card with supporting text below as
							a natural lead-in to additional content. This
							content is a little bit longer.
						</p>
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
