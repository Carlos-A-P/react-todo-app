import React from "react";
import "../styles/Footer.css";

export default function Footer() {
	return (
		<footer>
			<p>Drag and drop to reorder list</p>
			<div className="attribution">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io/profile/Carlos-A-P"
					target="_blank"
					rel="noreferrer"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://carlospwd.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					Carlos Perez
				</a>
				.
			</div>
		</footer>
	);
}
