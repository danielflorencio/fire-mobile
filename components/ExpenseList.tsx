import { Expense } from "../types/expense";
import { formatDate } from '../helpers/dateFilter'
import { categories } from '../data/categories'
import { View, Text} from "react-native";
import { StyleSheet } from "react-native";
export default function ExpensesList({list}: {list: Expense[]}){
    return(
        <>
        {
            list.map((expense, index) => (
                <View key={index} style={styles.card}>
                    <Text>Date: {formatDate(expense.date)}</Text>
                    <Text>Title: {expense.title}</Text>
                    <Text>Value: {expense.value}</Text>
                </View>
            ))
        }
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        width: '90%',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 16,
        paddingVertical: 4,
        elevation: 4,
        shadowColor: '#52006A',
    }
})