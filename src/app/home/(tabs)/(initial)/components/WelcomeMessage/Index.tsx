import { View, Text } from "react-native"
import { Entypo } from "@expo/vector-icons"
import { styles } from "./styles"

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