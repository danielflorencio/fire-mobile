import { Expense } from "../types/expense";
import { formatDate } from '../helpers/dateFilter'
import { categories } from '../data/categories'
import { View, Text} from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function ExpensesList({list}: {list: Expense[]}){
    return(
        <>
        {
            list.map((expense, index) => (
                <View key={index} style={styles.card}>
                    <View style={styles.leftIconContainer}>
                        <FontAwesome name="dollar" size={32}/>
                    </View>
                    <View style={styles.titleAndDateContainer}>
                        <Text> {expense.title}</Text>
                        <Text> {formatDate(expense.date)}</Text>
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={styles.expenseValue}> $ {expense.value}</Text>
                    </View>
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
        flexDirection: 'row',
        marginBottom: 16,
        paddingVertical: 12,
        elevation: 4,
        shadowColor: '#52006A',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    leftIconContainer: {
        width: '16%',
        display: 'flex',
        alignItems: 'center'
    },
    titleAndDateContainer: {
        width: '60%'
    },
    valueContainer: {
        width: '20%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    expenseValue: {
        fontSize: 16
    }
})