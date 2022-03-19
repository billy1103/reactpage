import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Card } from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="row row-cols-md-4 g-1 px-5">
				<Card
					image="https://frontendin.com/wp-content/uploads/2021/03/1-31-500x325.jpg"
					title="Card 1"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac lobortis nibh. Quisque mollis sapien id enim efficitur, sed pharetra ex pretium. Nullam tempor vehicula feugiat."
				/>
				<Card
					image="https://frontendin.com/wp-content/uploads/2021/03/1-32-500x325.jpg"
					title="Card 2"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit enim ac malesuada pellentesque. Vivamus vel orci ultrices, maximus libero in, rhoncus neque."
				/>
				<Card
					image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2kXbgMlUiHNrzuSrkBXx66WLYsD9TCvhUhw&usqp=CAU"
					title="Card 3"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor sit amet turpis suscipit dignissim. Nulla pellentesque finibus rutrum. Pellentesque sed auctor massa."
				/>
				<Card
					image="https://i.pinimg.com/564x/bb/ee/68/bbee68cf491f03eda8f394e665096c77.jpg"
					title="Card 4"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, ante quis venenatis euismod, mi lacus facilisis dui, vel euismod nisl magna ac ex. Lorem ipsum."
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
