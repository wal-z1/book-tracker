import { Link } from "react-router-dom";

function Twogrid() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 p-6 sm:p-10 gap-4 text-center mx-auto">
			<Link to="/library">
				<div className="text-[#F0F6FC] text-lg sm:text-2xl font-outfit [text-shadow:0_0_10px_rgba(88,166,255,0.6),_1px_1px_1px_rgba(10,10,10)] cursor-pointer">
					[ 📖 View Library ]
				</div>
			</Link>
			<div className="hidden sm:flex items-center justify-center text-[#8B949E]">
				|
			</div>

			<div className="text-[#F0F6FC] text-lg sm:text-2xl font-outfit [text-shadow:0_0_10px_rgba(88,166,255,0.6),_1px_1px_1px_rgba(10,10,10)]   cursor-pointer ">
				[ 📊 Check Stats ]
			</div>
		</div>
	);
}

export default Twogrid;
