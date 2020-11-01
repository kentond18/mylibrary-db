import React, { useState, useEffect } from "react";

const Form = () => {
	return (
		<div className="w-full max-w-xs">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
					/>
				</div>

				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button"
					>
						Add to Library
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
