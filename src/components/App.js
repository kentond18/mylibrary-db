import React, { useState, useEffect } from "react";
import { db, storage } from "../firebase";
import Form from "./Form";
import Card from "./Card";
import Button from "./Button";

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

let myLibrary = [];

const addBookToLibrary = (title, author, pages, readBook) => {
	db.collection("books")
		.add({
			title: title,
			author: author,
			pages: pages,
			readBook: readBook,
		})
		.then((docRef) => {
			console.log("Document writen with ID: " + docRef);
			return true;
		})
		.catch((error) => {
			console.log("Error adding document: " + error);
			return error;
		});
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

	// addBookToLibrary("Cat in the Hat", "Dr. Seuss", 20, true);
	// addBookToLibrary(
	// 	"There's a Wocket in my Pocket",
	// 	"Dr. Seuss",
	// 	25,
	// 	false
	// );

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
