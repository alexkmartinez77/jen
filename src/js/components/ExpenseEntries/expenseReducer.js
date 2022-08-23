const defaultState = {
	description: '',
	amount: '',
	lineItems: []
};

export default function ExpenseReducer(state = defaultState, action) {
	const { type, payload } = action;

	switch (type) {
		case 'UPDATE_EXPENSE_DESCRIPTION': {
			return {
				...state,
				description: payload.description
			};
		}

		case 'UPDATE_EXPENSE_AMOUNT': {
			return {
				...state,
				amount: payload.amount
			};
		}

		case 'ADD_EXPENSE': {
			const { description, amount } = action.payload;
			return {
				description: '',
				action: '',
				amount: '',
				lineItems: [
					...state.lineItems,
					{ description, amount }
				]
			};
		}

		case 'DELETE_EXPENSE': {
			const { index } = action.payload;
			return {
				description: '',
				action: '',
				amount: '',
				lineItems: [
				...state.lineItems.slice(0, index),
				...state.lineItems.slice(index + 1)
				]
			};
		}

		default: {
			return state;
		}
	}
}