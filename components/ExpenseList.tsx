import { Expense } from "../types/expense";
import { formatDate } from '../helpers/dateFilter'
import { categories } from '../data/categories'
import { View, Text} from "react-native";
import { StyleSheet } from "react-native";
export default function ExpensesList({list}: {list: Expense[]}){
    return(
        <View style={styles.expenseListContainer}>
        {
            list.map((expense, index) => (
                <View key={index} style={styles.card}>
                    <Text>Date: {formatDate(expense.date)}</Text>
                    <Text>Title: {expense.title}</Text>
                    <Text>Value: {expense.value}</Text>
                </View>
            ))
        }
        </View>
    )
}

const styles = StyleSheet.create({
    expenseListContainer: {
        width: '100%'
    },
    card: {
        backgroundColor: '#ffffff',
        width: '90%',
        // height: '13%',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 16,
        paddingVertical: 4,
        elevation: 4,
        shadowColor: '#52006A',
        // marginBottom: 2
    }
})