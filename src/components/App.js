import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Form from "./Form";
import Card from "./Card";

function Book(title, author, pages, readBook) {
	this.key = null;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readBook = readBook;
}

Book.info = () => {
	return (
		Book.title +
		" by " +
		Book.author +
		", " +
		Book.pages +
		", " +
		Book.readBook
	);
};

const App = () => {
	const [bookCards, setBookCards] = useState(null);

	useEffect(() => {
		db.onSnapshot((doc) => {
			let refs = [];
			doc.forEach((e) => {
				refs.push(e.id);
			});
			const data = doc.docs.map((doc) => doc.data());
			const renderedCards = data.map((e, id) => {
				return <Card cardData={e} key={id} doc={refs[id]} />;
			});
			setBookCards(renderedCards);
		});
	}, []);

	return (
		<div className="container mx-auto px-4">
			<h1 className="text-5xl md:text-6xl text-center">
				Personal Library
			</h1>
			<div className="flex flex-wrap">
				<Form />

				{bookCards}
			</div>
		</div>
	);
};

export default App;
