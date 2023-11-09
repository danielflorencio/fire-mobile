import { View, Text } from "./Themed";
import { StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
type Props = {
    currentMonth: string,
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}
export default function InfoArea({currentMonth, onMonthChange, income, expense} : Props){

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
    
    return(
        <View style={styles.card}>  
            <EvilIcons name="arrow-left" size={36} onTouchEnd={handlePrevMonth}/>
            <Text>{currentMonth}</Text>
            <EvilIcons name="arrow-right" size={36} onTouchEnd={handleNextMonth}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        width: '90%',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 16,
        paddingVertical: 24,
        elevation: 4,
        shadowColor: '#52006A',
    },

})