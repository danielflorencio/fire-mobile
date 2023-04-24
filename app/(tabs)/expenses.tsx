import { View, Text } from "../../components/Themed";
import {StyleSheet, ScrollView} from 'react-native'
import { Expense } from "../../types/expense";
import { filterListByMonth, getCurrentMonth } from "../../helpers/dateFilter";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { getMonthExpenses, getMonthIncomes } from "../../helpers/getBalanceInfo";
import { addExpense } from "../../features/balance/balanceSlice";
import ExpensesList from "../../components/ExpenseList";
import AddExpenseForm from "../../components/AddExpenseForm";
import InfoArea from "../../components/Infoarea";
export default function ExpenseTracker(){

    const [filteredList, setFilteredList] = useState<Expense[]>([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
 
    const dispatch = useDispatch();
    const overallExpensesList = useAppSelector(state => state.expenses.expenses)
    
    useEffect(() => {
        setFilteredList(filterListByMonth(overallExpensesList, currentMonth))
    }, [overallExpensesList, currentMonth] )

    useEffect(() => { // This useEffect Detects when a new expense is added (filteredList state) and resets the income and expenses value that goes to the InfoArea component.
        setIncome(getMonthIncomes(filteredList));
        setExpense(getMonthExpenses(filteredList))
    }, [filteredList]) // I must now update this code so it doesn't have these useffects now that i'm using redux toolkit to update state changes.

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth)
    }
    const handleAddExpense = (expense: Expense) => {        
        dispatch(addExpense({date: expense.date, category: expense.category, title: expense.title, value: expense.value }))
    }

    return(
        <ScrollView  contentContainerStyle={{alignItems: 'center',      backgroundColor: 'white', paddingTop: 16,
        display: 'flex', width: '100%'}}>
            <InfoArea 
            onMonthChange={handleMonthChange} 
            currentMonth={currentMonth}
            income={income}
            expense={expense}
            />    
            {/* <View style={styles.expenseFormAdjuster}> */}
                <AddExpenseForm onAdd={handleAddExpense}/>  
            {/* </View> */}
            <ExpensesList list={filteredList}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    expensesPage: {
        height: '100%',
        display: 'flex',
        // alignItems: 'center',
        width: '100%',
    },
    expenseFormAdjuster: {
        // width: '100%',
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center'
    }
})