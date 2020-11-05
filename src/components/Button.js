import React from "react";

const Button = ({ text, action }) => {
	return (
		<button
			className="bg-blue-700 text-white p-2 rounded-lg"
			onClick={action}
		>
			{text}
		</button>
	);
};

export default Button;
