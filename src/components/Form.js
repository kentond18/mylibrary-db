import React, { useState, useEffect } from "react";
import "../css/Form.css";
import { db } from "../firebase";

const Form = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [pages, setPages] = useState(0);
	const [readBook, setReadBook] = useState(false);
	const [formStatus, setFormStatus] = useState("bg-gray-100");
	const [message, setMessage] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		const status = db
			.add({
				title: title,
				author: author,
				pages: pages,
				readBook: readBook,
			})
			.then((docRef) => {
				console.log("Document writen with ID: " + docRef.id);
				return true;
			})
			.catch((error) => {
				console.log("Error adding document: " + error);
				return error;
			});

		if (status) {
			setTitle("");
			setAuthor("");
			setPages(0);
			setReadBook(false);
			setMessage(
				<div className="mb-4 text-lg text-center bg-green-200 rounded-md p-2 leading-tight">
					Book added!
				</div>
			);
			setTimeout(() => {
				setMessage("");
			}, 2500);
		} else {
			setFormStatus("error bg-red-300");
			setTimeout(() => {
				setFormStatus("bg-white");
			}, 820);
			setMessage(
				<div className="mb-4 text-lg text-center bg-red-200 rounded-md p-2 leading-tight">
					Error adding to database! Refresh the page <br /> and
					try again
				</div>
			);
		}
	};

	return (
		<div className="w-full max-w-xs lg:pr-3">
			<form
				className={
					"shadow-md rounded px-8 pt-6 pb-8 mb-4 " + formStatus
				}
				onSubmit={handleSubmit}
			>
				{message}
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="title"
					>
						Title
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="title"
						type="text"
						placeholder={title}
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="author"
					>
						Author
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="author"
						type="text"
						placeholder={author}
						onChange={(e) => setAuthor(e.target.value)}
						value={author}
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="pages"
					>
						Pages
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="pages"
						type="number"
						min="1"
						max="1000"
						placeholder={pages}
						onChange={(e) => setPages(e.target.value)}
						value={pages}
						required
					/>
				</div>
				<div className="mb-4 inline-flex">
					<label
						className=" text-gray-700 text-sm font-bold mb-2"
						htmlFor="readBook"
					>
						Read the book?
					</label>
					<input
						className="shadow border rounded ml-3 mt-1 focus:outline-none focus:shadow-outline"
						id="readBook"
						type="checkbox"
						checked={readBook}
						onChange={(e) => setReadBook(e.target.value)}
						value={readBook}
					/>
				</div>

				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
						// onClick={handleSubmit}
					>
						Add to Library
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
