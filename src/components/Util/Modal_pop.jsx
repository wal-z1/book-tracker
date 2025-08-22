function Modal({ open, onclosefun, children }) {
	return (
		<div
			onClick={onclosefun}
			className={`inset-0 fixed justify-center items-center flex  transition-colors ${
				open ? "visible bg-black/20" : " invisible"
			}`}>
			{children}
		</div>
	);
}

export default Modal;
