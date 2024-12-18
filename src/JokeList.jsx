import { useState, useEffect } from "react";
import Joke from "./Joke";
import { getJokes } from "./helpers";
import "./JokeList.css";

const JokeList = ({ numJokesToGet = 5 }) => {
	const [jokes, setJokes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getJokes(numJokesToGet, setJokes, setIsLoading);
	}, [numJokesToGet]);

	const generateNewJokes = () => {
		setIsLoading(true);
		getJokes(numJokesToGet, setJokes, setIsLoading);
	};

	const vote = (id, delta) => {
		setJokes((prevJokes) => prevJokes.map((j) => (j.id === id ? { ...j, votes: j.votes + delta } : j)));
	};

	return (
		<div className="JokeList">
			<button className="JokeList-getmore" onClick={generateNewJokes}>
				Get New Jokes
			</button>
			{isLoading ? (
				<div className="loading">
					<i className="fas fa-4x fa-spinner fa-spin" />
				</div>
			) : (
				jokes.map((j) => <Joke text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={vote} />)
			)}
		</div>
	);
};

export default JokeList;
