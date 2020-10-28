import React from "react";

const Card = (props) => {
	const { title, author, pages, readBook } = props.info;

	const readStatus = () => {
		return readBook ? (
			<span className="text-green-500">Yes</span>
		) : (
			<span className="text-red-500">No</span>
		);
	};

	return (
		<div className="container bg-blue-100 border rounded-lg overflow-auto p-3 m-3 flex-1 flex flex-col">
			<div className="text-2xl text-center flex-auto">
				Title: {title}
			</div>
			<div className="text-1xl text-center flex-auto">
				Author: {author}
			</div>
			<div className="flex flex-auto items-end">
				<div className="tracking-wide text-left flex-1">
					Pages: {pages}
				</div>
				<div className="tracking-wide text-right flex-2">
					Read the book? {readStatus()}
				</div>
			</div>
		</div>
	);
};

export default Card;
