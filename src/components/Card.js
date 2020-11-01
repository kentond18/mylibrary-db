import React from "react";

const Card = (props) => {
	const readStatus = () => {
		return props.cardData.readBook ? (
			<span className="text-green-500">Yes</span>
		) : (
			<span className="text-red-500">No</span>
		);
	};

	return (
		<div className="container bg-blue-100 border rounded-lg p-3 m-3 flex-1 flex flex-col">
			<div className="text-2xl text-center flex-auto">
				Title: {props.cardData.title}
			</div>
			<div className="text-1xl text-center flex-auto">
				Author: {props.cardData.author}
			</div>
			<div className="flex flex-auto items-end content-between">
				<div className="tracking-wide text-left flex-auto mr-4">
					Pages: {props.cardData.pages}
				</div>
				<div className="tracking-wide text-right flex-auto ml-4">
					Read the book? {readStatus()}
				</div>
			</div>
		</div>
	);
};

export default Card;
