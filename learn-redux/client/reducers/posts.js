// a reducer takes in 2 things

// 1. the action (info about what happened)

// 2. a copy of current state

function posts(state = [], action) {
	switch(action.type) {
		// so that way reducer doesnt run if not running for inc likes
		case 'INCREMENT_LIKES':
		const i = action.index;
		// return updated state
			console.log("Incrementing likes");
			return [
				...state.slice(0,i), // before the one we are updating
				{...state[i], likes: state[i].likes + 1}, // similar to Object.assign, just updating 1 post
				...state.slice(i + 1), // after the one we are updating
			]
		default:
			return state;
	}
}

export default posts;