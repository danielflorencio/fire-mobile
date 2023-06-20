import {ExpenseTracker} from '../../app/(tabs)/expenses';
import React from 'react';
import { store } from '../../store';
import { Provider } from 'react-redux';
import {render} from '@testing-library/react-native'
import ExpensesList from '../ExpenseList';
// // // test('renders ExpenseTracker component', () => {
// //     it('should render the component', () => {
// //         // const { getByTestId } = render(<Provider store={store}><ExpenseTracker /></Provider>);
// //         expect(getByTestId('expense-tracker')).toBeDefined();
// //     });
// // // });
// import {render} from '@testing-library/react-native'
test('The <ExpenseLists> component rendered.', () => {
    render(<ExpensesList/>)
})