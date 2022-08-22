import { connect } from 'react-redux';
import IncomeEntries from './IncomeEntries';

function mapStoreToProps(store) {
	return {
		description: store.expense.description,
		amount: store.expense.amount,
		lineItems: store.expense.lineItems
	};
}

export default connect(mapStoreToProps)(IncomeEntries);