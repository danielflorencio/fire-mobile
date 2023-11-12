import { View, Text, StyleSheet } from "react-native"
// import { useAppSelector } from "../hooks";
// import { Divider } from "@rneui/base";
export default function BalanceInfo(){

    // const totalBalance = useAppSelector(state => state.expenses.totalBalance); 

    return(
        <View style={styles.previewCard}>
            <View style={styles.previewCardHeader}>
                <Text style={styles.previewCardTitle}>Current Balance: </Text>
            </View>
            <View style={styles.divider}/>
            <View style={styles.previewCardBottom}>
                <Text style={styles.previewCardValue}>
                {/* R$ {totalBalance.toFixed(2)} */}
                R$ 1034
                </Text>
            </View>
        </View>
    )


}

const styles = StyleSheet.create({
    previewCard: {
        backgroundColor: '#ffffff',
        width: '90%',
        height: '13%',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 16,
        paddingVertical: 4,
        elevation: 4,
        shadowColor: '#52006A',
        marginTop: 42
    },
    previewCardHeader: {
        backgroundColor: '#ffffff',
        width: '100%',
        borderRadius: 12,
        paddingLeft: 12
    },
    previewCardBottom: {
        backgroundColor: '#ffffff',
        width: '100%',
        borderRadius: 12,
        paddingLeft: 12
    },
    previewCardTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    previewCardValue: {
        fontSize: 18,
        fontWeight: '500'
    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#eee'
    }
})