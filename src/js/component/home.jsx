import React from "react";
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Card from "./Card";

let cardsInfo = [
	{ numero: 85, mensaje: 'Card 1', image: 'https://picsum.photos/id/1/400/300', parrafo: 'Jelly beans halvah halvah gingerbread oat cake. Danish soufflé gingerbread muffin sugar plum.' },
	{ numero: 74, mensaje: 'Card 2', image: 'https://picsum.photos/id/103/400/300', parrafo: 'Jelly beans halvah halvah gingerbread oat cake. Danish soufflé gingerbread muffin sugar plum.' },
	{ numero: 15, mensaje: 'Card 3', image: 'https://picsum.photos/id/1048/400/300', parrafo: 'Jelly beans halvah halvah gingerbread oat cake. Danish soufflé gingerbread muffin sugar plum.' },
	{ numero: 15, mensaje: 'Card 4', image: 'https://picsum.photos/id/1025/400/300', parrafo: 'Jelly beans halvah halvah gingerbread oat cake. Danish soufflé gingerbread muffin sugar plum.' }
]


//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<div className="container">
			<Header/>
			<div className="row">

				{
					cardsInfo.map((value, index) => {

						return (<Card parrafo={value.parrafo} numero={value.numero} mensaje={value.mensaje} image={value.image} key={index} />)
					})
				}
			</div>
		</div>
		<Footer/>
		</>
	);
};

export default Home;
