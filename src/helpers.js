import axios from "axios";

const getJokes = async (numJokesToGet, setJokes, setIsLoading) => {
	try {
		let jokesList = [];
		let seenJokes = new Set();

		while (jokesList.length < numJokesToGet) {
			let response = await axios.get("https://icanhazdadjoke.com", {
				headers: { Accept: "application/json" },
			});
			let { ...joke } = response.data;

			if (!seenJokes.has(joke.id)) {
				seenJokes.add(joke.id);
				jokesList.push({ ...joke, votes: 0 });
			} else {
				console.log("duplicate found");
			}
		}
		setJokes(jokesList);
		setIsLoading(false);
	} catch (err) {
		console.error(err);
	}
};

export { getJokes };
