import { StyleSheet } from "react-native"
import { View, Text } from "./Themed"
import { Entypo } from "@expo/vector-icons"

export default function WelcomeMessage(){
    return(
        <View style={styles.welcomeMessage}>
            <View style={styles.chatBubbleContainer}>
                <Entypo style={styles.chatIcon} name="chat" size={32} color='black' />
            </View>
            <View style={styles.messageContainer}>
                <Text style={styles.chatMessage}>Welcome to Fire, your Financial Independence Advisor.</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    welcomeMessage: {
        backgroundColor: '#ffffff',
        width: '90%',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    chatBubbleContainer: {
        backgroundColor: '#ffffff',
        width: '15%'
    },
    messageContainer: {
        backgroundColor: '#ffffff',
        width: '85%'
    },
    chatIcon: {
        marginRight: 2
    },
    chatMessage: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})