import React, { useState, useEffect } from "react";
import config from "../config";
import Firebase from "firebase/app";
import "firebase/firestore";
import Form from "./Form";
import Card from "./Card";
import Button from "./Button";

const firebaseApp = Firebase.initializeApp(config);

const db = firebaseApp.firestore().collection("books");

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
		db.get().then((querySnapshot) => {
			const data = querySnapshot.docs.map((doc) => doc.data());
			const renderedCards = data.map((e, id) => {
				return <Card cardData={e} key={id} />;
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
			<div className="container mx-auto ">
				<Form />
			</div>
			<div className="inline-flex">{bookCards}</div>
		</div>
	);
};

export default App;
