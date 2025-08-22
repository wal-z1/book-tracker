import React, { useState } from "react";

function CurrentlyState() {
	const [CurrentBook, UpdateBook] = useState();
	const [CurrentPage, UpdatePage] = useState();

	return <div>CurrentlyState</div>;
}

export default CurrentlyState;
