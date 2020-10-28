import React from "react";
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
	myLibrary.push(new Book(title, author, pages, readBook));
};

addBookToLibrary("Cat in the Hat", "Dr. Seuss", 20, true);
addBookToLibrary("There's a Wocket in my Pocket", "Dr. Seuss", 25, false);

const renderedBooks = myLibrary.map((book, i) => {
	return <Card info={book} key={i} />;
});

const App = () => {
	return (
		<div className="container mx-auto px-4">
			<h1 className="text-5xl md:text-6xl text-center">
				Personal Library
			</h1>
			<div className="inline-flex">{renderedBooks}</div>
		</div>
	);
};

export default App;
