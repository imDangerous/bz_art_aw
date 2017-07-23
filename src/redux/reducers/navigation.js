export default function (state = {}, action) {
	switch (action.type) {
		case 'AW':
			return {
				...state
			};
		default:
			return state;
	}
}