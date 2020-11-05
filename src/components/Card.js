import React from "react";
import { db } from "../firebase";

const Card = (props) => {
	const readStatus = () => {
		return props.cardData.readBook ? (
			<button
				className="text-black bg-green-300 hover:bg-green-400 p-1 text-sm"
				onClick={changeReadStatus}
			>
				Yes
			</button>
		) : (
			<button
				className="text-white bg-red-300 hover:bg-red-400 p-1 text-sm"
				onClick={changeReadStatus}
			>
				No
			</button>
		);
	};

	const handleDelete = () => {
		db.doc(props.doc).delete();
	};

	const changeReadStatus = () => {
		const changeTo = props.cardData.readBook ? false : true;
		db.doc(props.doc).update({
			readBook: changeTo,
		});
	};

	return (
		<div
			className="bg-blue-100 border rounded-lg shadow-md p-3 m-3 flex-col flex w-1/5"
			style={{ height: "260px" }}
		>
			<div className="text-2xl text-center flex-auto">
				Title: {props.cardData.title}
			</div>
			<div className="text-1xl text-center flex-auto">
				Author: {props.cardData.author}
			</div>
			<div className="flex flex-auto items-end content-between">
				<div className="tracking-wide text-left flex-auto mr-4">
					Pages:{" "}
					<span className="text-sm">{props.cardData.pages}</span>
				</div>
				<div className="tracking-wide text-right flex-auto ml-4">
					Read the book? {readStatus()}
				</div>
			</div>
			<div className="flex justify-center pt-2">
				<button
					className="bg-red-500 hover:bg-red-700 text-white text-sm py-2 px-4 rounded"
					onClick={handleDelete}
				>
					Remove book from library
				</button>
			</div>
		</div>
	);
};

export default Card;
