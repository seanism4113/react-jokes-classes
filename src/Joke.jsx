import "./Joke.css";

const Joke = ({ id, votes, text, vote }) => {
	const upVote = (evt) => {
		vote(id, +1);
	};
	const downVote = (evt) => {
		vote(id, -1);
	};

	return (
		<div className="Joke">
			<div className="Joke-votearea">
				<button style={votes > 0 ? { backgroundColor: "lightblue" } : {}} type="button" onClick={upVote}>
					<i className="fas fa-thumbs-up" />
				</button>

				<button style={votes < 0 ? { backgroundColor: "lightcoral" } : {}} type="button" onClick={downVote}>
					<i className="fas fa-thumbs-down" />
				</button>

				{votes}
			</div>

			<div className="Joke-text">{text}</div>
		</div>
	);
};

export default Joke;
