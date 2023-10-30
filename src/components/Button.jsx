import React from "react";

function Button({ children, onClick, type = "primary" }) {
	return (
		<button
			className={`button ${
				type === "primary" ? "primary" : "secondary"
			}-button`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
