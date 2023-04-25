import { Expense } from "../types/expense";
import { formatDate } from '../helpers/dateFilter'
import { categories } from '../data/categories'
import { View, Text} from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button, Icon, ListItem } from "@rneui/themed";
export default function ExpensesList({list}: {list: Expense[]}){
    return(
        <View style={styles.expenseListContainer}>
        {
            list.map((expense, index) => (
                <ListItem.Swipeable
                containerStyle={{borderRadius: 12}}
                leftContent={(reset) => (
                    <Button
                      title="Info"
                      onPress={() => reset()}
                      icon={{ name: 'info', color: 'white' }}
                      buttonStyle={{ borderRadius: 12, height: 72 }}
                    />
                  )}
                rightContent={(reset) => (
                <Button
                    title="Delete"
                    onPress={() => reset()}
                    icon={{ name: 'delete', color: 'white' }}
                    buttonStyle={{ borderRadius: 12, backgroundColor: 'red', height: 72 }}
                />
                )}
                key={index} style={styles.card}>
                    <ListItem.Content style={styles.listItem}>
                        <View style={styles.leftIconContainer}>
                            <FontAwesome name="dollar" size={32}/>
                        </View>
                        <View style={styles.titleAndDateContainer}>
                            <Text> {expense.title}</Text>
                            <Text> {formatDate(expense.date)}</Text>
                        </View>
                        <View style={styles.valueContainer}>
                            <Text style={styles.expenseValue}> $ {expense.category === 'salary' ? (<></>) : (<>-</>)}{expense.value}</Text>
                        </View>
                    </ListItem.Content>
                </ListItem.Swipeable>
            ))
        }
        </View>
    )
}

const styles = StyleSheet.create({
    expenseListContainer: {
        width: '90%',
    },
    listItem: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#ffffff',
        height: 72, 
        width: '100%',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 16,
        elevation: 4,
        shadowColor: '#52006A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftIconContainer: {
        width: '16%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 12,
    },
    titleAndDateContainer: {
        width: '60%',
        borderRadius: 12,
    },
    valueContainer: {
        width: '22%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    expenseValue: {
        fontSize: 16
    }
})