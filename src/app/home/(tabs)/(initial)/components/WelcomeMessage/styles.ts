import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    welcomeMessage: {
        backgroundColor: '#ffffff',
        width: '90%',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 10,
        shadowColor: '#52006A',
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
        fontWeight: '500'
    }
})