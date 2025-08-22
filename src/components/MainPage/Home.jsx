import AddBook from "../Util/AddBook";
import CurrentlyState from "../Util/CurrentlyState";
function Home() {
	return (
		<div className="flex flex-col gap-10">
			<AddBook />
			<CurrentlyState />
		</div>
	);
}
export default Home;
