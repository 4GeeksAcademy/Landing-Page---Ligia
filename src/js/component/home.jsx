import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Card from "./Card";

let cardsInfo = [
	{ numero: 85, mensaje: 'Hola a todas!',image:'https://picsum.photos/id/1/400/300' },
	 { numero: 74, mensaje: 'Adios a todas!',image:'https://picsum.photos/id/103/400/300' },
	  { numero: 15, mensaje: '4geeks academy',image:'https://picsum.photos/id/1048/400/300' },
	   { numero: 15, mensaje: '4geeks academy',image:'https://picsum.photos/id/1025/400/300' }
]


//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row">

				{
					cardsInfo.map((value, index) => {
						return (<Card numero={value.numero} mensaje={value.mensaje} image={value.image} key={index} />)
					})
				}
			</div>
		</div>

	);
};

export default Home;
